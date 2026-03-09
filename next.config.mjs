/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export', // <=== enables static exports
  basePath: '/wp-faceless-next',
  assetPrefix: '/wp-faceless-next/',
  //matcher: [
  //  "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.[^/]+$).*)"
  //],
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-dev-appsvc.azurewebsites.net",
        port: "",
        pathname: "/wp-content/uploads/**"
      },
    ],
  },
  turbopack(config){
    config.module.rules.push({
      images: {
        unoptimized: true,
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "wordpress-dev-appsvc.azurewebsites.net",
            port: "",
            pathname: "/wp-content/uploads/**"
          },
        ],
      },
    });

    return config;
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    // Exclude SVG from the default file loader rule
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add a new rule for SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [/url/] }, // Exclude if imported as a URL (e.g. ?url)
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;

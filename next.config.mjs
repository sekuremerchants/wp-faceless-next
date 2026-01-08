/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.[^/]+$).*)"
  ],
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WP_IMAGES_URL,
        port: "",
        pathname: "/wp-content/uploads/**"
      },
    ],
  },
};

export default nextConfig;

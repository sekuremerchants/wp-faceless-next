import Script from 'next/script';
import { Red_Hat_Display, Libre_Franklin } from "next/font/google";
import { assetSourceLocal } from "../../paths"

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// styles
import "@/styles/bootstrap.css";
import "@/styles/style.css";
import "@/styles/blogs.css";
//import "@/styles/blocks/blocks.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const basePathLocal = assetSourceLocal();

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en-US">
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable}`}>
        <Header pageParams={params}/>
        <main>{children}</main>
        <Footer />
        <Script src={`${basePathLocal}/assets/js/blogs.js`}/>
      </body>
    </html>
  );
}

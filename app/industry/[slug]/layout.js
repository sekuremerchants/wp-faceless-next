import Script from 'next/script';
import { Red_Hat_Display, Libre_Franklin } from "next/font/google";

// components
import { Header } from "@/components/Header";
import { GlobalEvents } from "@/components/GlobalEvents";
import { Footer } from "@/components/Footer";

// styles
import "@/styles/bootstrap.css";
import "@/styles/style.css";
import "@/styles/pages/industries.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en-US">
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable}`}>
        <Script 
          src='https://js-na3.hsforms.net/forms/embed/v2.js'
          strategy="afterInteractive"
          id="hs-script-loader"
        />
        <Header />
        <main id='main-content'>{children}</main>
        <Footer />
        <GlobalEvents />
      </body>
    </html>
  );
}

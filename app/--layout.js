import Script from 'next/script';
import { Red_Hat_Display, Libre_Franklin } from "next/font/google";
import { Metadata, ResolvingMetadata } from 'next';

// components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// styles
import "../assets/css/styles/bootstrap.css";
import "../assets/css/styles/style.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

// Meta data
var metaTitle = "Sekure Payment Experts";
var metaDesc = "";

export const metadata = {
  title: metaTitle,
  description: metaDesc,
};

export default async function RootLayout({ children }) {
  console.log(Metadata);
  // language tag
  var langTag = "en-US";

  return (
    <html lang={langTag}>
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

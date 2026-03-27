import Head from 'next/head'
import Script from 'next/script'
import { Red_Hat_Display, Libre_Franklin } from "next/font/google"

// components
import { Header } from "@/components/Header"
import { GlobalEvents } from "@/components/GlobalEvents"
import { BlogEvents } from "@/components/BlogEvents"
import { Footer } from "@/components/Footer"

// styles
import "@/styles/blogs.css"
import "@/styles/bootstrap.css"
import "@/styles/style.css"

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
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable} single-post`}>
        <Script 
          src='https://js-na3.hsforms.net/forms/embed/v2.js'
          strategy="afterInteractive"
          id="hs-script-loader"
        />
        <Header pageParams={params}/>
       
        <main id='main-content'>{children}</main>

        <Footer />
        <GlobalEvents/>
        <BlogEvents/>
      </body>
    </html>
  );
}

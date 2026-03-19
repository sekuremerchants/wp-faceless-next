import Head from 'next/head'
import Script from 'next/script'
import { Red_Hat_Display, Libre_Franklin } from "next/font/google"

// components
import { Header } from "@/components/Header"
import { BlogEvents } from "@/components/BlogEvents"
import { Footer } from "@/components/Footer"

// styles
import "@/styles/bootstrap.css"
import "@/styles/style.css"
import "@/styles/blogs.css"

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
    <html lang="en-US" className='this-layout'>
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable} single-post`}>
        <Header pageParams={params}/>
       
        <main id='main-content'>{children}</main>

        <Footer />
        <BlogEvents/>
      </body>
    </html>
  );
}

// styles
import { Red_Hat_Display, Libre_Franklin } from "next/font/google"
import "@/styles/bootstrap.css"
import "@/styles/style.css"
import "@/styles/blogs.css"
import "@/styles/case-studies.css"

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
})

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
})

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en-US">
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable}`}>
        {children}
      </body>
    </html>
  )
}

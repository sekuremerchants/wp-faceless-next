import Script from 'next/script';
import { Red_Hat_Display, Libre_Franklin } from "next/font/google";

// components
import { Header } from "@/components/Header";
import { GlobalEvents } from "@/components/GlobalEvents";
import { Footer } from "@/components/Footer";

// styles
import "@/styles/bootstrap.css";
import "@/styles/style.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export default async function RootLayout({ children, params }) {
  const { layoutParams } = await params

  return (
    <html lang="en-US">
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable} sk-lander`}>
        <Script 
          src='https://js-na3.hsforms.net/forms/embed/v2.js'
          strategy="afterInteractive"
          id="hs-script-loader"
        />
        
        <Header pageParams={layoutParams}/>
        
        <main id='main-content' className='prel txt-blocks-layout-section landing-page-template-blocks'>
          <div className="background-svg-wrap svg-wrap-top-left pabs" style={{zIndex:-1}}>
            <svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg svg-full">
              <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z" />
              <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z" />
              <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z" />
              <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z" />
            </svg>
            <svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg svg-stroke">
              <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z" />
              <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z" />
              <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z" />
              <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z" />
            </svg>
            <svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg svg-stroke">
              <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z" />
              <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z" />
              <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z" />
              <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z" />
            </svg>
          </div>
          {children}
        </main>
        <Footer />
        <GlobalEvents />
      </body>
    </html>
  );
}

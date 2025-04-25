import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "../components/Navbar/index"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Junior Pastry Indian Cup 2025" />
        <meta name="description" content="The Junior Pastry Indian Cup 2025 is a launchpad for young Indian pastry chefs aspiring to shine on the global stage. Join us at IHE Expo 2025, Greater Noida." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Junior Pastry Indian Cup 2025" />
        <meta property="og:description" content="The Junior Pastry Indian Cup 2025 is a launchpad for young Indian pastry chefs aspiring to shine on the global stage. Join us at IHE Expo 2025, Greater Noida." />
        <meta property="og:image" content="/logo.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Junior Pastry Indian Cup 2025" />
        <meta property="twitter:description" content="The Junior Pastry Indian Cup 2025 is a launchpad for young Indian pastry chefs aspiring to shine on the global stage. Join us at IHE Expo 2025, Greater Noida." />
        <meta property="twitter:image" content="/logo.jpg" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Proza+Libre&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lustria&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

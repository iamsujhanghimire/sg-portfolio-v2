import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;900&family=Raleway:wght@100;400;500;600;900&family=Source+Sans+Pro:wght@200;400;700;900&display=swap" rel="stylesheet"/>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

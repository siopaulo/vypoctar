// Google Analytics komponenta
// Použití: Přidejte do app/layout.tsx

'use client'

import Script from 'next/script'

export default function Analytics() {
  // Nahraďte G-XXXXXXXXXX vaším Measurement ID z Google Analytics
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null // Nenastaveno, nevykresluj nic
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}


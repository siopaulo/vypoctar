'use client'

import { useEffect } from 'react'

interface AdBannerProps {
  slot?: string
  style?: React.CSSProperties
  format?: string
  responsive?: boolean
}

export default function AdBanner({ 
  slot = '1234567890', 
  style = { display: 'block' },
  format = 'auto',
  responsive = true 
}: AdBannerProps) {
  useEffect(() => {
    try {
      // AdSense script - nahraďte svým AdSense ID
      if (typeof window !== 'undefined' && (window as any).adsbygoogle === undefined) {
        const script = document.createElement('script')
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX'
        script.async = true
        script.crossOrigin = 'anonymous'
        document.head.appendChild(script)
      }

      // Inicializace reklamy
      if ((window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className="bg-gray-100 rounded-lg p-4 text-center min-h-[100px] flex items-center justify-center">
      {/* Placeholder pro reklamu - nahraďte skutečným AdSense kódem */}
      <div className="text-gray-400 text-sm">
        <p>Reklamní blok</p>
        <p className="text-xs mt-1">AdSense nebo affiliate</p>
      </div>
      
      {/* Odkomentujte po registraci AdSense:
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
      */}
    </div>
  )
}


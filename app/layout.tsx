import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cesky-kalkulator.vercel.app'),
  title: 'Kalkulátor - Převodníky jednotek, měn, DPH a další nástroje',
  description: 'Užitečné kalkulačky a převodníky: jednotky, měny, DPH, BMI, plochy, objemy a další. Vše zdarma, orientačně a online.',
  keywords: [
    'kalkulačka',
    'online kalkulačka',
    'převodník jednotek',
    'převodník měn',
    'DPH kalkulačka',
    'BMI kalkulačka',
    'hypoteční kalkulačka',
    'úroková kalkulačka',
  ],
  category: 'technology',
  authors: [{ name: 'Kalkulátor' }],
  alternates: {
    canonical: '/',
    languages: {
      'cs-CZ': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Kalkulátor - Převodníky a kalkulačky',
    description: 'Praktické kalkulačky a převodníky zdarma pro domácnost, školu i podnikání.',
    url: '/',
    siteName: 'Kalkulátor',
    type: 'website',
    locale: 'cs_CZ',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Kalkulátor - online převodníky a kalkulačky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalkulátor – online převodníky a kalkulačky',
    description: 'Získejte rychlé výpočty DPH, BMI, hypotéky, úroků a dalších veličin zdarma.',
    images: ['/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}


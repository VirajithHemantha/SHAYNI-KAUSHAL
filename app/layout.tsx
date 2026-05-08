import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Shani & Naveen Wedding',
  description: 'Join us as we celebrate the union of Shani and Naveen.',
  generator: 'v0.app',
  metadataBase: new URL('https://shani-naveen-wedding.vercel.app'),
  icons: {
    icon: '/wedding-logo.png',
    apple: '/wedding-logo.png',
  },
  openGraph: {
    title: 'Shani & Naveen Wedding',
    description: 'Join us as we celebrate the blessed Christian union of Shani and Naveen .',
    url: '/',
    siteName: 'Shani & Naveen Wedding',
    images: [
      {
        url: '/wedding-logo-us.png',
        width: 640,
        height: 640,
        alt: 'Shani & Naveen Wedding',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shani & Naveen Wedding',
    description: 'Join us as we celebrate the blessed Christian union of Shani and Naveen .',
    images: ['/wedding-logo-us.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

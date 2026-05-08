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
  title: 'Umayangana & Samudra Wedding',
  description: 'Join us as we celebrate the blessed Christian union of Umayangana and Samudra .',
  generator: 'v0.app',
  metadataBase: new URL('https://udayangani-samudra-weddinginvitatio.vercel.app'),
  icons: {
    icon: '/wedding-icon.png?v=2',
    apple: '/wedding-icon.png?v=2',
  },
  openGraph: {
    title: 'Umayangana & Samudra Wedding',
    description: 'Join us as we celebrate the blessed Christian union of Umayangana and Samudra .',
    url: '/',
    siteName: 'Umayangana & Samudra Wedding',
    images: [
      {
        url: '/wedding-icon.png?v=2',
        width: 640,
        height: 640,
        alt: 'Umayangana & Samudra Wedding',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umayangana & Samudra Wedding',
    description: 'Join us as we celebrate the blessed Christian union of Umayangana and Samudra .',
    images: ['/wedding-icon.png?v=2'],
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

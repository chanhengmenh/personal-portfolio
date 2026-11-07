import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chanhengmenh.vercel.app'),
  title: 'Chanheng Menh | Cloud Infrastructure & AI/MLOps Engineer',
  description: 'Portfolio of Chanheng Menh — Cloud Infrastructure Engineer specializing in Cloud Architecture, DevOps, and AI/MLOps.',
  openGraph: {
    title: 'Chanheng Menh | Cloud Infrastructure & AI/MLOps Engineer',
    description: 'Portfolio of Chanheng Menh — Cloud Infrastructure Engineer specializing in Cloud Architecture, DevOps, and AI/MLOps.',
    url: 'https://chanhengmenh.vercel.app',
    siteName: 'Chanheng Menh Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 1200,
        alt: 'Chanheng Menh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chanheng Menh | Cloud Infrastructure & AI/MLOps Engineer',
    description: 'Portfolio of Chanheng Menh — Cloud Infrastructure Engineer specializing in Cloud Architecture, DevOps, and AI/MLOps.',
    images: ['/profile.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

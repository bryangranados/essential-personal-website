import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Head from 'next/head'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hi, I\'m Bryan',
    template: '%s | Bryan Granados',
  },
  description: 'Product Service Delivery Lead',
  openGraph: {
    title: 'Hi, I\'m Bryan',
    description: 'Product Service Delivery Lead',
    url: baseUrl,
    siteName: 'Hi, I\'m Bryan',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg', // Main favicon
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-stone-950 bg-neutral-200 dark:text-white dark:bg-slate-950',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}

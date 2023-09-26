import CustomAppStoreProvider from '@/components/assets/CustomAppStoreProvider'
import Header from '../components/LayoutComponents/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/LayoutComponents/Footer'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: `GIGL | Africa's Leading Logistics Company | Express Delivery`,
  description: '"As the leading logistics service provider in Africa, GIGL offers convenient, affordable, express delivery services with its GIGGo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </head>
      <CustomAppStoreProvider>
        <body className={`${inter.className} bg-[#f4f5f6]  scroll-smooth overflow-x-hidden`}>
          <Header />
          {children}
          <Footer />
        </body>
      </CustomAppStoreProvider>
    </html>
  )
}

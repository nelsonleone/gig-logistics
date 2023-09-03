import CustomAppStoreProvider from '@/components/assets/CustomAppStoreProvider'
import Header from '../components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], weight: ["400","500","600","700"] })

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
      </head>
      <CustomAppStoreProvider>
        <body className={`${inter.className} scroll-smooth overflow-x-hidden`}>
          <Header />
          {children}
          <Footer />
        </body>
      </CustomAppStoreProvider>
    </html>
  )
}

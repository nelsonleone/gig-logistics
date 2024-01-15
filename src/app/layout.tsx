import CustomAppStoreProvider from '@/components/assets/CustomAppStoreProvider'
import Header from '../components/LayoutComponents/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/LayoutComponents/Footer'
import { inter } from './fonts'
import CustomAlert from '@/components/assets/PopUps/CustomAlert'
import { cookies } from 'next/headers'
import AuthUserHeaderSection from '@/components/AuthUserHeaderSection'
import CustomSnackbar from '@/components/assets/PopUps/CustomSnackbar'
import RingLoader from '../components/assets/Loaders/RingLoader'


export const metadata: Metadata = {
  title: `GIGL | Africa's Leading Logistics Company | Express Delivery`,
  description: '"As the leading logistics service provider in Africa, GIGL offers convenient, affordable, express delivery services with its GIGGo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const authSessionToken = cookies().get('authSessionToken')?.value;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </head>
        <CustomAppStoreProvider>
          <body className={`${inter.className} bg-[#f4f5f6] scroll-smooth overflow-x-hidden`}>
            <CustomAlert />
            <Header authSessionToken={authSessionToken}>
              <AuthUserHeaderSection />
            </Header>
            {children}
            <RingLoader />
            <CustomSnackbar />
            <Footer />
          </body>
        </CustomAppStoreProvider>
    </html>
  )
}

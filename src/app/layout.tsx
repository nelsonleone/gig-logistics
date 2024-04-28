import CustomAppStoreProvider from '@/components/assets/CustomAppStoreProvider'
import Header from '../components/LayoutComponents/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/LayoutComponents/Footer'
import { inter } from './fonts'
import CustomAlert from '@/components/assets/PopUps/CustomAlert'
import AuthUserHeaderSection from '@/components/AuthUserHeaderSection'
import CustomSnackbar from '@/components/assets/PopUps/CustomSnackbar'
import RingLoader from '../components/assets/Loaders/RingLoader'
import ImportantPrompts from '@/components/assets/PopUps/ImportantPrompts'
import SupportChat from '@/components/assets/PopUps/SupportChat'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from '@mui/material'
import { MuiTheme } from '@/lib/muiTheme/theme'
  

export const metadata: Metadata = {
  title: `GIGL | Africa's Leading Logistics Company | Express Delivery`,
  description: '"As the leading logistics service provider in Africa, GIGL offers convenient, affordable, express delivery services with its GIGGo App',
}

export default function RootLayout({
  createPin,
  children
}: {
  createPin: React.ReactNode,
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head suppressHydrationWarning>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </head>
        <CustomAppStoreProvider>
          <MantineProvider theme={{ fontFamily: `"Inter", sans-serif` }}>
            <ThemeProvider theme={MuiTheme}>
              <body className={`${inter.className} bg-[#f4f5f6] scroll-smooth overflow-x-hidden`}>
                <CustomAlert />
                <Header >
                  <AuthUserHeaderSection />
                </Header>
                {createPin}
                {children}
                <ImportantPrompts />
                <RingLoader />
                <CustomSnackbar />
                <SupportChat />
                <Footer />
              </body>
              <time dateTime="2016-10-25" suppressHydrationWarning />
            </ThemeProvider>
          </MantineProvider>
        </CustomAppStoreProvider>
    </html>
  )
}

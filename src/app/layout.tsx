import { JSX } from 'react'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// configs
import { AppConfig } from '@/configs'

// constants
import { PREFERRED_MODE_KEY } from '@/constants'

// components
// import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'
import AppBarSkeleton from '@/components/appbar/app-bar-skeleton'

// @mui provider
import MuiThemeProvider from '@/plugins/@mui/components/@mui-theme.provider'

// app context provider
import { AppContextProvider } from '@/contexts'

// global styles
import './globals.css'

const AppBar = dynamic(() => import('@/components/appbar/app-bar'), {
  loading: () => <AppBarSkeleton />,
  ssr: !!false,
})

const plugJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: AppConfig.appName,
  description: AppConfig.appDescription,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): Promise<JSX.Element> {
  const cookieStore = await cookies()
  const storedMode = cookieStore.get(PREFERRED_MODE_KEY)?.value
  const initialIsDark = storedMode ? storedMode === 'dark' : true

  return (
    <html lang='en'>
      <body className={plugJakartaSans.variable}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <AppContextProvider initialIsDark={initialIsDark}>
            <MuiThemeProvider>
              <AppBar />
              {children}
              <Footer />
            </MuiThemeProvider>
          </AppContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

import Navbar from '@/core/components/customers/Header'
import '@/styles/globals.css'
import { AuthUserProvider } from '@contex/AuthUserProvider'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthUserProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
            breakpoints: {
              xs: '30em',
              sm: '48em',
              md: '64em',
              lg: '74em',
              xl: '90em',
            },
          }}
        >
          <DatesProvider
            settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}
          >
            {/* <Navbar /> */}
            {/* <BrowserRouter> */}
            <Component {...pageProps} />
            {/* </BrowserRouter> */}
          </DatesProvider>
          <Toaster />
        </MantineProvider>
      </AuthUserProvider>
    </QueryClientProvider>
  )
}

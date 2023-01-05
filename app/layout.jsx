import '@/styles/reset.css'
import '@/styles/globals.scss'

import { getSession } from '@/lib/auth'
import { Quicksand } from '@next/font/google'

import MainLayoutWrapper from '@/components/core/main-layout-wrapper'

const quicksand = Quicksand({
  weights: [400, 500, 700],
  subsets: ['latin-ext', 'latin'],
})

export default async function RootLayout({ children }) {
  const session = await getSession()
  return (
    <html lang="tr" className={quicksand.className}>
      <head />
      <body>
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  )
}
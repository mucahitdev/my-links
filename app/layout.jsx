import '@/styles/reset.css'
import '@/styles/globals.scss'

import ProvidersWrapper from './ProvidersWrapper'
import { Quicksand } from '@next/font/google'

const quicksand = Quicksand({
  weights: [400, 500, 700],
  subsets: ['latin-ext', 'latin'],
})

export default async function RootLayout({ children }) {
  return (
    <html lang="tr" className={quicksand.className}>
      <head />
      <body>
        <ProvidersWrapper >
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  )
}
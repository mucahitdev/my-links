import '@/styles/reset.css'
import '@/styles/globals.scss'

import { Quicksand } from '@next/font/google'
const quicksand = Quicksand({ 
  subsets: ['latin'] ,
  weights: [400, 700]
})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={quicksand.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
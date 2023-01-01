import './globals.css'
import { Quicksand } from '@next/font/google'
const quicksand = Quicksand({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}

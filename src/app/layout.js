import './globals.css'
import { Inter } from 'next/font/google'
// import img from "../../public/images/projectOne(eastdale).PNG"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Malachi Ezeabuchukwu',
  description: 'MERN stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

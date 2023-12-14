import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'McMaster Room Booking',
  description: 'Book Study Rooms in McMaster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header back={undefined} next={undefined} state_progress={undefined}></Header>
        {children}
      </body>
    </html>
  )
}

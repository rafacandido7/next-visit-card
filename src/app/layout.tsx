import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Rafael Cândido - Visit Card',
  description: '',
}

const raleway = Raleway({
  weight: '300',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${raleway.className} w-screen h-screen`}>
        {children}
      </body>
    </html>
  )
}

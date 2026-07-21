import type { Metadata, Viewport } from 'next'
import { Nunito, Lato } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const lato = Lato({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '700', '900'] })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: "Becky's Well | Unplanned Pregnancy & Pregnancy Loss Support, Shepparton VIC",
  description:
    "Becky's Well offers free, confidential support for anyone facing an unplanned pregnancy, pregnancy loss, or post-abortion recovery in Shepparton, Mooroopna, Tatura and the Greater Shepparton region. Options information, life coaching and referrals — self-referrals welcome.",
  keywords:
    'unplanned pregnancy support Shepparton, pregnancy options counselling, pregnancy loss support, post-abortion support, Pregnancy Help Australia, Greater Shepparton',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ba886d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

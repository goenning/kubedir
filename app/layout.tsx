import '../styles/globals.css'
import { GlobalNav } from '@components/GlobalNav'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script type="text/javascript" src="/p.js" data-api="/e" />
      <body className="overflow-y-scroll">
        <GlobalNav />
        <main className="mt-16 p-4 lg:mt-0 lg:ml-52">{children}</main>
      </body>
    </html>
  )
}

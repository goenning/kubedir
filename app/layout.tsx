import '../styles/globals.css'
import { GlobalNav } from '../components/GlobalNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-y-scroll">
        <GlobalNav />

        <main className="mt-16 p-4 lg:mt-0 lg:ml-72">{children}</main>
      </body>
    </html>
  )
}

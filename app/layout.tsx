import '../styles/globals.css'
import { GlobalNav } from '../components/GlobalNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')]">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

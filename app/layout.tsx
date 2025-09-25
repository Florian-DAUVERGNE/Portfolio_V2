import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: process.env.TITLE,
  description: process.env.DESCRIPTION_SIMPLE,
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: process.env.URL,
    title: process.env.TITLE,
    description: process.env.DESCRIPTION_COMPLEXE,
    siteName: "Portfolio - DAUVERGNE Florian",
    images: [
      {
        url: "https://i.ibb.co/m5bYtw6/responsive-showcase.png",
      },
    ],
  },
  authors: {
    name: process.env.FULLNAME,
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "ShadcnUI"],
  creator: process.env.FULLNAME,
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

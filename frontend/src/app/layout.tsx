import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import { AuthProvider } from "@/contexts/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sports Match Finder",
  description: "Find and join sports matches in your area",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}


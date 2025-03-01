import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import type React from "react"

export const metadata: Metadata = {
  title: "Jonieber Dela Victoria - Portfolio",
  description: "Full Stack Web Developer Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sf-pro bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
        <div className="fixed inset-0 z-0">
          <div className=" opacity-5 mix-blend-overlay"></div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'
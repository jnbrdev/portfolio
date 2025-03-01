"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          JDV
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="#tools" className="text-white hover:text-gray-300">
            Tools
          </Link>
          <Link href="#about" className="text-white hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
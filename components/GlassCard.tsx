import type React from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative z-10 p-8">{children}</div>
    </div>
  )
}


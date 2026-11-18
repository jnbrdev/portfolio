"use client"
import { MotionConfig } from "framer-motion"
import type React from "react"

// "user" honours the OS reduced-motion setting (drops movement, keeps fades)
// without changing server-rendered markup, so there's no hydration mismatch.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

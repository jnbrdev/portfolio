import Link from "next/link"
import { profile } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <Link href="#home" className="transition hover:text-white">
          Back to top ↑
        </Link>
      </div>
    </footer>
  )
}

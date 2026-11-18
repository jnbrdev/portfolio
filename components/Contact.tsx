"use client"
import { useState } from "react"
import { Check, Copy, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Section, { Reveal } from "./Section"
import { profile } from "@/lib/data"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
          />
          <div className="relative">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-5xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
              I&apos;m open to full-time roles and freelance work. The fastest way to reach me is by email or LinkedIn.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                <Mail className="h-4 w-4" /> Send an email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
              >
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                <span aria-live="polite">{copied ? "Copied!" : profile.email}</span>
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

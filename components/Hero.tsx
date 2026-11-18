import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { allTools, profile } from "@/lib/data"

const fade = (delay: number) => ({
  className: "animate-fade-up",
  style: { animationDelay: `${delay}s` },
})

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ")

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div {...fade(0)}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to new opportunities
          </div>
        </div>

        <h1
          {...fade(0.1)}
          className="animate-fade-up font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-7xl lg:text-8xl"
        >
          {first}{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            {rest.join(" ")}
          </span>
        </h1>

        <p
          {...fade(0.2)}
          className="animate-fade-up mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-zinc-300 sm:text-xl"
        >
          <span className="font-medium text-primary">{profile.role}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <span className="inline-flex items-center gap-1 text-zinc-400">
            <MapPin className="h-4 w-4" /> {profile.location}
          </span>
        </p>

        <p
          {...fade(0.3)}
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.intro}
        </p>

        <div {...fade(0.4)} className="animate-fade-up mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Get in touch
          </Link>
          <div className="ml-1 flex items-center gap-1">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div
        {...fade(0.6)}
        className="animate-fade-up relative mt-20 overflow-hidden mask-fade-x"
        aria-label="Technologies I use"
      >
        <div className="animate-loop-scroll flex gap-12 py-2">
          {[...allTools, ...allTools].map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex shrink-0 items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-200"
              aria-hidden={i >= allTools.length}
            >
              <tool.icon className="h-6 w-6" />
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Maximize2 } from "lucide-react"
import Section, { Reveal, SectionHeading } from "./Section"
import ProjectModal from "./ProjectModal"
import { projects, type Project } from "@/lib/data"

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        intro="A mix of client work and personal builds, from in-house business apps to full-stack side projects."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5">
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="relative block aspect-[16/10] overflow-hidden bg-zinc-900 text-left"
                aria-label={`Open details for ${project.name}`}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
                  <span className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-zinc-400">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 4).map((t) => (
                    <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                      {t}
                    </li>
                  ))}
                  {project.tools.length > 4 && (
                    <li className="rounded-md px-1 py-0.5 text-xs text-zinc-500">+{project.tools.length - 4}</li>
                  )}
                </ul>

                <div className="mt-auto flex items-center gap-4 pt-5 text-sm">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="font-medium text-zinc-300 underline-offset-4 hover:text-white hover:underline"
                  >
                    Details
                  </button>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-primary hover:brightness-125"
                    >
                      Live site <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-zinc-500">Private / internal</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}

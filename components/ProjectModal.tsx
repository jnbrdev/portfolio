"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import type { Project } from "@/lib/data"

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90svh] max-w-4xl overflow-y-auto border-white/10 bg-zinc-950 p-0 text-white sm:rounded-2xl">
        {project && (
          <>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
              <Image src={project.image} alt={`${project.name} screenshot`} fill sizes="900px" className="object-cover object-top" />
            </div>
            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">{project.category}</p>
                <DialogTitle className="font-display text-2xl font-semibold sm:text-3xl">{project.name}</DialogTitle>
                <DialogDescription className="mt-3 text-base leading-relaxed text-zinc-300">
                  {project.details}
                </DialogDescription>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">Built with</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                >
                  Visit live site <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

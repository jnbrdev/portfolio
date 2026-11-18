import Section, { Reveal, SectionHeading } from "./Section"
import { experience, profile } from "@/lib/data"

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="About" title="A little about me" />
          <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h3 className="mb-8 font-display text-sm font-semibold uppercase tracking-wider text-zinc-400 lg:mt-[4.5rem]">
              Experience
            </h3>
          </Reveal>
          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {experience.map((job, i) => (
              <Reveal as="li" key={`${job.company}-${job.title}`} delay={i * 0.1} className="relative">
                  <span
                    aria-hidden
                    className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                      i === 0 ? "bg-primary" : "bg-zinc-600"
                    }`}
                  />
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{job.period}</p>
                  <h4 className="mt-2 font-display text-xl font-semibold text-white">{job.title}</h4>
                  <p className="text-sm font-medium text-primary">{job.company}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{job.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                        {t}
                      </li>
                    ))}
                  </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

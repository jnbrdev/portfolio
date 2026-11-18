import Section, { Reveal, SectionHeading } from "./Section"
import { toolGroups } from "@/lib/data"

export default function Tools() {
  return (
    <Section id="tools" className="border-y border-white/5 bg-white/[0.015]">
      <SectionHeading
        eyebrow="Stack"
        title="Tools & technologies"
        intro="The languages, frameworks and platforms I reach for to design, build and ship."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {toolGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-card p-6">
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-zinc-400">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200 transition hover:border-primary/40 hover:bg-primary/10"
                  >
                    <tool.icon className="h-4 w-4 text-zinc-400 transition group-hover:text-primary" />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

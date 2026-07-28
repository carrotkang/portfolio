import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'}>
      <article className="group grid overflow-hidden rounded-[2rem] border border-[#111827]/10 bg-white shadow-[0_20px_60px_rgba(37,99,235,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className={`relative min-h-72 overflow-hidden p-7 text-left sm:p-8 ${project.color}`}
        aria-label={`${project.title} 상세 보기`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-black tracking-[0.2em] text-white/70">
            PROJECT 0{index + 1}
          </span>
          {project.highlight && (
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[0.65rem] font-black tracking-[0.16em] text-white backdrop-blur-sm">
              {project.highlight}
            </span>
          )}
        </div>
        <div className="absolute inset-x-8 bottom-8 translate-y-2 transition duration-300 group-hover:translate-y-0">
          <p className="mb-3 text-sm font-bold text-white/70">{project.type}</p>
          <p className="display text-4xl font-bold leading-none text-white sm:text-5xl">
            {project.title}
          </p>
        </div>
        <div className="absolute -right-12 -top-12 size-48 rounded-full border-[30px] border-white/10" />
      </button>
      <div className="flex flex-col justify-between p-6 sm:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#111827]/45">
            <span>{project.period}</span>
            <span>{project.team}</span>
          </div>
          <h3 className="mt-5 break-keep text-[clamp(1.25rem,5.8vw,1.5rem)] font-extrabold leading-[1.35]">
            {project.summary}
          </h3>
          <p className="mt-4 break-keep text-pretty text-[0.9375rem] leading-7 text-[#111827]/65 sm:text-base">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <SkillBadge key={item} name={item} />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="mt-9 inline-flex items-center gap-2 self-start text-sm font-extrabold text-[#2563eb]"
        >
          문제 해결 과정 보기
          <ArrowUpRight size={16} />
        </button>
      </div>
      </article>
    </ScrollReveal>
  )
}

import { Code2, ExternalLink, FileDown, Package, Palette, X } from 'lucide-react'
import { useEffect } from 'react'
import SkillBadge from './SkillBadge'
import { trackEvent } from '../lib/analytics'

const linkIcons = {
  github: Code2,
  figma: Palette,
  docker: Package,
  demo: ExternalLink,
  presentation: FileDown,
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#0b1220]/75 p-3 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">{project.type}</p>
              {project.highlight && (
                <span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-[0.65rem] font-black tracking-[0.14em] text-[#2563eb]">
                  {project.highlight}
                </span>
              )}
              {project.role && (
                <span className="rounded-full bg-[#111827] px-3 py-1 text-[0.65rem] font-black tracking-[0.14em] text-white">
                  TEAM LEADER
                </span>
              )}
            </div>
            <h2 id="project-modal-title" className="display mt-4 text-4xl font-bold sm:text-5xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#111827]/15 p-2"
            aria-label="상세 창 닫기"
            autoFocus
          >
            <X />
          </button>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#111827]/65">
          {project.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((item) => <SkillBadge key={item} name={item} />)}
        </div>
        <div className="mt-10 grid gap-8 border-y border-[#111827]/10 py-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#7c3aed]">
              해결한 문제
            </h3>
            <p className="mt-3 leading-7">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#2563eb]">
              나의 기여{project.role ? ` · ${project.role}` : ''}
            </h3>
            <p className="mt-3 leading-7">{project.contribution}</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#7c3aed]">
              주요 기능
            </h3>
            <ul className="mt-3 grid gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 leading-6">
                  <span aria-hidden="true">—</span>{feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#2563eb]">
              결과와 배움
            </h3>
            <p className="mt-3 leading-7">{project.outcome}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link, index) => {
            const LinkIcon = linkIcons[link.type] ?? ExternalLink

            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('project_link_click', {
                  project_name: project.title,
                  link_type: link.type,
                })}
                className={
                  index === 0
                    ? 'inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-bold text-white'
                    : 'inline-flex items-center gap-2 rounded-full border border-[#111827]/20 px-5 py-3 text-sm font-bold'
                }
              >
                <LinkIcon size={17} /> {link.label}
              </a>
            )
          })}
        </div>
      </section>
    </div>
  )
}

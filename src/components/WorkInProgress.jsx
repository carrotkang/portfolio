import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Database,
  FileText,
  Sparkles,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const languageRoles = [
  {
    language: 'JAVA',
    role: '서비스 핵심 백엔드',
    detail: 'Spring Boot · 인증 · 도메인 · API',
    accent: 'border-[#fbbf24]/30 bg-[#fbbf24]/10 text-[#fde68a]',
  },
  {
    language: 'PYTHON',
    role: 'AI 추천·분석 서버',
    detail: 'FastAPI · 추천 모델 · 감성 분석',
    accent: 'border-[#60a5fa]/30 bg-[#60a5fa]/10 text-[#bfdbfe]',
  },
]

const coreFeatures = [
  {
    icon: BookOpen,
    title: '리뷰 감성 분석',
    description: '도서 리뷰의 감정과 핵심 의견을 분석합니다.',
  },
  {
    icon: Database,
    title: '개인화·트렌드 추천',
    description: '검색·조회·관심 행동을 바탕으로 책을 추천합니다.',
  },
  {
    icon: Bot,
    title: 'AI 도서 챗봇',
    description: 'Spring AI Tool Calling으로 자연어 검색을 지원합니다.',
  },
]

const projectSteps = [
  ['01', '요구사항·아키텍처', 'READY'],
  ['02', '데이터·AI 검증', 'NEXT'],
  ['03', 'MVP 구현·배포', 'PLANNED'],
]

const techStack = [
  'Java 21 · Spring Boot',
  'Python 3.12 · FastAPI',
  'React · TypeScript',
  'PostgreSQL · pgvector',
  'Docker',
]

export default function WorkInProgress() {
  return (
    <ScrollReveal direction="up" className="mt-14">
      <aside className="grid overflow-hidden rounded-[2rem] bg-[#111827] text-white shadow-[0_24px_70px_rgba(17,24,39,0.16)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-between p-8 sm:p-11">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[0.65rem] font-black tracking-[0.14em] text-[#93c5fd]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#60a5fa] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#60a5fa]" />
              </span>
              JAVA + PYTHON · AI FULL STACK
            </span>

            <p className="mt-8 text-xs font-black tracking-[0.16em] text-white/45">
              NEXT PROJECT · 요구사항·아키텍처 설계 완료
            </p>
            <h3 className="display mt-3 text-4xl font-bold leading-none sm:text-6xl">
              BookPick AI
            </h3>
            <p className="display mt-4 text-xl font-bold leading-snug text-[#60a5fa] sm:text-2xl">
              AI 기반 개인화 도서 추천 서비스
            </p>
            <p className="mt-6 max-w-xl break-keep text-pretty leading-7 text-white/60">
              Java·Spring Boot로 서비스의 핵심 백엔드와 API를 구현하고,
              Python·FastAPI로 추천 모델과 리뷰 감성 분석 AI를 분리해
              연결하는 멀티 언어 프로젝트입니다.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/docs/bookpick-ai-project-spec.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#111827] transition hover:-translate-y-0.5 hover:bg-[#dbeafe]"
            >
              <FileText size={17} />
              서비스 명세서 보기
              <ArrowUpRight size={16} />
            </a>
            <span className="text-[0.65rem] font-black tracking-[0.14em] text-white/35">
              SPEC v0.2 · 2026.07
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-[#1d4ed8] to-[#6d28d9] p-6 sm:p-9">
          <div className="absolute -right-20 -top-20 size-64 rounded-full border-[38px] border-white/10" />
          <div className="relative flex h-full flex-col rounded-2xl border border-white/20 bg-[#0b1220]/70 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <Sparkles size={15} className="text-[#93c5fd]" />
              <span className="text-[0.65rem] font-black tracking-[0.16em] text-white/50">
                DUAL-LANGUAGE ARCHITECTURE
              </span>
            </div>

            <div className="grid gap-3 py-5 sm:grid-cols-2">
              {languageRoles.map(({ language, role, detail, accent }) => (
                <div
                  key={language}
                  className={`rounded-xl border p-4 ${accent}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <strong className="display text-xl">{language}</strong>
                    <span className="text-[0.6rem] font-black tracking-wider opacity-70">
                      {language === 'JAVA' ? 'CORE' : 'AI'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-black text-white">{role}</p>
                  <p className="mt-1 text-[0.65rem] leading-5 text-white/45">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 pb-5 sm:grid-cols-3">
              {coreFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <Icon size={19} className="text-[#93c5fd]" />
                  <p className="mt-3 text-sm font-black">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/45">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-y border-white/10 py-4">
              {projectSteps.map(([number, label, status]) => (
                <div
                  key={number}
                  className="grid grid-cols-[2rem_1fr_auto] items-center gap-2 text-xs"
                >
                  <span className="font-mono text-white/30">{number}</span>
                  <span className="font-bold text-white/70">{label}</span>
                  <span
                    className={
                      status === 'READY'
                        ? 'rounded-full bg-[#60a5fa] px-2.5 py-1 text-[0.55rem] font-black tracking-wider text-[#0b1220]'
                        : 'px-2.5 py-1 text-[0.55rem] font-black tracking-wider text-white/30'
                    }
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.6rem] font-bold text-white/55"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </ScrollReveal>
  )
}

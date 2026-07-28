import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="paper-grid relative overflow-hidden border-b border-[#111827]/10">
      <div className="site-shell grid min-h-[calc(100svh-6.75rem)] items-center gap-12 py-20 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="relative z-10 min-w-0">
          <p className="hero-enter hero-enter--left eyebrow [--hero-delay:120ms]">
            Web · Backend · AI
          </p>
          <h1
            className="display mt-7 max-w-4xl text-[clamp(2.75rem,13vw,7.7rem)] font-bold leading-[0.9] sm:leading-[0.88]"
            aria-label="끝까지 구현하는 개발자 강경근"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-enter hero-enter--up block [--hero-delay:220ms]">
                끝까지 구현하는
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em] text-[#2563eb]">
              <span className="hero-enter hero-enter--up block [--hero-delay:320ms]">
                개발자 강경근
              </span>
            </span>
          </h1>
          <p className="hero-enter hero-enter--up mt-7 max-w-[42rem] text-pretty text-lg leading-8 text-[#111827]/68 [--hero-delay:440ms] sm:mt-8 sm:text-xl">
            사용자에게 필요한 서비스를 생각에서 멈추지 않고, 설계와 구현,
            협업 그리고 배포까지 연결합니다.
          </p>
          <div className="hero-enter hero-enter--up mt-9 flex flex-wrap gap-3 [--hero-delay:560ms] sm:mt-10">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3.5 text-sm font-bold text-white">
              프로젝트 보기 <ArrowDown size={17} />
            </a>
            <a href="https://github.com/carrotkang" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#111827]/20 bg-[#f6f8fc] px-6 py-3.5 text-sm font-bold">
              <Code2 size={17} /> GitHub
            </a>
          </div>
        </div>
        <aside className="hero-enter hero-enter--right relative mx-auto aspect-[4/5] w-full min-w-0 max-w-sm rounded-[10rem_10rem_2rem_2rem] bg-[#2563eb] p-5 text-[#f8fafc] shadow-[18px_18px_0_#c9d7f4] [--hero-delay:360ms]">
          <div className="flex h-full flex-col justify-between rounded-[9rem_9rem_1.25rem_1.25rem] border border-white/25 p-7">
            <span className="self-center text-xs font-black tracking-[0.2em]">PORTFOLIO / 26</span>
            <div>
              <p className="display text-[clamp(2.25rem,10vw,2.75rem)] font-bold leading-[0.95]">
                <span className="block whitespace-nowrap">Kang</span>
                <span className="block whitespace-nowrap">Gyeonggeun</span>
              </p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                함께 이야기하기 <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

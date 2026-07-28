import { Braces, Rocket, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const progressItems = [
  ['LEARN', 'w-[84%]'],
  ['BUILD', 'w-[68%]'],
  ['IMPROVE', 'w-[76%]'],
]

export default function WorkInProgress() {
  return (
    <ScrollReveal direction="up" className="mt-14">
      <aside className="grid overflow-hidden rounded-[2rem] bg-[#111827] text-white shadow-[0_24px_70px_rgba(17,24,39,0.16)] lg:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col justify-between p-8 sm:p-11">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[0.65rem] font-black tracking-[0.18em] text-[#93c5fd]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#60a5fa] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#60a5fa]" />
              </span>
              WORK IN PROGRESS
            </span>
            <h3 className="display mt-7 max-w-xl text-3xl font-bold leading-tight sm:text-5xl">
              완성에 머무르지 않고,
              <span className="block text-[#60a5fa]">다음 기능을 만들고 있습니다.</span>
            </h3>
            <p className="mt-5 max-w-xl text-pretty leading-7 text-white/60">
              새로운 기술을 학습하고, 작은 아이디어를 직접 구현하며,
              기존 프로젝트도 사용자 관점에서 계속 개선하고 있습니다.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold text-white/55">
            <span className="inline-flex items-center gap-2"><Sparkles size={15} /> Learn</span>
            <span className="inline-flex items-center gap-2"><Braces size={15} /> Build</span>
            <span className="inline-flex items-center gap-2"><Rocket size={15} /> Ship</span>
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-[#1d4ed8] to-[#7c3aed] p-6 sm:p-9">
          <div className="absolute -right-20 -top-20 size-64 rounded-full border-[38px] border-white/10" />
          <div className="relative flex h-full min-h-60 flex-col rounded-2xl border border-white/20 bg-[#0b1220]/65 p-5 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="size-2.5 rounded-full bg-[#fb7185]" />
              <span className="size-2.5 rounded-full bg-[#fbbf24]" />
              <span className="size-2.5 rounded-full bg-[#34d399]" />
              <span className="ml-auto text-[0.6rem] font-black tracking-[0.16em] text-white/40">
                BUILD.LOG
              </span>
            </div>
            <div className="my-auto space-y-5 py-7">
              <p className="font-mono text-sm text-[#bfdbfe]">
                <span className="text-[#c4b5fd]">const</span> nextStep ={' '}
                <span className="text-[#86efac]">&quot;keep building&quot;</span>
              </p>
              {progressItems.map(([label, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-[0.6rem] font-black tracking-[0.16em] text-white/45">
                    <span>{label}</span>
                    <span>IN PROGRESS</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full ${width} rounded-full bg-gradient-to-r from-[#60a5fa] to-[#c4b5fd]`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </ScrollReveal>
  )
}

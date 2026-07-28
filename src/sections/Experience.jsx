import ScrollReveal from '../components/ScrollReveal'
import SectionTitle from '../components/SectionTitle'
import { education, experiences } from '../data/experience'

function Timeline({ items, startIndex = 0 }) {
  return (
    <ol className="divide-y divide-white/15 border-y border-white/15">
      {items.map((item, index) => (
        <ScrollReveal
          as="li"
          key={`${item.organization}-${item.period}`}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 70}
          className="grid gap-4 py-8 md:grid-cols-[80px_1fr_1.4fr] md:items-start"
        >
          <span className="display text-3xl text-[#60a5fa]">
            {String(startIndex + index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/45">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl font-bold">{item.organization}</h3>
            <p className="mt-1 text-sm font-bold text-[#93c5fd]">{item.title}</p>
          </div>
          <p className="text-pretty leading-7 text-white/60">{item.description}</p>
        </ScrollReveal>
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-space bg-[#111827] text-[#f6f8fc]">
      <div className="site-shell">
        <SectionTitle
          label="Experience"
          title="현장을 이해하고, 기술로 연결해 왔습니다."
          description="약 7년간의 F&B 매장 운영부터 Java 웹 개발과 제조 공정 개선까지, 서로 다른 환경에서 쌓은 경험을 서비스 개발의 기반으로 삼습니다."
        />

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h3 className="display text-3xl font-bold">Career</h3>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-black tracking-widest text-[#93c5fd]">
            개발 · 제조 · F&B 실무 경험
          </span>
        </div>
        <Timeline items={experiences} />

        <div className="mb-6 mt-20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#60a5fa]">
            Education & Training
          </p>
          <h3 className="display mt-3 text-3xl font-bold">배움의 과정</h3>
        </div>
        <Timeline items={education} startIndex={experiences.length} />
      </div>
    </section>
  )
}

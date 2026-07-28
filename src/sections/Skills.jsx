import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import SkillBadge from '../components/SkillBadge'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="site-shell">
        <SectionTitle label="Skills" title="기술은 문제를 푸는 도구입니다." description="숙련도를 막대로 표현하는 대신, 각 기술을 어떤 맥락에서 사용하는지 설명합니다." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.category} direction="up" delay={index * 90}>
              <article className="rounded-[1.5rem] border border-[#111827]/10 bg-white/55 p-7">
                <span className="display text-3xl font-bold text-[#7c3aed]">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-extrabold">{group.category}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-[#111827]/60">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => <SkillBadge key={item} name={item} />)}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal
          direction="up"
          delay={120}
          className="mt-6 border-l-2 border-[#2563eb] pl-5 text-sm leading-7 text-[#111827]/60"
        >
          Google Analytics 4로 페이지 조회, 프로젝트 상세 열기, 외부 링크와 연락처
          클릭 이벤트를 추적하며 실제 사용자 흐름을 확인합니다.
        </ScrollReveal>
      </div>
    </section>
  )
}

import { GitBranch, Network, Users } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle from '../components/SectionTitle'

const items = [
  { icon: Users, title: '역할과 일정 조율', text: '업무를 작게 나누고 진행 상황을 공유해 팀의 막힘을 빠르게 발견합니다.' },
  { icon: Network, title: 'API 명세와 문서화', text: '프론트엔드와 백엔드가 같은 기준으로 개발할 수 있는 계약을 만듭니다.' },
  { icon: GitBranch, title: 'Git 협업 흐름', text: '일관된 브랜치와 리뷰 흐름으로 안전하게 기능을 합칩니다.' },
]

export default function Leadership() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <SectionTitle label="Leadership & Collaboration" title="혼자 잘 만드는 것에서, 함께 완성하는 것으로" />
        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, index) => (
            <ScrollReveal key={title} direction="up" delay={index * 90}>
              <article className="border-t-2 border-[#2563eb] pt-6">
                <Icon className="text-[#7c3aed]" size={28} />
                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-[#111827]/60">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

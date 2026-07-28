import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="site-shell">
        <SectionTitle label="About me" title={<>기능 너머의 <span className="text-[#7c3aed]">이유</span>를 찾습니다.</>} />
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal direction="left" className="flex min-h-64 flex-col justify-between">
            <p className="text-2xl font-bold leading-[1.55]">
              약 7년간의 F&B 매장 운영과 웹 개발, 제조 공정이라는 서로 다른
              현장에서 문제를 발견하고 개선해 온 경험을 기술로 연결합니다.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="border-t-2 border-[#2563eb] pt-4">
                <strong className="display text-2xl text-[#2563eb]">약 7년</strong>
                <p className="mt-1 text-xs font-bold text-[#111827]/45">
                  F&B 운영·고객 경험
                </p>
              </div>
              <div className="border-t-2 border-[#7c3aed] pt-4">
                <strong className="display text-2xl text-[#7c3aed]">3 Projects</strong>
                <p className="mt-1 text-xs font-bold text-[#111827]/45">AI·웹 팀 프로젝트</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100} className="flex min-h-64 flex-col justify-between gap-5 leading-7 text-[#111827]/65">
            <p>커피스미스, ZOO Coffee, 개인 로스터리 카페와 토프레소에서 사용자와 가까운 매장 운영을 경험하고, Java·Spring 웹 개발과 제품 품질을 높이는 공정 개선을 거치며 문제를 여러 관점에서 바라보는 법을 배웠습니다.</p>
            <p>그 경험을 바탕으로 Python·Flask·React와 AI·LLM 기술까지 확장하고, 세 번의 팀 프로젝트에서 기획부터 구현과 배포까지 연결했습니다.</p>
            <p className="font-bold text-[#2563eb]">현장에서 실제로 쓰이고, 사용자 피드백을 통해 계속 나아지는 서비스를 만드는 개발자가 되겠습니다.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import WorkInProgress from '../components/WorkInProgress'
import { projects } from '../data/projects'

const projectsByLatest = [...projects].reverse()

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="section-space bg-[#eaf1ff]">
      <div className="site-shell">
        <SectionTitle label="Selected work" title="문제와 해결 과정으로 말하는 프로젝트" description="프로젝트를 선택하면 구현 기능, 기여 내용과 배운 점을 확인할 수 있습니다." />
        <div className="grid gap-7">
          {projectsByLatest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onSelect={onSelectProject} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-semibold text-[#111827]/50">
          세 프로젝트의 GitHub, 디자인 자료와 배포 이미지를 상세 화면에서 확인할 수 있습니다.
        </p>
        <WorkInProgress />
      </div>
    </section>
  )
}

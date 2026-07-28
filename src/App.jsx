import { useEffect, useState } from 'react'
import Header from './components/Header'
import ProjectModal from './components/ProjectModal'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Leadership from './sections/Leadership'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { trackEvent } from './lib/analytics'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleSelectProject = (project) => {
    trackEvent('view_project', {
      project_name: project.title,
      project_type: project.type,
    })
    setSelectedProject(project)
  }

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onSelectProject={handleSelectProject} />
        <Leadership />
        <Contact />
      </main>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

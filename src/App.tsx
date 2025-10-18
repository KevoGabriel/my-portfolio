import { Navigation } from './components/Navigation'
import { HeroSection } from './components/Hero'
import { AboutSection } from './components/About'
import { SkillsSection } from './components/Skills'
import { ProjectsSection } from './components/Projects'
import { ContactSection } from './components/Contact'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About.tsx'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      {/* <Navigation /> */}
      <main>
        {/* <Hero /> */}
        <About />
        {/* <Skills />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  )
}
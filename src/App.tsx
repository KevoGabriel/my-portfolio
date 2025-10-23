import { Navigation } from "./components/Navigation.tsx";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { Skills } from "./components/Skills.tsx";
import { Projects } from "./components/Projects.tsx";
import { Contact } from "./components/Contact.tsx";

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

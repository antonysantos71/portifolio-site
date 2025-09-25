import { Home } from "./components/home";
import { NavBar } from "./components/nav-bar";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Repositories } from "./components/repositories";

export function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Repositories />
      <Skills />
      <Contact />
    </div>
  );
}

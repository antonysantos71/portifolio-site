import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["home", "sobre", "projetos", "repositorios", "skills", "contato"];

  return (
    <nav className="w-full bg-zinc-800 shadow-md px-6 py-4 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl text-cyan-400 font-bold">Antony Santos</h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((item) => (
            <li
              key={item}
              className="font-semibold capitalize hover:text-cyan-400 hover:underline transition"
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-white">
          {links.map((item) => (
            <li
              key={item}
              className="font-semibold capitalize hover:text-cyan-400 hover:underline transition"
              onClick={() => setIsOpen(false)}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

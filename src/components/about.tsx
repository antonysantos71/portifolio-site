import { NodeJSIcon } from "./icons/nodejs-icon";
import { ReactIcon } from "./icons/react-icon";
import { TailwindIcon } from "./icons/tailwind-icon";
import { TypeScriptIcon } from "./icons/typescript-icon";

export function About() {
  return (
    <section
      id="sobre"
      className="w-full h-full flex flex-col items-center justify-center bg-zinc-800 text-white px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
        Sobre Mim
      </h2>

      <p className="max-w-3xl text-center text-lg md:text-xl text-zinc-300 leading-relaxed">
        Sou um desenvolvedor web apaixonado por tecnologia e programação. Tenho
        experiência em <span className="text-cyan-400">React</span>,{" "}
        <span className="text-cyan-400">TypeScript</span> e{" "}
        <span className="text-cyan-400">Node.js</span>, criando interfaces
        modernas, rápidas e responsivas. Meu objetivo é sempre transformar
        ideias em soluções digitais de alto impacto.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <ReactIcon />
          </span>
          <p className="mt-2 text-zinc-300">React</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <TypeScriptIcon />
          </span>
          <p className="mt-2 text-zinc-300">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <NodeJSIcon />
          </span>
          <p className="mt-2 text-zinc-300">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <TailwindIcon />
          </span>
          <p className="mt-2 text-zinc-300">Tailwind</p>
        </div>
      </div>
    </section>
  );
}

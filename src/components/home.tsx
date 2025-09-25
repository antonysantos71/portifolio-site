export function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        👋 Olá, eu sou <span className="text-cyan-400">Antony Santos</span>
      </h1>

      <h2 className="mt-4 text-xl md:text-2xl text-zinc-300 text-center">
        Desenvolvedor Web | React & TypeScript
      </h2>

      <p className="mt-6 text-center max-w-2xl text-zinc-400">
        Crio aplicações modernas, rápidas e responsivas. Busco sempre unir
        design minimalista com performance.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projetos"
          className="bg-cyan-400 text-zinc-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-cyan-300 transition"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="border border-cyan-400 text-cyan-400 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-zinc-900 transition"
        >
          Contato
        </a>
      </div>
    </section>
  );
}

import { ExternalLink, GithubIcon } from "lucide-react";
import { useEffect, useState } from "react";
export interface IRepos {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

export function Projects() {
  const [repos, setRepos] = useState<IRepos[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/antonysantos71/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);
  return (

    
    <section id="projetos" className="w-full p-6  bg-zinc-900 text-white ">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-cyan-400 mb-10">
        Projetos
      </h2>
      <div
        className=" h-[80vh] overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-2
  scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-zinc-900"
      >
        {repos
          .filter((repo) => repo.homepage)
          .map((repo) => (
            <div
              key={repo.id}
              className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition"
            >
              {repo.homepage && (
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden border border-zinc-700">
                  <iframe
                    src={repo.homepage}
                    className="w-full h-full"
                    title={repo.name}
                  ></iframe>
                </div>
              )}

              <h3 className="text-xl font-bold mb-3">{repo.name}</h3>
              <p className="text-zinc-300 mb-4">
                {repo.description || "Sem descrição disponível."}
              </p>
              <div className="flex gap-4">
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    className="bg-cyan-400 flex items-center gap-2 text-zinc-900 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
                  >
                    Demo
                    <ExternalLink className="size-4" />
                  </a>
                )}
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="border flex items-center gap-2 border-cyan-400 text-cyan-400 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-zinc-900 transition"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

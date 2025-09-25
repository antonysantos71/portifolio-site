import { CssIcon } from "./icons/css-icon";
import { HtmlIcon } from "./icons/html-icon";
import { JavaScriptIcon } from "./icons/javascript-icon";
import { NodeJSIcon } from "./icons/nodejs-icon";
import { ReactIcon } from "./icons/react-icon";
import { TailwindIcon } from "./icons/tailwind-icon";
import { TypeScriptIcon } from "./icons/typescript-icon";

const skillsData = [
  { name: "React", level: "3/5", width: "w-3/5", icon: <ReactIcon /> },
  {
    name: "TypeScript",
    level: "3/4",
    width: "w-3/4",
    icon: <TypeScriptIcon />,
  },
  { name: "Node.js", level: "1/5", width: "w-1/5", icon: <NodeJSIcon /> },
  {
    name: "Tailwind CSS",
    level: "2/5",
    width: "w-2/5",
    icon: <TailwindIcon />,
  },
  {
    name: "JavaScript",
    level: "3/5",
    width: "w-3/5",
    icon: <JavaScriptIcon />,
  },
  { name: "HTML", level: "3/5", width: "w-3/5", icon: <HtmlIcon /> },
  { name: "CSS", level: "3/5", width: "w-3/5", icon: <CssIcon /> },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full p-6 md:h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-zinc-900 text-white px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition flex flex-col items-center"
          >
            <span className="text-5xl mb-4">{skill.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-zinc-700 rounded-full h-3 mt-2">
              <div
                className={`bg-cyan-400 h-3 rounded-full ${skill.width}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

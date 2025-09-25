import { useRef, useState } from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import emailjs from "emailjs-com";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name")?.toString().trim();
    const email = formData.get("user_email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setDialogMessage("Por favor, preencha todos os campos antes de enviar.");
      setIsDialogOpen(true);
      return;
    }

    emailjs
      .sendForm(
        "service_4v4p3tt",
        "template_vtck3wf",
        formRef.current,
        "ne8IBK_QMczkXJm99"
      )
      .then(() => {
        formRef.current?.reset();
        setDialogMessage("Mensagem enviada com sucesso!");
        setIsDialogOpen(true);
      })
      .catch(() => {
        setDialogMessage("Ocorreu um erro ao enviar a mensagem.");
        setIsDialogOpen(true);
      });
  }

  return (
    <section
      id="contato"
      className="w-full p-5 md:h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-zinc-800 text-white px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Contato
      </h2>

      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-xl flex flex-col gap-6">
        <p className="text-zinc-300 text-center mb-4">
          Quer conversar ou contratar meus serviços? Me mande uma mensagem!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Seu nome"
            name="user_name"
            className="p-3 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Seu email"
            name="user_email"
            className="p-3 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Sua mensagem"
            name="message"
            className="p-3 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-400 cursor-pointer text-zinc-900 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition"
          >
            Enviar
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/antonysantos71"
            target="_blank"
            className="text-cyan-400  flex gap-2 items-center hover:text-cyan-300 text-2xl"
          >
            <GithubIcon />
            <span className="hidden md:inline">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/antony-santos-3b859a308/"
            target="_blank"
            className="text-cyan-400 flex gap-2 items-center hover:text-cyan-300 text-2xl"
          >
            <LinkedinIcon />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://wa.me/5585986917386"
            target="_blank"
            className="text-cyan-400 flex gap-1 items-center hover:text-cyan-300 text-2xl"
          >
            <WhatsAppIcon />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center  justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <p className="text-white mb-4">{dialogMessage}</p>
            <button
              className="bg-cyan-400 cursor-pointer text-zinc-900 px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
              onClick={() => setIsDialogOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

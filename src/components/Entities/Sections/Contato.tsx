import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactBanner from "../../../assets/Contact us-bro.svg";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContatoSection() {
  const form = useRef<HTMLFormElement>(null);

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          serviceID,
          templateID,
          form.current,
          publicKey
        )
        .then(
          () => {
            alert("Mensagem enviada com sucesso!");
            form.current?.reset();
          },
          (error) => {
            alert("Ocorreu um erro ao enviar: " + error.text);
          }
        );
    }
  };

  return (
    <section
      id="contato"
      className="w-full h-full py-10 flex justify-center items-center"
    >
      <div className="px-4 max-w-6xl w-full">
        <h2 className="text-4xl text-emerald-500 font-mono font-extrabold mb-8 text-center">
          CONTATO
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full max-w-md">
            <img src={ContactBanner} alt="Banner de contato" />
          </div>
          <div className="w-full max-w-md text-center lg:text-left">
            <p className="mb-6">
              Entre em contato, e juntos transformaremos suas ideias em desejos
              concretos...
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <fieldset className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="transition duration-300 px-4 py-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="transition duration-300 px-4 py-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="transition duration-300 px-4 py-2 rounded-lg border-2 border-gray-500 resize-none focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 font-semibold px-6 py-2 rounded-lg transition duration-200 cursor-pointer hover:-translate-y-2"
                >
                  Enviar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

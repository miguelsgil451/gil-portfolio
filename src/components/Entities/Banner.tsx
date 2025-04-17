import MePhoto from "../../assets/me.jpeg"
import { useEffect, useState } from "react";
import SocialLinks from "../Base/SocialLinks";

export default function Banner() {
  const habilities: string[] = [
    "HTML5 & CSS3 & TailwindCSS",
    "Javascript & Typescript",
    "React & Next.JS",
    "Node.JS",
    "Java",
    "Spring Boot"
  ];
  const age = new Date().getFullYear() - 2010;
  const yearsProgamming = new Date().getFullYear() - 2022;

  const [hability, setHability] = useState<string>(habilities[0]);

  useEffect(() => {
    let index = 1;

    const interval = setInterval(() => {
      setHability(habilities[index]);
      index = (index + 1) % habilities.length;
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full min-h-screen pt-16 relative z-0 bg-zinc-900 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around h-full gap-10 px-4 lg:px-20 py-10 mt-15">
        
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl text-emerald-300 font-mono font-semibold">
            Miguel Gil
          </h1>
          <span className="text-2xl lg:text-3xl text-white/90 font-mono font-semibold mt-2 block">
            {hability}
          </span>
          <p className="max-w-xl mt-5 text-base lg:text-lg text-white/80">
            <span className="text-xl text-emerald-300 font-bold">Prazer!</span> Meu nome é <strong>Miguel Gil</strong>, tenho {age} anos, moro no Rio de Janeiro e <strong>programo há {yearsProgamming} anos</strong>. Sou um <strong>desenvolvedor full stack.</strong> Crio sites e servidores sempre visando escrever um código limpo e ao mesmo tempo perfomático.
          </p>
          <div >

          <SocialLinks className="flex items-center justify-center lg:justify-start gap-4 mt-4"/>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={MePhoto}
            alt="Miguel Gil"
            className="w-40 h-40 sm:w-52 sm:h-52 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl border-4 border-emerald-400 lg:rounded-none lg:border-0"
          />
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-0 h-0 
        border-t-[100vh] border-r-[100vw] border-y-neutral-950 border-r-transparent -z-10 "
      ></div>
    </div>
  );
}

import habilityList from "../../../../data/Habilities";
import linhaDoTempo from "../../../../data/LinhaDoTempo";
import LinhaDoTempo from "./LinhaDoTempo";

export default function SobreSection() {
  return (
    <section id="sobre" className="px-4 sm:px-8">
      <h2 className="text-4xl text-emerald-500 font-mono font-extrabold mb-8 text-center">
        SOBRE MIM
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <p className="text-xl text-white max-w-[80ch] mb-6">
            Minha jornada na programação começou em 2022, impulsionada pela
            minha paixão por computadores. Desde então, venho me aprofundando
            cada vez mais, explorando diversas áreas da programação e da
            matemática. Busco constantemente me tornar um programador
            comunicativo, que alia performance e organização na escrita de
            código.
          </p>

          <h3 className="text-[2rem] text-emerald-300 font-mono font-semibold mb-4">
            Tecnologias
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {habilityList.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="flex justify-center items-center gap-3 w-full h-40 p-4 rounded-xl transition duration-300 text-white"
                >
                  <Icon
                    className="text-2xl"
                    size={60}
                    color={item.bgColor}
                    title={item.name}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative border-l-2 border-emerald-300 pl-6 max-w-[60ch]">
          {linhaDoTempo.map((tempo, index) => (
            <LinhaDoTempo tempo={tempo} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

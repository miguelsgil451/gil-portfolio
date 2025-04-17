import { IDepoimento } from "../../../../data/Depoimentos";

interface IDepoimentoCard {
  depoimento: IDepoimento;
  key: number;
}

export default function DepoimentoCard({depoimento, key}: IDepoimentoCard) {
  return (
    <div key={key} className="flex justify-center items-center">
      <div
        className="
            rounded-lg p-6 md:p-8 
            shadow-lg text-center
            flex flex-col items-center justify-center"
      >
        <img
          src={depoimento.image}
          alt={depoimento.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg md:text-xl text-emerald-500 font-bold mb-2">
          {depoimento.name}
        </h3>
        <p className="text-sm md:text-base text-white leading-relaxed max-w-[60ch]">
          {depoimento.description}
        </p>
      </div>
    </div>
  );
}

import { ITempo } from "../../../../data/LinhaDoTempo";

interface ILinhaDoTempo {
  tempo: ITempo;
  key: number;
}

export default function LinhaDoTempo({ tempo, key }: ILinhaDoTempo) {
  return (
    <div className="mb-10" key={key}>
      <span className="absolute -left-3 top-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></span>
      <p className="text-emerald-300 font-mono text-sm">{tempo.year}</p>
      <h3 className="text-white text-lg font-semibold">{tempo.title}</h3>
      <p dangerouslySetInnerHTML={{__html: tempo.text}}></p>
    </div>
  );
}

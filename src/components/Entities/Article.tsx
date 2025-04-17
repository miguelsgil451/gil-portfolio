import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SobreSection from "./Sections/Sobre/Sobre";
import ProjetosSection from "./Sections/Projetos/Projetos";
import ContatoSection from "./Sections/Contato";
import DepoimentosSection from "./Sections/Depoimentos/Depoimentos";

export default function Article() {
  return (
    <article className="bg-zinc-900 p-8">
      <SobreSection />
      <ProjetosSection />
      <DepoimentosSection />
      <ContatoSection />
    </article>
  );
}

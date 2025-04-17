import projectList from "../../../../data/Projects";
import ProjetoCard from "./ProjetoCard";

export default function ProjetosSection(){
    return (
        <section id="projetos" className="mt-10">
        <h2 className="text-4xl text-emerald-500 font-mono font-extrabold mb-8 text-center">MEUS PROJETOS</h2>
          <div className="flex flex-wrap gap-10 justify-center">
            {projectList.map((project, index) => (
              <ProjetoCard project={project} key={index}/>
            ))}
          </div>
        </section>
    )
}
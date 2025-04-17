import { IProject } from "../../../../data/Projects";

interface IProjectCard {
    project: IProject;
    key: number;
}

export default function ProjetoCard({project, key}: IProjectCard){
    return (
        <div
        key={key}
        className="bg-neutral-950 rounded-sm overflow-hidden w-[400px] p-1 flex flex-col transition-transform hover:scale-105"
      >
        <a href={project.siteLink} target="_blank">
          <img
            src={project.image}
            alt={`Banner do projeto ${project.name}`}
            className="h-[180px] w-full object-cover"
          />
        </a>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-xl font-bold">
              {project.name}
            </h3>
            {project.description && (
              <p className="text-zinc-300 text-sm mt-2">
                {project.description}
              </p>
            )}
            {project.habilities.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-3">
                {project.habilities.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-emerald-600 text-white px-2 py-1 rounded text-xs font-mono"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href={project.siteLink}
              target="_blank"
              className="text-emerald-400 hover:underline text-sm"
            >
              Site
            </a>
            {project.srcLink && (
              <a
                href={project.srcLink}
                target="_blank"
                className="text-emerald-400 hover:underline text-sm"
              >
                Código Fonte
              </a>
            )}
          </div>
        </div>
      </div>
    )
}
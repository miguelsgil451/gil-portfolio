import S2booksBanner from "../assets//projetos-banner/s2books_banner.png";
import TrabalhoPortaBanner from "../assets/projetos-banner/trabalho-porta_banner.jpeg";

export interface IProject {
    name: string;
    description: string;
    habilities: string[];
    siteLink: string;
    srcLink?: string;
    image: string;
}

const projectList: IProject[] = [
    {
        name: "S2Books",
        description: "",
        habilities: ["React", "Typescript", "TailwindCSS"],
        siteLink: "http://www.s2books.com.br/",
        image: S2booksBanner
    },
    {
        name: "Trabalho da Porta",
        description: "",
        habilities: ["HTML5", "TailwindCSS"],
        siteLink: "https://trabalho-porta-1d.netlify.app/",
        image: TrabalhoPortaBanner
    }
];

export default projectList;
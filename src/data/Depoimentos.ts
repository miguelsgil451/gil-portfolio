import Profile1IMG from "../assets/depoimentos/profile1.jpeg";
import Profile2IMG from "../assets/depoimentos/profile2.webp";


export interface IDepoimento {
    name: string;
    description: string;
    image: string;
}

const depoimentos: IDepoimento[] = [
    {
        name: "Ramon Jean",
        description:
            "O curso é incrível! Aprendi muito sobre desenvolvimento web e consegui aplicar os conhecimentos em projetos reais.",
        image: Profile1IMG,
    },
    {
        name: "Telmo Braz",
        description:
            "A metodologia de ensino é muito boa! Os professores são atenciosos e sempre dispostos a ajudar.",
        image: Profile2IMG,
    }
];

export default depoimentos;
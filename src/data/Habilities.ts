import { IconType } from "react-icons";
import {
    FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaReact, FaDocker
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";

interface IHability {
    name: string;
    icon: IconType;
    bgColor: string;
}

const habilityList: IHability[] = [
    { name: "HTML", icon: FaHtml5, bgColor: "#e44d26" },
    { name: "CSS", icon: FaCss3Alt, bgColor: "#264de4" },
    { name: "JavaScript", icon: FaJs, bgColor: "#f0db4f" },
    { name: "TypeScript", icon: SiTypescript, bgColor: "#3178c6" },
    { name: "Node.js", icon: FaNodeJs, bgColor: "#3c873a" },
    { name: "Express", icon: SiExpress, bgColor: "#333333" },
    { name: "Java", icon: FaJava, bgColor: "#b07219" },
    { name: "Spring Boot", icon: SiSpringboot, bgColor: "#6db33f" },
    { name: "MySQL", icon: SiMysql, bgColor: "#00758f" },
    { name: "React", icon: FaReact, bgColor: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, bgColor: "#000000" },
    { name: "Docker", icon: FaDocker, bgColor: "#0db7ed" },

];

export default habilityList;
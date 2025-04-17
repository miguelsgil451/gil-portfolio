import { IconType } from "react-icons";
import { BiLogoGmail, BiLogoInstagram, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

interface ISocialLink { 
    name: string;
    href: string;
    icon: IconType;
}

const socialLinks: ISocialLink[] = [
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/miguel-gil-2881b8287/",
        icon: BiLogoLinkedin
    },
    {
        name: "Github",
        href: "https://github.com/miguelsgil451",
        icon: BiLogoGithub
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/miguelsgil451/",
        icon: BiLogoInstagram
    },
    {
        name: "Gmail",
        href: "mailto:jorelwall154@gmail.com",
        icon: BiLogoGmail
    },
]

export default socialLinks;
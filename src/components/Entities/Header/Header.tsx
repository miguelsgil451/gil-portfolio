import { useEffect, useState } from "react";
import Logo from "../../Base/Logo";
import { FiMenu, FiX } from "react-icons/fi";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  const [headerColorIsActive, setHeaderColorIsActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setHeaderColorIsActive(scroll > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`
        fixed
        transition duration-300
        w-full h-16
        p-4
        flex justify-between items-center
        z-10
        ${
          menuOpen ? "bg-black" : headerColorIsActive
            ? "backdrop-blur-[5px] bg-black/50"
            : "bg-transparent"
        }
        `
      }
    >
      <div className="w-full h-full">
        <Logo />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      <nav
        className="
      w-full h-full
      hidden md:flex justify-end items-center
      "
      >
        <HeaderLinks />
      </nav>
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full backdrop-blur-md bg-black flex flex-col items-center gap-4 py-6 md:hidden z-10">
          <HeaderLinks />
        </nav>
      )}
    </header>
  );
}

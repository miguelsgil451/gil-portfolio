import Logo from "../Base/Logo";
import SocialLinks from "../Base/SocialLinks";

export default function Footer() {
  return (
    <footer
      className="
        w-full h-min
        p-4
        flex flex-col
        sm:grid grid-cols-2 grid-rows-2
        bg-neutral-950"
    >
      <div className="flex justify-center sm:justify-start items-center">
        <Logo />
      </div>
      <SocialLinks className="flex justify-center sm:justify-end items-center gap-4 mt-4" />
    </footer>
  );
}

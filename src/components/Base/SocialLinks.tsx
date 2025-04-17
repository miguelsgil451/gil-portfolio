import socialLinks from "../../data/SocialLinks";

interface ISocialLink {
  className?: string;
}

export default function SocialLinks({ className }: ISocialLink) {
  return (
    <ul className={className}>
      {socialLinks.map((item, index) => (
        <li
          key={index}
          className="transition-all duration-300 hover:text-emerald-500"
        >
          <a target="_blank" href={item.href}>{item.icon({ size: 30 })}</a>
        </li>
      ))}
    </ul>
  );
}

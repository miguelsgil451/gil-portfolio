import headerLinksData from "./HeaderLinksData";

export default function HeaderLinks(){
    return (
        <ul
          className="
          h-full
        flex items-center gap-6
        "
        >
          {headerLinksData.map((item, index) => {
            return (
              <a
              key={index}
              className="
            transition duration-300
            font-mono
            hover:text-emerald-400"
              href={item.href}
            >
              {item.name}
            </a>
            );
          })}
        </ul>
    )
}
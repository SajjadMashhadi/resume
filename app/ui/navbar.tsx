import ThemeSwitcher from "../utils/themeSwitcher";
import LinkItem from "./link";

interface LinkType {
  text: string;
  href: string;
}

const links: LinkType[] = [
  { text: "home", href: "/" },
  { text: "resume", href: "/resume" },
  { text: "skills", href: "/skills" },
  { text: "message", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className=" ">
      <h3 className=" text-center lg:text-left text-9xl text-b text-[steelblue] font-bold">
        S
      </h3>
      <div className="flex flex-row justify-evenly lg:flex-col mt-[20px]">
        {links.map((link: LinkType) => (
          <LinkItem key={link.text} text={link.text} href={link.href} />
        ))}
        <ThemeSwitcher />
      </div>
    </div>
  );
}

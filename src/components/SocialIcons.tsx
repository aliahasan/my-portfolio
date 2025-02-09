import Image from "next/image";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
const icons = [
  {
    name: "linkedin",
    src: linkedIn,
    href: "https://www.linkedin.com/in/ali-ahasan-nabin-47861122a",
  },
  {
    name: "github",
    src: github,
    href: "https://github.com/aliahasan",
  },
  {
    name: "facebook",
    src: facebook,
    href: "https://www.facebook.com/aliahasan.nabin",
  },
];
const SocialIcons = () => {
  return (
    <div className="flex gap-x-4 justify-center  md:justify-start">
      {icons.map((icon) => (
        <div key={icon.name}>
          <a href={icon.href}>
            <Image
              key={icon.name}
              src={icon.src}
              alt={icon.name}
              width={45}
              height={45}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;

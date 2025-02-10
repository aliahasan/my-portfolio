import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const icons = [
  {
    name: "linkedin",
    src: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ali-ahasan-nabin-47861122a",
  },
  {
    name: "github",
    src: <FaGithub />,
    href: "https://github.com/aliahasan",
  },
  {
    name: "facebook",
    src: <FaFacebook />,
    href: "https://www.facebook.com/aliahasan.nabin",
  },
];
const SocialIcons = () => {
  return (
    <div className="flex gap-x-4 justify-center  md:justify-start">
      {icons.map((icon) => (
        <div key={icon.name}>
          <a href={icon.href} className="text-3xl">
            {icon.src}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;

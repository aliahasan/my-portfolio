import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#282828] text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        {/* Your Name */}
        <h1 className="text-lg font-semibold">Ali Ahasan Nabin</h1>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <Link
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Ali Ahasan Nabin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

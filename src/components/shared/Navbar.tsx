"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToggleTheme } from "./ToggleTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 shadow-sm backdrop-blur-lg transition-colors duration-300 dark:bg-[#030712] px-2">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 transition-transform hover:scale-105 dark:text-white"
          >
            <span className="text-black dark:text-white pl-2 lg:pl-0">
              Web Dev
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-lg font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Toggle Theme and Mobile Menu Button */}
          <div className="flex items-center">
            <ToggleTheme />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 transition-all hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg md:hidden"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-16 left-0 h-screen w-64 bg-white dark:bg-my-side dark:text-my-dark shadow-md transform transition-transform duration-300 ease-in-out border-r ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-center rounded px-4 py-3 mt-2 text-sm font-medium transition-colors duration-300 ${
              pathname === link.href
                ? " underline underline-offset-4"
                : "text-my-light dark:text-my-dark"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import { Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToggleTheme } from "./ToggleTheme";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  // Add Dashboard link only if the user is logged in
  if (session?.user) {
    links.push({ label: "Dashboard", href: "/dashboard" });
  }

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 shadow-sm backdrop-blur-lg transition-colors duration-300 dark:bg-[#030712] px-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 transition-transform hover:scale-105 dark:text-white"
          >
            <span className="text-black dark:text-white pl-2 lg:pl-0">
              WebDev
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

          {/* Toggle Theme, Login/Logout Button, and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {session?.user && (
              <Image
                src={
                  (session?.user?.image as string) ||
                  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                }
                width={40}
                height={20}
                alt={"name"}
                className="rounded-full"
              />
            )}
            <ToggleTheme />

            {/* Show Login/Logout based on session */}
            <div className="hidden md:block">
              {session?.user ? (
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-gray-200 shadow-sm rounded-lg text-black "
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    Login
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 transition-all hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg md:hidden"
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
                ? "underline underline-offset-4"
                : "text-my-light dark:text-my-dark"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className=" md:hidden text-center">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-gray-100 shadow-sm rounded-lg text-black "
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

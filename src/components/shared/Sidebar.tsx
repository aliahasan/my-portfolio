import Link from "next/link";
import {
  FaHome,
  FaInbox,
  FaPen,
  FaProjectDiagram,
  FaTachometerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Dashboard", href: "/dashboard", icon: <FaTachometerAlt /> }, // Added Dashboard icon here
    { label: "Inbox", href: "/dashboard/all-messages", icon: <FaInbox /> },
    { label: "Add Blog", href: "/dashboard/add-blog", icon: <FaPen /> },
    { label: "All Blogs", href: "/dashboard/all-blogs", icon: <FaPen /> },
    {
      label: "Add Projects",
      href: "/dashboard/add-project",
      icon: <FaProjectDiagram />,
    },
    {
      label: "All Projects",
      href: "/dashboard/all-projects",
      icon: <FaProjectDiagram />,
    },
  ];

  return (
    <div>
      <div className="text-white p-6">
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              <p
                className="p-3 text-lg font-medium bg-gray-200 dark:bg-my-bg text-my-light dark:text-my-dark rounded-md cursor-pointer 
                transition duration-300 flex items-center gap-3"
              >
                {/* Display the icon alongside the text */}
                {link.icon}
                {link.label}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

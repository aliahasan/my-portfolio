import Link from "next/link";

const Sidebar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Add Blog", href: "/dashboard/add-blog" },
    { label: "All Blogs", href: "/dashboard/all-blogs" },
    { label: "Add Projects", href: "/dashboard/add-project" },
    { label: "All Projects", href: "/dashboard/all-projects" },
  ];

  return (
    <div>
      <div className="text-white p-6">
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              <p
                className="p-3 text-lg font-medium bg-gray-200 dark:bg-my-bg text-my-light dark:text-my-dark rounded-md cursor-pointer 
                transition duration-300"
              >
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

"use client";
import Sidebar from "@/components/shared/Sidebar";
import { ToggleTheme } from "@/components/shared/ToggleTheme";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white dark:bg-my-side w-full  z-50 shadow-sm p-4 flex justify-between items-center border-b">
        <h1 className="text-xl">Dashboard</h1>
        <div>
          <ToggleTheme />
          <button
            className="z-50 lg:hidden text-black dark:text-white pl-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={cn(
            "fixed top-[4.3rem] left-0 bottom-0 z-50 w-72 bg-white dark:bg-my-side transition-transform duration-300 lg:translate-x-0 overflow-y-auto border-r",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar />
        </div>
        {/* Main content */}
        <main className="flex-1 h-screen p-4 lg:ml-72">{children}</main>
      </div>
    </div>
  );
};

export default DashBoardLayout;

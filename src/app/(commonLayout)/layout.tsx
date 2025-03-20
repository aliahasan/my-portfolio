import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";
const CommonLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="min-h-screen max-w-screen-xl mx-auto px-2">
        {children}
      </main>
      <footer className=" mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default CommonLayout;

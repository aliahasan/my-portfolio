import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar session={session} />
      </header>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-2">
        {children}
      </main>
      <footer className=" mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default CommonLayout;

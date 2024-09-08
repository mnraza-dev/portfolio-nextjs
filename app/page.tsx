import Grid from "@/components/Grid";
import HeroSection from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavigation";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav
          className=""
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: (
                <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
            {
              name: "About",
              link: "/about",
              icon: (
                <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
          ]}
        />
        <HeroSection />
        <Grid/>
      </div>
    </main>
  );
}

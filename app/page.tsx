import Approach from "@/components/approach";
import Clients from "@/components/clients";
import Experience from "@/components/Experience";
import Footer from "@/components/footer";
import GridView from "@/components/gridView";
import HeroBanner from "@/components/heroBanner";
import RecentProjects from "@/components/recentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <HeroBanner/>
        <GridView/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}

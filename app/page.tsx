import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { RecentProjects } from "@/components/RecentProjects";
import { navItems } from "@/data";
import { Clients } from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Menu from "@/components/ui/menu";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav className="" navItems={navItems} /> */}
        <Menu/>
        <Hero
          miniHeading="Struggling to Attract More Pet Owners?"
          mainHeading="Veterinary Website Design & SEO That Grows Your Clinic"
          subheading="🚀 SEO-Optimized | 📱 Mobile-Friendly | 💼 Built to Drive More Bookings"
        />

        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}

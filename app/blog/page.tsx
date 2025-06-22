import Footer from "@/components/Footer";
import { allBlogs } from "../../.contentlayer/generated";
import CoverSection from "./components/CoverSection";
import FeaturedPosts from "./components/FeaturedPosts";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentPosts from "./components/RecentPosts";
import Menu from "@/components/ui/Menu";

const Blog = () => {
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* <FloatingNav navItems={[{name: "Home", link:"/"}]} /> */}
      <Menu/>
      <CoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <div className="max-w-7xl w-full mt-20">
        <Footer />
      </div>
    </main>
  );
};

export default Blog;

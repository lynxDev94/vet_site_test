import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { CarouselDemo } from "@/components/ProjectGallery";
import { projects } from "@/data";
import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Menu from "@/components/ui/Menu";

// const projects = [
//   {
//     slug: "severinos-klinika",
//     title: "Severinos Klinika",
//     des: "A cool project",
//     slideData: [
//       {
//         title: "Mystic Mountains",
//         button: "Explore Component",
//         src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "Urban Dreams",
//         button: "Explore Component",
//         src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "Neon Nights",
//         button: "Explore Component",
//         src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         title: "Desert Whispers",
//         button: "Explore Component",
//         src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//     ],
//   },
//   {
//     slug: "unaveta",
//     title: "Unaveta",
//     des: "Another cool project",
//     img: "/project2.jpg",
//   },
//   {
    
//     slug: "buivydiskiu-vet-klinika",
//     title: "Buivydiškių Veterinarijos Klinika",
//     des: "A veterinary clinic project",
//     img: "/vet-klinika.jpg",
//   },
// ];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function Projects({ params } : any) {
  const checkMe = await params;
  const project = projects.find(
    (p) => p.slug.toLowerCase() === checkMe.slug.toLowerCase()
  );


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Menu/>
      <div className="max-w-7xl w-full">
        {/* <FloatingNav className="" navItems={[{ name: "Home", link: "/" }, {name: "Blog", link:"/blog"}]} /> */}
        <Hero
          mainHeading={project?.title ? project?.title : ""}
          disableCta={true}
          className="h-[50vh]"
        />
        <CarouselDemo images={project?.slideData} />
        <div className="max-w-7xl mx-auto px-4 py-8 text-white">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                Website Overview
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project?.overview}
              </p>
                <MagicButton
                  href={project?.link}
                  title="Live Preview"
                  icon={<FaLocationArrow />}
                  position="right"
                />
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div>
                <span className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                  Category:
                </span>{" "}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                   {project?.category}
                </p>
              </div>
              <div>
                <span className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                  Main Features:
                </span>{" "}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                   {project?.mainFeatures}
                </p>
              </div>
              {/* <div>
                <span className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                  Category:
                </span>{" "}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  Website Development
                </p>
              </div> */}
            </div>
          </section>
          <section className="mt-10">
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              Website Description
            </h1>
            <p
              className="lg:text-xl lg:font-normal font-light text-sm"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {project?.des}
            </p>
          </section>
        </div>

        <div className="w-full mt-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Projects;

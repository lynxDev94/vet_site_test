import React from "react";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

export const RecentProjects = () => {
  return (
    <div className="py-20 " id="projects">
      <h1 className="text-center font-bold text-2xl md:text-4xl leading-10">
        A small selection of
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4  gap-x-24 gap-y-8 mt-10 mb-10">
        {projects.map(({ id, title, des, img, link, href, cta }) => {
          return (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={id}
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt="cover"
                    className="z-10 absolute top-0 object-cover w-full h-full object-top"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="text-base sm:text-xl lg:font-normal font-light line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center mt-7 mb-3 justify-center">
                  <div className="flex justify-center items-center gap-5">
                    <MagicButton
                      href={href}
                      title="Read More"
                      icon={<FaLocationArrow />}
                      position={"right"}
                    />
                    <MagicButton
                      href={link}
                      title={cta}
                      icon={<FaLocationArrow />}
                      position={"right"}
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

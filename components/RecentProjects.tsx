import { projects } from "@/data";
import Image from "next/image";
import React from "react";
import { PinContainer } from "./ui/3DPin";
import { div } from "framer-motion/client";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 ">
      <h1 className="heading ">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 mt-10 gap-x-24 gap-y-0">
        {projects.map(({ img, title, id, des, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[32.5rem]   flex flex-col justify-center items-center sm:w-[570px] w-[80vw]  "
          >
            <PinContainer title={link} href={link}>
              <div className="flex items-center justify-center relative sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                  <img src={"/bg.png"} alt={"background"} />
                </div>
                <Image
                  className="z-10 absolute bottom-0"
                  src={img}
                  alt={title}
                  width={500}
                  height={400}
                />
              </div>
              <h1 className="line-clamp-1 text-base lg:text-2xl md:text-xl  font-bold">
                {title}
              </h1>
              <p className="lg:text-base md:font-normal font-light text-sm line-clamp-2 text-white-200">
                {des}
              </p>
              <div className="flex justify-between mt-7  mb-3  items-center">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      className="border rounded-full border-white/[0.1] 
                    bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={title} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-start items-center">
                  <p className="flex lg:text-base md:text-xs text-sm  text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 " color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;

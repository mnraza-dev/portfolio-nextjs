import React from "react";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <h1 className="heading ">
        My <span className="text-purple">work experiences</span>
      </h1>
      <div className="w-full grid mt-12 grid-cols-1 lg:grid-cols-4 gap-10">
        {workExperience.map(({ id, thumbnail,desc,  title }) => (
          <Button
            key={id}
            className="flex-1 border-r-neutral-100 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start font-bold text-xl md:text-2xl ">
                  {title}
                </h1>
                <p className="text-white-100 mt-3 font-semibold  text-start ">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;

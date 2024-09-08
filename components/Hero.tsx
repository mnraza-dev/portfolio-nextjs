import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaExternalLinkAlt, FaLocationArrow } from "react-icons/fa";

const HeroSection = () => {
  const words = `Transfroming Concept Into Seamless User Experiences`;
  return (
    <section className="pb-20 pt-36 ">
      <div className="w-full">
        <Spotlight
          className="-top-40  -left-10 md:-left-20 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10  left-full h-[80vh] w-[50vw"
          fill="purple"
        />
        <Spotlight className="top-28  left-80 h-[80vh] w-[50vw" fill="blue" />
      </div>
      {/* Grid starts here*/}
      <div className="h-screen w-full dark:bg-black bg-balck-100  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {/* Grid ends here */}

      <div className="flex justify-center relative my-20 z-10  items-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase text-xs text-blue-100 tracking-widest  max-w-80 ">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={words}
          />
          <p className="text-center md:tracking-wider text-blue-100 mt-2 mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm MN Raza a Next JS Developer based in India.
          </p>

          <a href="#about">
            <MagicButton
              title={"Get Stared"}
              position={"right"}
              otherClass={"w-full"}
              icon={<FaExternalLinkAlt/>}
            />
          </a>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;

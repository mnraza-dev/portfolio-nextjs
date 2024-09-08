import React from "react";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <section className="pb-20 pt-36 ">
      <div className="w-full">
      <Spotlight className="-top-40  -left-10 md:-left-20 md:-top-20 h-screen" fill="white"/>
      <Spotlight className="top-10  left-full h-[80vh] w-[50vw" fill="purple"/>
      <Spotlight className="top-28  left-80 h-[80vh] w-[50vw" fill="blue"/>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about " className="">
      <BentoGrid>
        {gridItems.map(({id, title, className, description, imgClassName}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            imgClassName={imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

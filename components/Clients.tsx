import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <h1 className="heading ">
        Kind words from <span className="text-purple">staisfied clients</span>
      </h1>

      <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <div className="rounded-md flex flex-col antialiased items-center relative overflow-hidden ">
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
          />
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 mt-10  ">
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2 ">
                <img
                src={img}
                alt={name}
                className=" md:w-10 w-5" />
                  <img
                src={nameImg}
                alt={name}
                className=" md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

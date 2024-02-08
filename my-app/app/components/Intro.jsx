"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Avatar from "../../public/images/thomas_256_avatar.png";

const Intro = () => {
  return (
    <section className=" mb-[108px] lg:mb-[140px] xl:mb-[220px]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <span className="w-11/12 text-white mb-4 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            <TypeAnimation
              sequence={[" Hi, I'm Thomas", 5000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <p className="mt-3 text-white text-lg mb-6 lg:text-xl">
            FULL STACK WEB DEVELOPER
          </p>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full border-solid border-2 border-white-600 bg-[#000] w-[225px] h-[225px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src={Avatar}
              alt="avatar image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pb-3 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

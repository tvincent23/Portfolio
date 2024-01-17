"use client";
// import React from "react";
import Image from "next/image";
import Avatar from "../../public/images/thomas_256_avatar.png";

const Intro = () => {
  return (
    <section>
      <div className="mx-auto shadow-md mt-20 w-90 md:max-w-4xl ">
        <div className="md:flex">
          <div className="p-8 border border-black">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal lg: font-extrabold text-white font-bold">
              Hi, I'm Thomas
            </h1>
            <p className="mt-2 text-white">A bit about me....</p>
          </div>
          <div className="scale-50 md:scale-90 mx-auto flex items-center justify-center pb-5 border border-black">
            <Image
              // className="h-48 w-full object-cover md:h-full md:w-48"
              src={Avatar}
              alt="avatar image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

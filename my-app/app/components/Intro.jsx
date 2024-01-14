"use client";
// import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="border-b border-[#33353F]">
        <div className="col-span-7 place-self-center sm:text-left text-center mt-20 justify-self-start">
          <p className="text-lg text-white">intro section</p>
        </div>
        <div class="flex max-h-24 items-center justify-center p-10">
          <div class="w-max">
            <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
              Hi, I'm Thomas
            </h1>
          </div>
        </div>
        <div>A bit about me...</div>
      </div>
    </section>
  );
};

export default Intro;

import React from "react";
import Image from "next/image";

import Avatar from "../../public/images/thomas_256_avatar.png";
import img1 from "../../public/images/img1.png";

const About = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 mt-24">
        <Image
          src={img1}
          alt="avatar image"
          className=" w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] mx-auto rounded-xl"
        />
        <div>
          <h2 className="font-bold text-3xl mt-6 md:mt-0">About Me</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

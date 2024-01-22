import React from "react";
import Image from "next/image";

import Avatar from "../../public/images/thomas_256_avatar.png";

const About = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src={Avatar}
          alt="avatar image"
          className=" w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
        />
        <div>
          <h2>About Me</h2>
          <p>
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

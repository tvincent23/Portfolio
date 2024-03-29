import React from "react";
import Image from "next/image";

import Avatar from "../../public/images/thomas_256_avatar.png";
import img1 from "../../public/images/img1.png";

const About = () => {
  return (
    <section className="text-white mb-[92px]" id="about">
      <h2 className="pt-[100px] text-center text-white font-bold text-3xl 2xl:text-4xl">
        About Me
      </h2>

      <div className="md:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 md:mt-4">
        <Image
          src={img1}
          alt="avatar image"
          className=" w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] mx-auto rounded-xl"
        />
        <div>
          <p className="text-justify max-w-[666px] mt-8 md:mt-4">
            I&apos;m Thomas, a Junior Full Stack Developer. My background is in
            retail sales management, with 10 years&apos; experience working for
            a leading mobile network operator. Having always had a passion for
            tech, I loved to work with the latest gadgets. I fondly recall the
            launch of the first iPhone and its competitors over the years; I
            have spent plenty of time supporting customers with their devices
            and accounts that are suffering from buggy code causing technical
            issues, I now take great joy in writing, testing and debugging code,
            understanding the importance to get it right.
          </p>
        </div>
        <div>
          <p className="text-justify lg:pt-12 max-w-[666px] mt-8 md:mt-0">
            For a long time, I was uncertain about my career path and
            hadn&apos;t considered software development as an option. Then, a
            few years ago while traveling, I met an inspirational software
            developer and we kept in touch. Their advocacy for learning to code
            opened my eyes to the possibilities, prompting me to explore and
            experiment. I quickly discovered my passion for logical thinking,
            problem-solving, creativity, and the entire spectrum of software
            development. Instantly I knew, this is what I want to do!
          </p>
        </div>
        <div>
          <p className="text-justify lg:pt-12 max-w-[666px] mt-8 md:mt-0">
            I then applied to School of Code and was fortunately accepted. I
            recently graduated from their 16-week intensive full stack web
            development bootcamp. A truly life changing experience. We were
            taught how to learn, work in an agile dev team, and practice it
            working in a new team each week; using computational thinking to
            solve problems in a creative way. For the final project, I had the
            opportunity to collaborate with an external stakeholder. It was a
            thoroughly enjoyable and valuable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

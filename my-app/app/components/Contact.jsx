import React from "react";
import Link from "next/link";
import Image from "next/image";
import githubLogo from "../../public/images/github-mark-white.png";
import linkedInLogo from "../../public/images/In-Blue-Logo.png.original.png";

const Contact = () => {
  return (
    <section
      className="flex flex-col text-center md:text-left items-center justify-center mb-24 max-w-4xl mx-auto text-white"
      id="contact"
    >
      <p className="mt-24 text-white font-bold text-3xl ">Contact</p>
      <div className="mt-8 flex flex-col md:flex-row-reverse gap-16 justify-center items-center">
        <p className="max-w-[400px] lg:max-w-[600px] lg:text-xl px-2 sm:px-0 ">
          I am currently looking for new opportunities. If you're looking for a
          junior developer in any capacity, I'd love to hear from you!{" "}
        </p>
        <div className="flex flex-row gap-2 mt-4 items-center justify-center md:justify-start">
          <Link
            href="https://linkedin.com/in/thomas--vincent"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            <Image
              src={linkedInLogo}
              alt="LinkedIn Logo"
              className="w-[40px] h-[40px] text-white"
            />
          </Link>{" "}
          <Link
            href="https://github.com/tvincent23"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            <Image
              src={githubLogo}
              alt="GitHub Logo"
              className="w-[40px] h-[40px]"
            />
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;

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
      <p className="text-white"> Contact... replace with image</p>
      <div className="flex flex-col md:flex-row-reverse gap-16 justify-center items-center">
        <p className="max-w-[65ch]">A bit about my current situation...</p>
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
            {/* <p>Add Linkedin image</p> */}
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
            {/* <p>Add GitHub image</p> */}
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;

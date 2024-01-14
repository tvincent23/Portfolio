"use client";
// import React from "react";
import Image from "next/image";
import Avatar from "../../public/images/thomas_256_avatar.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#33353F] bg-opacity-100 max-h-48">
      <div className="flex flex-wrap items-center justify-between lg:mr-20 lg:ml-5 px-4 py-4 text-white">
        <div className="flex justify-center items-center pt-3 pl-5 max-w-12 max-h-12 border border-indigo-600">
          <Image className="scale-75" src={Avatar} alt="avatar image" />
        </div>
        {/* <code className="font-mono font-bold">app/page.js</code> */}
        <span>About</span>
        <span>Projects</span>
        <span>Skills</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState, useRef } from "react";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Beyond Barriers",
      description:
        "A disability community app designed to improve the process of discovering if a venue is suitable for specific needs.",
      image: "/images/img2bb.png",
      gitUrl: "/",
      previewUrl: "https://beyond-barriers.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "My portfolio site. Built using Next JS, JavaScript and TailwindCSS.",
      image: "/images/img3p.png",
      gitUrl: "/",
      previewUrl: "https://thomas-vincent.vercel.app/",
    },
    {
      id: 3,
      title: "Noughts & Crosses",
      description:
        "Noughts & Crosses app, a single day hackathon in a team of 2. Our first effort using React.",
      image: "/images/img4nac.png",
      gitUrl: "https://github.com/SchoolOfCode/Noughts_And_Crosses_App",
      previewUrl: "https://noughts-and-crosses-kappa.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <h2 className="mt-36 text-center text-white font-bold text-3xl 2xl:text-4xl">
        Projects
      </h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 sm:gap-6 md:gap-12  max-w-[312px] md:max-w-[800px] 2xl:max-w-[1400px]">
        {projectsData.map((project) => (
          <ProjectDetails
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

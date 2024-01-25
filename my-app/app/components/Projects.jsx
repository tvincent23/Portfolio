"use client";
import React, { useState, useRef } from "react";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Beyond Barriers",
      description: "description...",
      image: "/images/thomas_256_avatar.png",
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "description...",
      image: "/images/thomas_256_avatar.png",
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  return (
    <section id="projects">
      <h2 className="mt-24 text-center text-white font-bold text-3xl">
        Projects
      </h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-6 md:gap-12 max-w-[312px] md:max-w-[800px]">
        {projectsData.map((project) => (
          <ProjectDetails
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

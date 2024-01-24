"use client";
import React from "react";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Beyond Barriers",
      description: "description...",
      image: "/",
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "description...",
      image: "/",
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  return (
    <section id="projects">
      <p className="flex flex-col text-center text-white font-bold text-3xl">
        Projects
      </p>
    </section>
  );
};

export default Projects;

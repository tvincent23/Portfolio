import React from "react";

const skillsList = [
  "JavaScript",
  "React",
  "Next.js",
  "HTML 5",
  "CSS",
  "Node.js",
  "TypeScript",
  "Jest",
  "Express",
  "SQL",
  "PostgreSQL",
  "Figma",
  "GitHub",
  "npm",
  "VS Code",
];

const Skills = () => {
  return (
    <section id="toolbox">
      <div className="mt-36 grid grid-cols-1 ">
        <h2 className="col-span-full place-self-center font-bold text-3xl 2xl:text-4xl text-white ">
          Toolbox
        </h2>
        <ul className="mt-8 max-w-[900px] place-self-center grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-x-6 sm:gap-x-2">
          {skillsList.map((skill) => (
            <li
              key={skill}
              className="place-self-center px-4 py-3 rounded-full mt-2 mb-2  bg-white  w-32 text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

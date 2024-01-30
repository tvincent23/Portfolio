import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import githubLogo from "../../public/images/github-mark-white.png";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="mt-8">
      <div
        className="w-[312px] h-72 lg:w-[376px] rounded-t-xl relative group border-t-2 border-l-2 border-r-2 border-white-600"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className=" text-white w-[312px] lg:w-[376px] md:h-[150px] rounded-b-xl bg-[#181818]  border-b-2 border-l-2 border-r-2 border-white-600 p-3">
        <div className="grid grid-cols-8">
          <div className="col-span-6 text-blue-400 font-bold text-xl">
            {title}
          </div>
          <div className="col-span-1">
            {gitUrl.length > 1 ? (
              <Link href={gitUrl} target="_blank">
                <Image
                  src={githubLogo}
                  alt="GitHub Logo"
                  className="w-[25px] h-[25px]"
                />
              </Link>
            ) : null}
          </div>
          <div className="col-span-1">
            <Link href={previewUrl} target="_blank ">
              <EyeIcon className="h-7 w-7 " />
            </Link>
          </div>
        </div>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;

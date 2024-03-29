import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
 
}

const ProjectCard = ({ src, title, description,}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-red-700">
    <Image
      src={src}
      alt={title}
      width={1000}
      height={1000}
      className="w-full h-auto object-cover" // Update object-fit to cover
    />
  
    <div className="relative p-4 text-xs md:text-sm lg:text-base"> {/* Adjust text size */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">{title}</h1> {/* Adjust text size */}
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  </div>
  
  );
};

export default ProjectCard;

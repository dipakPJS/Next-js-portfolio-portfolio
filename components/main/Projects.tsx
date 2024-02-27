import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
   <div className="flex flex-col items-center justify-center py-10 md:py-20" id="projects">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 py-10 md:py-20">
    My Projects
  </h1>
  <div className="h-full w-full flex flex-col md:flex-row gap-5 md:gap-10 px-5 md:px-10 overflow-x-auto">
    <ProjectCard
      src="/portfolio1.png"
      title="Landing Page Design"
      description="I've crafted a stunning startup landing page with HTML, CSS, JavaScript, and jQuery, offering an impactful platform for showcasing products or services"
      fontSize="text-sm md:text-base" // Adjust font size for smaller screens
    />
    <ProjectCard
      src="/portfolio2.png"
      title="Custom Calculator with Javascript"
      description="I've created a calculator app that offers users a user-friendly interface and versatile functionality, making it an essential tool for everyday calculations."
      fontSize="text-sm md:text-base" // Adjust font size for smaller screens
    />
    <ProjectCard
      src="/portfolio4.png"
      title="Full-Stack Blog Application"
      description="I've created a user-friendly full-stack blog application to help people easily share their ideas online, whether it's for personal, professional, or community purposes."
      fontSize="text-sm md:text-base" // Adjust font size for smaller screens
    />
    <ProjectCard
      src="/portfolio3.png"
      title="Simple Portfolio website"
      description="I've built a portfolio website using HTML, CSS, JavaScript, and jQuery, with Google Maps API and EmailJS for easy contact. It showcases my skills and simplifies communication."
      fontSize="text-sm md:text-base" // Adjust font size for smaller screens
    />
  </div>
</div>

  );
};

export default Projects;

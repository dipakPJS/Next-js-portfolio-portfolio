import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio1.png"
          title="Landing Page Design"
          description="I've crafted a stunning startup landing page with HTML, CSS, JavaScript, and jQuery, offering an impactful platform for showcasing products or services"
          
        />
        <ProjectCard
          src="/portfolio2.png"
          title="Custom Calculator with Javascript"
          description="I've created a calculator app that offers users a user-friendly interface and versatile functionality, making it an essential tool for everyday calculations."
           
        />
        <ProjectCard
          src="/portfolio4.png"
          title="Full-Stack Blog Application"
          description="I've created a user-friendly full-stack blog application to help people easily share their ideas online, whether it's for personal, professional, or community purposes."
           
        />
        <ProjectCard
          src="/portfolio3.png"
          title="Simple Portfolio website"
          description="I've built a portfolio website using HTML, CSS, JavaScript, and jQuery, with Google Maps API and EmailJS for easy contact. It showcases my skills and simplifies communication."
          
        />
      </div>
    </div>
  );
};

export default Projects;

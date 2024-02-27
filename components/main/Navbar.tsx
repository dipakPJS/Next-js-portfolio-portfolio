import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
   <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#130f40]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
  <div className="w-full h-full flex flex-row items-center justify-between m-auto px-1 md:px-[10px]">
    <a
      href="#about-me"
      className="h-auto w-auto flex flex-row items-center ml-2 md:ml-[40px]"
    >
      <Image
        src="/dipakLogo.png"
        alt="logo"
        width={50} // Decreased logo size for smaller screens
        height={50} // Decreased logo size for smaller screens
        className="cursor-pointer hover:animate-slowspin"
      />
    </a>

    <div className="w-full md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
      <div className="flex items-center justify-between w-full h-auto border border-[#FA571C] bg-[#0300145e] mr-2 md:mr-[15] ml-2 md:ml-[20px] px-2 md:px-[20px] py-1 md:py-[10px] rounded-full text-sm md:text-base text-gray-200">
        <a href="#about-me" className="cursor-pointer">
          About me
        </a>
        <a href="#skills" className="cursor-pointer">
          Skills
        </a>
        <a href="#projects" className="cursor-pointer">
          Projects
        </a>
      </div>
    </div>

    <div className="flex flex-row gap-1 md:gap-3">
      {Socials.map((social) => (
        <Image
          src={social.src}
          alt={social.name}
          key={social.name}
          width={20} // Decreased size of social media icons for smaller screens
          height={20} // Decreased size of social media icons for smaller screens
        />
      ))}
    </div>
  </div>
</div>


  );
};

export default Navbar;

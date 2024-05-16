import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Menu = () => {
  const [select, Setselect] = useState<string | undefined>(undefined);

  const clickHandler = (e: any) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const id = target.getAttribute("href")?.replace("#", "");
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-[30%]  bottom-[30%] right-[27px] rounded-[39px]  w-[85px] h-auto bg-black shadow-[0_0px_17px_-3px_rgba(255,255,255,1)] text-white z-50 ">
      <div className="flex flex-col m-auto justify-center items-center mt-[40px] gap-[39px] ">
        <IoMdHome
          className={` size-[33px] cursor-pointer ${
            select == "home" ? "text-yellow-400" : ""
          }`}
          href="#home"
          onClick={(e) => {
            clickHandler(e);
            Setselect("home");
          }}
        />
        <IoPerson
          className={` size-[30px] cursor-pointer ${
            select == "about" ? "text-yellow-400" : ""
          }`}
          href="#about"
          onClick={(e) => {
            clickHandler(e);
            Setselect("about");
          }}
        />
        <GrProjects
          className={` size-[30px] cursor-pointer ${
            select == "projects" ? "text-yellow-400" : ""
          }`}
          href="#projects"
          onClick={(e) => {
            clickHandler(e);
            Setselect("projects");
          }}
        />
        <FaCode
          className={` size-[30px] cursor-pointer ${
            select == "skills" ? "text-yellow-400" : ""
          }`}
          href="#skills"
          onClick={(e) => {
            clickHandler(e);
            Setselect("skills");
          }}
        />

        <MdEmail
          className={` size-[30px] cursor-pointer ${
            select == "contact" ? "text-yellow-400" : ""
          }`}
          href="#contact"
          onClick={(e) => {
            clickHandler(e);
            Setselect("contact");
          }}
        />
      </div>
    </div>
  );
};

export default Menu;

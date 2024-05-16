import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Fronted from "../projects/Fronted";
import Devops from "../projects/Devops";

function Projects() {
  const [projectSelect, SetprojectSelect] = useState(1);
  const [toggle, Settoggle] = useState(["bg-yellow-400", "text-black"]);
  const [toggle2, Settoggle2] = useState(["bg-black", "text-white"]);
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center  w-full h-screen ml-[100px] mr-[50px] font-poetsen ${
        animated ? "animate-farmerMotion" : ""
      }`}
      id="projects"
    >
      <div className=" flex flex-row justify-center items-center text-center h-[70px] w-[250px] shadow-[0_0px_17px_-7px_rgba(255,255,255,1)] rounded-[90px] mb-[40px] font-poetsen ">
        <div
          className={`flex justify-center items-center w-1/2 h-full ${toggle[0]} rounded-[90px] cursor-pointer `}
          onClick={() => {
            Settoggle(["bg-yellow-400", "text-black"]),
              Settoggle2(["bg-black", "text-white"]),
              SetprojectSelect(1);
          }}
        >
          <p className={`${toggle[1]}`}>Frontend</p>
        </div>
        <div
          className={`flex justify-center items-center w-1/2 h-full  ${toggle2[0]} rounded-[90px] cursor-pointer `}
          onClick={() => {
            Settoggle2(["bg-yellow-400", "text-black"]),
              Settoggle(["bg-black", "text-white"]),
              SetprojectSelect(0);
          }}
        >
          <p className={`${toggle2[1]}`}>Devops</p>
        </div>
      </div>

      {projectSelect ? <Fronted /> : <Devops />}
    </section>
  );
}

export default Projects;

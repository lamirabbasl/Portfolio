import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import skills from "../../skills.json";

function Skills() {
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
      className={`flex flex-col justify-center items-center w-full h-screen ml-[100px] mr-[50px] font-poetsen ${
        animated ? "animate-farmerMotion" : ""
      }`}
      id="skills"
    >
      <h1 className="font-poetsen text-[70px] mb-[100px] top-0">
        My <span className="text-blue-400">Skills</span>{" "}
      </h1>
      <div className="grid grid-cols-9 gap-5">
        {skills.skill.map((skill) => (
          <div
            key={skill}
            className="flex justify-center items-center cursor-default bg-yellow-400 rounded-full w-[100px] h-[60px] text-black shadow-[0_0px_17px_-5px_rgba(255,255,255,1)] hover:bg-blue-400 hover:shadow-[0_0px_17px_-1px_rgba(255,255,255,1)]"
          >
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

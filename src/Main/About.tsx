import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const [textcolor, setTextcolor] = useState("white");
  const [textcolor2, setTextcolor2] = useState("white");
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
      className={`flex  justify-center items-center w-full h-screen ml-[100px] mr-[50px] text-[23px] font-freemna  ${
        animated ? "animate-farmerMotion" : ""
      }`}
      id="about"
    >
      <div
        className="border-r-2 border-gray-400 ml-[15px] h-[600px] w-[1400px] "
        onMouseEnter={() => setTextcolor("yellow-400")}
        onMouseLeave={() => setTextcolor("white")}
      >
        <h3 className="text-4xl font-bold text-sky-600 text-center font-poetsen">
          Frontend Development
        </h3>
        <br></br>
        <br></br>

        <br></br>
        <ul className="list-none ">
          <li>
            <p>
              Proficient in{" "}
              <span className={`text-${textcolor}`}>React.js</span>, with
              experience in building
            </p>
            user-friendly, responsive, and performant single-page applications.
          </li>
          <br></br>

          <li>
            Skilled in utilizing HTML5, CSS3, and modern
            <span className={`text-${textcolor}`}>Javascript</span> practices
            for building dynamic and interactive web interfaces.
          </li>
          <br></br>

          <li>
            Experience with component-based architecture and state management
            libraries like
            <span className={`text-${textcolor}`}>React Query</span>.
          </li>
        </ul>
      </div>
      <div
        className="ml-[17px] h-[600px]"
        onMouseEnter={() => setTextcolor2("yellow-400")}
        onMouseLeave={() => setTextcolor2("white")}
      >
        <h3 className="text-4xl font-bold text-sky-600 text-center font-poetsen">
          DevOps
        </h3>
        <br></br>
        <br></br>

        <ul className=" list-none ">
          <li>
            Adept at containerization using
            <span className={`text-${textcolor2}`}>Docker</span> to package and
            deploy applications efficiently.
          </li>
          <br></br>

          <li>
            Experienced in implementing
            <span className={`text-${textcolor2}`}>GitLab CI/CD</span> pipelines
            <p>to automate the software development lifecycle,</p>
            streamlining deployment processes.
          </li>
          <br></br>

          <li>
            Proficient in <span className={`text-${textcolor2}`}>Ansible</span>{" "}
            for automating infrastructure configuration tasks, reducing manual
            setup and errors.
          </li>
          <br></br>

          <li>
            Understanding of container orchestration with
            <span className={`text-${textcolor2}`}>Kubernetes</span>, for
            managing and scaling applications in complex environments.
          </li>
          <br></br>
        </ul>
      </div>
    </section>
  );
}

export default About;

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Home() {
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
    <>
      <section
        ref={ref}
        className={`block w-full h-screen ml-[150px] mr-[50px] mt-[100px]  ${
          animated ? "animate-farmerMotion" : ""
        }`}
        id="home"
      >
        <h1 className="text-[70px] font-extralight mb-[30px]">Hello...</h1>
        <div>
          <h1 className="text-[40px] font-poetsen">
            I am{" "}
            <span className="text-yellow-400  text-[100px]">
              {" "}
              Amirabbas Gholami{" "}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="text-[50px] font-poetsen mt-[50px]">
            <span className="text-blue-400">Webdeveloper </span> and{" "}
            <span className="text-blue-400">Devops enginner </span>{" "}
          </h2>
          <p className="text-[20px] font-extralight mt-[30px] w-[900px]">
            I bring creativity and technical expertise to every project I work
            on. I enjoy transforming design concepts into functional and
            visually appealing interfaces, ensuring that every detail is
            carefully crafted.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;

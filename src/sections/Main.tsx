import About from "../Main/About";
import Contact from "../Main/Contact";
import Skills from "../Main/Skills";
import Home from "../Main/Home";
import Projects from "../Main/Projects";
function Main() {
  return (
    <div className="flex flex-col w-[66%]  h-full justify-between gap-[20px] m-auto mt-[100px] bg-black text-white ">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Main;

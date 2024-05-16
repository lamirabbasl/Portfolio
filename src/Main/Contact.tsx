import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center items-center w-full h-screen ml-[100px] mr-[50px] font-poetsen ${
        animated ? "animate-farmerMotion" : ""
      }`}
      id="contact"
    >
      <div className=" p-8 rounded-md  form-container w-[500px]">
        <h2 className="text-2xl text-yellow-400 mb-6 font-poetsen">
          Contact <span className="text-white">with me</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-black text-white"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-black
               text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue font-poetsen"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

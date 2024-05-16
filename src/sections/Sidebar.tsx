import { FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function Sidebar() {
  return (
    <div className="fixed  top-[30px]  bottom-[30px] left-[30px] rounded-[17px]  w-1/5 h-auto bg-black z-10 shadow-[0_0px_17px_-9px_rgba(255,255,255,1)]  text-white">
      <div>
        <img
          className=" rounded-[50%] mt-[100px] w-[250px] m-auto"
          src="../../public/abbas.jpg"
        />
      </div>
      <div className="flex flex-col justify-center items-center m-auto mt-[70px] ">
        <div className="felx  justify-center items-center">
          <p className="  text-[33px] m-auto font-poetsen">Amirabbas Gholami</p>
        </div>
        <div className=" border-l-pink-50  border-[1px] mt-[20px] p-[15px] rounded-[5px]">
          <p className="  text-[20px] font-sedan">Junior Frontend Developer</p>
          <p className=" text-[20px] mt-[7px] font-sedan">
            Junior Devops Engineer
          </p>
        </div>
        <p className="  text-[20px] mt-[40px]">amirabbas.linux@gmail.com</p>
      </div>
      <div className="flex flex-row justify-center items-center m-auto mt-[50px] gap-[33px] ">
        <FaTwitter className=" size-[33px] cursor-pointer hover:text-blue-400" />
        <FaTelegramPlane className=" size-[33px] cursor-pointer  hover:text-blue-400" />
        <FaGithub className=" size-[33px] cursor-pointer  hover:text-blue-400" />
        <MdAlternateEmail className=" size-[33px] cursor-pointer  hover:text-blue-400" />
      </div>
    </div>
  );
}

export default Sidebar;

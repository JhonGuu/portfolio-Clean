
import perfilImage from "../../assets/perfilSinFondo.png";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export function Sidebar() {
  return (
    <>
      <img
        src={perfilImage}
        alt="imagen de perfil"
        className="w-64 h-64 m-auto rounded-full bg-[#161616]"
      />
      <h3 className="flex justify-center my-4 text-3xl font-semibold tracking-[0.2rem] font-kaushan ">
        <span className='text-[#f77bbf]'>JhonGuu</span>DEV
      </h3>
      <p className="flex items-center justify-center py-1 px-2 mt-3 bg-[#161616] rounded-full">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center p-1 my-3 bg-[#161616] rounded-full"
        href="/src/assets/CurriculumJhonGuu.pdf"
        download="CurriculumJhonGuu.pdf"
      >
        {" "}
        <GiTie width={6} height={6} />
        Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around my-5 mx-auto">
        <a href="">
          <AiFillGithub className="text-[#f77bbf] w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="text-[#f77bbf] w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillInstagram className="text-[#f77bbf] w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Adress*/}
      <div className="py-4 px-0 my-5 mx-1 bg-[#161616] rounded-2xl">
        <div className="flex justify-center items-center">
          <GoLocation className="mr-1" />
          <span>San Juan, Argentina</span>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center items-center ">
            <MdEmail className="mr-1" />
            <p>arandajuanjose17@gmail.com</p>
          </div>
          <div className="flex justify-center items-center">
            <BiPhone className="mr-1" />
            <p>+54 2646265090</p>
          </div>
        </div>
      </div>
      {/* Email Button*/}
      <div className="flex justify-center ">
      <button
        className="flex justify-center bg-gradient-to-r from-[#f77bbf] to-[#131313] w-8/12 rounded-full py-2 px-5 text-white m-2 border-none cursor-pointer hover:bg-gradient-to-r hover:from-[#0e0f0f] hover:to-[#f77bbf] hover:w-[70%] hover:h-[5%]"
        onClick={() => window.open("mailto:arandajuanjose17@gmail.com")}
      >
        Email Me
      </button>
      <button className="flex justify-center bg-gradient-to-r from-[#f77bbf] to-[#131313] w-8/12 rounded-full py-2 px-5 text-white my-2 border-none cursor-pointer hover:bg-gradient-to-r hover:from-[#0e0f0f] hover:to-[#f77bbf] hover:w-[70%] hover:h-[5%]">
        Toggle Me
      </button>
      </div>
    </>
  );
}
export default Sidebar;

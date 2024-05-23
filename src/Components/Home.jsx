import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";

import pic from "../assets/User.jpg";

import CV  from'../assets/Abhishek.pdf'




function Home() {
  return (
    <>
      <div  name="Home"  className="max-w-screen-2xl container mx-auto px-4 md:px-20   -mt-0  md:-mt-2   bg-black text-yellow-600" >
        <div className="flex flex-col md:flex-row">
          <div className="left md:w-1/2 mt-12  md:mt-24 space-y-2 order-2 md:order-1 text-center sm-mt-2 ">
            <span className="text-xl ">Welcome to My Feed</span>

            <div className="flex space-x-1 text-2xl  md:text-4xl ">
              <h1>Hello , I`m a </h1>
              {/* <span className="text-red-700 font-bold mb-2 ">Developer</span> */}

              <ReactTyped
                className="text-red-700 font-bold mb-2"
                strings={["Programmer", " Developer", "", "Gamer", "Editor"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify">
              “Welcome to my digital have,🚀where creativity meets innovation.
              Dive into my portfolio and discover the stories behind each pixel,
              the passion fueling every project, and the drive to turn ideas
              into extraordinary experiences. Let’s embark on a journey of
              inspiration together.”
            </p>

            <br />

            {/* Social media icons */}

            <div className="flex justify-between flex-col md:flex-row  space-y-6 md:space-y-0   items-center">
              <div className="space-y-2 ">
                <h1 className="font-bold text-md ml-6"> Get in Touch With </h1>

                <ul className="flex  space-x-5">
                  <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  *:first-letter:
                    
                     
                     
                    " />
                     </a>
                  </li>
                  <li>
                    {" "}
                    <FaWhatsapp className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  " />
                  </li>
                  <li>
 

                  < a href="https://www.linkedin.com/in/abhishekshukla9867/" target="_blank">   
                    {" "}
                    <FaLinkedin className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  " />
                    </a>
                  </li>
                  <li>

                      <a href="https://github.com/Abhishek-Shukla9867" target="_blank"> 
                    {" "}
                    <FaGithub className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]   " />
                    </a>
                  </li>

                  <li>

                     <a href="https://www.instagram.com/im_aviiiiiiiii/" target="_blank">
                    {"  "}
                    <FaInstagram className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  " />
                     </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="space-y-2 ">
                  <h1 className="font-bold text-md"> Currently Working On </h1>

                  <ul className="flex  space-x-5">
                    <li>
                      {" "}
                      <SiMongodb className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] " />
                    </li>
                    <li>
                      {" "}
                      <SiExpress className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                    <li>
                      {" "}
                      <FaReact className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>

                    <li>
                      {" "}
                      <FaNodeJs className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="right md:w-1/2 md:ml-48 md:mt-10 sm:mt-2 order-1   bg-black mt-4 ">
            <img
              src={pic}
              className="     rounded-lg  md:w-[450px] md:h-[450px] mx-auto    text-yellow-600       shadow-lg p-1  shadow-blue-300 
              
              "
              alt=""
            />
          </div>
        </div>

        <div className="md:ml-32  mt-4 flex justify-center md:justify-start  space-x-4   md:-mt-20">


           <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
          <button className=" bg-pink-500 hover:bg-pink-200  shadow-lg shadow-pink-500 text-white font-bold py-2 px-4 rounded-full  transition duration-300 ease-in-out md:w-32 md:h-14  w-28 h-12 before:  hover:scale-110 duration-200 ">
            Hire Me
          </button>
          </a>


          <a href={CV} target="_blank" rel="noopener noreferrer" >
          <button className="    bg-pink-500 hover:bg-pink-200  shadow-lg shadow-pink-500 text-white font-bold py-2 px-4 rounded-full  transition duration-300 ease-in-out md:w-32 md:h-14  w-28 h-12 before:  hover:scale-110 duration-200              ">
            {" "}
            Get CV
          </button>
          </a>




        </div>

        <div className="flex items-center justify-center h-full mt-8 mb-4">
          <hr className="border-t border-gray-300 w-1/4 mr-4       " />
          <div className="text-center font-bold   ">
            <span className="text-red-800   text-2xl "> A</span>bout Me
          </div>
          <hr className="border-t border-gray-300 w-1/4 ml-4  " />
        </div>
      </div>
    </>
  );
}

export default Home;

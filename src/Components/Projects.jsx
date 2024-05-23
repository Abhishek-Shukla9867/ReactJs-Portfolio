import React from "react";
import pic from '../assets/Screenshot (297).png';
import pic1 from '../assets/Screenshot (298).png';
import pic2 from '../assets/Screenshot (266).png';

function Projects() {
  return (
    <div   name="Projects"       className="container mx-auto px-4 md:px-20 py-8 bg-black text-yellow-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Project */}
        <div className="bg-black p-4 rounded-lg">
          <div className="mb-4 flex justify-center items-center ">
            <img
              src={pic}
              alt="Project 1"
              className="md:w-[440px] md:h-[400px] rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <a href="https://github.com/Abhishek-Shukla9867/react-todo-list" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Code
              </button>
            </a>
            <a href="https://dynamic-parfait-3a7ea7.netlify.app/" target="_blank">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                See Demo
              </button>
            </a>
          </div>
        </div>

        {/* Second Project */}
        <div className="bg-black p-4 rounded-lg">
          <div className="mb-4 flex justify-center items-center ">
            <img
              src={pic1}
              alt="Project 1"
              className="md:w-[440px] md:h-[400px] rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <a href="https://github.com/Abhishek-Shukla9867/E_Commerce-Website" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Code
              </button>
            </a>
            <a href="https://abhishek-shukla9867.github.io/E_Commerce-Website/" target="_blank">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                See Demo
              </button>
            </a>
          </div>
        </div>





        <div className="bg-black p-4 rounded-lg">
          <div className="mb-4 flex justify-center items-center ">
            <img
              src={pic2}
              alt="Project 1"
              className="md:w-[440px] md:h-[400px] rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <a href="https://github.com/Abhishek-Shukla9867/MovieX" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Code
              </button>
            </a>
            <a href="https://664f9e047b461f617d395935--spiffy-cobbler-08ce5b.netlify.app/" target="_blank">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                See Demo
              </button>
            </a>
          </div>
        </div>














      </div>
    </div>
  );
}

export default Projects;

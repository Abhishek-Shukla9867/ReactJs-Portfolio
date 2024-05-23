import React from "react";


function About() {
  return (
    <>
      <div  name="About"   className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20     ">
        <div className="flex  justify-between   md:flex-row   flex-col">
        <div className="left md:w-1/2    space-y-2 order-1 md:order-1">

          
  


          <h1  className=" text-4xl font-bold text-center text-black  -mt-12 "> LET ME INTRODUCE 
          
          
          
         <span className="text-red-600"> MYSELF  </span>  
          
          
          </h1>

            <p className="text-lg leading-8 text-gray-800 mb-6"  >I fell in love with programming and I have at least learnt something, I think… 🤷‍♂</p>

                <p className="text-lg leading-8 text-gray-800 mb-6">I am fluent in classics like  <span className="text-blue-800">HTML5,CSS3 Javascript</span>  and  <span  className="text-blue-800">ReactJS.</span></p>

                <p className="text-lg leading-8 text-gray-800 mb-6">My field of Interest`s are building new  Web Technologies and Products and also in areas related to Gaming.</p>


                <p className="text-lg leading-8 text-gray-800">Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like ReactJs and Next.js</p>



          </div>




          <div   className=" right md:w-1/2 md:ml-48  sm:mt-2 order-2>right order-2 ">

       
        <img alt="Coder GIF"  className="md:w-[450px] md:h-[300px] md:-mt-12"   src="https://physicsgurukul.files.wordpress.com/2019/02/character-1.gif" />





            </div>
          </div>
           </div>



           <div className="flex items-center justify-center  -mt-20  mb-5  ">
   <hr className="border-t border-gray-300 w-1/4 mr-4       " />
   <div className="text-center font-bold   ">
     <span className="text-red-800   text-2xl "> S</span>Kills
   </div>
   <hr className="border-t border-gray-300 w-1/4 ml-4  " />
     </div>










      
   </>
  );
}

export default About;

import React from "react";
import instgram from "../assets/instagram-svgrepo-com.svg";
import linkdin from "../assets/linkedin-svgrepo-com.svg";
import Github from "../assets/github-142-svgrepo-com.svg";
import Gmail from "../assets/gmail-svgrepo-com.svg";

function Footer() {
  const socialMedia = [
    {
      id: 1,
      logo: instgram,
      link: "https://www.instagram.com/im_aviiiiiiiii/",
    },
    {
      id: 2,
      logo: linkdin,
      link: "https://www.linkedin.com/in/abhishekshukla9867/",
    },
    {
      id: 3,
      logo: Gmail,
      link: "mailto:your-email@example.com",
    },
    {
      id: 4,
      logo: Github,
      link: "https://github.com/Abhishek-Shukla9867",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <hr />
      <div className="flex justify-center items-center mt-4    hover:scale-110 duration-200 rounded-full">
        {socialMedia.map((item) => (
          <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <img src={item.logo} alt={`Social Media ${item.id}`} className="w-8 h-8 mx-4" />
          </a>
        ))}

       




      </div>

      <div className="flex justify-center items-center flex-col">
        
         <h1 className="mt-2">
            2024 All Rights Reserved
         </h1>

         <h2>
            Supportive Partner Youtube 
         </h2>


        
    </div>



    </div>
  );
}

export default Footer;

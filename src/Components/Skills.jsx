




import React from 'react';
import html from '../assets/html (1).png';
import css from '../assets/css-3-svgrepo-com.svg';
import js from '../assets/js-svgrepo-com.svg';
import java from '../assets/java-svgrepo-com.svg';
import Linux from '../assets/linux-svgrepo-com.svg';
import react from '../assets/react-svgrepo-com.svg';
import wordpress from '../assets/wordpress-svgrepo-com.svg';
import php from '../assets/php2-svgrepo-com.svg';
import Github from '../assets/github-142-svgrepo-com.svg';
import bootstrap from '../assets/bootstrap-svgrepo-com.svg';
import git from '../assets/git-svgrepo-com.svg';
import tailwindcss from '../assets/tailwindcss-icon-svgrepo-com.svg';

function Skills() {
  const CardItems = [
    { Id: 1, logo: html, Name: "HTML5",  t1: "90%" },
    { Id: 2, logo: css, Name: "CSS3" ,  t1: "80%"},
    { Id: 3, logo: js, Name: "JavaScript",t1:"70%" },
    { Id: 4, logo: java, Name: "Java", t1:"50%" },
    { Id: 5, logo: Linux, Name: "Linux",t1:"93%" },
    { Id: 6, logo: react, Name: "ReactJs", t1:"60%" },
    { Id: 7, logo: wordpress, Name: "Wordpress",t1:"77%" },
    { Id: 8, logo: php, Name: "PHP",t1:"45%" },
    { Id: 9, logo: Github, Name: "GitHub" ,t1:"95%" },
    { Id: 10, logo: bootstrap, Name: "Bootstrap" ,t1:"91%" },

    { Id: 11, logo: git, Name: "Git" ,t1:"69%" },
    { Id: 12, logo: tailwindcss, Name: "Tailwind CSS" ,t1:"79%" },
  ];

  return (
    <div  name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 md:-mt-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
        {CardItems.map((item) => (
          <div key={item.Id} className="md:w-[300px] h-[200px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110  duration-200 flex flex-col justify-center  items-center   shadow-blue-300 ">
            <img src={item.logo} alt={item.Name} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" />
            <h1 className="text-xl font-bold mb-2">{item.Name}</h1>
                 <h5 className='text-xl font-bold '>{item.t1}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;




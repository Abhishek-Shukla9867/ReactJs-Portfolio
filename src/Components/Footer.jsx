



import React from "react";
import InstagramIcon from "../assets/instagram-svgrepo-com.svg";
import LinkedInIcon from "../assets/linkedin-svgrepo-com.svg";
import GithubIcon from "../assets/github-142-svgrepo-com.svg";
import GmailIcon from "../assets/gmail-svgrepo-com.svg";

function Footer() {
  const socialMedia = [
    {
      id: 1,
      icon: InstagramIcon,
      link: "https://www.instagram.com/im_aviiiiiiiii/",
    },
    {
      id: 2,
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/abhishekshukla9867/",
    },
    {
      id: 3,
      icon: GmailIcon,
      link: "mailto:your-email@example.com",
    },
    {
      id: 4,
      icon: GithubIcon,
      link: "https://github.com/Abhishek-Shukla9867",
    },
    // Add more social media icons here if needed
  ];

  return (
    <div> 
       <hr />
    <footer className= "bg-black text-yellow-600 py-8">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-center items-center mt-4 hover:scale-110 duration-200 rounded-full">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 mx-4"
            >
              <img
                src={item.icon}
                alt={`Social Media ${item.id}`}
                className="w-8 h-8"
              />
            </a>
          ))}
        </div>

        <div className="flex justify-center items-center flex-col mt-8">
          <h1 className="text-xl">2024 All Rights Reserved</h1>

          <h2 className="text-lg mt-2">Supportive Partner Youtube</h2>

          <div className="mt-4">
            <p>Contact us:</p>
            <p>Email: your-email@example.com</p>
            <p>Phone: +1234567890</p>
            {/* Add more contact information if needed */}
          </div>
        </div>

        <div className="mt-8 text-center">
          <ul className="flex justify-center">
            <li className="mx-4">
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="mx-4">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="mx-4">
              <a href="/sitemap">Sitemap</a>
            </li>
            {/* Add more footer links as needed */}
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;

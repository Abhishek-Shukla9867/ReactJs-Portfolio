import React from "react";
import { useForm } from "react-hook-form";


import axios from 'axios';
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async(data) => {
    const userInfo ={
     name:data.name,
     email:data.email,
     message:data.message

     

    }
    try{
        await axios.post("https://getform.io/f/ebpdvkgb",userInfo);
        // alert("Your Message has been Sent!");

       toast.success("your message has been sent!")


    }
    catch(errors)
    {
       console.log(errors.message);
       toast.error("something went wrong");
    }



  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20  mt-0     bg-black text-yellow-600  ">


        <h1 className="text-3xl font-bold  ">
          Contact <span className="text-red-500">Form</span>
        </h1>

        <span className="text-bold text-2xl text-red-400">
          Please Fill The form to Contact Me
        </span>

        <div className="flex justify-center flex-col items-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/ebpdvkgb"
            method="POST"
            className="bg-slate-400 w-94 md:w-96 px-10 md:px-20 my-2 rounded-xl"
          >
            <h1 className="text-bold  text-xl mb-4">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semi-bold mb-2"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
               
              />
              {errors.name && <span>This field is required</span>}

              <label
                htmlFor="email"
                className="block text-gray-700 font-semi-bold mb-2"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your email"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
              {errors.email && <span>This field is required</span>}

              <label
                htmlFor="message"
                className="block text-gray-700 font-semi-bold mb-2"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
              {errors.message && <span>This field is required</span>}

              <button
                type="submit"
                className="bg-black text-white rounded hover:bg-slate-500 px-3 py-2 mt-4 duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

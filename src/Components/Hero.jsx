"use client";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16 md:py-0">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-gray-700 text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hello, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Shubham Prajapati !!
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-800 mb-6">
            A passionate Computer Science student who loves crafting websites,
            building projects, and creating engaging video content.
          </p>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 h-10">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Frontend Developer",
                2000,
                "Content Creator",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
            {/* <a
              href="/resume.pdf"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-full transition duration-300"
            >
              Download Resume
            </a> */}
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-[3px] shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="/MY Profile Pic.png" // ensure it's in the /public folder
                alt="Shubham Prajapati"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

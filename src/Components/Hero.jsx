"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center px-6 py-24 md:py-0 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 z-10"
      >
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1 variants={childVariants} className="text-gray-900 text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Hello, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Shubham Prajapati
            </span>
          </motion.h1>

          <motion.p variants={childVariants} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            A passionate Full Stack Developer who loves crafting exceptional digital experiences,
            building scalable applications, and turning complex problems into elegant solutions.
          </motion.p>

          {/* Typing Animation */}
          <motion.div variants={childVariants} className="text-2xl md:text-3xl font-bold text-blue-600 mb-10 h-10">
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
          </motion.div>

          <motion.div variants={childVariants} className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/drive/folders/1Q-fb-i0om8CPdw0w_ZcZzOrC9ZsO_jEd?usp=sharing"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-full transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons row */}
          <motion.div variants={childVariants} className="flex gap-5 mt-10 justify-center md:justify-start items-center">
            <a href="https://github.com/Shubham-Prajapati31" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/shubham-prajapati31/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:shubham20053108@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.div 
          variants={childVariants}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-[3px] shadow-xl hover:scale-105 transition-transform duration-300 bg-clip-border"
            >
              <img
                src="/MY Profile Pic.png" 
                alt="Shubham Prajapati"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

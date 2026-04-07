"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaSmile, FaCertificate, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const stats = [
    {
      icon: <FaLaptopCode className="text-blue-600 text-2xl group-hover:text-white transition-colors duration-300" />,
      bg: "bg-blue-50 group-hover:bg-blue-600",
      textHover: "group-hover:text-blue-600",
      value: "3",
      label: "Years Experience"
    },
    {
      icon: <FaProjectDiagram className="text-purple-600 text-2xl group-hover:text-white transition-colors duration-300" />,
      bg: "bg-purple-50 group-hover:bg-purple-600",
      textHover: "group-hover:text-purple-600",
      value: "15",
      label: "Projects Done"
    },
    {
      icon: <FaSmile className="text-pink-500 text-2xl group-hover:text-white transition-colors duration-300" />,
      bg: "bg-pink-50 group-hover:bg-pink-500",
      textHover: "group-hover:text-pink-500",
      value: "17",
      label: "Happy Clients"
    },
    {
      icon: <FaCertificate className="text-indigo-600 text-2xl group-hover:text-white transition-colors duration-300" />,
      bg: "bg-indigo-50 group-hover:bg-indigo-600",
      textHover: "group-hover:text-indigo-600",
      value: "7+",
      label: "Certifications"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          
          {/* Card 1: Profile Image - LEFT SIDE (Spans 1 col now for smaller size) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-1 w-[220px] place-self-center md:w-full md:place-self-auto bg-white rounded-[1.8rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative group min-h-[280px] md:min-h-[300px] aspect-[4/5] object-cover"
          >
            <img 
              src="/MY Profile Pic.png" 
              alt="Shubham Prajapati" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
               <div className="p-2 bg-blue-500/30 backdrop-blur-md rounded-full border border-white/10">
                 <FaMapMarkerAlt className="text-blue-100 text-sm" />
               </div>
               <div>
                  <p className="font-semibold tracking-wide text-white text-sm">Mumbai</p>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Bio - RIGHT SIDE (Spans 3 cols to make image relatively smaller) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-3 bg-white rounded-[1.8rem] p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 flex flex-col justify-center relative overflow-hidden group min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-1000 ease-out delay-100"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 z-10 leading-snug">
              Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">reality</span>.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 z-10 text-[0.95rem] md:text-base font-medium">
              I&apos;m Shubham Prajapati, a Computer Science student at Mumbai University who thrives on building scalable, user-friendly web applications. 
            </p>
            <p className="text-gray-500 leading-relaxed z-10 text-[0.95rem] md:text-base pb-6">
              I specialize in modern frameworks like <strong className="text-blue-600">React</strong> and <strong className="text-purple-600">Next.js</strong>. With a keen eye for design and a love for clean code, I blend creativity with technical expertise to deliver top-notch digital solutions.
            </p>
            
            <div className="mt-auto z-10">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 hover:bg-black text-white font-medium text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Row Stats (4 items, sub-grid to be mobile friendly) */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                className="bg-white rounded-[1.8rem] p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center justify-center text-center group min-h-[140px] md:min-h-[160px]"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-2 md:mb-3 ${stat.bg} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm border border-gray-50`}>
                   {stat.icon}
                </div>
                <h4 className={`text-2xl md:text-3xl font-black text-gray-900 mb-1 tracking-tight ${stat.textHover} transition-colors duration-300`}>
                  {stat.value}
                </h4>
                <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest leading-snug">
                  {stat.label.split(' ').map((word, i) => (
                     <span key={i} className="block">{word}</span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

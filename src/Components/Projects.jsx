"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "College Website",
      desc: "Animated and responsive website for college with multi-page support.",
      tech: "HTML • CSS • JavaScript",
      live: "https://spdccollege2.netlify.app/",
      github: "#",
      img: "/project1.png",
    },
    {
      title: "AI Time Table Scheduler",
      desc: "Smart AI tool to auto-generate conflict-free timetables using Python.",
      tech: "Python • Flask • AI",
      live: "https://ai-time-table.netlify.app/",
      github: "#",
      img: "/project2.png",
    },
    {
      title: "Pygame Shooting Game",
      desc: "A fun arcade-style shooting game built using Pygame library.",
      tech: "Python • Pygame",
      live: "https://drive.google.com/file/d/10CcdvmCYLmDkhUJjX3CpaHrdXMKFWMlb/view?usp=sharing",
      github: "#",
      img: "/project3.png",
    },
    {
      title: "AI-powered Study Platform",
      desc: "Personalized learning Platform with EduMentor chatbot, quizzes, and more features.",
      tech: "React • WebMatrix • AI",
      live: "https://ai-study-platform-ty.vercel.app/",
      github: "#",
      img: "/project4.png",
    },
    {
      title: "E-commerce Platform",
      desc: "UrbanPick with cart functionality and modern UI.",
      tech: "React • TailwindCSS • Next.js",
      live: "https://urban-pick-webmatrix.vercel.app/",
      github: "#",
      img: "/project5.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="Projects" className="bg-white text-gray-800 py-24 px-6 relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-16"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              key={index} 
              className="block bg-white border border-gray-100 shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl group flex flex-col cursor-pointer"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">{project.tech}</span>
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <div 
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github, "_blank");
                        }} 
                        className="text-gray-500 hover:text-gray-900 transition-colors z-20 relative cursor-pointer" 
                        title="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <span className="text-gray-500 hover:text-blue-600 transition-colors" title="Live Demo">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

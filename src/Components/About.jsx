"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          About Me
        </motion.h2>

        {/* Intro Section */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12"
        >
          Hello! I'm{" "}
          <span className="font-semibold text-blue-600">Shubham Prajapati</span>, 
          a passionate and self-motivated{" "}
          <span className="font-semibold">Software Developer</span> and 
          Computer Science student from Mumbai University. I enjoy building 
          web applications, exploring Artificial Intelligence, and creating 
          digital experiences that blend creativity and technology.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "💻 Skills & Tools",
              content:
                "Proficient in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Python, and Java. Experienced with VS Code, Figma, and Canva.",
            },
            {
              title: "📜 Certifications",
              content:
                "Python & Artificial Intelligence from DevTown, Cloud Computing & DevOps from ExcelR. Aavishkar Mumbai University competition presenter.",
            },

            {
              title: "🚀 Projects",
              content:
                "Built AI-Powered Time Table Scheduler, College Website, Python Games, and an AI Study Portal with chatbot and quizzes.",
            },
            // {
            //   title: "🧠 Internship",
            //   content:
            //     "Jr. Software Developer Intern at Nexcore Alliance, Mumbai (Apr–Jul 2025). Worked on full-stack features and modern frameworks.",
            // },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.content}</p>
            </motion.div>
          ))}
        </div>

      
        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-800">
            I’m driven by curiosity and a constant desire to learn. 
            Whether developing apps, solving complex problems, or designing visuals, 
            I aim to make technology more engaging and meaningful.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let’s Connect 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

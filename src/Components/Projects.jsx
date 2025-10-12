export default function Projects() {
  return (
    <section id="Projects" className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/project1.png" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">College Website</h3>
              <p className="text-gray-600 text-sm mb-4">
                Animated and responsive website for college with multi-page support.
              </p>
              <span className="text-blue-500 text-sm">HTML • CSS • JavaScript</span>
              <div className="mt-4 flex gap-4">
                <a href="https://spdccollege2.netlify.app/" className="text-blue-600 hover:underline">
                  Live Demo
                </a>
                <a href="#" className="text-gray-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/project2.png" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI Time Table Scheduler</h3>
              <p className="text-gray-600 text-sm mb-4">
                Smart AI tool to auto-generate conflict-free timetables using Python.
              </p>
              <span className="text-blue-500 text-sm">Python • Flask • AI</span>
              <div className="mt-4 flex gap-4">
                <a href="https://ai-time-table.netlify.app/" className="text-blue-600 hover:underline">
                  Live Demo
                </a>
                <a href="#" className="text-gray-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/project3.png" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pygame Shooting Game</h3>
              <p className="text-gray-600 text-sm mb-4">
                A fun arcade-style shooting game built using Pygame library.
              </p>
              <span className="text-blue-500 text-sm">Python • Pygame</span>
              <div className="mt-4 flex gap-4">
                <a href="https://drive.google.com/file/d/10CcdvmCYLmDkhUJjX3CpaHrdXMKFWMlb/view?usp=sharing" className="text-blue-600 hover:underline">
                  Live Demo
                </a>
                <a href="https://drive.google.com/file/d/10CcdvmCYLmDkhUJjX3CpaHrdXMKFWMlb/view?usp=sharing" className="text-gray-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

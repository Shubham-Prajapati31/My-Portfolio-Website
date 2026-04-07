import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 text-center text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-5">
        <div className="flex gap-5 text-3xl justify-center">
          <a href="https://github.com/Shubham-Prajapati31" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shubham-prajapati31/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:shubham20053108@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <FaEnvelope />
          </a>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-sm flex items-center justify-center gap-1.5 font-medium text-gray-600">
            Built with <FaHeart className="text-red-500 hover:scale-125 transition-transform cursor-pointer" /> by <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Webmatrix</span>
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Shubham Prajapati</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

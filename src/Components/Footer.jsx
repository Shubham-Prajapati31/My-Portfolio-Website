import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 text-center text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className=" text-center  text-sm font-semibold  text-blue-600">Shubham Prajapati</span>. All rights reserved.
        </p>

        <div className="flex gap-5 text-3xl justify-center">
          <a href="https://github.com/Shubham-Prajapati31" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/shubham-prajapati-a76810353" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-600 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

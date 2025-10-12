"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Add smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Detect scroll to apply background shadow
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolling
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200"
            : "bg-white/70 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Shubham Prajapati
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-lg font-medium text-gray-800 hover:text-blue-600 transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-md text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

       {/* Separator Line Below Navbar */}
<div className="w-full h-[2px] bg-gray-200 shadow-md"></div>
      </header>

      

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[998]"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-xl z-[999] p-8 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-red-500 transition"
              >
                <X size={26} />
              </button>

              {/* Links */}
              <div className="flex flex-col mt-8 space-y-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-transform hover:scale-105"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Divider */}
                <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 my-4"></div>

                {/* CTA Button */}
<a
  href="#contact"
  onClick={() => setIsOpen(false)}
  className="mt-2 text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2.5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
>
  Let’s Connect 🚀
</a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Smooth fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}

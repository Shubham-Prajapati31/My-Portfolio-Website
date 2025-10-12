"use client";

import React from "react";

const Mygame = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-16 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Welcome to <span className="text-yellow-300">Gaming Zone</span>
      </h1>
      <p className="text-lg max-w-xl text-center mb-8">
        Dive into the world of high-octane gaming, epic adventures, and endless fun.
      </p>
      <a
        href="#start"
        className="bg-yellow-300 text-purple-800 px-6 py-3 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors duration-300"
      >
        Start Playing
      </a>
    </section>
  );
};

export default Mygame;

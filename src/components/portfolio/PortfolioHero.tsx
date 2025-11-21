import React from 'react';

export default function PortfolioHero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff33 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          Our <span className="text-blue-400">Innovative</span> Projects
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Explore a curated selection of our cutting-edge work, showcasing creativity, technology, and impactful solutions.
        </p>
        <div className="mt-8 flex gap-4">
          {/* Optional: Add buttons for call to action */}
          {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors duration-300">
            View All Projects
          </button>
          <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-full text-lg hover:border-gray-400 hover:text-white transition-colors duration-300">
            Contact Us
          </button> */}
        </div>
      </div>
    </section>
  );
}

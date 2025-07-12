"use client"
import React, { useEffect } from 'react'
import useAnimatedColorChange from '../lib/useAnimatedColorChange';

const Sections = () => {
  useAnimatedColorChange('color-change', 2000);
  return (
    <>
      <div className="relative min-h-screen w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="flex  flex-col items-center pt-8 w-full px-4 sm:px-8 md:px-16">
          <button  className="border-4 border-purple-400 text-white px-8 sm:px-12 md:px-16 py-2 rounded-full font-semibold mb-6 transition-all duration-200 hover:bg-purple-400 hover:text-black hover:scale-105 shadow-lg hover:shadow-purple-400/40 text-base sm:text-lg md:text-xl">
            Welcome to My
            <span className="color-change"> Universe</span>
          </button>
          <h1  className="text-white font-bold mb-3 text-3xl color-change sm:text-5xl md:text-7xl text-center">
            Frontend Developer
          </h1>
          <h2 className="text-gray-300 font-bold mb-6 color-change text-2xl sm:text-4xl md:text-6xl text-center">
            & Creative Coder
          </h2>
          <p className="max-w-2xl text-center text-gray-200 text-base sm:text-lg md:text-xl">
            I create stunning, responsive websites and applications that not only look great but also provide an exceptional user experience. My passion lies in crafting clean, efficient code and beautiful designs that bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 w-full justify-center items-center">
            <button className="relative border-4 border-purple-400 text-white px-8 sm:px-10 py-2 rounded-full font-semibold transition-all duration-200 hover:bg-purple-400 hover:text-black hover:scale-105 shadow-lg hover:shadow-purple-400/40 overflow-hidden group w-full sm:w-auto">
              Portfolio
              <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 group-hover:w-full transition-all duration-700 ease-out"></span>
            </button>
            <button className="border-4 border-pink-400 text-white px-8 sm:px-10 py-2 rounded-full font-semibold transition-all duration-200 hover:bg-pink-400 hover:text-black hover:scale-105 shadow-lg hover:shadow-pink-400/40 animate-pulse w-full sm:w-auto">
              Contact Me
            </button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 w-full px-2 sm:px-0">
            <a href="https://github.com/mehulpal12" target="_blank" rel="noopener noreferrer" className="animate-bounce-slow text-gray-300 hover:text-white transition-colors text-2xl sm:text-3xl md:text-4xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/mehul-pal-3ab6891b2/" target="_blank" rel="noopener noreferrer" className="animate-bounce-mid text-blue-400 hover:text-blue-600 transition-colors text-2xl sm:text-3xl md:text-4xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="mailto:mehulpal7678@gmail.com" className="animate-bounce-fast text-red-400 hover:text-red-600 transition-colors text-2xl sm:text-3xl md:text-4xl">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/></svg>
            </a>
          </div>
          <style jsx>{`
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            @keyframes bounce-mid {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            @keyframes bounce-fast {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-16px); }
            }
            .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
            .animate-bounce-mid { animation: bounce-mid 2s infinite; }
            .animate-bounce-fast { animation: bounce-fast 1.5s infinite; }
          `}</style>
        </div>
      </div>
    </>
  )
}

export default Sections
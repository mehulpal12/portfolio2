"use client"
import React from "react";
import useAnimatedColorChange from '../lib/useAnimatedColorChange';

const About = () => {
  useAnimatedColorChange('color-change', 2000);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#1a1a2e] to-[#232526] flex items-center justify-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute animate-pulse-slow bg-purple-700 opacity-30 rounded-full w-72 h-72 -top-24 -left-24 blur-3xl" />
        <div className="absolute animate-pulse-mid bg-pink-500 opacity-20 rounded-full w-96 h-96 -bottom-32 right-0 blur-3xl" />
        <div className="absolute animate-spin-slow bg-blue-400 opacity-10 rounded-full w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto p-8 bg-black/60 rounded-3xl shadow-2xl border border-purple-900 backdrop-blur-md animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-center animate-slide-in ">Hi, I'm<span className="color-change"> Mehul Pal</span></h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-6 text-center animate-slide-in delay-200">Frontend Developer & Creative Coder</h2>
        <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 text-center animate-fade-in delay-400">
          I am passionate about building beautiful, performant, and accessible web experiences. With a strong foundation in React, Next.js, and modern CSS, I love turning ideas into interactive, user-friendly products. My approach blends clean code, creative design, and a relentless drive to learn and grow.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-600">
          <li className="bg-purple-800/60 px-4 py-2 rounded-full text-purple-200 font-medium shadow hover:scale-105 transition-transform">React</li>
          <li className="bg-pink-700/60 px-4 py-2 rounded-full text-pink-200 font-medium shadow hover:scale-105 transition-transform">Next.js</li>
          <li className="bg-blue-800/60 px-4 py-2 rounded-full text-blue-200 font-medium shadow hover:scale-105 transition-transform">Tailwind CSS</li>
          <li className="bg-yellow-700/60 px-4 py-2 rounded-full text-yellow-200 font-medium shadow hover:scale-105 transition-transform">JavaScript</li>
          <li className="bg-gray-700/60 px-4 py-2 rounded-full text-gray-200 font-medium shadow hover:scale-105 transition-transform">UI/UX</li>
        </ul>
        <div className="flex justify-center gap-6 animate-fade-in delay-800">
          <a href="https://github.com/mehulpal12/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-3xl animate-bounce-slow">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/mehul-pal-3ab6891b2/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors text-3xl animate-bounce-mid">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="mailto:your.email@gmail.com" className="text-red-400 hover:text-red-600 transition-colors text-3xl animate-bounce-fast">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/></svg>
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: .2s; }
        .delay-400 { animation-delay: .4s; }
        .delay-600 { animation-delay: .6s; }
        .delay-800 { animation-delay: .8s; }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 1s cubic-bezier(.4,0,.2,1) both; }
        @keyframes pulse-slow {
          0%, 100% { opacity: .5; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s infinite; }
        @keyframes pulse-mid {
          0%, 100% { opacity: .3; }
          50% { opacity: .7; }
        }
        .animate-pulse-mid { animation: pulse-mid 6s infinite; }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
        @keyframes bounce-mid {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
        .animate-bounce-mid { animation: bounce-mid 2s infinite; }
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-32px); }
        }
        .animate-bounce-fast { animation: bounce-fast 1.5s infinite; }
      `}</style>
    </section>
  );
};

export default About;

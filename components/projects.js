"use client"
import React from 'react';
import useAnimatedColorChange from '../lib/useAnimatedColorChange';

const projects = [
  {
    title: 'Animated Portfolio',
    description: 'A modern, fully responsive portfolio website with advanced UI/UX, animated backgrounds, and dynamic color-changing text.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    link: '#',
    color: 'from-purple-500 via-pink-500 to-yellow-400',
  },
  {
    title: 'Task Manager App',
    description: 'A productivity app to manage daily tasks, featuring drag-and-drop, progress tracking, and beautiful motion design.',
    tech: ['React', 'Redux', 'Framer Motion'],
    link: '#',
    color: 'from-blue-500 via-cyan-400 to-green-300',
  },
  {
    title: 'E-commerce UI Kit',
    description: 'A set of animated, reusable UI components for e-commerce platforms, with smooth transitions and micro-interactions.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    color: 'from-pink-500 via-red-400 to-yellow-300',
  },
];

const Projects = () => {
  useAnimatedColorChange('color-change', 2000);
  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden py-16">
      {/* Animated grid background from section.js */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute animate-pulse-slow bg-purple-700 opacity-20 rounded-full w-96 h-96 -top-32 -left-32 blur-3xl" />
        <div className="absolute animate-pulse-mid bg-pink-500 opacity-20 rounded-full w-80 h-80 -bottom-24 right-0 blur-3xl" />
        <div className="absolute animate-spin-slow bg-blue-400 opacity-10 rounded-full w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center color-change z-10">My Projects</h1>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl px-4">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-1 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-400/40 motion-safe:animate-fade-in-up`}
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            <div className="flex flex-col h-full bg-black/60 rounded-3xl p-6 transition-colors duration-500 group-hover:bg-black/40 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-2 color-change transition-colors duration-500">{project.title}</h2>
              <p className="text-gray-200 mb-4 transition-all duration-500 group-hover:text-white">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold shadow transition-all duration-300 group-hover:bg-purple-700/40 group-hover:text-white animate-bounce-slow">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-auto text-pink-300 font-semibold underline underline-offset-4 transition-colors duration-300 group-hover:text-yellow-300">View Project →</span>
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .motion-safe\\:animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
        @keyframes pulse-mid {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-mid { animation: pulse-mid 4s infinite; }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
      `}</style>
    </section>
  );
};

export default Projects;

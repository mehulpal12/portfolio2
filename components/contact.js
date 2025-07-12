"use client";
import React from "react";
import useAnimatedColorChange from '../lib/useAnimatedColorChange';

const Contact = () => {
  useAnimatedColorChange('color-change', 2000);
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-16">
      {/* Animated grid background from section.js */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-0 bg-transparent rounded-3xl shadow-2xl p-8 md:p-0">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col justify-center items-start gap-6 p-0 md:p-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 color-change">Get in Touch</h2>
          <div className="flex flex-col gap-4 text-lg text-gray-200">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-purple-400">Name:</span> Mehul Pal
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-blue-400">Email:</span> <a href="mailto:mehulpal7678@gmail.com" className="hover:underline text-blue-300">mehulpal7678@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-pink-400">GitHub:</span> <a href="https://github.com/mehulpal12/" target="_blank" rel="noopener noreferrer" className="hover:underline text-pink-300">github.com/mehulpal12</a>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <form className="flex-1 flex flex-col gap-6 bg-black/60 rounded-3xl p-8 shadow-lg backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-2 color-change">Contact Form</h3>
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-400 focus:outline-none transition-all" required />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-blue-400 focus:outline-none transition-all" required />
          <textarea placeholder="Your Message" rows={5} className="px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-pink-400 focus:outline-none transition-all resize-none" required />
          <button type="submit" className="mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 color-change">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

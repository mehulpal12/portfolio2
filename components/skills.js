"use client"
import React from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiRedux, SiFramer, SiHtml5, SiCss3, SiGit, SiFigma } from "react-icons/si";

const skills = [
	{ name: "React", color: "from-blue-500 to-cyan-400", icon: <SiReact />, percent: 90 },
	{ name: "Next.js", color: "from-gray-900 to-gray-700", icon: <SiNextdotjs />, percent: 85 },
	{ name: "Tailwind CSS", color: "from-cyan-500 to-blue-300", icon: <SiTailwindcss />, percent: 92 },
	{ name: "JavaScript", color: "from-yellow-400 to-yellow-200", icon: <SiJavascript />, percent: 95 },
	{ name: "TypeScript", color: "from-blue-700 to-blue-400", icon: <SiTypescript />, percent: 80 },
	{ name: "Redux", color: "from-purple-600 to-indigo-400", icon: <SiRedux />, percent: 80 },
	{ name: "Framer Motion", color: "from-pink-500 to-pink-300", icon: <SiFramer />, percent: 70 },
	{ name: "HTML5", color: "from-orange-500 to-yellow-300", icon: <SiHtml5 />, percent: 98 },
	{ name: "CSS3", color: "from-blue-400 to-blue-200", icon: <SiCss3 />, percent: 95 },
	{ name: "Git", color: "from-red-500 to-orange-400", icon: <SiGit />, percent: 85 },
	{ name: "Figma", color: "from-pink-400 to-pink-200", icon: <SiFigma />, percent: 75 },
];

const Skills = () => {
	return (
		<section className="relative min-h-[60vh] w-full bg-black overflow-hidden">
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
			<div className="relative z-10 flex flex-col items-center justify-center py-16 w-full">
				<h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center animate-fade-in-up">
					My Skills
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 sm:mx-8 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in delay-200">
					{skills.map((skill, idx) => (
						<div
							key={skill.name}
							className={`relative flex flex-col items-center justify-center px-8 py-4 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md text-white text-xl font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 group animate-skill-float`}
							style={{ animationDelay: `${idx * 0.12}s` }}
						>
							<span className="text-5xl mb-3 drop-shadow-lg group-hover:scale-125 transition-transform duration-300 animate-bounce-skill">
								{skill.icon}
							</span>
							<span className="text-lg sm:text-xl text-center font-bold drop-shadow-lg animate-fade-in delay-200 mb-2">
								{skill.name}
							</span>
							{/* Progress Bar */}
							<div className="w-full h-3 bg-white/20 rounded-full mt-2 overflow-hidden">
								<div
									className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
									style={{
										width: `${skill.percent}%`,
										transition: "width 1s cubic-bezier(.4,0,.2,1)",
									}}
								></div>
							</div>
							<span className="text-xs text-gray-200 mt-1">
								{skill.percent}%
							</span>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				@keyframes fade-in-up {
					0% {
						opacity: 0;
						transform: translateY(40px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in-up {
					animation: fade-in-up 1s cubic-bezier(.4, 0, .2, 1) both;
				}
				@keyframes fade-in {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				.animate-fade-in {
					animation: fade-in 1.2s cubic-bezier(.4, 0, .2, 1) both;
				}
				.delay-200 {
					animation-delay: .2s;
				}
				@keyframes skill-float {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-12px);
					}
				}
				.animate-skill-float {
					animation: skill-float 2.5s ease-in-out infinite;
				}
				@keyframes bounce-skill {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-8px);
					}
				}
				.animate-bounce-skill {
					animation: bounce-skill 1.5s infinite;
				}
			`}</style>
		</section>
	);
};

export default Skills;

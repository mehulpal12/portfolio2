"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Experience", href: "/experience" },
	{ name: "Skills", href: "/skills" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="w-full bg-black text-white text-sm sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between py-1  text-sm">
				{/* Left: Name */}
				<div className="text-2xl text-orange-400 font-bold flex flex-col">
					Mehul Pal
					<span className="text-sm text-gray-200 font-light -mt-2">
						{" "}
						Frontend Developer
					</span>
				</div>
				{/* Desktop Nav */}
				<ul className="hidden md:flex border rounded-4xl gap-2 border-gray-600 px-2 py-2 items-center text-sm   overflow-x-hidden min-w-0">
					{navLinks.map((link) => (
						<li key={link.name} className="">
							<Button
								asChild
								variant="ghost"
								className="text-white hover:bg-transparent hover:text-gray-400 hover:border rounded-lg text-sm"
							>
								<a href={link.href} className="text-[0.8rem]">
									{link.name}
								</a>
							</Button>
						</li>
					))}
				</ul>
				{/* Mobile Toggle */}
				<button
					className="md:hidden focus:outline-none text-sm"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					{menuOpen ? (
						<X className="h-7 w-7 text-white text-sm" />
					) : (
						<Menu className="h-7 w-7 text-white text-sm" />
					)}
				</button>
			</div>
			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-black border-t border-gray-800 animate-fade-in-down text-sm">
					<ul className="flex flex-col gap-4 py-6 px-8 text-sm">
						{navLinks.map((link) => (
							<li key={link.name} className="text-sm">
								<Button
									asChild
									variant="ghost"
									className="text-white font-medium w-full justify-start hover:text-gray-300 text-sm"
								>
									<a
										href={link.href}
										onClick={() => setMenuOpen(false)}
										className="text-sm"
									>
										{link.name}
									</a>
								</Button>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

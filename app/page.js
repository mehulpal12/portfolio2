import Navbar from "@/components/navbar";
import Image from "next/image";
import About from "@/components/about";
import Skill from "@/components/skills";
import Sections from "@/components/sections";
import Project from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
   <>
    <Navbar/>
    <Sections/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
   </>
  );
}

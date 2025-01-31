// src/components/Navbar.jsx
import { motion } from "framer-motion";
import '../styles/Start.css';

function Start() {

    const techIcons = [
        "html5", "css3", "javascript", "react", "nodejs", "typescript", "git", "github"
    ];

    const projects = [
        { name: "Projekt 1", tech: "React, Tailwind" },
        { name: "Projekt 2", tech: "Next.js, Firebase" }
    ];
    return (
        <div className="start-container">
            <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hej, jag är <span className="text-blue-400">[Ditt Namn]</span>
                </motion.h1>
                <motion.p
                    className="text-lg mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Utvecklare | Designer | Tech Entusiast
                </motion.p>
            </section>
            <div className="bg-black py-10 overflow-hidden">
                <motion.div
                    className="flex space-x-10 text-5xl text-white"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {techIcons.map((icon, index) => (
                        <i key={index} className={`devicon-${icon}-plain`}></i>
                    ))}
                </motion.div>
            </div>
            <section id="projects" className="py-10 bg-gray-800 text-white">
                <h2 className="text-3xl text-center">Mina Projekt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-4 bg-gray-700 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="text-sm text-gray-300">{project.tech}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section id="contact" className="py-10 bg-black text-white text-center">
                <h2 className="text-3xl">Kontakt</h2>
                <p className="mt-2">Maila mig på: <a href="mailto:example@mail.com" className="text-blue-400">example@mail.com</a></p>
            </section>
        </div>
    );
}
export default Start;

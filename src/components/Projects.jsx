import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Nivsjewels', stack: 'Reactjs, Php, MySQL', url: 'https://nivsjewels.com', image: '/assets/works/Screenshot (68).png' },
    { title: 'AmbisGroup', stack: 'Html, Css, Bootstrap, Php', url: 'https://ambisgroup.in', image: '/assets/works/Screenshot (69).png' },
    { title: 'Utsarvajewels', stack: 'Html, Css, Bootstrap, Php', url: 'https://utsarvajewels.com', image: '/assets/works/Screenshot (70).png' },
    { title: 'Saayal Events', stack: 'Html, Css, Bootstrap, Php', url: 'https://saayal.in', image: '/assets/works/Screenshot (71).png' },
    { title: 'Lotushealth', stack: 'Html, Css, Bootstrap, Php', url: 'https://lotushealth.life', image: '/assets/works/Screenshot (72).png' },
    { title: 'Sheetal PMS', stack: 'Linux, Apache, Tailwind', image: '/assets/works/Screenshot (73).png' },
    { title: 'Hashchat', stack: 'Nodejs, React, Socket.io', image: '/assets/works/Screenshot (74).png' },
    { title: 'Hashday.in', stack: 'Html, Css, Php, MySQL', url: 'https://hashday.in', image: '/assets/works/Screenshot (75).png' },
    { title: 'Techvedhu', stack: 'Reactjs, Tailwind, Php', url: 'https://techvedhu.com', image: '/assets/works/Screenshot (76).png' },
    { title: 'sunscientific', stack: 'Html, Css, Php, MySQL', url: 'https://sunscientificcompany.com', image: '/assets/works/Screenshot (77).png' },
];

import TiltCard from './TiltCard';

const Projects = () => {
    return (
        <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Selected <span className="text-sky-500">Works</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="h-full">
                            <TiltCard className="glass-card p-0 overflow-hidden h-full">
                                <div className="relative overflow-hidden h-48 w-full group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                        style={{ transform: "translateZ(60px)" }}
                                    >
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-2 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors pointer-events-auto"
                                                style={{ transform: "translateZ(10px)" }}
                                            >
                                                Visit Site
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-sky-500 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.stack}</p>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;

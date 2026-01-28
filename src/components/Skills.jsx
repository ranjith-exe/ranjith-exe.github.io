import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const activeSkills = [
    { name: 'HTML', color: 'bg-orange-500', icon: '/src/assets/html.svg' },
    { name: 'CSS', color: 'bg-blue-500', icon: '/src/assets/css.svg' },
    { name: 'Tailwind', color: 'bg-cyan-500', icon: '/src/assets/tailwindcss.svg' },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: '/src/assets/javascript.svg' },
    { name: 'React JS', color: 'bg-cyan-600', icon: '/src/assets/reactjs.svg' },
    { name: 'Node JS', color: 'bg-green-600', icon: '/src/assets/nodejs.svg' },
    { name: 'Express', color: 'bg-gray-800', icon: '/src/assets/expressjs.svg' },
    { name: 'MySQL', color: 'bg-blue-700', icon: '/src/assets/mysql.svg' },
    { name: 'PHP', color: 'bg-indigo-700', icon: '/src/assets/php.svg' },
    { name: 'Git', color: 'bg-red-500', icon: '/src/assets/git.svg' },
    { name: 'Apache', color: 'bg-red-600', icon: '/src/assets/apache.svg' },
    { name: 'Bootstrap', color: 'bg-purple-500', icon: '/src/assets/bootstrap.svg' },
    { name: 'Figma', color: 'bg-pink-400', icon: '/src/assets/figma.svg' },
    { name: 'Postman', color: 'bg-orange-500', icon: '/src/assets/postman.svg' },
    { name: 'cPanel', color: 'bg-orange-600', icon: '/src/assets/cpanel.svg' },
    { name: 'Socket.io', color: 'bg-gray-700', icon: '/src/assets/socketio.svg' },
    { name: 'Vite', color: 'bg-indigo-500', icon: '/src/assets/vite.svg' },
    { name: 'npm', color: 'bg-red-500', icon: '/src/assets/npm.svg' },
];

const Skills = () => {
    return (
        <section className="py-10 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm">Tech Stack</h3>

                <div className="flex flex-wrap justify-center gap-6">
                    {activeSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="animate-float w-28 h-28"
                            style={{ animationDelay: `${index * 0.2}s` }} // Stagger animations
                        >
                            <TiltCard
                                className="glass rounded-xl group cursor-default"
                            >
                                <div className="flex flex-col items-center justify-center h-full w-full gap-3 p-4">
                                    <img src={skill.icon} alt={skill.name} className="w-14 h-14 group-hover:scale-110 transition-transform duration-300 bg-white/10 rounded-full p-2" />
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 dark:bg-white/10 dark:text-white group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;

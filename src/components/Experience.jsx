import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const experiences = [
    {
        company: 'Hashday.in',
        role: 'Fullstack WebDeveloper',
        period: 'February 2024 - Now',
        description: 'Maintaing and adding new features to an Application Portal for an Webapp. Tech stack includes: Php, Mysql, JavaScript, jQuery.'
    },
    {
        company: 'AmbisGroup',
        role: 'Fullstack WebDeveloper',
        period: 'December 2021 - November 2025',
        description: 'Worked as a full-stack developer, building e-commerce platforms and web applications for the jewelry industry and rehabilitation centers.'
    }
];

const Experience = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-sky-500">Experience</span>
                </h2>

                <div className="relative border-l-2 border-sky-500/30 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500 border-4 border-gray-900 dark:border-[#0a0a0a]" />

                            <TiltCard className="glass-card relative hover:border-sky-500/30 transition-colors p-6">
                                <span className="text-sm text-sky-500 font-mono mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {exp.description}
                                </p>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

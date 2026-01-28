import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    About <span className="text-sky-500">Me</span>
                </h2>

                <TiltCard className="glass-card p-8 md:p-10">
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        I'm a passionate full-stack developer with a solid foundation in
                        computer science. Proficient in the LAMP stack, Node.js, Express,
                        WebSockets, and CRUD operations, I specialize in creating dynamic
                        websites, CRMs, e-commerce platforms, and web applications.
                        <br /><br />
                        I thrive on connecting front-end and back-end technologies to deliver seamless
                        user experiences. Outside of coding, I contribute to open-source
                        projects and stay up-to-date with the latest tech trends to
                        continuously evolve my skills.
                    </p>
                </TiltCard>
            </motion.div>
        </section>
    );
};

export default About;

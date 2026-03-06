import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get in <span className="text-sky-500">Touch</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <TiltCard className="glass-card flex items-center gap-4 p-6">
                            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-500">
                                <i className="ri-mail-line text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                                <p className="text-lg font-semibold">ranjithmercer@email.com</p>
                            </div>
                        </TiltCard>

                        <TiltCard className="glass-card flex items-center gap-4 p-6">
                            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-500">
                                <i className="ri-map-pin-line text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                                <p className="text-lg font-semibold">Coimbatore, Tamilnadu - India</p>
                            </div>
                        </TiltCard>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                {[
                                    { name: 'facebook', url: '#' },
                                    { name: 'twitter', url: '#' },
                                    { name: 'instagram', url: 'https://www.instagram.com/ranjith.exe' },
                                    { name: 'youtube', url: 'https://www.youtube.com/channel/UChW-YPRQUTzm_U3BkDlGrUg' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1"
                                    >
                                        <i className={`ri-${social.name}-line text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form className="w-full md:w-1/2">
                        <TiltCard className="glass-card space-y-6 p-8">
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-70">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-70">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-70">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    placeholder="Hello! I'd like to discuss a project..."
                                ></textarea>
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-sky-500/30 transition-all hover:-translate-y-1">
                                Send Message
                            </button>
                        </TiltCard>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 py-8 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © 2026 Ranjith Govindasamy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Contact;

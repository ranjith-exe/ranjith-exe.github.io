import React from 'react';
import { motion } from 'framer-motion';

const services = [
    { title: 'Custom Website Solutions', icon: 'ri-code-box-line', desc: 'Get a website tailored to your business needs, built for speed, security, and scalability.' },
    { title: 'Reliable Support & Maintenance', icon: 'ri-customer-service-2-line', desc: 'Stay worry-free with continuous updates, security patches, and technical assistance.' },
    { title: 'On-Time Project Delivery', icon: 'ri-timer-line', desc: 'Get your website or application launched on schedule without unnecessary delays.' },
    { title: 'Smart Business Solutions', icon: 'ri-lightbulb-line', desc: 'Optimize your operations with custom-built tools, automation, and seamless integrations.' },
    { title: 'Mobile & SEO Optimized', icon: 'ri-smartphone-line', desc: 'Ensure your website ranks well on Google and works smoothly on all devices.' },
    { title: 'Secure & Scalable Websites', icon: 'ri-shield-keyhole-line', desc: 'Future-proof your business with a highly secure and scalable online presence.' },
];

import TiltCard from './TiltCard';

const Services = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    What I <span className="text-sky-500">Offer</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <TiltCard key={index} className="glass-card p-8 group h-full">
                            <i className={`${service.icon} text-4xl text-sky-500 mb-6 block group-hover:scale-110 transition-transform`}></i>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </TiltCard>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;

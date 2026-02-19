import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={heroBg} alt="College Campus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-ajce-teal-dark/90 to-ajce-blue/80 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-ajce-gold font-bold text-sm tracking-widest shadow-lg"
                >
                    ADMISSIONS OPEN 2026-27
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight drop-shadow-lg font-serif"
                >
                    Empowering Future <span className="text-ajce-gold">Engineers</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
                >
                    Amal Jyothi College of Engineering
                    <br />
                    <span className="text-base text-gray-300 mt-2 block font-normal tracking-wider">Startups Valley TBI • NAAC 'A' Grade • NBA Accredited</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link to="/admissions" className="bg-ajce-gold text-ajce-dark font-bold py-4 px-10 rounded-full hover:bg-white hover:text-ajce-teal transition-all shadow-xl transform hover:-translate-y-1 hover:scale-105">
                        Apply Online
                    </Link>
                    <Link to="/departments" className="bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-ajce-teal transition-all shadow-lg transform hover:-translate-y-1 hover:scale-105">
                        Explore Programs
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;


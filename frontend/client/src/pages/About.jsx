import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Globe, ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-blue-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${heroBg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/80 z-10"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6 relative z-20 text-center text-white"
                >
                    <span className="inline-block py-1 px-3 border border-blue-200/30 rounded-full text-xs font-bold tracking-widest mb-4 bg-white/10 backdrop-blur-sm uppercase">Est. 2001</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">Empowering Future Engineers</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        A legacy of excellence in technical education, research, and innovation.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 py-20">
                {/* Vision & Mission Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-32 relative z-30 mb-20"
                >
                    <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-ajce-teal">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-ajce-teal mb-6">
                            <Globe size={32} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To be a centre of excellence in technical higher education, research and support services, capable of making significant contribution to individual and societal empowerment.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-ajce-gold">
                        <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-ajce-gold mb-6">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To create technically qualified, world-class professionals with social commitment through a career-oriented training system.
                        </p>
                    </motion.div>
                </motion.div>

                {/* History Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-ajce-teal font-bold tracking-widest uppercase mb-2">Our History</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">A Journey of Excellence</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Founded in 2001 by the Catholic Diocese of Kanjirappally, Amal Jyothi College of Engineering has grown to become one of the premier engineering institutions in Kerala.
                            </p>
                            <p>
                                Starting with just four branches of engineering, the college now offers B.Tech in 10 streams, M.Tech in various specializations, and MCA programs. It stands as a testament to the visionary leadership and commitment to quality education.
                            </p>
                            <p>
                                We are the first self-financing engineering college in Kerala to be accredited with an 'A' grade by NAAC, and our prime departments are NBA accredited, ensuring global standards in education.
                            </p>
                        </div>
                        <button className="mt-8 flex items-center gap-2 text-ajce-teal font-bold hover:gap-3 transition-all">
                            Read Full History <ChevronRight size={20} />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-ajce-teal/10 rounded-3xl transform rotate-3"></div>
                        <img
                            src={heroBg}
                            alt="College Campus"
                            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>

                {/* Key Highlights */}
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-blue-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why Choose Amal Jyothi?</h2>
                        <div className="w-20 h-1 bg-ajce-gold mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors">
                            <div className="text-ajce-teal mb-4 flex justify-center"><Award size={48} /></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">NAAC 'A' Grade</h3>
                            <p className="text-gray-600">First self-financing college in Kerala to achieve this prestigious accreditation.</p>
                        </div>
                        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors">
                            <div className="text-ajce-teal mb-4 flex justify-center"><Users size={48} /></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Top Placements</h3>
                            <p className="text-gray-600">Consistently high placement records with top-tier MNCs and core companies.</p>
                        </div>
                        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors">
                            <div className="text-ajce-teal mb-4 flex justify-center"><Globe size={48} /></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Startups Valley</h3>
                            <p className="text-gray-600">Home to a multi-crore TBI project, nurturing innovation and entrepreneurship.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

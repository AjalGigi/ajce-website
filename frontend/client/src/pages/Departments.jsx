
import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Cpu, Zap, Radio, FlaskConical, Database, Settings, Microscope } from 'lucide-react';

const Departments = () => {
    const departments = [
        { name: 'Computer Science', icon: <Code size={40} />, description: 'Leading the digital revolution with AI, ML, and Software Engineering.', url: "https://www.ajce.in/cse" },
        { name: 'Civil Engineering', icon: <PenTool size={40} />, description: 'Building the foundation of the future with sustainable infrastructure.', url: "https://www.ajce.in/ce" },
        { name: 'Mechanical Engineering', icon: <Settings size={40} />, description: 'Innovating machines and systems for a moving world.', url: "https://www.ajce.in/me" },
        { name: 'Electronics & Communication', icon: <Radio size={40} />, description: 'Connecting the world through advanced communication systems.', url: "https://www.ajce.in/ece" },
        { name: 'Electrical & Electronics', icon: <Zap size={40} />, description: 'Powering the future with efficient energy solutions.', url: "https://www.ajce.in/eee" },
        { name: 'Chemical Engineering', icon: <FlaskConical size={40} />, description: 'Transforming matter for better living standards.', url: "https://www.ajce.in/che" },
        { name: 'Information Technology', icon: <Database size={40} />, description: 'Managing information assets for the digital age.', url: "https://www.ajce.in/it" },
        { name: 'Metallurgy', icon: <Microscope size={40} />, description: 'Exploring materials for next-gen manufacturing.', url: "https://www.ajce.in/mme" },
        { name: 'Food Technology', icon: <FlaskConical size={40} />, description: 'Innovating food processing and safety standards.', url: "https://www.ajce.in/ft" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="min-h-screen bg-gray-50 pt-24 pb-12"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-ajce-dark mb-4">Our Departments</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our diverse range of engineering disciplines, each equipped with state-of-the-art laboratories and expert faculty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center text-ajce-teal mb-6 group-hover:bg-ajce-teal group-hover:text-white transition-colors duration-300">
                                {dept.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-ajce-teal transition-colors">{dept.name}</h3>
                            <p className="text-gray-600 leading-relaxed">{dept.description}</p>
                            <a
                                href={dept.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 font-bold text-ajce-teal text-sm tracking-wide uppercase group-hover:underline decoration-2 underline-offset-4"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Departments;

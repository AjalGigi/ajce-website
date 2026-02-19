import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, Trophy, Users, Cpu } from 'lucide-react';

const CampusLife = () => {
    const events = [
        { title: "Azure 2026", category: "Tech Fest", date: "Feb 12-14", icon: <Cpu />, color: "bg-blue-100 text-blue-600" },
        { title: "Arena 2026", category: "Sports Meet", date: "Mar 05-07", icon: <Trophy />, color: "bg-orange-100 text-orange-600" },
        { title: "Sargam 2026", category: "Arts Fest", date: "Jan 20-22", icon: <Music />, color: "bg-purple-100 text-purple-600" },
    ];

    const clubs = [
        { name: "IEDC", description: "Innovation and Entrepreneurship Development Centre", url: "https://iedc.ajce.in" },
        { name: "IEEE", description: "Institute of Electrical and Electronics Engineers Student Branch", url: "https://ieee.ajce.in" },
        { name: "GDSC", description: "Google Developer Student Clubs", url: "https://gdsc.ajce.in" },
        { name: "NSS", description: "National Service Scheme", url: "https://nss.ajce.in" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white"
        >
            <div className="bg-ajce-dark text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Campus Life</h1>
                    <p className="text-xl text-gray-300">Where learning meets celebration.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                {/* Events Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Calendar className="text-ajce-teal" size={32} />
                        <h2 className="text-3xl font-serif font-bold text-ajce-dark">Major Events</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all group">
                                <div className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center mb-6`}>
                                    {React.cloneElement(event.icon, { size: 24 })}
                                </div>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">{event.category}</span>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                <p className="text-ajce-teal font-medium">{event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clubs Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Users className="text-ajce-teal" size={32} />
                        <h2 className="text-3xl font-serif font-bold text-ajce-dark">Student Clubs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clubs.map((club, index) => (
                            <a
                                key={index}
                                href={club.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-ajce-teal transition-colors cursor-pointer text-center group block"
                            >
                                <h3 className="text-xl font-bold text-ajce-dark group-hover:text-ajce-teal transition-colors mb-2">{club.name}</h3>
                                <p className="text-sm text-gray-500">{club.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CampusLife;

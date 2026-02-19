import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, User } from 'lucide-react';

const Home = () => {

    const news = [
        { id: 1, title: "AJCE Selected as Nodal Centre for Smart India Hackathon", date: "Oct 15, 2025" },
        { id: 2, title: "International Conference on Green Energy Scheduled", date: "Nov 02, 2025" },
        { id: 3, title: "Placement Drive 2026 Kicks Off with Top MNCs", date: "Nov 10, 2025" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <Stats />

            {/* Welcome Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-ajce-teal font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose AJCE?</span>
                    <h2 className="text-4xl font-serif font-bold text-ajce-dark mb-8">Excellence in Education & Innovation</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg mb-12">
                        Amal Jyothi College of Engineering, Kanjirappally, is the first new generation engineering college in Kerala to secure the prestigious NAAC A grade accreditation. We are committed to providing value-based technical education that transforms students into socially responsible engineers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-ajce-teal/10 rounded-lg flex items-center justify-center text-ajce-teal mb-6">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-ajce-dark">Top Accreditation</h3>
                            <p className="text-gray-600">NAAC 'A' Grade and NBA accredited programs ensure the highest quality of education and global recognition.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-ajce-teal/10 rounded-lg flex items-center justify-center text-ajce-teal mb-6">
                                <User size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-ajce-dark">Expert Faculty</h3>
                            <p className="text-gray-600">Learn from highly qualified and experienced faculty members dedicated to student success and research.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-ajce-teal/10 rounded-lg flex items-center justify-center text-ajce-teal mb-6">
                                <Calendar size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-ajce-dark">Vibrant Campus</h3>
                            <p className="text-gray-600">Experience a dynamic campus life with technical fests, cultural events, and state-of-the-art facilities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* News & Updates */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-ajce-teal font-bold tracking-widest uppercase text-sm mb-2 block">Latest Happenings</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ajce-dark">News & Events</h2>
                        </div>
                        <Link to="/news" className="hidden md:flex items-center text-ajce-teal font-bold hover:text-ajce-teal-dark">
                            View All News <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                                <span className="text-sm text-gray-500 mb-2 block">{item.date}</span>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-ajce-teal transition-colors mb-4 line-clamp-2">{item.title}</h3>
                                <span className="text-ajce-teal text-sm font-bold flex items-center mt-auto">Read More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
                            </div>
                        ))}
                    </div>

                    <Link to="/news" className="md:hidden flex items-center justify-center text-ajce-teal font-bold hover:text-ajce-teal-dark mt-8">
                        View All News <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-ajce-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-ajce-teal/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Define Your Future?</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">Join a community of innovators, leaders, and dreamers. Apply now for the upcoming academic year.</p>
                    <Link to="/admissions" className="inline-block bg-ajce-gold text-ajce-dark font-bold py-4 px-12 rounded-full hover:bg-white hover:text-ajce-blue transition-all shadow-lg transform hover:-translate-y-1">
                        Apply Now
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;

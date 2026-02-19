import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gray-50 pt-24 pb-12"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-ajce-dark mb-4">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We'd love to hear from you. Reach out to us for any queries or scheduling a campus visit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-ajce-dark mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-ajce-teal shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Address</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Amal Jyothi College of Engineering<br />
                                            Kanjirappally, Koovappally P.O.<br />
                                            Kottayam, Kerala - 686518
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-ajce-teal shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+91 4828 305500, 305555</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-ajce-teal shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Email</h4>
                                        <p className="text-gray-600">info@amaljyothi.ac.in</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-ajce-teal shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Office Hours</h4>
                                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 4:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-2xl h-64 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                                Google Maps Embed Integration
                            </div>
                            {/* In a real app, use an iframe here */}
                            <div className="absolute inset-0 bg-ajce-teal/5"></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-ajce-dark mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">First Name</label>
                                    <input type="text" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-ajce-teal focus:ring-2 focus:ring-teal-50 transition-all text-gray-900 placeholder-gray-400" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">Last Name</label>
                                    <input type="text" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-ajce-teal focus:ring-2 focus:ring-teal-50 transition-all text-gray-900 placeholder-gray-400" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
                                <input type="email" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-ajce-teal focus:ring-2 focus:ring-teal-50 transition-all text-gray-900 placeholder-gray-400" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Subject</label>
                                <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-ajce-teal focus:ring-2 focus:ring-teal-50 transition-all text-gray-800">
                                    <option>General Inquiry</option>
                                    <option>Admissions</option>
                                    <option>Campus Visit</option>
                                    <option>Placement</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Message</label>
                                <textarea rows="4" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-ajce-teal focus:ring-2 focus:ring-teal-50 transition-all text-gray-900 placeholder-gray-400" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-ajce-teal text-white font-bold py-4 rounded-lg hover:bg-ajce-teal-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-blue-50 text-gray-800 pt-16 pb-8 border-t border-blue-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-ajce-teal font-bold text-xl">A</div>
                            <h3 className="text-xl font-bold font-serif">AJCE</h3>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Amal Jyothi College of Engineering is dedicated to creating world-class engineers and leaders through holistic education and innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-ajce-teal hover:text-white text-ajce-teal transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-ajce-teal hover:text-white text-ajce-teal transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-ajce-teal hover:text-white text-ajce-teal transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-ajce-teal hover:text-white text-ajce-teal transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-ajce-gold pl-3 text-ajce-dark">Quick Links</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link to="/about" className="hover:text-ajce-teal transition-colors">About Us</Link></li>
                            <li><Link to="/admissions" className="hover:text-ajce-teal transition-colors">Admissions</Link></li>
                            <li><Link to="/departments" className="hover:text-ajce-teal transition-colors">Departments</Link></li>
                            <li><Link to="/campus-life" className="hover:text-ajce-teal transition-colors">Campus Life</Link></li>
                            <li><Link to="/contact" className="hover:text-ajce-teal transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Departments */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-ajce-gold pl-3 text-ajce-dark">Departments</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link to="/departments" className="hover:text-ajce-teal transition-colors">Computer Science</Link></li>
                            <li><Link to="/departments" className="hover:text-ajce-teal transition-colors">Civil Engineering</Link></li>
                            <li><Link to="/departments" className="hover:text-ajce-teal transition-colors">Mechanical Engineering</Link></li>
                            <li><Link to="/departments" className="hover:text-ajce-teal transition-colors">Electronics & Communication</Link></li>
                            <li><Link to="/departments" className="hover:text-ajce-teal transition-colors">Chemical Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-ajce-gold pl-3 text-ajce-dark">Contact Us</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-ajce-teal shrink-0 mt-1" size={18} />
                                <span>Kanjirappally, Kottayam,<br />Kerala - 686518</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-ajce-teal shrink-0" size={18} />
                                <span>+91 4828 305500</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-ajce-teal shrink-0" size={18} />
                                <span>info@amaljyothi.ac.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-200 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Amal Jyothi College of Engineering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

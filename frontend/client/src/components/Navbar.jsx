import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from '../assets/amal.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topLinks = [
        { name: "PARENTS", url: "https://www.ajce.in/parents" },
        { name: "ALUMNI", url: "https://www.ajce.in/alumni" },
        { name: "IQAC", url: "https://www.ajce.in/iqac" },
        { name: "NAAC", url: "https://www.ajce.in/naac" },
        { name: "NBA", url: "https://www.ajce.in/nba" },
        { name: "NIRF", url: "https://www.ajce.in/nirf" },
        { name: "RESEARCH", url: "https://www.ajce.in/research" },
        { name: "PLACEMENTS", url: "https://www.ajce.in/placements" },
    ];

    const mainLinks = [
        { name: "ABOUT", path: "/about" },
        { name: "DEPARTMENTS", path: "/departments" },
        { name: "CAMPUS LIFE", path: "/campus-life" },
        { name: "ADMISSIONS", path: "/admissions" },
        { name: "CONTACT", path: "/contact" },
    ];

    const isDarkHeaderPage = location.pathname === "/" || location.pathname === "/admissions" || location.pathname === "/campus-life";
    const isScrolled = scrolled || !isDarkHeaderPage;

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 bg-blue-50 ${isScrolled ? 'shadow-md' : ''}`}>
            {/* Top Bar */}
            <div className="text-[10px] md:text-xs py-2 tracking-wider hidden md:block bg-blue-100 text-gray-800 border-b border-blue-200">
                <div className="container mx-auto px-6 flex justify-end gap-6">
                    {topLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-ajce-gold transition-colors flex items-center gap-1"
                        >
                            {link.name} <ExternalLink size={10} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`container mx-auto px-6 py-3 flex justify-between items-center transition-all`}>
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                    <img src={logo} alt="Amal Jyothi Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    <div>
                        <h1 className="font-serif font-bold text-lg md:text-xl leading-none text-gray-900">AMAL JYOTHI</h1>
                        <p className="text-[10px] md:text-xs tracking-widest font-medium text-gray-600">COLLEGE OF ENGINEERING</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-1 items-center font-bold text-sm">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-3 py-2 rounded-md transition-all duration-200 relative group font-bold ${location.pathname === link.path
                                ? 'text-ajce-teal bg-blue-100'
                                : 'text-gray-800 hover:text-ajce-teal hover:bg-blue-100'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-ajce-teal transition-transform origin-left duration-200 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </Link>
                    ))}
                    <Link to="/admissions" className="ml-4 px-5 py-2 rounded-full shadow-md hover:scale-105 transition-all transform text-xs tracking-wider font-extrabold bg-ajce-gold text-ajce-dark hover:bg-ajce-gold-hover">
                        APPLY NOW
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-gray-900">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col py-2">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-ajce-teal hover:border-l-4 hover:border-ajce-teal transition-all ${location.pathname === link.path ? 'bg-teal-50 text-ajce-teal border-l-4 border-ajce-teal' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2 px-6 grid grid-cols-2 gap-2">
                        {topLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-gray-500 py-2 hover:text-ajce-teal flex items-center gap-1"
                            >
                                {link.name} <ExternalLink size={10} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

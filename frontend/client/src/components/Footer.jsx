import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Amal Jyothi College of Engineering. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
                    <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

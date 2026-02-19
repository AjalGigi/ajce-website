import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, UserPlus, CreditCard } from 'lucide-react';

const Admissions = () => {
    const steps = [
        { id: 1, title: "Online Registration", description: "Fill out the application form on our portal.", icon: <UserPlus /> },
        { id: 2, title: "Document Verification", description: "Upload necessary certificates for verification.", icon: <FileText /> },
        { id: 3, title: "Fee Payment", description: "Pay the application and admission fees online.", icon: <CreditCard /> },
        { id: 4, title: "Confirmation", description: "Receive your admission confirmation letter.", icon: <CheckCircle /> },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white min-h-screen"
        >
            <div className="bg-ajce-teal text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div> {/* Contrast Overlay */}
                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold tracking-widest mb-4 bg-white/10 backdrop-blur-sm">ACADEMIC YEAR 2026-27</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-md">Join the Legacy</h1>
                    <p className="text-xl text-teal-50 max-w-2xl mx-auto font-medium drop-shadow-sm">Start your journey towards engineering excellence today.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-serif font-bold text-ajce-dark text-center mb-16">Admission Process</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <div className="w-16 h-16 bg-ajce-gold mx-auto rounded-full flex items-center justify-center text-ajce-dark mb-6 shadow-md border-4 border-white">
                                {React.cloneElement(step.icon, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="bg-gray-50 p-10 rounded-2xl max-w-3xl mx-auto border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Assistance?</h3>
                        <p className="text-gray-700 mb-8 font-medium">
                            Our admission counselors are here to guide you through the process. <br />
                            Call us at <span className="font-bold text-ajce-teal">+91 4828 305555</span> or email <span className="font-bold text-ajce-teal">admissions@amaljyothi.ac.in</span>
                        </p>
                        <button className="bg-ajce-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-ajce-teal transition-colors shadow-lg">
                            Download Prospectus
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Admissions;

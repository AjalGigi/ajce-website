
import React from 'react';

const Placements = () => {
    const stats = [
        { label: "Placement Rate", value: "80%+" },
        { label: "Highest Package", value: "33 LPA" },
        { label: "Average Package", value: "4-5 LPA" },
        { label: "Recruiters", value: "50+" }
    ];

    const recruiters = [
        "TCS", "Infosys", "IBM", "HDFC Bank", "SOTI",
        "UST Global", "Wipro", "Mahindra", "Cognizant", "Speridian"
    ];

    return (
        <section id="placements" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
                        Placement <span className="text-ajce-teal">Highlights</span>
                    </h2>
                    <div className="w-24 h-1 bg-ajce-gold mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Amal Jyothi College of Engineering has a consistent track record in placements,
                        preparing students for successful careers in top-tier companies.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-ajce-teal">
                            <h3 className="text-3xl md:text-4xl font-bold text-ajce-teal mb-2">{stat.value}</h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Recruiters Section */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Top Recruiters</h3>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-70">
                        {recruiters.map((company, index) => (
                            <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg text-lg font-bold text-gray-400 hover:text-ajce-teal hover:bg-teal-50 transition-colors cursor-default">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Placements;

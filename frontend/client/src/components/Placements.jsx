
import React from 'react';

const Placements = () => {
    const stats = [
        { label: "Placement Rate", value: "80%+" },
        { label: "Highest Package", value: "33 LPA" },
        { label: "Average Package", value: "4-5 LPA" },
        { label: "Recruiters", value: "50+" }
    ];

    const recruiters = [
        { name: "TCS", logo: "https://ui-avatars.com/api/?name=TCS&background=random&color=fff&size=128" },
        { name: "Infosys", logo: "https://ui-avatars.com/api/?name=Infosys&background=random&color=fff&size=128" },
        { name: "IBM", logo: "https://ui-avatars.com/api/?name=IBM&background=random&color=fff&size=128" },
        { name: "Wipro", logo: "https://ui-avatars.com/api/?name=Wipro&background=random&color=fff&size=128" },
        { name: "Cognizant", logo: "https://ui-avatars.com/api/?name=Cognizant&background=random&color=fff&size=128" },
        { name: "UST", logo: "https://ui-avatars.com/api/?name=UST&background=random&color=fff&size=128" },
        { name: "SOTI", logo: "https://ui-avatars.com/api/?name=SOTI&background=random&color=fff&size=128" },
        { name: "HDFC Bank", logo: "https://ui-avatars.com/api/?name=HDFC+Bank&background=random&color=fff&size=128" },
        { name: "L&T", logo: "https://ui-avatars.com/api/?name=L&T&background=random&color=fff&size=128" },
        { name: "Bosch", logo: "https://ui-avatars.com/api/?name=Bosch&background=random&color=fff&size=128" },
        { name: "MRF", logo: "https://ui-avatars.com/api/?name=MRF&background=random&color=fff&size=128" },
        { name: "Tata Motors", logo: "https://ui-avatars.com/api/?name=Tata+Motors&background=random&color=fff&size=128" },
        { name: "Royal Enfield", logo: "https://ui-avatars.com/api/?name=Royal+Enfield&background=random&color=fff&size=128" },
        { name: "Ashok Leyland", logo: "https://ui-avatars.com/api/?name=Ashok+Leyland&background=random&color=fff&size=128" },
        { name: "Federal Bank", logo: "https://ui-avatars.com/api/?name=Federal+Bank&background=random&color=fff&size=128" },
        { name: "Sobha", logo: "https://ui-avatars.com/api/?name=Sobha&background=random&color=fff&size=128" },
        { name: "V-Guard", logo: "https://ui-avatars.com/api/?name=V-Guard&background=random&color=fff&size=128" },
        { name: "Nissan", logo: "https://ui-avatars.com/api/?name=Nissan&background=random&color=fff&size=128" },
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
                        preparing students for successful careers in top-tier companies across all disciplines.
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

                {/* Recruiters Section (Logo Wall) */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-8 text-center text-ajce-teal uppercase tracking-wider">Our Top Recruiters</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center items-center">
                        {recruiters.map((company, index) => (
                            <div key={index} className="w-full flex justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors group">
                                <img
                                    src={company.logo}
                                    alt={`${company.name} Logo`}
                                    className="max-h-12 md:max-h-16 opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Placements;

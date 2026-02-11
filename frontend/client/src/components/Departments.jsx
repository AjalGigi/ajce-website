import React from 'react';

const Departments = () => {
    const depts = [
        { name: "Computer Science", code: "CSE", color: "bg-blue-500", icon: "💻" },
        { name: "Electronics & Comm.", code: "ECE", color: "bg-green-500", icon: "📡" },
        { name: "Mechanical Engg", code: "ME", color: "bg-orange-500", icon: "⚙️" },
        { name: "Civil Engineering", code: "CE", color: "bg-yellow-600", icon: "🏗️" },
        { name: "Electrical & Electronics", code: "EEE", color: "bg-red-500", icon: "⚡" },
        { name: "Information Tech", code: "IT", color: "bg-indigo-500", icon: "🖥️" },
        { name: "Chemical Engg", code: "CHE", color: "bg-purple-500", icon: "⚗️" },
        { name: "Metallurgy", code: "MME", color: "bg-gray-600", icon: "🔨" }
    ];

    return (
        <section id="departments" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-ajce-teal/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-ajce-gold/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-ajce-teal to-blue-600">Departments</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-ajce-teal to-ajce-gold mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover our diverse range of engineering distinctions, where innovation meets excellence in education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {depts.map((dept) => (
                        <div key={dept.code} className="group relative bg-white rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 border border-gray-100 hover:border-ajce-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full">

                            {/* Top Accent Gradient */}
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${dept.color.replace('bg-', 'from-').replace('500', '400')} to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div>
                                {/* Icon Container */}
                                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-all duration-300 ${dept.color} bg-opacity-10 group-hover:scale-110 group-hover:rotate-3`}>
                                    <span className="drop-shadow-sm filter grayscale-0">{dept.icon}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ajce-teal transition-colors font-serif tracking-wide">
                                    {dept.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Offers B.Tech, M.Tech, and Ph.D. programs with state-of-the-art labs and research facilities.
                                </p>
                            </div>

                            {/* Bottom Action Area */}
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:text-white group-hover:${dept.color} transition-colors uppercase tracking-wider`}>
                                    {dept.code}
                                </span>
                                <span className="text-sm font-semibold text-ajce-teal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center">
                                    Explore <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;

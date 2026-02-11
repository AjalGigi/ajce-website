import React from 'react';

const Faculty = () => {
    const facultyMembers = [
        { name: "Dr. Juby Mathew", designation: "HOD & Professor", image: null },
        { name: "Shiney Thomas", designation: "Associate Professor", image: null },
        { name: "Syam Gopi", designation: "Assistant Professor", image: null },
        { name: "Dr. Jacob John", designation: "Professor", image: null },
        { name: "Dr. Sinciya P O", designation: "Associate Professor", image: null },
        { name: "Dr. Anju J Prakash", designation: "Assistant Professor", image: null },
        { name: "Fabeela Ali Rawther", designation: "Assistant Professor", image: null },
        { name: "Resmipriya M G", designation: "Assistant Professor", image: null },
        { name: "Elisabeth Thomas", designation: "Assistant Professor", image: null },
        { name: "Dr. Indu John", designation: "Associate Professor", image: null },
        { name: "Mekha Jose", designation: "Assistant Professor", image: null },
        { name: "Anu Rose Joy", designation: "Assistant Professor", image: null },
        { name: "Honey Joseph", designation: "Assistant Professor", image: null },
        { name: "Lida K Kuriakose", designation: "Assistant Professor", image: null },
        { name: "Bibin Varghese", designation: "Assistant Professor", image: null },
        { name: "Lis Jose", designation: "Assistant Professor", image: null },
        { name: "Linsa Mathew", designation: "Assistant Professor", image: null },
        { name: "Minu Cherian", designation: "Assistant Professor", image: null },
        { name: "Dr. Terry Jacob Mathew", designation: "Adhoc Professor", image: null },
        { name: "Sandra S Nair", designation: "Assistant Professor", image: null },
        { name: "Arun M R", designation: "Lab Instructor Grade I", image: null },
        { name: "Manoj Joseph", designation: "Lab Instructor Grade II", image: null },
        { name: "Sebastian A", designation: "Lab Instructor", image: null }
    ];

    return (
        <section id="faculty" className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Our Faculty</h2>
                    <div className="w-24 h-1 bg-linear-to-r from-ajce-teal to-ajce-blue mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4">
                        Meet the dedicated team of educators and researchers shaping the future of technology at AJCE.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {facultyMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center group border border-gray-100 hover:border-ajce-teal/30">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-3xl group-hover:bg-ajce-teal/10 group-hover:text-ajce-teal transition-colors">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                ) : (
                                    <span>👤</span>
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-ajce-teal transition-colors">{member.name}</h3>
                            <p className="text-sm text-ajce-blue font-medium">{member.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;

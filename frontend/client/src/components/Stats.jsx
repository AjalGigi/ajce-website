
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const stats = [
        { label: "Years of Excellence", value: 25, suffix: "+" },
        { label: "Students", value: 3000, suffix: "+" },
        { label: "Faculty Members", value: 250, suffix: "+" },
        { label: "Placement Offers", value: 1000, suffix: "+" },
    ];

    return (
        <section className="py-20 bg-ajce-teal text-white" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <h3 className="text-4xl md:text-5xl font-bold mb-2 font-serif text-ajce-gold">
                                {isInView ? <CountUp end={stat.value} duration={2.5} separator="," /> : 0}
                                {stat.suffix}
                            </h3>
                            <p className="text-gray-100 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

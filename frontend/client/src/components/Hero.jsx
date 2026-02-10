// Add import
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section className="relative text-white min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img src={heroBg} alt="College Campus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/80 mix-blend-multiply"></div>
            </div>

            {/* Abstract Background Patterns */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 left-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-400 font-bold text-sm tracking-wide shadow-sm">
                    ADMISSIONS OPEN 2026-27
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
                    Amal Jyothi College of Engineering
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                    Startups Valley TBI <span className="mx-2 text-yellow-400">•</span> NAAC 'A' Grade <span className="mx-2 text-yellow-400">•</span> NBA Accredited
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <a href="#admissions" className="bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-teal-900 transition-all shadow-lg transform hover:-translate-y-1">
                        Apply Online
                    </a>
                    <a href="#departments" className="bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-teal-900 transition-all transform hover:-translate-y-1">
                        View Programs
                    </a>
                </div>
            </div>

            {/* Unique Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" className="w-full h-auto text-white fill-current">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;


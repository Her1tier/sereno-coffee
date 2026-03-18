import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navigation only when scrolling down past a threshold, unless menu is open
            if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isMenuOpen]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* Floating Navigation Pill */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                <div className="bg-white px-6 py-4 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-between gap-12 md:gap-32 border border-brand-dark/5">

                    {/* Left Icon / Logo Mark */}
                    <div className="flex items-center">
                        <svg className="w-8 h-8 text-brand-accent" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                            <circle cx="12" cy="9" r="2" />
                        </svg>
                    </div>

                    {/* Center Text Logo */}
                    <a href="#" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-bold tracking-[0.2em] text-brand-dark uppercase">
                        Sereno
                    </a>

                    {/* Right Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex flex-col gap-[5px] p-2 hover:opacity-70 transition-opacity"
                        aria-label="Open Menu"
                    >
                        <span className="w-6 h-[2px] bg-brand-dark block rounded-full"></span>
                        <span className="w-6 h-[2px] bg-brand-dark block rounded-full"></span>
                    </button>

                </div>
            </nav>

            {/* Full Screen Overlay Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white w-[90%] md:w-auto md:min-w-[600px] max-w-3xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden relative"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center mb-8 md:mb-12">
                                <svg className="w-8 h-8 text-brand-accent" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                                    <circle cx="12" cy="9" r="2" />
                                </svg>

                                <span className="text-xl md:text-2xl font-bold tracking-[0.2em] text-brand-dark uppercase absolute left-1/2 -translate-x-1/2">
                                    Sereno
                                </span>

                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-brand-dark" strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Modal Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12 items-center">

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-3 md:space-y-5">
                                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl hover:text-brand-dark text-brand-dark/80 transition-colors font-medium tracking-tight">
                                        Our Story
                                    </a>
                                    <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl hover:text-brand-dark text-brand-dark/80 transition-colors font-medium tracking-tight">
                                        Menu
                                    </a>
                                    <a href="#booking" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl hover:text-brand-dark text-brand-dark/80 transition-colors font-medium tracking-tight">
                                        Reservations
                                    </a>
                                    <a href="https://wa.me/250783343290" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl hover:text-brand-dark text-brand-dark/80 transition-colors font-medium tracking-tight">
                                        Order Online
                                    </a>
                                </div>

                                {/* Video / Image Card */}
                                <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-brand-dark group transform transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop"
                                        alt="Sereno Story"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-colors cursor-pointer">
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                                <svg className="w-3 h-3 text-brand-dark translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-sm">Our story</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-brand-dark/10 gap-3 md:gap-0">
                                <span className="text-brand-dark/50 text-xs md:text-sm font-medium tracking-wide">
                                    The finest dining experience in Musanze
                                </span>
                                <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto justify-between md:justify-end text-brand-dark/50 text-xs md:text-sm font-medium tracking-wide">
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

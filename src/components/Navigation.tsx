import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navigation only when scrolling down past a threshold
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-[#FBF7ED]/90 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="w-[calc(100%-40px)] md:w-[calc(100%-80px)] max-w-7xl mx-auto px-0 flex justify-between items-center">
                <a href="#" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-brand-dark' : 'text-[#FBF7ED]'}`}>
                    SERENO COFFEE
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#menu" className={`text-sm font-medium tracking-wide hover:text-brand-accent transition-colors ${isScrolled ? 'text-brand-dark' : 'text-[#FBF7ED]/90'}`}>
                        Menu
                    </a>
                    <a href="https://wa.me/250783343290" target="_blank" rel="noopener noreferrer" className={`px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-colors ${isScrolled ? 'bg-brand-dark text-[#FBF7ED] hover:bg-brand-accent' : 'bg-brand-accent text-[#FBF7ED] hover:bg-brand-dark hover:text-[#FBF7ED]'}`}>
                        Order Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className={isScrolled ? "text-brand-dark" : "text-[#FBF7ED]"} /> : <MenuIcon className={isScrolled ? "text-brand-dark" : "text-[#FBF7ED]"} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#FBF7ED] shadow-lg py-6 px-[40px] flex flex-col space-y-4">
                    <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-medium">
                        Menu
                    </a>
                    <a href="https://wa.me/250783343290" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="inline-block mt-4 px-6 py-3 bg-brand-accent text-[#FBF7ED] text-center font-semibold rounded-sm">
                        Order Now
                    </a>
                </div>
            )}
        </nav>
    );
}

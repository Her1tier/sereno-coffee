import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1768593396351-6dfccd1d38fe?auto=format&fit=crop&q=80&w=2000"
                    alt="Sereno Coffee Table"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for text readability with a gradient for the bottom */}
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-transparent to-black/80"></div>
            </div>

            {/* Main Center Content */}
            <div className="relative z-10 w-full flex flex-1 items-center justify-center pointer-events-none">
                {/* Center Big Text */}
                <div className="text-center flex flex-col items-center">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-serif text-[#FBF7ED] leading-[0.85] tracking-tight pb-1 md:pb-2"
                        >
                            SIP. SAVOR.
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden -mt-1 md:-mt-2">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-serif text-[#FBF7ED] leading-[0.85] tracking-tight pb-2"
                        >
                            SERENO
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 w-full z-10 pb-6 md:pb-12 pointer-events-none">
                <div className="w-[calc(100%-40px)] md:w-[calc(100%-80px)] max-w-7xl mx-auto px-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 pointer-events-auto">

                    {/* Bottom Left Paragraph */}
                    <div className="overflow-hidden md:max-w-[500px]">
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="text-[#FBF7ED]/90 text-sm md:text-base leading-relaxed font-normal">
                                Experience rich flavors, fresh ingredients, and unforgettable moments crafted with love at Sereno. Whether you're here for our premium coffee or a delicious meal, we offer the finest dining experience in Musanze.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom Right Reserve Button */}
                    <div className="overflow-hidden flex justify-end w-full md:w-auto p-2 -m-2">
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a href="#booking" className="inline-block px-6 py-3 md:px-8 md:py-4 border border-[#FBF7ED] text-[#FBF7ED] text-xs md:text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-[#FBF7ED] hover:text-brand-dark transition-all duration-300 shadow-xl pointer-events-auto backdrop-blur-sm">
                                Reserve a Table
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}

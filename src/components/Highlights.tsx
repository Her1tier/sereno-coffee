import { motion } from 'framer-motion';

export default function Highlights() {
    return (
        <section className="bg-brand-light py-24 z-20 relative">
            <div className="w-[calc(100%-40px)] md:w-[calc(100%-80px)] max-w-7xl mx-auto px-0">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-2 md:mb-4">
                        Sereno Experience
                    </h2>
                    <p className="text-brand-dark/60 text-lg uppercase tracking-widest">
                        A Glimpse into our sanctuary
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16 md:gap-32">
                    {/* Block 1 */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        {/* Top Big Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-[100vh] rounded-xl md:rounded-2xl overflow-hidden relative flex items-center justify-center p-6"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
                                alt="Sereno Cafe Interior"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Overlay for text readability */}
                            <div className="absolute inset-0 bg-black/30"></div>

                            {/* Centered Text */}
                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight">
                                    Sereno works in moments<br />it's never seen
                                </h3>
                            </div>
                        </motion.div>

                        {/* Bottom Row: 2 Images Left, 1 Description Right */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

                            {/* Image 1 (Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-[350px] md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden relative group"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=800&auto=format&fit=crop"
                                    alt="Pouring Coffee"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2">
                                    <span className="px-2 py-1 bg-black/20 backdrop-blur-md rounded-md text-white text-xs font-medium border border-white/10">Sereno Coffee</span>
                                </div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                    <span className="text-sm font-medium tracking-wide">Perfecting the pour</span>
                                </div>
                            </motion.div>

                            {/* Image 2 (Middle) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-[350px] md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden relative group"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=800&auto=format&fit=crop"
                                    alt="Barista at work"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2">
                                    <span className="px-2 py-1 bg-black/20 backdrop-blur-md rounded-md text-white text-xs font-medium border border-white/10">Sereno Coffee</span>
                                </div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                    <span className="text-sm font-medium tracking-wide">Crafting your morning</span>
                                </div>
                            </motion.div>

                            {/* Description Card (Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-[350px] md:h-[450px] rounded-xl md:rounded-2xl bg-[#FAF8F3] p-8 md:p-10 flex flex-col justify-center border border-brand-dark/5 shadow-sm overflow-y-auto"
                            >
                                <h3 className="text-lg md:text-xl font-medium tracking-tight text-brand-dark mb-6">
                                    Every coffee is different. Sereno works in yours.
                                </h3>
                                <p className="text-brand-dark/80 leading-relaxed text-sm md:text-base">
                                    We believe Sereno should be easy to use in the real-world, working harmoniously out-of-the-box. Hundreds of people in unique moments show Sereno how a coffee break is enjoyed each day, so Sereno can robustly handle the chaos of real life.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

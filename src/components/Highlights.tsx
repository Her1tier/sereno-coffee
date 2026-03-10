import { motion } from 'framer-motion';

const galleryImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", // Cafe interior peeps
    "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=800&auto=format&fit=crop", // People drinking coffee
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", // People chatting
    "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop", // Food styling
    "https://images.unsplash.com/photo-1623800330571-0f73587b1e42?q=80&w=800&auto=format&fit=crop", // Barista
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop", // People eating breakfast
];

export default function Highlights() {
    return (
        <section className="bg-brand-light relative z-20 sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
            <div className="w-full pt-24 pb-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-10 md:mb-16 px-6"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-2 md:mb-4">
                        Sereno Experience
                    </h2>
                    <p className="text-brand-dark/60 text-lg uppercase tracking-widest">
                        A Glimpse into our sanctuary
                    </p>
                </motion.div>

                {/* Auto-scrolling Gallery Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Shadow overlays for smooth edge fading */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling Track */}
                    <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-6 px-6">
                        {/* Duplicate array for seamless infinite scroll */}
                        {[...galleryImages, ...galleryImages].map((image, index) => (
                            <div
                                key={index}
                                className="w-[280px] md:w-[350px] aspect-[4/5] overflow-hidden rounded-xl flex-shrink-0"
                            >
                                <img
                                    src={image}
                                    alt={`Sereno Experience ${index}`}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

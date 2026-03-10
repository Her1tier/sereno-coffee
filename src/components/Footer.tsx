import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer id="footer" className="bg-brand-light text-brand-dark pt-20 pb-10 border-t border-brand-dark/10">
            <div className="w-[calc(100%-80px)] max-w-7xl mx-auto px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-2 border-brand-dark/20 pr-0 md:pr-12"
                    >
                        <a href="#" className="text-3xl font-bold tracking-tighter text-brand-dark block mb-4 md:mb-6">
                            SERENO COFFEE
                        </a>
                        <p className="text-brand-dark/70 font-normal text-balance mb-6 max-w-sm md:max-w-md">
                            Committed to delivering the finest dining experience in Musanze. Fresh ingredients, traditional recipes, and modern culinary techniques for every occasion.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-1 flex flex-col space-y-2"
                    >
                        <a href="#about" className="text-brand-dark/70 hover:text-brand-accent transition-colors font-medium">Our Story</a>
                        <a href="#menu" className="text-brand-dark/70 hover:text-brand-accent transition-colors font-medium">Menu</a>
                        <a href="#booking" className="text-brand-dark/70 hover:text-brand-accent transition-colors font-medium">Reservations</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-1 flex flex-col space-y-2"
                    >
                        <a href="#" className="text-brand-dark/70 hover:text-brand-accent transition-colors font-medium">Instagram</a>
                        <a href="#" className="text-brand-dark/70 hover:text-brand-accent transition-colors font-medium">Facebook</a>
                        <a href="#" className="text-brand-dark/70 hover:text-brand-accent transition-colors font-medium">Twitter</a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}

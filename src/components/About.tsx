import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-brand-light">
            <div className="w-[calc(100%-40px)] md:w-[calc(100%-80px)] max-w-7xl mx-auto px-0 flex flex-col">

                {/* Large Text Top/Left */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-11/12 xl:w-10/12 mb-12 md:mb-20 lg:mb-32"
                >
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-[40px] font-normal text-brand-dark leading-[1.3] md:leading-[1.2] tracking-tight text-balance">
                        Sereno Restaurant is committed to delivering the finest dining experience. We combine fresh ingredients, traditional recipes, and modern culinary techniques to serve delicious meals for every occasion. Our friendly staff and cozy ambiance make Sereno the perfect place to enjoy quality food, beverages, and coffee while creating unforgettable memories.
                    </p>
                </motion.div>

                {/* Small Grid Bottom/Right */}
                <div className="w-full lg:w-1/2 self-end">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { title: "Specialty Coffee", desc: "Expertly brewed, single-origin excellence." },
                            { title: "Artisanal Food", desc: "Breakfast, lunch, and daily fresh pastries." },
                            { title: "Location", desc: "Musanze City,\nRwanda" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col space-y-2"
                            >
                                <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm">{item.title}</h4>
                                <p className="text-base text-brand-dark/70 leading-tight max-w-[90%] whitespace-pre-line">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

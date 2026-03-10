import { motion } from 'framer-motion';

export default function Booking() {
    return (
        <section id="booking" className="py-24 relative bg-brand-light text-brand-dark">

            <div className="relative z-10 w-[calc(100%-80px)] max-w-7xl mx-auto px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:pr-12 text-balance text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 lg:mb-6">
                        Reserve a Table
                    </h2>
                    <p className="text-brand-dark/70 text-base lg:text-lg mb-8 font-normal leading-relaxed">
                        Whether it's a quiet morning coffee, a business lunch, or a weekend brunch with friends, guarantee your spot at Sereno Coffee.
                    </p>
                    <div className="space-y-6 flex flex-col items-center lg:items-start">
                        <div className="flex flex-col">
                            <span className="text-brand-accent font-semibold tracking-widest text-sm uppercase mb-1">Hours</span>
                            <span className="text-brand-dark/90">Mon-Sun: 7:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-brand-accent font-semibold tracking-widest text-sm uppercase mb-1">Contact</span>
                            <span className="text-brand-dark/90">+250 783 343 290</span>
                            <span className="text-brand-dark/90">info@sereno.rw</span>
                        </div>
                    </div>
                </motion.div>

                {/* Booking Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-brand-dark/5 text-brand-dark p-6 sm:p-8 md:p-12 rounded-sm shadow-xl relative mt-8 lg:mt-0"
                >

                    <h3 className="text-2xl font-bold mb-8">Make a Reservation</h3>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold tracking-wide text-brand-dark/80">Date</label>
                                <input type="date" className="p-3 border border-brand-dark/20 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all bg-brand-light" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold tracking-wide text-brand-dark/80">Time</label>
                                <input type="time" className="p-3 border border-brand-dark/20 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all bg-brand-light" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold tracking-wide text-brand-dark/80">Guests</label>
                                <select className="p-3 border border-brand-dark/20 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all bg-brand-light">
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold tracking-wide text-brand-dark/80">Special Requests</label>
                                <input type="text" placeholder="Optional" className="p-3 border border-brand-dark/20 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all bg-brand-light" />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold tracking-wide text-brand-dark/80">Name</label>
                            <input type="text" placeholder="John Doe" className="p-3 border border-brand-dark/20 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all bg-brand-light" required />
                        </div>

                        <button type="submit" className="w-full py-4 bg-brand-accent text-white font-bold tracking-widest uppercase rounded-sm hover:bg-brand-dark transition-colors duration-300 mt-4">
                            Confirm Booking
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}

export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section className="py-24 bg-brand-light">
            <div className="w-[calc(100%-80px)] max-w-7xl mx-auto px-0 mb-12 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
                    The Sereno Experience.
                </h2>
                <p className="text-brand-dark/60 text-lg uppercase tracking-widest">
                    A Glimpse into our sanctuary
                </p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 aspect-[2/1] md:aspect-[4/1]">
                {images.map((src, index) => (
                    <div key={index} className="w-full h-full relative overflow-hidden group">
                        <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/0 transition-colors duration-500 z-10"></div>
                        <img
                            src={src}
                            alt={`Sereno Gallery ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

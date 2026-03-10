import { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = {
    'Starters & Snacks': [
        { name: 'Sereno Chef Salad', description: 'Lettuce, onion, carrots, eggs, avocado, fried chicken, ham & cheese', price: '6,000 RWF' },
        { name: 'Chicken Caesar Salad', description: 'Chicken slice, lettuce, onion, crotons/toasted bread, tomatoes, grated cheese', price: '6,000 RWF' },
        { name: 'Sereno Garden Salad', description: 'Lettuce, tomatoes, cucumber, onion, avocado', price: '4,000 RWF' },
        { name: 'Egg & chapatti Rolex', description: 'Served with chips and salad', price: '4,500 RWF' },
        { name: 'Sambaza platter', description: 'With chips & Tatar sauce', price: '4,000 RWF' },
        { name: 'Soup of the day', description: 'Served with our homemade bread', price: 'Seasonal' },
    ],
    'Pizza & Pasta': [
        { name: 'Sereno pizza', description: 'Bolognese sauce, chicken, mushroom and cheese', price: '10,000 RWF' },
        { name: '4 Season pizza', description: 'Sausage, mushroom, chicken, fish and cheese', price: '8,000 RWF' },
        { name: 'Chicken pizza', description: 'Chicken and cheese', price: '7,000 RWF' },
        { name: 'Margarita pizza', description: 'Tomato sauce and cheese', price: '5,000 RWF' },
        { name: 'Chicken carbonara', description: 'Pasta with creamy chicken sauce', price: '7,000 RWF' },
        { name: 'Spaghetti Bolognese', description: 'Classic beef and tomato sauce', price: '5,000 RWF' },
    ],
    'Main Courses': [
        { name: 'Sereno Beef steak', description: 'In pepper sauce', price: '8,000 RWF' },
        { name: 'Grilled fish tilapia', description: 'With lemony butter sauce', price: '8,000 RWF' },
        { name: 'Beef mix', description: 'Fried beef cubes, potato cubes, peas, carrot cooked together', price: '7,000 RWF' },
        { name: 'Grilled captain fish', description: 'In mushroom sauce', price: '7,000 RWF' },
        { name: 'Chicken biryani rice', description: 'Spiced aromatic rice', price: '7,000 RWF' },
        { name: 'Club sandwich & fries', description: 'Slice of chicken, ham, onion & cheese', price: '5,000 RWF' },
    ],
    'Local Dishes': [
        { name: 'Whole chicken local stew', description: 'Traditional boilo', price: '25,000 RWF' },
        { name: 'Goat rib local stew', description: 'Irish potatoes, green banana, veg, fresh tomatoes', price: '8,000 RWF' },
        { name: 'Beef or Chicken Agatogo', description: 'Green banana, Irish potatoes, vegetables & peanuts', price: '6,000 RWF' },
        { name: 'Boiled sweet potato', description: 'With beans', price: '3,000 RWF' },
        { name: 'Umunyigi', description: 'With peanuts', price: '3,000 RWF' },
    ],
    'Coffee & Drinks': [
        { name: 'Cappuccino', description: 'Espresso with steamed milk and thick foam', price: '2,500 RWF' },
        { name: 'Latte', description: 'Espresso with steamed milk and light foam layer', price: '3,000 RWF' },
        { name: 'Fresh Juices & Smoothies', description: 'Refreshing seasonal fruits', price: 'Variable' },
        { name: 'African Tea & Herbs', description: 'Traditional local infused teas', price: '2,000 RWF' },
    ]
};

export default function Menu() {
    const [activeTab, setActiveTab] = useState<keyof typeof menuItems>('Starters & Snacks');

    return (
        <section id="menu" className="py-24 bg-brand-dark relative z-30">
            <div className="w-[calc(100%-80px)] max-w-7xl mx-auto px-0 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                {/* Left Side: Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-4 lg:sticky lg:top-36 relative mb-8 lg:mb-0"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FBF7ED] mb-2 sm:mb-4 text-balance">
                        Curated Offerings
                    </h2>
                    <p className="text-[#FBF7ED]/60 text-lg uppercase tracking-widest">
                        Takeaway & Sit-In
                    </p>
                </motion.div>

                {/* Right Side: Menu Items */}
                <div className="lg:col-span-8">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                    ? 'bg-brand-accent text-[#FBF7ED] shadow-md'
                                    : 'bg-white/5 text-[#FBF7ED] hover:bg-white/10 text-[#FBF7ED]/80 tracking-normal'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Menu Items Grid */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16 min-h-[500px] lg:min-h-[650px] content-start"
                    >
                        {menuItems[activeTab].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col border-b border-white/10 pb-6"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-[#FBF7ED] tracking-wide">
                                        {item.name}
                                    </h3>
                                    <span className="text-xl font-bold text-[#FBF7ED] tracking-wide whitespace-nowrap pl-4">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-brand-light/70 font-medium">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

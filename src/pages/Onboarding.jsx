import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, MapPin } from 'lucide-react';

const Onboarding = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-12 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-8">
                    <motion.div
                        variants={itemVariants}
                        className="bg-white dark:bg-slate-800 p-10 rounded-4xl shadow-premium border border-slate-100 dark:border-slate-700 flex flex-col items-center max-w-sm w-full"
                    >
                        <div className="mb-6 relative">
                            <ShoppingBag className="w-20 h-20 text-secondary" />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
                        </div>
                        <h1 className="font-display font-black text-5xl text-secondary tracking-tighter">SMART</h1>
                        <p className="font-bold text-primary tracking-[0.3em] text-[10px] uppercase mb-6">Cash and Carry</p>
                        <div className="bg-secondary px-8 py-3 rounded-full mb-4">
                            <p className="text-white font-bold text-3xl leading-none">سمارٹ</p>
                        </div>
                        <p className="text-secondary/60 font-medium italic text-lg mt-2">"Pay Less. Expect More.."</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="max-w-2xl mt-8">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
                            Premium Wholesale Grocery <br />
                            Now Serving <span className="text-primary">Narowal</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">
                            Experience Narowal's largest cash & carry. Premium quality, wholesale savings, and fast delivery to your door.
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
                    <div className="lg:col-span-5 hidden lg:block">
                        <div className="relative rounded-4xl overflow-hidden shadow-premium group">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6DXl6h8oRUgkhFn5PqkjI048jUZIBv2-UHiWDd3iXEZtybE7F3M4ogTFgMoESX17OQ2CCcJ7u__H_eIU1_L8pLIQ9VPJlNilTByV8Wybxw_lKAoSoTm7xoD85Y-qlz3FQyfmtGSzMNOHpvc8WHrH01kzx49kE2tHEbZjovridOlHJFpcjhWPKDu2EP1VN5x4kcB6H5s8gWvFSGMn4B9t9xuInfx0fIu3aeQgfAShNYhPRnwUZPaR9JVHErl-tE0ADq-fJcz0SB25J"
                                alt="Delivery"
                                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-80">Official Delivery Partner</p>
                                <h3 className="text-2xl font-bold">Fast & Secure</h3>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-12 rounded-4xl shadow-premium border border-slate-100 dark:border-slate-700">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Select Your Area</h3>
                            <p className="text-slate-500 text-sm">Where should we deliver your Smart orders?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {['Model Town', 'Civil Lines', 'Housing Colony'].map((area) => (
                                <label
                                    key={area}
                                    className="flex flex-col p-6 border-2 border-slate-50 dark:border-slate-700 rounded-3xl cursor-pointer hover:border-secondary transition-all group"
                                >
                                    <input type="radio" name="area" value={area} className="sr-only" />
                                    <MapPin className="w-6 h-6 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-slate-800 dark:text-slate-200">{area}</span>
                                    <span className="text-xs text-slate-400 mt-1">Available for Delivery</span>
                                </label>
                            ))}
                            <select className="p-6 border-2 border-slate-50 dark:border-slate-700 rounded-3xl bg-slate-50 dark:bg-slate-900 focus:border-secondary outline-none font-bold text-slate-500">
                                <option>Other Narowal Areas...</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={() => navigate('/home')}
                                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-5 rounded-3xl shadow-premium transition-all flex items-center justify-center gap-3 text-lg group"
                            >
                                Start Shopping Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full py-4 text-slate-400 font-bold hover:text-secondary transition-colors text-sm">
                                Already have an account? Sign In
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-12 text-center">
                <div className="flex justify-center gap-10 mb-8 font-bold text-xs uppercase tracking-widest text-slate-400">
                    <div className="flex items-center gap-2">
                        <span className="text-secondary">8K+</span> Products
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-primary">Bulk</span> Pricing
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-secondary text-base">24/7</span> Support
                    </div>
                </div>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">© 2024 Smart Cash and Carry Narowal</p>
            </footer>
        </motion.div>
    );
};

export default Onboarding;

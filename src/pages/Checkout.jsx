import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Verified, ShieldCheck, MapPin, CreditCard, PackageCheck } from 'lucide-react';

const Checkout = () => {
    const navigate = useNavigate();

    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/home')}>
                        <div className="bg-secondary p-2 rounded-xl"><ShoppingCart className="w-6 h-6 text-white" /></div>
                        <span className="font-display font-black text-2xl tracking-tighter text-secondary dark:text-white uppercase">Smart</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
                        <ShieldCheck className="w-4 h-4 text-green-500" /><span className="text-[10px] font-black uppercase text-green-600 tracking-widest">Secure Checkout</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-8">
                        <h1 className="text-4xl font-black text-secondary dark:text-white mb-10">Checkout Details</h1>
                        <section className="bg-white dark:bg-slate-800 p-10 rounded-4xl shadow-premium border border-slate-50 dark:border-slate-700">
                            <div className="flex items-center gap-4 mb-10"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center"><MapPin className="text-primary w-6 h-6" /></div><h2 className="text-2xl font-bold">Delivery Address</h2></div>
                            <div className="p-8 rounded-3xl border-2 border-secondary bg-secondary/5 relative">
                                <Verified className="absolute top-6 right-6 text-secondary" /><p className="font-bold text-xl mb-1">Ahmed Khan</p><p className="text-slate-500">Circular Road, Near DHQ Hospital, Narowal</p><p className="text-xs font-bold text-slate-400 mt-4">+92 300 1234567</p>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-slate-800 p-10 rounded-4xl shadow-premium border border-slate-50 dark:border-slate-700">
                            <div className="flex items-center gap-4 mb-10"><div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center"><CreditCard className="text-secondary w-6 h-6" /></div><h2 className="text-2xl font-bold">Payment Method</h2></div>
                            <div className="space-y-4">
                                {['Cash on Delivery', 'Mobile Wallet'].map((method, i) => (
                                    <label key={method} className="flex items-center p-6 rounded-3xl border-2 border-slate-50 dark:border-slate-700 cursor-pointer hover:border-secondary transition-all">
                                        <input type="radio" name="payment" defaultChecked={i === 0} className="w-5 h-5 text-secondary focus:ring-secondary" /><span className="ml-4 font-bold text-lg">{method}</span>
                                    </label>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 bg-white dark:bg-slate-800 p-10 rounded-4xl shadow-premium border border-slate-50 dark:border-slate-700">
                            <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
                            <div className="space-y-6 mb-10 pb-8 border-b border-slate-50 dark:border-slate-700">
                                <div className="flex justify-between font-bold"><span className="text-slate-500">Subtotal</span><span>PKR 1,020</span></div>
                                <div className="flex justify-between font-bold"><span className="text-slate-500">Delivery</span><span className="text-green-500">FREE</span></div>
                            </div>
                            <div className="flex justify-between items-end mb-10"><span className="text-xs font-black uppercase text-slate-400">Total Payable</span><span className="text-4xl font-black text-secondary dark:text-white">PKR 1,020</span></div>
                            <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-6 rounded-3xl shadow-premium transition-all flex items-center justify-center gap-3 text-lg group"><PackageCheck className="w-6 h-6" />Place Order Now</button>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default Checkout;

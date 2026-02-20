import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronRight, Star, ShoppingBag, Filter } from 'lucide-react';

const Products = () => {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: 'Organic Red Tomatoes', price: '120', oldPrice: '150', tag: 'SAVE 20%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm39Aojmm5ALx4fAjKi2CVegO8V7yPxuwzGpjin6y8Wpz6DIWXO0rsw6cT8BvQpuwIoWBXAiMU2yKWeCx_i-u-j3AeNb5xL5Ov2JSBI0sFXRujBq5l-BrQoi61JkTu3TeRNkDCXnqkCvQ452rbqqJPsYt1rYenw1SEM1ATPwRQlDXpRlF88y-6EBf-tRrNBoCTRWdQ8TIycghoSCxTocYlmfzHgd65LtQqU0WLe6kBSBSnTiQXXw1LrOJ0izca1SuPVyVT_uHml-LM' },
        { id: 2, name: 'Premium Green Broccoli', price: '240', oldPrice: '', tag: 'PREMIUM', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPoWfH0mLpZDem8H0KLNhGdnegIlaDdRvVv0xInDQ89j0-680U6ehy0V3XegSux071IHW7_HcqunQJDJcwq7DZq0-D-SuveHSzAwDebkCCOnfMN2rWlLXbY5GcaV6W4F7lwjLFBNNBCsl0SG4afsNqQcbZKZTRMHmFXe0cDLzhVJUS0EJQtCiTWi0W1lhl98Px-LGZTETSqrcTMb8Onp2mBn6256r4KumxfDHl-LegZlcYY2PLnwTjXnBtDPiU5ho0FyqdTsXuScCu' },
        { id: 3, name: 'Desi Potatoes (Aloo)', price: '450', oldPrice: '500', tag: 'BEST SELLER', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmFnyA6w6eUg9MJDFkiUztH39jDbMbo593xhcgFWXka2ZoqbalilM0WHaTNBB4J--teOKIB8jWFSk2Lp6T4ElEVbRbjh0q9OV7247iI9S_OeIuXpzipT9bZ0tiid75KIOH5Qcti3BqICGX3mgWOkY104XCLmc79MZr3tv7LoilJZFP4nJLYaoE07m9FVQbebmRvwrH25Rm1rZsZwixtfiugbUMl_Nr8ea9s4O8YKKEPWsGTF4mm3J5cMR49diqa3Wj4uslMGICDIZo' },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/home')}>
                        <div className="bg-secondary p-2 rounded-xl"><ShoppingCart className="w-6 h-6 text-white" /></div>
                        <span className="font-display font-black text-2xl tracking-tighter text-secondary dark:text-white uppercase">Smart</span>
                    </div>
                    <button onClick={() => navigate('/checkout')} className="flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-2xl shadow-premium hover:shadow-hover transition-all">
                        <ShoppingBag className="w-5 h-5" /><span className="font-bold text-sm">Checkout</span>
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                        <span>Store</span> <ChevronRight className="w-3 h-3" /> <span>Vegetables</span> <ChevronRight className="w-3 h-3" /> <span className="text-secondary">Fresh Items</span>
                    </div>
                    <h1 className="text-4xl font-black text-secondary dark:text-white mb-4">Fresh Farm Vegetables</h1>
                    <p className="text-slate-500 max-w-2xl">Premium produce hand-picked for Narowal families.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="w-full lg:w-64 space-y-10">
                        <div>
                            <h3 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</h3>
                            <div className="space-y-4">
                                {['Leafy Greens', 'Root Veggies', 'Fresh Herbs'].map(cat => (
                                    <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="w-5 h-5 rounded border-slate-200 text-secondary focus:ring-secondary" />
                                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-secondary transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p) => (
                                <motion.div key={p.id} whileHover={{ y: -10 }} className="bg-white dark:bg-slate-800 p-6 rounded-4xl border border-slate-100 dark:border-slate-700 shadow-premium group">
                                    <div className="relative aspect-square rounded-3xl bg-slate-50 mb-6 overflow-hidden">
                                        <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4"><span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">{p.tag}</span></div>
                                    </div>
                                    <div className="flex items-center gap-1 mb-2">
                                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                                        <Star className="w-3 h-3 text-amber-400" /><span className="text-[10px] font-bold text-slate-400 ml-1">(4.8)</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-secondary dark:text-white mb-6 min-h-[56px]">{p.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <div><p className="text-2xl font-black text-secondary dark:text-white">Rs. {p.price}</p>{p.oldPrice && <p className="text-xs text-slate-300 line-through">Rs. {p.oldPrice}</p>}</div>
                                        <button className="bg-secondary text-white p-4 rounded-2xl shadow-premium hover:bg-primary transition-all"><ShoppingCart className="w-5 h-5" /></button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default Products;

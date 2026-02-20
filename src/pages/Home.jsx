import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Heart, ShoppingBag, ArrowRight, Star } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const categories = [
        { name: 'Fruits', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgsoOQtCNFaNjF-rdR-b3uM8VQyLL8zjg4FOYu4ra249JnPGz-FwL8ubn3fR0odkIXzHeuZ3-E3cWDZJ9nYBl6n1o0pafB_OSAkMRxwWD2U88H1GBnSUwLTMhcwKzs3Vtzn3T6WfUAOuJUrOEf7W0Rp1MtwUGDwp0g7wkBfTa-xHSKt_3kLD-fvRmEpER5JEa_jd2r1QYdmzPlJ8RUJb5SNcqNhzHa6k7od-RXpepqJyCdLk0MtCmxOPNfDRfLJrjIPcfQgoAU4Ye' },
        { name: 'Veggies', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8nd6JKLIxryp7fX-5PNhyERV7hU40t1ABBeBVGv-7zsljeR8huWrrq7QhOAw8J2Y8jEuep9h3MsTwhijDyXs2U-LLO0aUpO6efYnJT97Z2vhLRFKNMPcIqMvqDlkiur5ibOxmByIA6DhmQ9l0LtFHLZjG1yzprXJ8iRDljBya5ASm6JNbH5vC-y0Ch3yJBJMv3MPOciTdFjRF7uUt4A29uWt1xICFMp0Dyapd4xXYxQFa87J6juzBG044C-6Tm0BZB2Nvqk7hjkH5' },
        { name: 'Dairy', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZTLtMmumVZGy-mq3lPULMA0AWI12Aga64rMQ9vN3PjoUCR-zd8bM94pGEjgFw4BaSRfFep0i4W2ZlVWqSpnVshmbi3hd8Q97SS87DmEeeb0pahmH9uJFsol6d-QvLewzyM7TOIomI1pgCsbBrkE8F9Qe1Sgp65HTSY0DfO99hz_OswPVSW_wo6TzmL-2n_2a-WSQjA3tKmHG5oO-4ZVNo_wLCS58DhZaUBSGZXM0G8FNs-MJiytLO0hl1VGCM43S78NYnSX7yEqfD' },
        { name: 'Pantry', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRNvNKCydgO-y59h7S7XcKznQUaUCfam-zbmI1wZ5u-QJ6zXXM95LsWLoP2spxeYYZVN9Q6lUbds5FtTfnpSOgoTOFDBBF6lcveVbiis89DAewghfMulyH51-ESqtat0tsO0KX363XzaLAlRpQs1UT0249uDEo-4CWgNfMG-sOzY35ptQcWY5D6zMvGqV6c_T7KGqy_DO4aKD1LitBBRc2S_zqwIyD55TpqaPdSxG5ukAjacK2aJnLwuUy8R_cGm-tNGEDZ3BPo_hG' },
    ];

    const products = [
        { name: 'Farm Tomatoes', price: '180', oldPrice: '220', cat: 'Vegetables', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxKU3fks0H_zcJsGegH-O_mC1Jwh1zIVqUhmmZ6WpmxzvvSY0JJp3xR66zZWNKaxVcKAwvSx2w1xBmS2nMi4CeiD5rbezbGgcR1cmzXnYEor4UBZycCzZLLey7uJrW0bH9EWyAX0s34iI74gz_4XX6mlhrPDPj-RI5mHhgAWt3MRBl_jrEcSWTYv6ePZV4eZtVX_iSGHL_EFLY29BWs_WAg2qXrcyTOcwMGlv1TsttbrB6Ewt7bOJIX8jnd_jK6IY1jjTC-8GvIHCr' },
        { name: 'Organic Bananas', price: '150', oldPrice: '180', cat: 'Fruits', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pftLmvgTQ4rfovYkMJz4_2JhgmhHquT9d-jFXqH96flhqnMvBYwkqogRJ1RQZHzGuzBSNPFI20wXxRc92r9102TaSZFLHlr4GbjDQkt4hhe0BTLatbsz_tZ9R0uUWd-I3iM_fD3imyumoAUsg4OtxEHvP-YDZSpaBw_ejdweUsXJpHj30CS7Ztm3utkJbAFdnc8I9vU_gWo02ld7dH7Tu9nDrt25nj6M-fd02HSqzcHuz0ZtcJP_QkRQP_t-Fh03-qToKQludu9S' },
    ];

    return (
        <motion.div
            initial="hidden" animate="visible" variants={containerVariants}
            className="min-h-screen bg-slate-50 dark:bg-slate-900"
        >
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="bg-secondary p-2 rounded-xl"><ShoppingCart className="w-6 h-6 text-white" /></div>
                        <div className="flex flex-col leading-none">
                            <span className="font-display font-black text-2xl tracking-tighter text-secondary dark:text-white">SMART</span>
                            <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Cash & Carry</span>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 max-w-xl mx-12">
                        <div className="relative w-full">
                            <input className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm" placeholder="Search fresh groceries..." />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Heart className="w-5 h-5 text-slate-600 dark:text-slate-300" /></button>
                        <button className="flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-2xl shadow-premium hover:shadow-hover transition-all">
                            <ShoppingBag className="w-5 h-5" /><span className="font-bold text-sm">Cart (3)</span>
                        </button>
                    </div>
                </div>
            </nav>

            <header className="max-w-7xl mx-auto px-6 pt-12">
                <div className="relative rounded-4xl bg-white dark:bg-slate-800 p-12 md:p-20 shadow-premium border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-8">Fast Delivery in Narowal</span>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-secondary dark:text-white mb-8 leading-[0.9]">Freshness Delivered <br /><span className="text-primary italic">To Your Door</span></h1>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed">Premium quality groceries at wholesale prices. <br />Smart shopping for smart families.</p>
                        <button onClick={() => navigate('/products')} className="px-10 py-5 bg-secondary text-white font-bold rounded-3xl shadow-premium hover:shadow-hover transition-all flex items-center gap-3 group">
                            Shop All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-black text-secondary dark:text-white mb-10">Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <motion.div key={cat.name} whileHover={{ y: -10 }} className="bg-white dark:bg-slate-800 p-8 rounded-4xl border border-slate-100 dark:border-slate-700 shadow-premium flex flex-col items-center gap-4 cursor-pointer">
                            <div className="w-24 h-24 rounded-3xl overflow-hidden bg-slate-50 p-4"><img src={cat.img} alt={cat.name} className="w-full h-full object-contain" /></div>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{cat.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-black text-secondary dark:text-white">Trending Now</h2>
                    <button className="text-primary font-bold hover:underline flex items-center gap-2">View All <ArrowRight className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((p) => (
                        <div key={p.name} className="bg-white dark:bg-slate-800 p-6 rounded-4xl border border-slate-100 dark:border-slate-700 shadow-premium group">
                            <div className="relative aspect-square rounded-3xl bg-slate-50 mb-6 overflow-hidden">
                                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"><Heart className="w-4 h-4 text-slate-400" /></button>
                            </div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{p.cat}</p>
                            <h3 className="font-bold text-secondary dark:text-white text-lg mb-4">{p.name}</h3>
                            <div className="flex items-center justify-between">
                                <div><p className="text-2xl font-black text-secondary dark:text-white">Rs. {p.price}</p><p className="text-xs text-slate-400 line-through">Rs. {p.oldPrice}</p></div>
                                <button className="p-4 bg-secondary text-white rounded-2xl shadow-premium hover:bg-primary transition-colors"><ShoppingCart className="w-5 h-5" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Home;

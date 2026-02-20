import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();

    return (
        <div className="font-sans bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
            <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/home')}>
                            <div className="flex flex-col items-center">
                                <span className="material-symbols-outlined text-[#c51c24] text-4xl font-bold transition-transform group-hover:scale-110">shopping_cart</span>
                                <div className="w-10 h-1.5 bg-[#1e1e7a] mt-1 rounded-full group-hover:bg-[#c51c24] transition-colors"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-extrabold tracking-tighter text-[#1e1e7a] dark:text-white leading-[0.8] uppercase">Smart</span>
                                <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#c51c24]">Cash & Carry</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => navigate('/checkout')} className="flex items-center gap-3 bg-[#1e1e7a] hover:bg-[#c51c24] text-white px-6 py-3 rounded-2xl transition-all shadow-lg active:scale-95 group">
                                <span className="material-symbols-outlined transition-transform group-hover:rotate-12">shopping_bag</span>
                                <span className="font-bold text-sm">Cart (0)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    <aside className="w-full md:w-64 space-y-8 text-left">
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg">
                            <h3 className="font-black text-secondary dark:text-white mb-6 uppercase tracking-widest text-xs">Categories</h3>
                            <div className="space-y-4">
                                {['All Products', 'Fresh Fruits', 'Vegetables', 'Dairy & Eggs', 'Pantry Staples'].map((cat, i) => (
                                    <button key={cat} className={`w-full text-left font-bold text-sm py-2 px-4 rounded-xl transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary'}`}>
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-10">
                            <h1 className="text-4xl font-black text-[#1e1e7a] dark:text-white">Fresh Produce</h1>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-slate-400">Sort by:</span>
                                <select className="bg-white dark:bg-slate-800 border-none rounded-xl text-sm font-bold p-2 shadow-sm focus:ring-primary">
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Newest First</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="group bg-white dark:bg-slate-800 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden relative">
                                        <img alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMgsoOQtCNFaNjF-rdR-b3uM8VQyLL8zjg4FOYu4ra249JnPGz-FwL8ubn3fR0odkIXzHeuZ3-E3cWDZJ9nYBl6n1o0pafB_OSAkMRxwWD2U88H1GBnSUwLTMhcwKzs3Vtzn3T6WfUAOuJUrOEf7W0Rp1MtwUGDwp0g7wkBfTa-xHSKt_3kLD-fvRmEpER5JEa_jd2r1QYdmzPlJ8RUJb5SNcqNhzHa6k7od-RXpepqJyCdLk0MtCmxOPNfDRfLJrjIPcfQgoAU4Ye" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm p-2 rounded-xl text-primary transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                            <span className="material-symbols-outlined">favorite</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-primary tracking-[0.2em] mb-2 text-[#c51c24]">Premium Selection</p>
                                    <h3 className="font-extrabold text-[#1e1e7a] dark:text-white text-xl mb-4 leading-tight group-hover:text-primary transition-colors">Fresh Harvest Selection</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-2xl font-black text-[#1e1e7a] dark:text-white">Rs. 240</p>
                                            <p className="text-xs text-slate-400 font-bold">per unit</p>
                                        </div>
                                        <button onClick={() => navigate('/checkout')} className="w-12 h-12 bg-[#1e1e7a] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 hover:bg-[#c51c24] transition-all active:scale-95 group/btn">
                                            <span className="material-symbols-outlined transition-transform group-hover/btn:rotate-12">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;

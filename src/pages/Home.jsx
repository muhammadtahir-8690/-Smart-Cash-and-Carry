import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToCart, getCart } from '../utils/cartUtils';

const Home = () => {
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => {
        const cart = getCart();
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(count);
    };

    useEffect(() => {
        updateCartCount();
        window.addEventListener('cartUpdated', updateCartCount);
        return () => window.removeEventListener('cartUpdated', updateCartCount);
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        // Optional: show a small toast or animation
    };

    const trendingProducts = [
        { id: 'h1', name: 'Fresh Farm Tomatoes', price: 180, category: 'Vegetables', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxKU3fks0H_zcJsGegH-O_mC1Jwh1zIVqUhmmZ6WpmxzvvSY0JJp3xR66zZWNKaxVcKAwvSx2w1xBmS2nMi4CeiD5rbezbGgcR1cmzXnYEor4UBZycCzZLLey7uJrW0bH9EWyAX0s34iI74gz_4XX6mlhrPDPj-RI5mHhgAWt3MRBl_jrEcSWTYv6ePZV4eZtVX_iSGHL_EFLY29BWs_WAg2qXrcyTOcwMGlv1TsttbrB6Ewt7bOJIX8jnd_jK6IY1jjTC-8GvIHCr' },
        { id: 'h2', name: 'Premium Bananas', price: 150, category: 'Fruits', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pftLmvgTQ4rfovYkMJz4_2JhgmhHquT9d-jFXqH96flhqnMvBYwkqogRJ1RQZHzGuzBSNPFI20wXxRc92r9102TaSZFLHlr4GbjDQkt4hhe0BTLatbsz_tZ9R0uUWd-I3iM_fD3imyumoAUsg4OtxEHvP-YDZSpaBw_ejdweUsXJpHj30CS7Ztm3utkJbAFdnc8I9vU_gWo02ld7dH7Tu9nDrt25nj6M-fd02HSqzcHuz0ZtcJP_QkRQP_t-Fh03-qToKQludu9S' },
        { id: 'h3', name: 'Organic Red Apples', price: 320, category: 'Fruits', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgsoOQtCNFaNjF-rdR-b3uM8VQyLL8zjg4FOYu4ra249JnPGz-FwL8ubn3fR0odkIXzHeuZ3-E3cWDZJ9nYBl6n1o0pafB_OSAkMRxwWD2U88H1GBnSUwLTMhcwKzs3Vtzn3T6WfUAOuJUrOEf7W0Rp1MtwUGDwp0g7wkBfTa-xHSKt_3kLD-fvRmEpER5JEa_jd2r1QYdmzPlJ8RUJb5SNcqNhzHa6k7od-RXpepqJyCdLk0MtCmxOPNfDRfLJrjIPcfQgoAU4Ye' },
        { id: 'h4', name: 'Whole Wheat Flour', price: 640, category: 'Pantry', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5n-gK_vKsZudsKk3Ir_dAa6zS8E98dQjJVGkWDl0mE5YqKduqBV0pei2eVIG-lhbGTkTLiVDkzXeHMmO2tbRBvNCBCl98wUwANbPRDeHKPeC_LiGEtEpFWORJHYma3v973VVEuIcyfEolikdoq0BRunPRlqg1WUhFLR3A7vb7aTKQ-EbqTVyUgAlH07RzXCypn26FJYijDdnBzrjusFegJL3iWByUjV2gtiV7Ns2WR5cULlWSeYROdbcp8Q3BPhVfNKjnjbxHuy-n' },
        { id: 'h5', name: 'Organic Milk', price: 210, category: 'Dairy', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKym-Qnc-fBcP96IXX6KOQKqJEbUOqfoN18f0KZhsrbxbd-NB25BkAZ73JPzwmwjEn49vOgi9lVJZ97cR6D36fh1kBIzYx8Q5K2GhG2EbJJRGRq29I_wX1bHXdq8xC5USBMI1V0j_pI9kLAuiOVGh7gUrmYnOYCXOl92V8qeSy1EbV1DwyqRXTfDCJjd8yMuEF1ARp8C6BdKuQVlnNGcGcuY6EkB_Es82rv8O4iAe0eJ92GgCJUTgi7BMBBLPUh1obAMKikb9JNxb5' }
    ];

    const categories = [
        { name: 'Fruits', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgsoOQtCNFaNjF-rdR-b3uM8VQyLL8zjg4FOYu4ra249JnPGz-FwL8ubn3fR0odkIXzHeuZ3-E3cWDZJ9nYBl6n1o0pafB_OSAkMRxwWD2U88H1GBnSUwLTMhcwKzs3Vtzn3T6WfUAOuJUrOEf7W0Rp1MtwUGDwp0g7wkBfTa-xHSKt_3kLD-fvRmEpER5JEa_jd2r1QYdmzPlJ8RUJb5SNcqNhzHa6k7od-RXpepqJyCdLk0MtCmxOPNfDRfLJrjIPcfQgoAU4Ye' },
        { name: 'Vegetables', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8nd6JKLIxryp7fX-5PNhyERV7hU40t1ABBeBVGv-7zsljeR8huWrrq7QhOAw8J2Y8jEuep9h3MsTwhijDyXs2U-LLO0aUpO6efYnJT97Z2vhLRFKNMPcIqMvqDlkiur5ibOxmByIA6DhmQ9l0LtFHLZjG1yzprXJ8iRDljBya5ASm6JNbH5vC-y0Ch3yJBJMv3MPOciTdFjRF7uUt4A29uWt1xICFMp0Dyapd4xXYxQFa87J6juzBG044C-6Tm0BZB2Nvqk7hjkH5' },
        { name: 'Dairy & Eggs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZTLtMmumVZGy-mq3lPULMA0AWI12Aga64rMQ9vN3PjoUCR-zd8bM94pGEjgFw4BaSRfFep0i4W2ZlVWqSpnVshmbi3hd8Q97SS87DmEeeb0pahmH9uJFsol6d-QvLewzyM7TOIomI1pgCsbBrkE8F9Qe1Sgp65HTSY0DfO99hz_OswPVSW_wo6TzmL-2n_2a-WSQjA3tKmHG5oO-4ZVNo_wLCS58DhZaUBSGZXM0G8FNs-MJiytLO0hl1VGCM43S78NYnSX7yEqfD' },
        { name: 'Pantry Staples', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRNvNKCydgO-y59h7S7XcKznQUaUCfam-zbmI1wZ5u-QJ6zXXM95LsWLoP2spxeYYZVN9Q6lUbds5FtTfnpSOgoTOFDBBF6lcveVbiis89DAewghfMulyH51-ESqtat0tsO0KX363XzaLAlRpQs1UT0249uDEo-4CWgNfMG-sOzY35ptQcWY5D6zMvGqV6c_T7KGqy_DO4aKD1LitBBRc2S_zqwIyD55TpqaPdSxG5ukAjacK2aJnLwuUy8R_cGm-tNGEDZ3BPo_hG' },
        { name: 'Meat & Fish', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkFWu8pBuTa3nWa8Uh_V6iTRMlzOPGfLHLg97Clfwrlda6gVanI0RVrSegq8DHFjFcY4gG8GzN5epgi4rC3SotDWI9GIsBDxuvqCsEV09s005b7apOSVq42L-dtzeQljHK4e_S5wAgWZuADFUUQEi2KjqhbCDjceSi1gJAEBrc4Gf_A6Z7bnIVQ4SFZzpOdU_1buZmB2KmhZf0rOdQzLkA8fa4o4vTuCN06BTgLEX7zKJ20rHGZk7TEl_6BrnidTxRmh9K14EbG8pn' },
    ];

    return (
        <div className="font-sans bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
            <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/')}>
                            <div className="flex flex-col items-center">
                                <span className="material-symbols-outlined text-[#c51c24] text-4xl font-bold transition-transform group-hover:scale-110">shopping_cart</span>
                                <div className="w-10 h-1.5 bg-[#1e1e7a] mt-1 rounded-full group-hover:bg-[#c51c24] transition-colors"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-extrabold tracking-tighter text-[#1e1e7a] dark:text-white leading-[0.8] uppercase">Smart</span>
                                <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#c51c24]">Cash & Carry</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 max-w-xl mx-12">
                            <div className="relative w-full group">
                                <input className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-[#c51c24]/20 focus:bg-white dark:focus:bg-slate-700 rounded-2xl text-sm transition-all outline-none" placeholder="Search fresh produce, staples, electronics..." type="text" />
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#c51c24] transition-colors">search</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => navigate('/checkout')} className="flex items-center gap-3 bg-[#1e1e7a] hover:bg-[#c51c24] text-white px-6 py-3 rounded-2xl transition-all shadow-lg active:scale-95 group">
                                <span className="material-symbols-outlined transition-transform group-hover:rotate-12">shopping_bag</span>
                                <span className="font-bold text-sm">Cart ({cartCount})</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 min-h-[580px] flex items-center">
                    <div className="relative z-10 pl-10 md:pl-20 max-w-2xl py-16 text-left">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 text-[#c51c24] text-xs font-extrabold mb-8 uppercase tracking-widest">
                            <span className="material-symbols-outlined text-[18px] mr-2">local_shipping</span>
                            Same Day Delivery in Narowal City
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-[#1e1e7a] dark:text-white leading-[0.9] mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
                            Smart Cash <br />and Carry <br /><span className="text-[#c51c24] italic font-extrabold text-5xl md:text-7xl block mt-4">Narowal's Pride</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-md leading-relaxed">
                            Empowering Narowal with premium quality at wholesale prices. <span className="text-[#1e1e7a] dark:text-[#c51c24] font-bold">Pay Less. Expect More..</span> every day.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <button onClick={() => navigate('/products')} className="px-10 py-5 bg-[#c51c24] hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-[#c51c24]/30 flex items-center gap-3 group">
                                Shop Now <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                        <img alt="Background Pattern" class="w-full h-full object-cover opacity-[0.08] dark:opacity-[0.05]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFKfLyKnfYQbIPNhg_xCYqOZ7mD_ps_yCMAj-Vs_6SavvrsfwMJ44X4JhxUBZbpW4kD39pNTTvuz-Ktv26wJtsWdRD8bCi33tO0V_Kfp8jiVGL2AaipZxUwZC2oXOxp498VCFUyX-0tl3GFs5ImUs84EHM30k6qjWjTAJTTRPQCcSEJm-4Xe_jCybscSkk5AWxayr-VvGfi4VuhA7PSJJY-hyPdOkKUxE1-1CIUEMRSPFCJdIxnSMnVLE60Wf3srL85IoQsHkO_3V-" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent dark:from-slate-800 dark:via-slate-800/60"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-[45%] flex items-center justify-center p-12">
                            <img alt="Premium local produce" className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] scale-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArNasdE9lM8UIxeRIuQi_9Zm1C9-mOWUn4SKUkgqKkGwmUyGXCvIwj7B4AHMTaf9OhDdonowJLviBmWLNILmmSnGG6YYGFmqE-1Cb0TNST9XjjHhsme-3NVen5Qv3637oEfjMqRE57UWvEu2fsRH2v0ne9ZX5FWq4xPIIaQlDz8AEJWWmGa9dmEVKpBlwmFHM4mO3L_1HHJ80_fxjgQ0RheTenzkn5N7N0rY-Rk9c6mx9Eq6730iNqqVKbK54xD2-RJ8DgiiiPDO31" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-end mb-12">
                    <div className="text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-[2px] w-8 bg-[#c51c24]"></div>
                            <span className="text-[#c51c24] font-black uppercase text-xs tracking-widest">Fresh Categories</span>
                        </div>
                        <h2 className="text-4xl font-black text-[#1e1e7a] dark:text-white">Shop by Department</h2>
                    </div>
                    <button onClick={() => navigate('/products')} className="group text-[#1e1e7a] dark:text-[#c51c24] font-bold hover:underline flex items-center gap-2">
                        View All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                    </button>
                </div>
                <div className="flex gap-8 overflow-x-auto pb-6 hide-scrollbar">
                    {categories.map((cat, i) => (
                        <button key={cat.name} onClick={() => navigate('/products')} className="group flex-shrink-0 flex flex-col items-center gap-5">
                            <div className={`w-28 h-28 md:w-36 md:h-36 rounded-[2rem] bg-white dark:bg-slate-800 flex items-center justify-center p-6 border-2 border-slate-100 dark:border-slate-700 transition-all shadow-lg group-hover:shadow-xl ${i % 2 === 0 ? 'group-hover:rotate-3 group-hover:border-[#c51c24]' : 'group-hover:-rotate-3 group-hover:border-[#1e1e7a]'}`}>
                                <img alt={cat.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src={cat.img} />
                            </div>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{cat.name}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-4xl font-black text-[#1e1e7a] dark:text-white">Trending Favorites</h2>
                    <span className="px-4 py-1.5 bg-[#c51c24] text-white text-[11px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#c51c24]/20">Hot Now</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 font-sans">
                    {trendingProducts.map((product) => (
                        <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-100 dark:border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative text-left">
                            <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-2xl mb-5 overflow-hidden">
                                <img alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.img} />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[11px] uppercase font-black text-[#c51c24] tracking-widest">{product.category}</p>
                                <h3 className="font-bold text-[#1e1e7a] dark:text-slate-100 text-lg leading-tight group-hover:text-[#c51c24] transition-colors">{product.name}</h3>
                                <div className="flex items-center justify-between pt-4">
                                    <span className="text-2xl font-black text-[#1e1e7a] dark:text-white">Rs. {product.price}</span>
                                    <button onClick={() => handleAddToCart(product)} className="w-12 h-12 bg-[#1e1e7a] text-white rounded-2xl flex items-center justify-center hover:bg-[#c51c24] transition-all shadow-lg active:scale-90">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

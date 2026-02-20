import { useState, useEffect, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart, getCart } from '../utils/cartUtils';

const Products = () => {
    const navigate = useNavigate();
    const [, startTransition] = useTransition();
    const [selectedCategory, setSelectedCategory] = useState('All Products');
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
    };

    const categories = [
        { name: 'All Products', icon: 'grid_view' },
        { name: 'Fresh Fruits', icon: 'eco' },
        { name: 'Vegetables', icon: 'shopping_basket' },
        { name: 'Dairy & Eggs', icon: 'egg_alt' },
        { name: 'Pantry Staples', icon: 'inventory_2' }
    ];

    const products = [
        { id: 1, name: 'Fresh Harvest Selection', category: 'Vegetables', price: 240, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxKU3fks0H_zcJsGegH-O_mC1Jwh1zIVqUhmmZ6WpmxzvvSY0JJp3xR66zZWNKaxVcKAwvSx2w1xBmS2nMi4CeiD5rbezbGgcR1cmzXnYEor4UBZycCzZLLey7uJrW0bH9EWyAX0s34iI74gz_4XX6mlhrPDPj-RI5mHhgAWt3MRBl_jrEcSWTYv6ePZV4eZtVX_iSGHL_EFLY29BWs_WAg2qXrcyTOcwMGlv1TsttbrB6Ewt7bOJIX8jnd_jK6IY1jjTC-8GvIHCr' },
        { id: 2, name: 'Premium Bananas', category: 'Fresh Fruits', price: 150, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pftLmvgTQ4rfovYkMJz4_2JhgmhHquT9d-jFXqH96flhqnMvBYwkqogRJ1RQZHzGuzBSNPFI20wXxRc92r9102TaSZFLHlr4GbjDQkt4hhe0BTLatbsz_tZ9R0uUWd-I3iM_fD3imyumoAUsg4OtxEHvP-YDZSpaBw_ejdweUsXJpHj30CS7Ztm3utkJbAFdnc8I9vU_gWo02ld7dH7Tu9nDrt25nj6M-fd02HSqzcHuz0ZtcJP_QkRQP_t-Fh03-qToKQludu9S' },
        { id: 3, name: 'Organic Milk', category: 'Dairy & Eggs', price: 210, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKym-Qnc-fBcP96IXX6KOQKqJEbUOqfoN18f0KZhsrbxbd-NB25BkAZ73JPzwmwjEn49vOgi9lVJZ97cR6D36fh1kBIzYx8Q5K2GhG2EbJJRGRq29I_wX1bHXdq8xC5USBMI1V0j_pI9kLAuiOVGh7gUrmYnOYCXOl92V8qeSy1EbV1DwyqRXTfDCJjd8yMuEF1ARp8C6BdKuQVlnNGcGcuY6EkB_Es82rv8O4iAe0eJ92GgCJUTgi7BMBBLPUh1obAMKikb9JNxb5' },
        { id: 4, name: 'Whole Wheat Flour', category: 'Pantry Staples', price: 640, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5n-gK_vKsZudsKk3Ir_dAa6zS8E98dQjJVGkWDl0mE5YqKduqBV0pei2eVIG-lhbGTkTLiVDkzXeHMmO2tbRBvNCBCl98wUwANbPRDeHKPeC_LiGEtEpFWORJHYma3v973VVEuIcyfEolikdoq0BRunPRlqg1WUhFLR3A7vb7aTKQ-EbqTVyUgAlH07RzXCypn26FJYijDdnBzrjusFegJL3iWByUjV2gtiV7Ns2WR5cULlWSeYROdbcp8Q3BPhVfNKjnjbxHuy-n' },
        { id: 5, name: 'Orange Juice', category: 'Fresh Fruits', price: 450, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3_wyJ6XttQSdyuRG7ioURtG36bkFMzxPYy55sQe9YjA6UPpfvodgBKBE50yLMxabWf39P58L5w8ih1Pv4UYBhH8Fzq-0A_xB5efPZjk2dcfBRqK9TspY4lK26NTTbhLG-8bQr_v89i3aH1u6RcfH1VE1XG2iQWp8VdOcrKpMsxYlGzDrnMJ7hZq-_wnJeiSnDVzdRTGibuij-z32VPqJvrEpPKLKwhm-w9_41T8W9Mo_tsU-CW9cxRZoh2VKeYtKLKT439lpYqr1m' },
        { id: 6, name: 'Red Apples', category: 'Fresh Fruits', price: 320, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgsoOQtCNFaNjF-rdR-b3uM8VQyLL8zjg4FOYu4ra249JnPGz-FwL8ubn3fR0odkIXzHeuZ3-E3cWDZJ9nYBl6n1o0pafB_OSAkMRxwWD2U88H1GBnSUwLTMhcwKzs3Vtzn3T6WfUAOuJUrOEf7W0Rp1MtwUGDwp0g7wkBfTa-xHSKt_3kLD-fvRmEpER5JEa_jd2r1QYdmzPlJ8RUJb5SNcqNhzHa6k7od-RXpepqJyCdLk0MtCmxOPNfDRfLJrjIPcfQgoAU4Ye' }
    ];

    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(p => p.category === selectedCategory);

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
                            <div className="flex flex-col text-left">
                                <span className="text-3xl font-extrabold tracking-tighter text-[#1e1e7a] dark:text-white leading-[0.8] uppercase">Smart</span>
                                <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#c51c24]">Cash & Carry</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => startTransition(() => navigate('/checkout'))} className="flex items-center gap-3 bg-[#1e1e7a] hover:bg-[#c51c24] text-white px-6 py-3 rounded-2xl transition-all shadow-lg active:scale-95 group">
                                <span className="material-symbols-outlined transition-transform group-hover:rotate-12">shopping_bag</span>
                                <span className="font-bold text-sm">Cart ({cartCount})</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    <aside className="w-full md:w-72 space-y-8 text-left">
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl">
                            <h3 className="font-black text-secondary dark:text-white mb-6 uppercase tracking-widest text-xs px-2">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.name}
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`w-full flex items-center gap-4 font-bold text-sm py-3.5 px-5 rounded-2x transition-all ${selectedCategory === cat.name ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary'}`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-10">
                            <div className="text-left">
                                <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{selectedCategory}</p>
                                <h1 className="text-4xl font-black text-[#1e1e7a] dark:text-white">Our Inventory</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-slate-400">Sort:</span>
                                <select className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold px-4 py-2.5 shadow-sm focus:ring-primary focus:border-primary">
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Newest First</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-[2.5rem] p-6 border border-slate-100 dark:border-slate-700 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                    <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-3xl mb-6 overflow-hidden relative">
                                        <img alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.img} />
                                        <button className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur shadow-md p-2.5 rounded-2xl text-slate-400 hover:text-primary hover:scale-110 transition-all">
                                            <span className="material-symbols-outlined text-[20px]">favorite</span>
                                        </button>
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-primary tracking-[0.2em] mb-2">{product.category}</p>
                                    <h3 className="font-extrabold text-[#1e1e7a] dark:text-white text-xl mb-4 leading-tight group-hover:text-primary transition-colors h-14 line-clamp-2">{product.name}</h3>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <p className="text-2xl font-black text-[#1e1e7a] dark:text-white">Rs. {product.price}</p>
                                            <p className="text-xs text-slate-400 font-bold tracking-wide">Premium Grade</p>
                                        </div>
                                        <button onClick={() => handleAddToCart(product)} className="w-14 h-14 bg-[#1e1e7a] text-white rounded-[1.25rem] flex items-center justify-center shadow-lg hover:bg-[#c51c24] transition-all active:scale-90 group/btn">
                                            <span className="material-symbols-outlined text-[24px] transition-transform group-hover/btn:rotate-12">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {filteredProducts.length === 0 && (
                            <div className="py-20 text-center text-slate-400 font-bold">
                                <span className="material-symbols-outlined text-6xl mb-4 block">search_off</span>
                                No products found in this category.
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;

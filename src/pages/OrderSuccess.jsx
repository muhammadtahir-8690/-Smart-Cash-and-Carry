import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const OrderSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { orderId, cart, subtotal, total } = location.state || {};

    // Redirect if accessed directly, or if order has zero value (invalid order)
    useEffect(() => {
        const isInvalidOrder =
            !location.state ||
            !cart ||
            cart.length === 0 ||
            !total ||
            total <= 0;

        if (isInvalidOrder) {
            navigate('/home', { replace: true });
        }
    }, [location.state, cart, total, navigate]);

    // Don't render anything for invalid orders
    if (!location.state || !cart || cart.length === 0 || !total || total <= 0) return null;

    return (
        <div className="font-sans bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col">
            {/* Navbar - Reused for consistency */}
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
                    </div>
                </div>
            </nav>

            <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Success Header */}
                <div className="text-center mb-10 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 rounded-full animate-ping"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 rounded-full"></div>

                    <div className="relative z-10 w-32 h-32 bg-white dark:bg-slate-800 rounded-full mx-auto flex items-center justify-center shadow-xl border-4 border-emerald-500 mb-6">
                        <span className="material-symbols-outlined text-6xl text-emerald-500 font-bold">check</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-[#1e1e7a] dark:text-white mb-4 tracking-tight">
                        Order Placed <br /> <span className="text-[#c51c24]">Successfully!</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">Thank you for shopping with Smart Cash and Carry.</p>
                </div>

                {/* Order Receipt Card */}
                <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl shadow-slate-200/50 dark:shadow-none w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-700">
                    {/* Card Header */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex justify-between items-center border-b border-slate-100 dark:border-slate-700">
                        <div>
                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Confirmation Number</p>
                            <p className="text-xl md:text-2xl font-black text-[#1e1e7a] dark:text-white">#{orderId}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Arrival Time</p>
                            <div className="flex items-center gap-2 text-emerald-500 font-bold">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span>45 - 60 Mins</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="p-6 md:p-8 space-y-6">
                        {cart && cart.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center">
                                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-700 p-2 flex-shrink-0">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.quantity} Unit{item.quantity > 1 ? 's' : ''}</p>
                                </div>
                                <p className="font-bold text-slate-900 dark:text-white">PKR {(item.price * item.quantity).toLocaleString()}</p>
                            </div>
                        ))}

                        <div className="h-px bg-slate-100 dark:bg-slate-700 my-6"></div>

                        {/* Totals */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Subtotal</span>
                                <span className="font-bold text-slate-900 dark:text-white">PKR {subtotal?.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Delivery Fee</span>
                                <span className="font-bold text-slate-900 dark:text-white">PKR 0</span>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <span className="text-sm font-black uppercase tracking-widest text-slate-400">Total Paid</span>
                                <span className="text-3xl font-black text-[#1e1e7a] dark:text-[#c51c24]">PKR {total?.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 space-y-4">
                        <button className="w-full bg-[#1e1e7a] hover:bg-[#c51c24] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined">local_shipping</span>
                            Track My Order
                        </button>
                        <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest px-2">
                            <button className="hover:text-[#c51c24] transition-colors">Download Invoice</button>
                            <button onClick={() => navigate('/home')} className="hover:text-[#c51c24] transition-colors">Back to Shop</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assistance Bar */}
            <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800 py-6">
                <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 text-[#c51c24] flex items-center justify-center">
                            <span className="material-symbols-outlined">headset_mic</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Need Assistance?</p>
                            <p className="font-bold text-slate-900 dark:text-white">Help Center</p>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                    <div className="flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">call</span>
                        0300 3305553
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">mail</span>
                        support@smartcc.pk
                    </div>
                </div>
            </div>

            <footer className="mt-20 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-slate-50 dark:border-slate-800">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="font-black text-2xl tracking-tighter uppercase italic">
                                    <span className="text-[#1e1e7a] dark:text-white">Smart</span>
                                    <span className="text-[#c51c24]">Cash & Carry</span>
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium leading-relaxed">
                                Premium grocery shopping experience in Narowal. Providing quality products and exceptional service directly to your doorstep.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-6">Quick Links</h5>
                            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                                <li><a className="hover:text-[#c51c24] transition-colors" href="#">Track Order</a></li>
                                <li><a className="hover:text-[#c51c24] transition-colors" href="#">Shipping Policy</a></li>
                                <li><a className="hover:text-[#c51c24] transition-colors" href="#">Return Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-6">Narowal Store</h5>
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Main Circular Road,<br />Near DHQ Hospital, Narowal</p>
                        </div>
                    </div>
                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">© 2024 Smart Cash & Carry Narowal. All Rights Reserved.</p>
                        <div className="flex items-center gap-8 text-slate-300">
                            <span className="material-symbols-outlined text-3xl">verified</span>
                            <span className="material-symbols-outlined text-3xl">lock</span>
                            <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default OrderSuccess;

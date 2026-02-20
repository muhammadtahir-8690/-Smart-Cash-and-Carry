import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#FDFDFD] dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
            <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <span className="font-['Outfit',sans-serif] font-black text-2xl tracking-tighter leading-none text-[#282175]">SMART</span>
                            <span className="text-[10px] font-bold text-[#D12027] uppercase tracking-[0.2em] leading-none">Cash and Carry</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-full bg-[#282175] text-white flex items-center justify-center text-xs font-bold">1</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#282175]">Delivery Area</span>
                        </div>
                        <div className="w-10 h-[1px] bg-slate-200"></div>
                        <div className="flex items-center gap-3 opacity-40">
                            <span className="w-7 h-7 rounded-full border-2 border-slate-300 text-slate-400 flex items-center justify-center text-xs font-bold">2</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Shopping</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a className="hidden sm:flex items-center gap-2 text-[#282175] font-bold text-sm bg-[#282175]/5 px-4 py-2 rounded-full border border-[#282175]/10" href="tel:03008800425">
                            <span className="material-symbols-outlined text-sm">call</span>
                            03008800425
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-2xl shadow-[#282175]/10 border border-slate-100 dark:border-slate-700 flex flex-col items-center max-w-sm w-full transition-all duration-500 hover:shadow-3xl">
                            <div className="mb-4">
                                <span className="material-symbols-outlined text-[#282175] text-7xl">shopping_bag</span>
                                <div className="h-1 w-16 bg-[#D12027] mx-auto mt-2 rounded-full"></div>
                            </div>
                            <h1 className="font-['Outfit',sans-serif] font-black text-4xl text-[#282175] tracking-tighter">SMART</h1>
                            <p className="font-bold text-[#D12027] tracking-[0.3em] text-xs uppercase mb-4">Cash and Carry</p>
                            <div className="bg-[#282175] px-6 py-2 rounded-full mb-3">
                                <p className="text-white font-bold text-2xl leading-none">سمارٹ</p>
                            </div>
                            <p className="text-[#282175]/60 font-medium italic text-lg mt-2 tracking-tight">"Pay Less. Expect More.."</p>
                        </div>
                        <div className="max-w-2xl mt-8">
                            <h2 className="text-3xl md:text-4xl font-['Outfit',sans-serif] font-extrabold text-slate-900 dark:text-white mb-4">
                                Premium Wholesale Grocery <br />Now Serving <span className="text-[#D12027]">Narowal</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                                Welcome to the city's largest cash & carry. Experience premium quality, bulk savings, and lightning-fast delivery to your doorstep.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 hidden lg:block">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#282175]/10 to-transparent rounded-[3rem] blur-2xl group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                                    <img alt="Smart Delivery Hub" className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6DXl6h8oRUgkhFn5PqkjI048jUZIBv2-UHiWDd3iXEZtybE7F3M4ogTFgMoESX17OQ2CCcJ7u__H_eIU1_L8pLIQ9VPJlNilTByV8Wybxw_lKAoSoTm7xoD85Y-qlz3FQyfmtGSzMNOHpvc8WHrH01kzx49kE2tHEbZjovridOlHJFpcjhWPKDu2EP1VN5x4kcB6H5s8gWvFSGMn4B9t9xuInfx0fIu3aeQgfAShNYhPRnwUZPaR9JVHErl-tE0ADq-fJcz0SB25J" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#282175]/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="material-symbols-outlined text-[#D12027] fill-1">verified</span>
                                            <span className="font-bold uppercase tracking-widest text-xs">Official Delivery Partner</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Safe & Professional</h3>
                                        <p className="text-white/80 text-sm mt-1">Temperature-controlled delivery for Narowal's freshest groceries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Select Your Location</h3>
                                <p className="text-slate-500 text-sm">Where should we deliver your Smart groceries today?</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {['Model Town', 'Civil Lines', 'Housing Colony'].map((area) => (
                                    <label key={area} className="group relative flex flex-col p-4 border-2 border-slate-100 rounded-2xl cursor-pointer transition-all hover:border-[#282175] hover:bg-[#282175]/[0.02]">
                                        <input className="absolute top-4 right-4 text-[#282175] focus:ring-[#282175]" name="area" type="radio" value={area.toLowerCase().replace(' ', '-')} />
                                        <span className="material-symbols-outlined text-[#282175] mb-2">{area === 'Model Town' ? 'home_work' : area === 'Civil Lines' ? 'location_city' : 'holiday_village'}</span>
                                        <span className="font-bold text-slate-800 dark:text-white">{area}</span>
                                        <span className="text-xs text-slate-500">{area === 'Housing Colony' ? 'Priority bulk delivery' : 'Standard 60-min delivery'}</span>
                                    </label>
                                ))}
                                <div className="relative">
                                    <select className="w-full h-full min-h-[96px] p-4 border-2 border-slate-100 rounded-2xl bg-slate-50 dark:bg-slate-900 appearance-none focus:border-[#282175] focus:ring-0 transition-all cursor-pointer">
                                        <option value="">Other Narowal Areas...</option>
                                        <option value="zaman-park">Zaman Park</option>
                                        <option value="railway-road">Railway Road</option>
                                        <option value="kutchery-road">Kutchery Road</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 bottom-4 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <button
                                    onClick={() => navigate('/home')}
                                    className="w-full bg-[#282175] hover:bg-[#1a154a] text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#282175]/20 transition-all flex items-center justify-center gap-3 text-lg group"
                                >
                                    Start Shopping Now
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <button className="w-full bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold py-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[#D12027]">near_me</span>
                                    Use Current Location
                                </button>
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <p className="text-[#282175] font-bold text-xl">8k+</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Products</p>
                                </div>
                                <div className="text-center border-x border-slate-100 dark:border-slate-700">
                                    <p className="text-[#D12027] font-bold text-xl">Wholesale</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pricing</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[#282175] font-bold text-xl">24/7</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white dark:bg-[#0F172A] border-t border-slate-100 dark:border-slate-800 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="font-['Outfit',sans-serif] font-black text-xl text-[#282175]">SMART</span>
                                <div className="w-1 h-1 bg-[#D12027] rounded-full"></div>
                                <span className="text-xs font-bold text-slate-500 uppercase">Narowal Official</span>
                            </div>
                            <p className="text-sm text-slate-400">Premium Grocery & Wholesale Solutions.</p>
                        </div>
                        <div className="bg-[#D12027]/5 px-8 py-4 rounded-3xl border border-[#D12027]/10 flex flex-col items-center">
                            <span className="text-[10px] font-bold text-[#D12027] uppercase tracking-[0.2em] mb-1">Customer Support Hotline</span>
                            <a className="text-2xl font-black text-[#282175] tracking-tighter hover:text-[#D12027] transition-colors flex items-center gap-2" href="tel:03008800425">
                                <span className="material-symbols-outlined">headset_mic</span>
                                03008800425
                            </a>
                        </div>
                        <div className="flex gap-8">
                            <a className="text-xs font-bold text-slate-500 hover:text-[#282175] uppercase tracking-widest transition-colors" href="#">Terms</a>
                            <a className="text-xs font-bold text-slate-500 hover:text-[#282175] uppercase tracking-widest transition-colors" href="#">Privacy</a>
                            <a className="text-xs font-bold text-slate-500 hover:text-[#282175] uppercase tracking-widest transition-colors" href="#">About Us</a>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-xs text-slate-400">© 2024 Smart Cash and Carry Narowal. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Onboarding;

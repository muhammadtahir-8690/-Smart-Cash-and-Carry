import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';
import { getCart, clearCart } from '../utils/cartUtils';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [onlineSubMethod, setOnlineSubMethod] = useState('card');
    const [clientSecret, setClientSecret] = useState("");
    const [isProcessingSadaPay, setIsProcessingSadaPay] = useState(false);
    const [sadaPayPhone, setSadaPayPhone] = useState("");

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const deliveryFee = 0;
    const subtotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cart]);

    const orderAmount = subtotal + deliveryFee;

    useEffect(() => {
        if (paymentMethod === 'online' && onlineSubMethod === 'card' && !clientSecret) {
            // Create PaymentIntent as soon as cards are selected
            fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: orderAmount * 100 }), // Stripe expects amounts in cents
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [paymentMethod, onlineSubMethod, clientSecret, orderAmount]);

    const handleSadaPaySubmit = async (e) => {
        e.preventDefault();
        setIsProcessingSadaPay(true);

        try {
            const response = await fetch("/api/sadapay-handler", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    mobileNumber: sadaPayPhone,
                    amount: orderAmount,
                    transactionId: `TXN-${Date.now()}`
                }),
            });
            const data = await response.json();

            if (data.success) {
                alert(data.message);
                handlePaymentSuccess();
            } else {
                alert(data.error || "SadaPay payment failed.");
            }
        } catch (error) {
            alert("An error occurred with SadaPay integration.");
        } finally {
            setIsProcessingSadaPay(false);
        }
    };

    const handlePaymentSuccess = () => {
        const orderId = 'SC-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const currentCart = [...cart];
        clearCart();
        navigate('/order-success', {
            state: {
                orderId,
                cart: currentCart,
                subtotal,
                total: orderAmount
            }
        });
    };

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#c52026',
            colorBackground: '#ffffff',
            colorText: '#0f172a',
            borderRadius: '16px',
        },
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="bg-[#fdfdfe] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/home')}>
                        <div className="relative">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-100 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#211e69] to-[#c52026]">
                                    <span className="material-symbols-outlined text-white text-2xl">shopping_cart</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col leading-none text-left">
                            <span className="font-extrabold text-2xl tracking-tighter text-slate-900 dark:text-white uppercase">
                                <span className="text-[#211e69]">Smart</span>
                                <span className="text-[#c52026]">Cash & Carry</span>
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">Premium Grocery Experience</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-100 dark:border-slate-700">
                            <span className="material-symbols-outlined text-emerald-500 text-lg">verified_user</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secure 256-bit SSL</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-10">
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="relative flex justify-between items-center px-4">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-[#211e69] -z-10 -translate-y-1/2"></div>
                        <div className="flex flex-col items-center gap-3 bg-[#fdfdfe] dark:bg-[#0f172a] px-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[#211e69] bg-[#211e69] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#211e69]">Shipping</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 bg-[#fdfdfe] dark:bg-[#0f172a] px-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[#211e69] bg-white dark:bg-slate-900 text-[#211e69] flex items-center justify-center font-bold text-sm shadow-lg">2</div>
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#211e69]">Payment</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 bg-[#fdfdfe] dark:bg-[#0f172a] px-4">
                            <div className="w-10 h-10 rounded-full border-2 border-slate-200 text-slate-300 bg-white dark:bg-slate-900 font-bold text-sm">3</div>
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">Review</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 text-left">
                    <div className="lg:col-span-8 space-y-8">
                        <header>
                            <div className="flex items-center gap-2 text-[#c52026] font-bold text-xs uppercase tracking-[0.2em] mb-3">
                                <span className="material-symbols-outlined text-sm">shield_lock</span>
                                Safe & Encrypted Transaction
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Checkout Details</h1>
                        </header>

                        <section className="bg-white dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#211e69]/5 rounded-2xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#211e69] text-2xl">person</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Contact Information</h2>
                                    <p className="text-sm text-slate-500">How we should contact you about your order</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                    <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-semibold focus:ring-[#211e69] focus:border-[#211e69]" type="text" defaultValue="Ahmed Khan" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                    <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-semibold focus:ring-[#211e69] focus:border-[#211e69]" type="email" defaultValue="ahmed.khan@email.com" />
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#211e69]/5 rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#211e69] text-2xl">location_on</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">Delivery Location</h2>
                                        <p className="text-sm text-slate-500">Narowal delivery zone #4</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-xs font-black uppercase tracking-widest text-[#211e69] bg-[#211e69]/5 rounded-xl hover:bg-[#211e69]/10 transition-colors">Edit</button>
                            </div>
                            <div className="p-6 rounded-[24px] border-2 border-[#211e69] bg-[#211e69]/5 relative">
                                <span className="material-symbols-outlined absolute top-6 right-6 text-[#211e69]">verified</span>
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-lg">Circular Road, Near DHQ Hospital</p>
                                    <p className="text-sm text-slate-500">Narowal City, Punjab 51600</p>
                                    <div className="flex items-center gap-2 mt-4 text-xs font-bold text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-sm">phone</span>
                                        +92 300 1234567
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#211e69]/5 rounded-2xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#211e69] text-2xl">account_balance_wallet</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Payment Method</h2>
                                    <p className="text-sm text-slate-500">Safe & Encrypted Transactions</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {/* Cash on Delivery */}
                                <label className={`flex items-center p-6 rounded-[24px] border-2 transition-all cursor-pointer ${paymentMethod === 'cod' ? 'border-[#211e69] bg-[#211e69]/5 shadow-sm' : 'border-slate-100 dark:border-slate-800'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="w-5 h-5 text-[#211e69] focus:ring-[#211e69]"
                                    />
                                    <div className="ml-6 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200">
                                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">payments</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-base block">Cash on Delivery</span>
                                            <span className="text-xs text-slate-500 font-medium">Pay exactly when your items arrive</span>
                                        </div>
                                    </div>
                                </label>

                                {/* Pay Online Group */}
                                <div className={`rounded-[32px] border-2 transition-all overflow-hidden ${paymentMethod === 'online' ? 'border-[#211e69] bg-[#211e69]/5 shadow-md' : 'border-slate-100 dark:border-slate-800'}`}>
                                    <label className="flex items-center p-6 cursor-pointer" onClick={() => setPaymentMethod('online')}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'online'}
                                            onChange={() => setPaymentMethod('online')}
                                            className="w-5 h-5 text-[#211e69] focus:ring-[#211e69]"
                                        />
                                        <div className="ml-6 flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200">
                                                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">language</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-base block">Pay Online</span>
                                                <span className="text-xs text-slate-500 font-medium">Secure digital payment methods</span>
                                            </div>
                                        </div>
                                    </label>

                                    {paymentMethod === 'online' && (
                                        <div className="px-6 pb-6 space-y-4">
                                            <div className="flex gap-3 p-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                                <button
                                                    onClick={() => setOnlineSubMethod('card')}
                                                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${onlineSubMethod === 'card' ? 'bg-[#211e69] text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                                                >
                                                    <span className="material-symbols-outlined text-sm">credit_card</span>
                                                    Card
                                                </button>
                                                <button
                                                    onClick={() => setOnlineSubMethod('sadapay')}
                                                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${onlineSubMethod === 'sadapay' ? 'bg-[#00d084] text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                                                >
                                                    <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                                                    SadaPay
                                                </button>
                                            </div>

                                            {/* Stripe Card Element */}
                                            {onlineSubMethod === 'card' && (
                                                <div className="mt-4 p-6 bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800">
                                                    {clientSecret ? (
                                                        <Elements options={options} stripe={stripePromise}>
                                                            <PaymentForm amount={orderAmount} onPaymentSuccess={handlePaymentSuccess} />
                                                        </Elements>
                                                    ) : (
                                                        <div className="flex flex-col items-center py-6 gap-3">
                                                            <div className="w-8 h-8 border-2 border-[#211e69] border-t-transparent rounded-full animate-spin"></div>
                                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Securing Payment Channel...</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* SadaPay form */}
                                            {onlineSubMethod === 'sadapay' && (
                                                <div className="mt-4 p-6 bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 space-y-6">
                                                    <div className="flex items-center gap-4 p-4 bg-[#00d084]/5 rounded-2xl border border-[#00d084]/20">
                                                        <div className="w-12 h-12 bg-[#00d084] rounded-xl flex items-center justify-center shadow-sm">
                                                            <span className="material-symbols-outlined text-white text-3xl">account_balance_wallet</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex justify-between items-center mb-0.5">
                                                                <p className="text-sm font-bold text-slate-800 dark:text-white">Pay with SadaPay Wallet</p>
                                                                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[8px] font-black uppercase tracking-wider rounded-md">Demo Mode</span>
                                                            </div>
                                                            <p className="text-[10px] text-slate-500 font-bold">Fast & seamless mobile payments</p>
                                                        </div>
                                                    </div>

                                                    <form onSubmit={handleSadaPaySubmit} className="space-y-4">
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">SadaPay Registered Mobile</label>
                                                            <div className="relative">
                                                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">+92</span>
                                                                <input
                                                                    required
                                                                    className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl pl-14 pr-5 py-4 text-sm font-semibold focus:ring-[#00d084] focus:border-[#00d084]"
                                                                    type="tel"
                                                                    placeholder="300 0000000"
                                                                    value={sadaPayPhone}
                                                                    onChange={(e) => setSadaPayPhone(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <button
                                                            disabled={isProcessingSadaPay}
                                                            className="w-full py-5 bg-[#00d084] hover:bg-[#00b070] text-white font-black text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                                                        >
                                                            <span className="material-symbols-outlined text-2xl">
                                                                {isProcessingSadaPay ? "cached" : "bolt"}
                                                            </span>
                                                            {isProcessingSadaPay ? "Sending Request..." : `Pay PKR ${orderAmount.toLocaleString()}`}
                                                        </button>
                                                    </form>
                                                    <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">You will receive a notification in your app</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                                <div className="p-8 border-b border-slate-50 dark:border-slate-800">
                                    <h3 className="text-xl font-extrabold mb-1">Order Summary</h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Order ID: #SC-9921</p>
                                </div>
                                <div className="p-8 space-y-6 max-h-[300px] overflow-y-auto custom-scrollbar">
                                    {cart.length > 0 ? cart.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <img className="w-16 h-16 rounded-2xl bg-slate-50 p-2 object-contain border border-slate-100" src={item.img} alt={item.name} />
                                            <div className="flex-1">
                                                <p className="text-sm font-bold truncate">{item.name}</p>
                                                <p className="text-xs text-slate-400 font-semibold">{item.quantity} × Rs. {item.price}</p>
                                                <p className="text-sm font-black mt-1">PKR {item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    )) : (
                                        <p className="text-center text-slate-400 font-bold">Your cart is empty</p>
                                    )}
                                </div>
                                <div className="p-8 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
                                    <div className="flex justify-between text-sm font-semibold text-slate-500">
                                        <span>Subtotal</span>
                                        <span className="text-slate-900 dark:text-white">PKR {subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Total Payable</p>
                                            <p className="text-3xl font-black tracking-tighter text-[#c52026]">PKR {orderAmount.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                                {paymentMethod === 'cod' && (
                                    <div className="p-8">
                                        <button
                                            onClick={handlePaymentSuccess}
                                            className="w-full py-5 bg-[#c52026] hover:bg-red-700 text-white font-black text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                                        >
                                            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                                            Place Order Now
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Checkout;

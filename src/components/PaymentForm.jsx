import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amount, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL for payment verification
                return_url: window.location.origin + "/checkout",
            },
            redirect: 'if_required', // Attempt to confirm payment without redirecting
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setMessage("Payment Succeeded!");
            onPaymentSuccess();
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement id="payment-element" options={{ layout: "tabs" }} />

            {message && (
                <div id="payment-message" className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-semibold rounded-xl">
                    {message}
                </div>
            )}

            <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                className="w-full py-5 bg-[#c52026] hover:bg-red-700 text-white font-black text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span className="material-symbols-outlined text-2xl">
                    {isLoading ? "cached" : "shield_lock"}
                </span>
                <span id="button-text">
                    {isLoading ? "Processing..." : `Pay PKR ${amount.toLocaleString()}`}
                </span>
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Secure SSL Encrypted Payment
            </p>
        </form>
    );
};

export default PaymentForm;

'use client'
import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState<{
        status: 'idle' | 'loading' | 'success' | 'error';
        message: string;
    }>({ status: 'idle', message: '' });

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset previous status
        setSubscriptionStatus({ status: 'idle', message: '' });

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscriptionStatus({
                status: 'error',
                message: 'Please enter a valid email address'
            });
            return;
        }

        // Set loading state
        setSubscriptionStatus({ status: 'loading', message: 'Subscribing...' });

        try {
            // Simulated async subscription (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Successful subscription logic
            setSubscriptionStatus({
                status: 'success',
                message: 'Successfully subscribed!'
            });
            
            // Reset form and status after 3 seconds
            setEmail('');
            setTimeout(() => {
                setSubscriptionStatus({ status: 'idle', message: '' });
            }, 3000);
        } catch (error) {
            // Error handling
            setSubscriptionStatus({
                status: 'error',
                message: 'Subscription failed. Please try again.'
            });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-[#0a2342] to-[#1a3362] text-white py-12 px-4 md:px-12 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 bg-pattern"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative z-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        <span className="text-[#176bf2]">◇</span> Wandiko
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Empowering academic excellence through expert research support and mentorship.
                    </p>
                    <div className="flex space-x-4 text-2xl">
                        {[/* eslint-disable @typescript-eslint/no-unused-vars */
                            { Icon: FaFacebook, href: 'https://facebook.com/wandiko', color: 'text-blue-500' },
                            { Icon: FaTwitter, href: 'https://twitter.com/wandiko', color: 'text-sky-400' },
                            { Icon: FaLinkedin, href: 'https://linkedin.com/company/wandiko', color: 'text-blue-700' },
                            { Icon: FaWhatsapp, href: 'https://wa.me/+254712345678', color: 'text-green-500' }
                        ].map(({ Icon, href, color }, index) => (
                            <Link 
                                key={index} 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`${color} hover:scale-110 transition-transform`}
                            >
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Quick Links</h3>
                    <ul className="mt-3 space-y-2">
                        {[/* eslint-disable @typescript-eslint/no-unused-vars */
                            { label: 'Services', href: '/#services' },
                            { label: 'Contact Us', href: '/contact' },
                            { label: 'About Us', href: '/#about' }
                        ].map(({ label, href }, index) => (
                            <li key={index}>
                                <Link 
                                    href={href} 
                                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Contact Info</h3>
                    <ul className="mt-3 space-y-3 text-gray-400">
                        {[/* eslint-disable @typescript-eslint/no-unused-vars */
                            { Icon: MdPhone, text: '+254 712 345 678' },
                            { Icon: MdEmail, text: 'support@wandiko.com' },
                            { Icon: MdLocationOn, text: 'Nairobi, Kenya' }
                        ].map(({ Icon, text }, index) => (
                            <li key={index} className="flex items-center gap-3 hover:text-white transition">
                                <Icon className="text-xl" />
                                <span className="text-sm">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Subscribe for academic insights and support tips.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                        <div className="flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#176bf2]"
                                required
                                disabled={subscriptionStatus.status === 'loading'}
                            />
                            <button 
                                type="submit" 
                                className="bg-[#176bf2] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                                disabled={subscriptionStatus.status === 'loading'}
                            >
                                {subscriptionStatus.status === 'loading' ? (
                                    <span className="animate-pulse">...</span>
                                ) : 'Go'}
                            </button>
                        </div>
                        {subscriptionStatus.message && (
                            <p className={`text-sm ${subscriptionStatus.status === 'success' ? 'text-green-400' : 'text-red-400'} animate-fadeIn`}>
                                {subscriptionStatus.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-gray-700 relative z-10">
                <p className="text-gray-400 text-sm">
                    {new Date().getFullYear()} Wandiko. All rights reserved. 
                    <span className="ml-2 text-[#176bf2] hover:underline cursor-pointer">
                        Privacy Policy
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

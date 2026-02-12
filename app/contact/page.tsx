"use client";

import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="pt-20 pb-20">
            <div className="bg-primary-900 text-white py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                        Visit us, call us, or send a message. We're here to help you look your best.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-900 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary-900 mb-1">Visit Our Store</h3>
                                    <p className="text-primary-600 leading-relaxed">
                                        Vijay Nagar, Netaji Circle Gate,<br />
                                        Near Ayanur, Shivamogga,<br />
                                        Karnataka – 577205
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-900 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary-900 mb-1">Call Us</h3>
                                    <p className="text-primary-600 mb-2">Mon-Sun from 10am to 10pm</p>
                                    <a href="tel:08296682605" className="text-gold font-bold hover:underline">
                                        0829 668 2605
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-900 flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary-900 mb-1">Business Hours</h3>
                                    <p className="text-primary-600">
                                        Open Daily: 10:00 AM - 10:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-900 flex-shrink-0">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary-900 mb-1">WhatsApp</h3>
                                    <p className="text-primary-600 mb-2">Chat with us for quick inquiries</p>
                                    <a href="https://wa.me/918296682605" target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">
                                        Chat Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map and Form */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="bg-white p-2 rounded-xl shadow-md h-[300px] w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.5999999999995!2d75.56666666666666!3d13.933333333333334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbb4e4e4e4e4e5%3A0x4e4e4e4e4e4e4e4e!2sDuas+Boutique!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '0.75rem' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Inquiry Form (Visual Only) */}
                        <div className="bg-primary-50 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-primary-900 mb-4">Send us a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-primary-200 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 rounded-md border border-primary-200 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your Phone Number" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-primary-200 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

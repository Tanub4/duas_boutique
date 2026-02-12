import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-primary-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Duas Boutique</h3>
                        <p className="text-primary-300 mb-6 leading-relaxed">
                            Where every stitch tells a story. We specialize in custom tailoring, designer wear, and premium alterations for the modern woman.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gold transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-gold transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Visit Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                                <span>
                                    Vijay Nagar, Netaji Circle Gate,<br />
                                    Near Ayanur, Shivamogga,<br />
                                    Karnataka – 577205
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-gold flex-shrink-0" size={20} />
                                <a href="tel:08296682605" className="hover:text-gold transition-colors">
                                    0829 668 2605
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="text-gold flex-shrink-0" size={20} />
                                <span>Open Daily: 10:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Duas Boutique. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

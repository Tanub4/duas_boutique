"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-primary-50/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-3xl font-serif font-bold text-primary-900">
                            Duas Boutique
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary-800 hover:text-gold-dark transition-colors font-medium text-sm tracking-wide"
                            >
                                {link.name.toUpperCase()}
                            </Link>
                        ))}
                        <a
                            href="tel:08296682605"
                            className="bg-gold hover:bg-gold-dark text-white px-5 py-2 rounded-full transition-colors flex items-center gap-2 font-medium"
                        >
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary-800 hover:text-gold-dark focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-primary-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-primary-800 hover:bg-primary-50 hover:text-gold-dark font-medium rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <a
                                href="tel:08296682605"
                                className="w-full flex justify-center items-center gap-2 bg-gold text-white px-4 py-3 rounded-full hover:bg-gold-dark transition-colors"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

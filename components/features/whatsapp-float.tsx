"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/918296682605"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}

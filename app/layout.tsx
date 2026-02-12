import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/features/whatsapp-float";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Duas Boutique | Fashion Designer & Custom Tailoring in Shivamogga",
    description: "Premier fashion boutique in Shivamogga offering custom stitching, designer outfits, and alterations. Visit us at Vijay Nagar.",
    keywords: "Duas Boutique, fashion designer Shivamogga, custom tailoring, designer wear, boutique Karnataka, ladies tailor",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${inter.variable} font-sans bg-background-start`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <WhatsAppFloat />
                <Footer />
            </body>
        </html>
    );
}

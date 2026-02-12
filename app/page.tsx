import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scissors, Ruler, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-primary-100 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    {/* Placeholder for hero background pattern/image */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 mb-6 leading-tight">
                        Where Every Stitch <br /> Tells a Story
                    </h1>
                    <p className="text-xl text-primary-700 mb-10 max-w-2xl mx-auto">
                        Experience the art of custom tailoring and exclusive designer wear at Duas Boutique.
                        Crafted for elegance, designed for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" variant="secondary">
                                Book an Appointment
                            </Button>
                        </Link>
                        <Link href="/gallery">
                            <Button size="lg" variant="outline">
                                View Collection
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/boutique-storefront.jpg"
                            alt="Duas Boutique Storefront"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6">Redefining Elegance in Shivamogga</h2>
                        <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                            At Duas Boutique, we believe that fashion is a personal expression. Located in the heart of Shivamogga,
                            we offer a curated experience for those who seek perfection in every seam. Whether it's a bridal lehenga,
                            a custom-stitched blouse, or a perfectly altered dress, our expert team ensures you look your best.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-primary-700">
                                <span className="h-2 w-2 rounded-full bg-gold" />
                                Custom Designer Outfits
                            </li>
                            <li className="flex items-center gap-3 text-primary-700">
                                <span className="h-2 w-2 rounded-full bg-gold" />
                                Premium Stitching Quality
                            </li>
                            <li className="flex items-center gap-3 text-primary-700">
                                <span className="h-2 w-2 rounded-full bg-gold" />
                                Timely Delivery
                            </li>
                        </ul>
                        <Link href="/about">
                            <Button variant="ghost" className="text-gold hover:text-gold-dark pl-0 hover:bg-transparent">
                                Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-20 bg-primary-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Our Services</h2>
                        <p className="text-primary-600 max-w-2xl mx-auto">
                            From concept to creation, we bring your fashion dreams to life with precision and care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Scissors className="h-10 w-10 text-gold" />,
                                title: "Custom Stitching",
                                desc: "Get your outfits stitched to perfection with our bespoke tailoring services for all occasions."
                            },
                            {
                                icon: <Sparkles className="h-10 w-10 text-gold" />,
                                title: "Designer Wear",
                                desc: "Exclusive designer collections that blend contemporary trends with traditional elegance."
                            },
                            {
                                icon: <Ruler className="h-10 w-10 text-gold" />,
                                title: "Fittings & Alterations",
                                desc: "Expert alterations to ensure your favorite clothes fit you like a glove."
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h3>
                                <p className="text-primary-600 mb-4">{service.desc}</p>
                                <Link href="/services" className="text-gold font-medium hover:underline text-sm uppercase tracking-wide">
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Create Your Unique Look?</h2>
                    <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
                        Visit us today or schedule a consultation with our designers. Let's make something beautiful together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918296682605" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-none w-full sm:w-auto">
                                Chat on WhatsApp
                            </Button>
                        </a>
                        <a href="tel:08296682605">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900 w-full sm:w-auto">
                                Call Us Now
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

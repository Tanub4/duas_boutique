import { Scissors, Ruler, Sparkles, Shirt, Gem, Clock } from "lucide-react";

const services = [
    {
        icon: <Scissors className="h-8 w-8" />,
        title: "Custom Stitching",
        description: "Blouses, Salwar Kameez, Kurtis, and more stitched to your exact measurements.",
    },
    {
        icon: <Sparkles className="h-8 w-8" />,
        title: "Bridal Wear",
        description: "Exquisite bridal lehengas and heavy work blouses for your special day.",
    },
    {
        icon: <Ruler className="h-8 w-8" />,
        title: "Alterations",
        description: "Perfecting the fit of your ready-made clothes with expert alterations.",
    },
    {
        icon: <Shirt className="h-8 w-8" />,
        title: "Western Wear",
        description: "Custom designed dresses, gowns, and western outfits.",
    },
    {
        icon: <Gem className="h-8 w-8" />,
        title: "Embroidery Work",
        description: "Hand and machine embroidery to add elegance to your outfits.",
    },
    {
        icon: <Clock className="h-8 w-8" />,
        title: "Express Service",
        description: "Urgent stitching services available for last-minute needs.",
    },
];

export default function ServicesPage() {
    return (
        <div className="py-20">
            <div className="bg-primary-900 text-white py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                        Comprehensive tailoring and design services for every occasion.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-800 mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">{service.title}</h3>
                            <p className="text-primary-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-primary-50 rounded-2xl p-10 text-center">
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Need something specific?</h2>
                    <p className="text-primary-700 mb-8 max-w-2xl mx-auto">
                        We love challenges! If you have a specific design in mind or a photo you want to replicate,
                        bring it to us and we'll make it happen.
                    </p>
                    <a href="/contact" className="inline-block bg-primary-900 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-800 transition-colors">
                        Contact Us for Custom Requests
                    </a>
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";

const images = [
    { src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2548&auto=format&fit=crop", category: "Gowns" },
    { src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2534&auto=format&fit=crop", category: "Fabric" },
    { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop", category: "Custom" },
    { src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2670&auto=format&fit=crop", category: "Designer" },
    { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop", category: "Workshop" },
];

export default function GalleryPage() {
    return (
        <div className="py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">Our Portfolio</h1>
                <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                    A glimpse into the artistry and craftsmanship at Duas Boutique.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, index) => (
                        <div key={index} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
                            <img
                                src={img.src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-serif text-xl tracking-widest uppercase border-b-2 border-gold pb-1">
                                    {img.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

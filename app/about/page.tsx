import Image from "next/image";
import { Award, Heart, UserCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-20 pb-20">
            {/* Hero */}
            <div className="bg-primary-50 py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">Our Story</h1>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        From a small passion project to Shivamogga's premier fashion destination.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="prose prose-lg text-primary-700">
                        <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Passion for Fashion</h2>
                        <p className="mb-6">
                            Founded with a vision to bring high-quality designer wear to Shivamogga, Duas Boutique has always been about more than just clothes. It's about confidence, elegance, and the joy of wearing something made just for you.
                        </p>
                        <p className="mb-6">
                            We specialize in understanding our clients' unique styles and translating them into reality. Whether it's a traditional saree blouse with intricate embroidery or a modern gown for a cocktail party, our attention to detail is unmatched.
                        </p>
                        <p>
                            Located near Netaji Circle Gate, we have become a trusted name for women who value quality and exclusivity.
                        </p>
                    </div>
                    <div className="relative h-[400px] bg-primary-200 rounded-xl overflow-hidden">
                        {/* Placeholder for about image */}
                        <div className="w-full h-full flex items-center justify-center text-primary-400">
                            <span className="text-lg">Founder / Team Photo</span>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white border border-primary-100 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">Quality First</h3>
                        <p className="text-primary-600">We never compromise on the quality of fabric or stitching.</p>
                    </div>
                    <div className="p-6 bg-white border border-primary-100 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">Made with Love</h3>
                        <p className="text-primary-600">Every piece is crafted with care and personal attention.</p>
                    </div>
                    <div className="p-6 bg-white border border-primary-100 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                            <UserCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">Perfect Fit</h3>
                        <p className="text-primary-600">We guarantee a fit that flatters your body and style.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

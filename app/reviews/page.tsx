import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
    {
        name: "Priya Sharma",
        rating: 5,
        text: "Absolutely loved the stitching! The blouse fit perfectly on the first try. Highly recommend Duas Boutique for their attention to detail.",
        date: "2 weeks ago"
    },
    {
        name: "Anjali K.",
        rating: 4,
        text: "Great designs and very polite staff. The delivery was slightly delayed, but the final outfit was worth the wait.",
        date: "1 month ago"
    },
    {
        name: "Meera R.",
        rating: 5,
        text: "They revived an old saree of my mother's into a beautiful gown. It's now my favorite outfit! Thank you for the creativity.",
        date: "2 months ago"
    },
    {
        name: "Sneha Gupta",
        rating: 5,
        text: "Best boutique in Shivamogga for bridal wear. The embroidery work is exquisite.",
        date: "3 months ago"
    },
];

export default function ReviewsPage() {
    return (
        <div className="py-20 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">Customer Love</h1>
                <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                    Don't just take our word for it. Here's what our beautiful clients have to say.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 mb-20">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100 flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">{review.name}</h3>
                                <p className="text-xs text-primary-400">{review.date}</p>
                            </div>
                            <div className="ml-auto flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < review.rating ? "fill-gold text-gold" : "text-primary-200"}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-primary-600 leading-relaxed italic">"{review.text}"</p>
                    </div>
                ))}
            </div>

            <div className="bg-primary-50 py-16">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Have you visited us?</h2>
                    <p className="text-primary-600 mb-8">
                        We'd love to hear about your experience. Your feedback helps us serve you better.
                    </p>
                    <a href="https://www.google.com/maps/place/Duas+Boutique" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-primary-900 border border-primary-200 hover:bg-gold hover:text-white hover:border-gold">
                            Write a Review on Google
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

import { Sticker } from "./Sticker";
import { HeartSticker, StarSticker } from "./StickerIcons";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    avatar: "😊",
    review: "The personalized magazine was the best gift I've ever given! My husband cried happy tears 💕",
    occasion: "Anniversary"
  },
  {
    id: 2,
    name: "Rahul M.",
    avatar: "🥰",
    review: "MagzMe made my proposal so special. The custom scrapbook was beyond perfect!",
    occasion: "Proposal"
  },
  {
    id: 3,
    name: "Sneha K.",
    avatar: "✨",
    review: "The Art Mail Club is my monthly dose of happiness. Best subscription ever!",
    occasion: "Self-love"
  },
  {
    id: 4,
    name: "Amit P.",
    avatar: "🎉",
    review: "Ordered bulk gifts for our team - everyone loved them! Will definitely order again.",
    occasion: "Corporate"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative stickers */}
      <Sticker className="absolute top-16 left-12" variant="float">
        <HeartSticker className="w-10 h-10" />
      </Sticker>
      <Sticker className="absolute bottom-20 right-16" variant="float-delayed">
        <StarSticker className="w-8 h-8" />
      </Sticker>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-foreground mb-4">
          Love Notes 💬
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          What our happy customers say
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-3xl p-6 shadow-card hover:-translate-y-2 transition-all duration-300 relative animate-pop-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-baby-pink rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-hot-pink" />
              </div>
              
              {/* Avatar */}
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              
              {/* Review */}
              <p className="font-handwritten text-xl text-foreground mb-4 leading-relaxed">
                "{testimonial.review}"
              </p>
              
              {/* Name & Occasion */}
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </span>
                <span className="text-xs bg-mint-green text-white px-2 py-1 rounded-full">
                  {testimonial.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Button } from "./ui/button";
import { MessageCircle, Building2, Heart, PartyPopper } from "lucide-react";
import { Sticker } from "./Sticker";
import { GiftSticker, HeartSticker } from "./StickerIcons";

const bulkCategories = [
  {
    id: 1,
    title: "Corporate Gifting",
    description: "Impress clients & employees with personalized gifts that show you care.",
    icon: Building2,
    color: "bg-sky-blue",
    shadowColor: "shadow-pop-blue"
  },
  {
    id: 2,
    title: "Wedding Orders",
    description: "Make your big day unforgettable with custom wedding favors & gifts.",
    icon: Heart,
    color: "bg-hot-pink",
    shadowColor: "shadow-pop"
  },
  {
    id: 3,
    title: "Parties & Events",
    description: "Unique party favors and event gifts that your guests will love.",
    icon: PartyPopper,
    color: "bg-mint-green",
    shadowColor: "shadow-pop-green"
  }
];

export const BulkOrders = () => {
  const openWhatsApp = (category: string) => {
    window.open(
      `https://wa.me/918178801635?text=Hi! I'm interested in bulk orders for: ${category}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative stickers */}
      <Sticker className="absolute top-16 right-20" variant="float">
        <GiftSticker className="w-16 h-16" />
      </Sticker>
      <Sticker className="absolute bottom-24 left-12" variant="float-delayed">
        <HeartSticker className="w-12 h-12" />
      </Sticker>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-foreground mb-4">
          Bulk Orders 🧾
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          Special packages for your special occasions
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bulkCategories.map((category, index) => (
            <div
              key={category.id}
              className={`${category.color} rounded-3xl p-8 text-center ${category.shadowColor} hover:-translate-y-2 transition-all duration-300 animate-pop-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <category.icon className="w-10 h-10 text-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {category.title}
              </h3>
              
              <p className="text-white/90 font-body mb-6">
                {category.description}
              </p>
              
              <Button
                onClick={() => openWhatsApp(category.title)}
                className="bg-white text-foreground hover:bg-white/90 font-display rounded-full px-6 hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact on WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

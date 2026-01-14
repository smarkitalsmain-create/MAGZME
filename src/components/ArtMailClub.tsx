import { Button } from "./ui/button";
import { Mail, Pen, Send, Heart } from "lucide-react";
import { Sticker } from "./Sticker";
import { EnvelopeSticker, HeartSticker, FlowerSticker } from "./StickerIcons";

const steps = [
  {
    icon: Pen,
    title: "Subscribe",
    description: "Join our exclusive Art Mail Club"
  },
  {
    icon: Mail,
    title: "Create",
    description: "We craft a beautiful handwritten letter"
  },
  {
    icon: Send,
    title: "Receive",
    description: "Get a surprise art mail every month"
  },
  {
    icon: Heart,
    title: "Treasure",
    description: "Collect memories that last forever"
  }
];

export const ArtMailClub = () => {
  const handleJoinClub = () => {
    window.open(
      "https://wa.me/918178801635?text=Hi! I want to join the Art Mail Club!",
      "_blank"
    );
  };

  return (
    <section id="art-mail" className="py-20 bg-cream relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative stickers */}
      <Sticker className="absolute top-20 left-10" variant="float">
        <EnvelopeSticker className="w-20 h-20" />
      </Sticker>
      <Sticker className="absolute top-32 right-16" variant="float-delayed">
        <HeartSticker className="w-10 h-10" />
      </Sticker>
      <Sticker className="absolute bottom-24 right-20" variant="float-slow">
        <FlowerSticker className="w-16 h-16" />
      </Sticker>
      <Sticker className="absolute bottom-32 left-20" variant="bounce">
        <EnvelopeSticker className="w-14 h-14 rotate-12" />
      </Sticker>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-hot-pink text-white px-4 py-2 rounded-full font-display text-sm mb-6">
            ✉️ Snail Mail Magic
          </span>
          
          <h2 className="section-heading text-foreground mb-4">
            Art Mail Club 💌
          </h2>
          
          <p className="font-handwritten text-2xl md:text-3xl text-hot-pink mb-6">
            Because some feelings deserve more than a text
          </p>
          
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            Join our nostalgic snail mail club and receive beautifully handcrafted 
            letters, postcards, and art pieces delivered straight to your mailbox every month.
          </p>

          {/* How it works */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:-translate-y-2 transition-all duration-300 animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-baby-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-hot-pink" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <Button
            onClick={handleJoinClub}
            size="lg"
            className="bg-hot-pink hover:bg-primary text-white font-display text-lg px-10 py-6 rounded-full shadow-pop hover:-translate-y-1 transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Join the Club
          </Button>
        </div>
      </div>
    </section>
  );
};

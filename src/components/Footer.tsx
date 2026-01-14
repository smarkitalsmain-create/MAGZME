import { Instagram, MessageCircle, Heart } from "lucide-react";
import { Sticker } from "./Sticker";
import { HeartSticker, FlowerSticker } from "./StickerIcons";

export const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918178801635", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/magzme_official", "_blank");
  };

  return (
    <footer className="bg-cream relative overflow-hidden py-16">
      {/* Decorative stickers */}
      <Sticker className="absolute top-8 left-8" variant="float">
        <HeartSticker className="w-8 h-8" />
      </Sticker>
      <Sticker className="absolute top-12 right-12" variant="float-delayed">
        <FlowerSticker className="w-10 h-10" />
      </Sticker>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h2 className="font-display text-4xl font-bold text-hot-pink mb-4">
            MagzMe
          </h2>
          <p className="font-handwritten text-2xl text-foreground mb-8">
            Personalized Gifts That Tell Your Story
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={openWhatsApp}
              className="w-14 h-14 bg-mint-green hover:bg-accent rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={openInstagram}
              className="w-14 h-14 bg-hot-pink hover:bg-primary rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all"
            >
              <Instagram className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground font-body">
            <a href="#products" className="hover:text-hot-pink transition-colors">Products</a>
            <a href="#art-mail" className="hover:text-hot-pink transition-colors">Art Mail Club</a>
            <button onClick={openWhatsApp} className="hover:text-hot-pink transition-colors">Contact</button>
          </div>

          {/* Closing Line */}
          <div className="border-t border-border pt-8">
            <p className="font-handwritten text-xl text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-5 h-5 text-hot-pink fill-hot-pink animate-pulse" /> & memories
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 MagzMe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Sticker } from "./Sticker";
import { 
  CameraSticker, 
  PolaroidSticker, 
  GiftSticker, 
  HeartSticker, 
  StarSticker,
  FlowerSticker,
  SparkleSticker
} from "./StickerIcons";
import { Button } from "./ui/button";
import { Gift, Mail } from "lucide-react";

export const Hero = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918178801635?text=Hi! I'm interested in MagzMe products", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-baby-pink grid-pattern">
      {/* Decorative Stickers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <Sticker className="absolute top-20 left-10 md:left-20" variant="float">
          <CameraSticker className="w-20 h-20 md:w-28 md:h-28" />
        </Sticker>
        
        <Sticker className="absolute top-32 left-32 md:left-48" variant="float-delayed">
          <HeartSticker className="w-8 h-8 md:w-12 md:h-12" />
        </Sticker>

        {/* Top Right */}
        <Sticker className="absolute top-16 right-10 md:right-24" variant="float-slow">
          <PolaroidSticker className="w-20 h-20 md:w-24 md:h-24 rotate-12" />
        </Sticker>
        
        <Sticker className="absolute top-40 right-8 md:right-40" variant="bounce">
          <StarSticker className="w-8 h-8 md:w-10 md:h-10" />
        </Sticker>

        {/* Bottom Left */}
        <Sticker className="absolute bottom-32 left-8 md:left-16" variant="float-delayed">
          <GiftSticker className="w-16 h-16 md:w-24 md:h-24 -rotate-12" />
        </Sticker>
        
        <Sticker className="absolute bottom-20 left-32 md:left-48" variant="float">
          <SparkleSticker className="w-6 h-6 md:w-8 md:h-8" />
        </Sticker>

        {/* Bottom Right */}
        <Sticker className="absolute bottom-24 right-12 md:right-28" variant="float-slow">
          <FlowerSticker className="w-16 h-16 md:w-20 md:h-20" />
        </Sticker>
        
        <Sticker className="absolute bottom-48 right-8 md:right-16" variant="bounce">
          <HeartSticker className="w-10 h-10 md:w-14 md:h-14" />
        </Sticker>

        {/* Extra floating elements */}
        <Sticker className="absolute top-1/2 left-4 md:left-12" variant="float">
          <StarSticker className="w-6 h-6" />
        </Sticker>
        
        <Sticker className="absolute top-1/3 right-4 md:right-12" variant="float-delayed">
          <SparkleSticker />
        </Sticker>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-pop-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
            MagzMe
          </h1>
          <p className="font-handwritten text-3xl md:text-4xl lg:text-5xl text-hot-pink mb-6">
            Personalized Gifts That Tell Your Story
          </p>
        </div>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Create magical moments with handcrafted, personalized gifts that capture 
          your most precious memories ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            className="bg-hot-pink hover:bg-primary text-white font-display text-lg px-8 py-6 rounded-full shadow-pop hover:-translate-y-1 transition-all duration-300 group"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Gift className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Explore Products
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-white font-display text-lg px-8 py-6 rounded-full transition-all duration-300"
            onClick={() => document.getElementById('art-mail')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Join Art Mail Club
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-hot-pink rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-hot-pink rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

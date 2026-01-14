import { Sticker } from "./Sticker";
import { SparkleSticker, HeartSticker } from "./StickerIcons";
import { Instagram, Play } from "lucide-react";

const reels = [
  {
    id: 1,
    thumbnail: "products/ig.png",
    views: "12.5K"
  },
  {
    id: 2,
    thumbnail: "products/ig2.png",
    views: "8.2K"
  },
  {
    id: 3,
    thumbnail: "products/ig3.png",
    views: "15.3K"
  },
  {
    id: 4,
    thumbnail: "products/ig4.png",
    views: "9.7K"
  },
  {
    id: 5,
    thumbnail: "products/ig5.png",
    views: "11.1K"
  }
];

export const ReelsSection = () => {
  const openInstagram = () => {
    window.open("https://instagram.com/magzme_official", "_blank");
  };

  return (
    <section className="py-20 bg-baby-pink relative overflow-hidden">
      {/* Decorative stickers */}
      <Sticker className="absolute top-12 right-16" variant="float">
        <SparkleSticker className="w-8 h-8" />
      </Sticker>
      <Sticker className="absolute bottom-16 left-12" variant="float-delayed">
        <HeartSticker className="w-10 h-10" />
      </Sticker>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-white text-hot-pink px-4 py-2 rounded-full font-display text-sm mb-6">
            <Instagram className="w-4 h-4" />
            @magzme_official
          </span>
          
          <h2 className="section-heading text-foreground mb-4">
            Trending Reels 🎥
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Watch our latest creations come to life
          </p>
        </div>

        {/* Reels Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              onClick={openInstagram}
              className="flex-shrink-0 w-48 md:w-56 cursor-pointer group animate-pop-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={reel.thumbnail}
                  alt={`Reel ${reel.id}`}
                  className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-hot-pink fill-hot-pink ml-1" />
                  </div>
                </div>
                
                {/* Views */}
                <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Play className="w-3 h-3 fill-white" />
                  {reel.views}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button
            onClick={openInstagram}
            className="inline-flex items-center gap-2 text-hot-pink hover:text-primary font-display font-semibold transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow us for more ✨
          </button>
        </div>
      </div>
    </section>
  );
};

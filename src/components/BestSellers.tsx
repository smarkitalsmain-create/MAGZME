import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Sticker } from "./Sticker";
import { HeartSticker, StarSticker, SparkleSticker } from "./StickerIcons";
import { products } from "@/data/products";

const bestSellers = products.slice(0, 5);

export const BestSellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // 🔥 Responsive logic
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentIndex(0);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = bestSellers.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const openWhatsApp = (productName: string) => {
    window.open(
      `https://wa.me/918178801635?text=${encodeURIComponent(
        `Hi! I'm interested in ordering: ${productName}`
      )}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-mint-green relative overflow-hidden">
      {/* Stickers */}
      <Sticker className="absolute top-10 left-10" variant="float">
        <HeartSticker className="w-12 h-12" />
      </Sticker>
      <Sticker className="absolute top-20 right-16" variant="float-delayed">
        <StarSticker className="w-10 h-10" />
      </Sticker>
      <Sticker className="absolute bottom-16 left-20" variant="float-slow">
        <SparkleSticker className="w-8 h-8" />
      </Sticker>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-white mb-4">
          Best Sellers 💚
        </h2>
        <p className="text-center text-white/90 text-lg mb-12">
          Our most-loved personalized gifts
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-11 h-11 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-mint-green" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-11 h-11 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-mint-green" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {bestSellers.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-3xl p-4 shadow-lg hover:-translate-y-2 transition-all">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="rounded-2xl mb-4 aspect-square object-cover"
                      />
                      <h3 className="font-display text-xl font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                    </Link>

                    <Button
                      onClick={() => openWhatsApp(product.name)}
                      className="w-full bg-mint-green text-white rounded-full"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Order on WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

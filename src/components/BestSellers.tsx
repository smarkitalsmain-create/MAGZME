import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Sticker } from "./Sticker";
import { HeartSticker, StarSticker, SparkleSticker } from "./StickerIcons";
import { products } from "@/data/products";

const bestSellers = products.slice(0, 5);

export const BestSellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= bestSellers.length - itemsPerView + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? bestSellers.length - itemsPerView : prev - 1
    );
  };

  const openWhatsApp = (productName: string) => {
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(`Hi! I'm interested in ordering: ${productName}`)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-mint-green relative overflow-hidden">
      {/* Decorative stickers */}
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
        <p className="text-center text-white/90 font-body text-lg mb-12">
          Our most-loved personalized gifts
        </p>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-mint-green" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-mint-green" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {bestSellers.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                >
                  <div className="bg-white rounded-3xl p-4 shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative overflow-hidden rounded-2xl mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-hot-pink text-white px-3 py-1 rounded-full text-sm font-display">
                            {product.price}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1 hover:text-hot-pink transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                    </Link>
                    
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(product.name);
                      }}
                      className="w-full bg-mint-green hover:bg-accent text-white font-display rounded-full shadow-pop-green hover:-translate-y-1 transition-all"
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
            {Array.from({ length: bestSellers.length - itemsPerView + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
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

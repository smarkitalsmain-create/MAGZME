import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface RelatedProductsProps {
  products: Product[];
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const openWhatsApp = (productName: string) => {
    window.open(
      `https://wa.me/918178801635?text=${encodeURIComponent(`Hi! I'm interested in ordering: ${productName}`)}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-foreground mb-4">
          You Might Also Love 💕
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          More handpicked gifts for your special moments
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-3xl p-4 shadow-card card-pop animate-pop-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-2xl mb-4 group">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-sky-blue text-white px-3 py-1 rounded-full text-xs font-display">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-hot-pink text-white px-3 py-1 rounded-full text-sm font-display font-bold">
                      {product.price}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-1 hover:text-hot-pink transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {product.description}
                </p>
              </Link>

              <Button
                onClick={() => openWhatsApp(product.name)}
                className="w-full bg-hot-pink hover:bg-primary text-white font-display rounded-full hover:-translate-y-1 transition-all shadow-pop"
                size="sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Order on WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";
import { Sticker } from "./Sticker";
import { HeartSticker, FlowerSticker, GiftSticker } from "./StickerIcons";
import { products } from "@/data/products";
import { useMemo } from "react";

export const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return uniqueCategories.sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const setCategory = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category) {
      newParams.set("category", category);
    } else {
      newParams.delete("category");
    }
    setSearchParams(newParams);
  };

  const openWhatsApp = (productName: string) => {
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(`Hi! I'm interested in ordering: ${productName}`)}`,
      "_blank"
    );
  };

  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative stickers */}
      <Sticker className="absolute top-20 right-10" variant="float">
        <HeartSticker className="w-10 h-10" />
      </Sticker>
      <Sticker className="absolute bottom-32 left-8" variant="float-delayed">
        <FlowerSticker className="w-14 h-14" />
      </Sticker>
      <Sticker className="absolute top-1/2 right-4" variant="float-slow">
        <GiftSticker className="w-12 h-12" />
      </Sticker>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-foreground mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : "All Products 🛍️"}
        </h2>
        
        {(searchQuery || selectedCategory) && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground font-body">
              Found {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-hot-pink hover:text-hot-pink/80"
            >
              <X className="w-4 h-4 mr-1" />
              Clear filters
            </Button>
          </div>
        )}
        
        {!searchQuery && !selectedCategory && (
          <p className="text-center text-muted-foreground font-body text-lg mb-4">
            Discover our complete collection of personalized gifts
          </p>
        )}

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === "" ? "default" : "outline"}
            onClick={() => setCategory("")}
            className="rounded-full"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground font-body text-lg">
                No products found{searchQuery && ` matching "${searchQuery}"`}{selectedCategory && ` in ${selectedCategory}`}
              </p>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="mt-4 rounded-full"
              >
                View all products
              </Button>
            </div>
          ) : (
            filteredProducts.map((product, index) => (
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
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(product.name);
                  }}
                  className="w-full bg-hot-pink hover:bg-primary text-white font-display rounded-full hover:-translate-y-1 transition-all shadow-pop"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Order on WhatsApp
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

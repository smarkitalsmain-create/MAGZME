import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { OrderForm } from "@/components/OrderForm";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Sticker } from "@/components/Sticker";
import { HeartSticker, StarSticker, SparkleSticker } from "@/components/StickerIcons";
import { getProductById, getRelatedProducts } from "@/data/products";
import { ArrowLeft, Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id, 4) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Product Not Found 😢
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-hot-pink hover:bg-primary text-white font-display rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-baby-pink py-4 mt-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-hot-pink transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/#products" className="text-muted-foreground hover:text-hot-pink transition-colors">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Decorative stickers */}
        <Sticker className="absolute top-20 right-10 hidden lg:block" variant="float">
          <HeartSticker className="w-12 h-12" />
        </Sticker>
        <Sticker className="absolute bottom-40 left-8 hidden lg:block" variant="float-delayed">
          <StarSticker className="w-10 h-10" />
        </Sticker>
        <Sticker className="absolute top-1/2 right-4 hidden lg:block" variant="float-slow">
          <SparkleSticker className="w-8 h-8" />
        </Sticker>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="animate-pop-in">
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {/* Category & Price Tags */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1 bg-sky-blue text-white px-4 py-1.5 rounded-full text-sm font-display">
                  <Tag className="w-4 h-4" />
                  {product.category}
                </span>
                <span className="bg-hot-pink text-white px-4 py-1.5 rounded-full text-xl font-display font-bold shadow-pop">
                  {product.price}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="font-handwritten text-2xl text-hot-pink mb-6">
                {product.description}
              </p>

              {/* Long Description */}
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Features */}
              <div className="bg-muted rounded-2xl p-6 mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  What's Included ✨
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-mint-green rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Occasions */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Perfect For 🎯
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasion.map((occ, index) => (
                    <span
                      key={index}
                      className="bg-baby-pink text-hot-pink px-4 py-2 rounded-full text-sm font-display hover:bg-hot-pink hover:text-white transition-colors cursor-default"
                    >
                      {occ}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order Form */}
              <OrderForm product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <Footer />
    </div>
  );
};

export default ProductDetail;

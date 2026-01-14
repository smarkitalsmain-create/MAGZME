import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { ArrowLeft, Filter, ShoppingBag, MessageCircle, RotateCcw } from "lucide-react";

const budgetRanges = [
  { id: "under-500", label: "Under ₹500", min: 0, max: 500, emoji: "💰" },
  { id: "500-800", label: "₹500 - ₹800", min: 500, max: 800, emoji: "💸" },
  { id: "800-1000", label: "₹800 - ₹1000", min: 800, max: 1000, emoji: "💵" },
  { id: "above-1000", label: "Above ₹1000", min: 1000, max: Infinity, emoji: "💎" },
];

const occasions = [
  { id: "birthday", label: "Birthday", emoji: "🎂" },
  { id: "anniversary", label: "Anniversary", emoji: "💕" },
  { id: "wedding", label: "Wedding", emoji: "💒" },
  { id: "graduation", label: "Graduation", emoji: "🎓" },
  { id: "friendship", label: "Friendship", emoji: "🤝" },
  { id: "valentines", label: "Valentine's Day", emoji: "❤️" },
  { id: "proposal", label: "Proposal", emoji: "💍" },
  { id: "farewell", label: "Farewell", emoji: "👋" },
  { id: "thankyou", label: "Thank You", emoji: "🙏" },
  { id: "any", label: "Any Occasion", emoji: "🎁" },
];

const recipients = [
  { id: "her", label: "For Her", emoji: "👩", description: "Girlfriend, Wife, Mom, Sister, Friend" },
  { id: "him", label: "For Him", emoji: "👨", description: "Boyfriend, Husband, Dad, Brother, Friend" },
  { id: "anyone", label: "Anyone", emoji: "🧑‍🤝‍🧑", description: "Universal gifts for all" },
];

const GiftFinder = () => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by budget
    if (selectedBudget) {
      const budget = budgetRanges.find((b) => b.id === selectedBudget);
      if (budget) {
        filtered = filtered.filter(
          (p) => p.priceValue >= budget.min && p.priceValue < budget.max
        );
      }
    }

    // Filter by occasion
    if (selectedOccasion && selectedOccasion !== "any") {
      const occasionLabel = occasions.find((o) => o.id === selectedOccasion)?.label;
      if (occasionLabel) {
        filtered = filtered.filter((p) =>
          p.occasion.some((occ) => occ.toLowerCase().includes(occasionLabel.toLowerCase().replace("'s day", "")))
        );
      }
    }

    return filtered;
  }, [selectedBudget, selectedOccasion, selectedRecipient]);

  const hasFilters = selectedBudget || selectedOccasion || selectedRecipient;

  const clearFilters = () => {
    setSelectedBudget(null);
    setSelectedOccasion(null);
    setSelectedRecipient(null);
  };

  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Hi! I found "${productName}" through your Gift Finder and I'm interested in ordering it. Can you help me?`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Gift Finder 🎁
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Answer a few questions and we'll help you discover the perfect personalized gift!
            </p>
          </div>
        </div>

        {/* Filter Sections */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {/* Budget Filter */}
          <Card className="border-2 border-dashed border-hot-pink/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                💰 What's your budget?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {budgetRanges.map((budget) => (
                  <Button
                    key={budget.id}
                    variant={selectedBudget === budget.id ? "default" : "outline"}
                    onClick={() => setSelectedBudget(selectedBudget === budget.id ? null : budget.id)}
                    className={`h-auto py-4 px-4 flex flex-col items-center gap-2 rounded-xl transition-all ${
                      selectedBudget === budget.id
                        ? "bg-hot-pink hover:bg-hot-pink/90 text-white"
                        : "hover:border-hot-pink hover:bg-hot-pink/5"
                    }`}
                  >
                    <span className="text-2xl">{budget.emoji}</span>
                    <span className="font-medium text-sm">{budget.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Occasion Filter */}
          <Card className="border-2 border-dashed border-sunny-yellow/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                🎉 What's the occasion?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {occasions.map((occasion) => (
                  <Button
                    key={occasion.id}
                    variant={selectedOccasion === occasion.id ? "default" : "outline"}
                    onClick={() => setSelectedOccasion(selectedOccasion === occasion.id ? null : occasion.id)}
                    className={`h-auto py-3 px-3 flex flex-col items-center gap-1 rounded-xl transition-all ${
                      selectedOccasion === occasion.id
                        ? "bg-sunny-yellow hover:bg-sunny-yellow/90 text-foreground"
                        : "hover:border-sunny-yellow hover:bg-sunny-yellow/5"
                    }`}
                  >
                    <span className="text-xl">{occasion.emoji}</span>
                    <span className="font-medium text-xs">{occasion.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recipient Filter */}
          <Card className="border-2 border-dashed border-mint/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                🎀 Who is it for?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recipients.map((recipient) => (
                  <Button
                    key={recipient.id}
                    variant={selectedRecipient === recipient.id ? "default" : "outline"}
                    onClick={() => setSelectedRecipient(selectedRecipient === recipient.id ? null : recipient.id)}
                    className={`h-auto py-5 px-4 flex flex-col items-center gap-2 rounded-xl transition-all ${
                      selectedRecipient === recipient.id
                        ? "bg-mint hover:bg-mint/90 text-foreground"
                        : "hover:border-mint hover:bg-mint/5"
                    }`}
                  >
                    <span className="text-3xl">{recipient.emoji}</span>
                    <span className="font-semibold">{recipient.label}</span>
                    <span className="text-xs text-muted-foreground text-center">{recipient.description}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Clear Filters */}
          {hasFilters && (
            <div className="flex justify-center">
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
              <Filter className="w-5 h-5" />
              {hasFilters ? "Recommended Gifts" : "All Gifts"} ({filteredProducts.length})
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-display font-semibold mb-2">No gifts match your criteria</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or browse all products</p>
              <Button onClick={clearFilters} className="bg-hot-pink hover:bg-hot-pink/90 text-white rounded-full">
                View All Gifts
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-hot-pink/30"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="font-semibold text-hot-pink">{product.price}</span>
                      </div>
                    </div>
                  </Link>
                  
                  <CardContent className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-hot-pink transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.occasion.slice(0, 2).map((occ) => (
                        <span 
                          key={occ} 
                          className="text-xs bg-sunny-yellow/20 text-foreground px-2 py-0.5 rounded-full"
                        >
                          {occ}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full rounded-full">
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => openWhatsApp(product.name)}
                        className="bg-green-500 hover:bg-green-600 text-white rounded-full"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GiftFinder;

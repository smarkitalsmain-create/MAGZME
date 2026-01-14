import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, Sparkles } from "lucide-react";

export const GiftFinderCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-hot-pink/10 via-sunny-yellow/10 to-mint/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-hot-pink/20 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-hot-pink" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Don't Know What to Gift? 🤔
          </h2>
          
          <p className="text-lg text-muted-foreground font-body mb-8">
            No worries! Answer a few quick questions and we'll help you find the perfect personalized gift.
          </p>
          
          <Link to="/gift-finder">
            <Button 
              size="lg" 
              className="bg-hot-pink hover:bg-hot-pink/90 text-white font-semibold rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Find My Perfect Gift
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

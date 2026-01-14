import { Button } from "./ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { Sticker } from "./Sticker";
import { StarSticker, SparkleSticker } from "./StickerIcons";

export const Invitations = () => {
  const handleCreateInvitation = () => {
    window.open(
      "https://wa.me/918178801635?text=Hi! I want to create a custom invitation",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-sky-blue grid-pattern-blue relative overflow-hidden">
      {/* Decorative stickers */}
      <Sticker className="absolute top-16 left-16" variant="float">
        <StarSticker className="w-12 h-12" />
      </Sticker>
      <Sticker className="absolute bottom-20 right-12" variant="float-delayed">
        <SparkleSticker className="w-10 h-10" />
      </Sticker>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-baby-pink rounded-br-[3rem]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-mint-green rounded-tl-[3rem]" />
            
            <div className="relative z-10 text-center">
              <span className="inline-flex items-center gap-2 bg-baby-pink text-hot-pink px-4 py-2 rounded-full font-display text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Custom Creations
              </span>
              
              <h2 className="section-heading text-foreground mb-4">
                Custom Invitations ✉️
              </h2>
              
              <p className="font-handwritten text-2xl text-sky-blue mb-6">
                Make your invites as special as your celebration
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-muted rounded-2xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Invitation Cards
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Beautiful, custom-designed physical invitation cards for weddings, 
                    birthdays, and special events.
                  </p>
                  <span className="text-hot-pink font-display font-bold">Starting ₹299</span>
                </div>
                
                <div className="bg-muted rounded-2xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Digital Invitations
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Stunning invitation websites with RSVP, event details, 
                    photo galleries, and more.
                  </p>
                  <span className="text-hot-pink font-display font-bold">Starting ₹499</span>
                </div>
              </div>
              
              <Button
                onClick={handleCreateInvitation}
                size="lg"
                className="bg-sky-blue hover:bg-blue-400 text-white font-display text-lg px-10 py-6 rounded-full shadow-pop-blue hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Create Your Invitation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

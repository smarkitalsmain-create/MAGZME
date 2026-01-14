import { Sticker } from "./Sticker";
import { StarSticker, SparkleSticker } from "./StickerIcons";

const occasions = [
  {
    id: 1,
    name: "Birthday",
    emoji: "🎂",
    color: "bg-hot-pink",
    hoverColor: "hover:bg-primary"
  },
  {
    id: 2,
    name: "Anniversary",
    emoji: "💕",
    color: "bg-baby-pink",
    hoverColor: "hover:bg-secondary"
  },
  {
    id: 3,
    name: "Proposal",
    emoji: "💍",
    color: "bg-sky-blue",
    hoverColor: "hover:bg-blue-400"
  },
  {
    id: 4,
    name: "Wedding",
    emoji: "💒",
    color: "bg-mint-green",
    hoverColor: "hover:bg-accent"
  },
  {
    id: 5,
    name: "Farewell",
    emoji: "✈️",
    color: "bg-soft-peach",
    hoverColor: "hover:bg-orange-200"
  },
  {
    id: 6,
    name: "Friendship",
    emoji: "👯",
    color: "bg-cream",
    hoverColor: "hover:bg-yellow-100"
  }
];

export const ShopByOccasion = () => {
  const handleOccasionClick = (occasionName: string) => {
    window.open(
      `https://wa.me/919999999999?text=Hi! I'm looking for ${occasionName} gifts`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-baby-pink grid-pattern relative overflow-hidden">
      {/* Decorative stickers */}
      <Sticker className="absolute top-12 left-12" variant="float">
        <StarSticker className="w-10 h-10" />
      </Sticker>
      <Sticker className="absolute bottom-20 right-16" variant="float-delayed">
        <SparkleSticker className="w-8 h-8" />
      </Sticker>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-foreground mb-4">
          Shop by Occasion 🎉
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          Find the perfect gift for every special moment
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {occasions.map((occasion, index) => (
            <button
              key={occasion.id}
              onClick={() => handleOccasionClick(occasion.name)}
              className={`${occasion.color} ${occasion.hoverColor} rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group animate-pop-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">
                {occasion.emoji}
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {occasion.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

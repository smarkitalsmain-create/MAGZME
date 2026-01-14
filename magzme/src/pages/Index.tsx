import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BestSellers } from "@/components/BestSellers";
import { AllProducts } from "@/components/AllProducts";
import { ShopByOccasion } from "@/components/ShopByOccasion";
import { GiftFinderCTA } from "@/components/GiftFinderCTA";
import { BulkOrders } from "@/components/BulkOrders";
import { ArtMailClub } from "@/components/ArtMailClub";
import { Invitations } from "@/components/Invitations";
import { Testimonials } from "@/components/Testimonials";
import { ReelsSection } from "@/components/ReelsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BestSellers />
      <AllProducts />
      <ShopByOccasion />
      <GiftFinderCTA />
      <BulkOrders />
      <ArtMailClub />
      <Invitations />
      <Testimonials />
      <ReelsSection />
      <Footer />
    </div>
  );
};

export default Index;

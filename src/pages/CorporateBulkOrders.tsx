import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sticker } from "@/components/Sticker";
import { GiftSticker, StarSticker, SparkleSticker } from "@/components/StickerIcons";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Gift, Star, Package, Building2, Mail, MessageCircle, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const corporateProducts = [
  {
    id: "personalized-magazine",
    name: "Personalized Magazine",
    price: "₹899",
    bulkPrice: "₹699/piece",
    minOrder: 25,
    image: "/products/magazine1.jpg",
      
  },
  {
    id: "custom-calendar",
    name: "Custom Calendar",
    price: "₹549",
    bulkPrice: "₹399/piece",
    minOrder: 50,
    image: "/products/c1.jpg",
      
  },
  {
    id: "photo-memory-box",
    name: "Photo Memory Box",
    price: "₹799",
    bulkPrice: "₹599/piece",
    minOrder: 20,
    image: "/products/c2.jpg",
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    bulkPrice: "₹449/piece",
    minOrder: 30,
    image: "/products/c3.jpg",
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    bulkPrice: "₹449/piece",
    minOrder: 30,
    image: "/products/c4.jpeg",
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    bulkPrice: "₹449/piece",
    minOrder: 30,
    image: "/products/c4.jpeg",
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    bulkPrice: "₹449/piece",
    minOrder: 30,
    image: "/products/c5.jpeg",
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    bulkPrice: "₹449/piece",
    minOrder: 30,
    image: "/products/c6.jpeg",
  }
];

const comboPackages = [
  {
    name: "Employee Appreciation Combo",
    items: ["Personalized Magazine", "Flower Memory Cards", "Custom Calendar"],
    price: "₹1,499",
    savings: "Save ₹400",
    color: "bg-primary",
    icon: Star
  },
  {
    name: "Corporate Welcome Kit",
    items: ["Photo Memory Box", "Love Letter Kit", "Polaroid Gift Set"],
    price: "₹1,699",
    savings: "Save ₹500",
    color: "bg-secondary",
    icon: Gift
  },
  {
    name: "Event Giveaway Bundle",
    items: ["Flower Memory Cards x5", "Custom Calendar", "Handmade Flower Bouquet"],
    price: "₹1,299",
    savings: "Save ₹350",
    color: "bg-accent",
    icon: Package
  }
];

const howToOrderSteps = [
  {
    step: 1,
    title: "Share Your Requirements",
    description: "Tell us about your company, occasion, quantity needed, and customization preferences."
  },
  {
    step: 2,
    title: "Get a Custom Quote",
    description: "We'll prepare a personalized quote with bulk pricing and delivery timeline within 24 hours."
  },
  {
    step: 3,
    title: "Approve Design",
    description: "Review and approve the design mockups. We'll make unlimited revisions until you're happy!"
  },
  {
    step: 4,
    title: "Production & Delivery",
    description: "Once approved, we start production. Bulk orders are delivered within 7-14 business days."
  }
];

const CorporateBulkOrders = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  });

  const whatsappNumber = "919876543210";
  const emailAddress = "corporate@magzme.in";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Corporate Bulk Order Inquiry - ${formData.companyName}`);
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\n` +
      `Contact Person: ${formData.contactName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Quantity Required: ${formData.quantity}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in Corporate Bulk Orders.\n\n` +
      `Company: ${formData.companyName || "[Your Company]"}\n` +
      `Contact: ${formData.contactName || "[Your Name]"}\n` +
      `Quantity: ${formData.quantity || "[Quantity Needed]"}\n\n` +
      `Please share bulk pricing and catalog.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-grid-pink overflow-hidden">
        <Sticker className="absolute top-20 left-10"><GiftSticker /></Sticker>
        <Sticker className="absolute top-32 right-16" animationDelay="0.2s"><StarSticker /></Sticker>
        <Sticker className="absolute bottom-10 left-1/4" animationDelay="0.4s"><SparkleSticker /></Sticker>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">Corporate & Bulk Orders</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Memorable Gifts for Your <span className="text-primary">Team & Clients</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Impress your employees, clients, and partners with personalized gifts that show you care. 
            Special bulk pricing available for orders of 20+ items.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg gap-2"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg gap-2"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              Send Email Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Products */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            Popular Corporate Products
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Best sellers for corporate gifting with special bulk pricing
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground line-through text-sm">{product.price}</p>
                      <p className="text-primary font-bold">{product.bulkPrice}</p>
                    </div>
                    <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                      Min: {product.minOrder}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Combo Packages */}
      <AnimatedSection delay={0.1}>
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            Combo Packages 🎁
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Curated gift bundles with maximum savings
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboPackages.map((combo, index) => (
              <div 
                key={index}
                className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`${combo.color} p-6 text-primary-foreground`}>
                  <combo.icon className="w-10 h-10 mb-4" />
                  <h3 className="font-display text-xl mb-2">{combo.name}</h3>
                  <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                    {combo.savings}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {combo.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-foreground">{combo.price}</span>
                    <Button onClick={handleWhatsApp} size="sm" className="gap-1">
                      Order <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* How to Order */}
      <AnimatedSection delay={0.1}>
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            How to Order 📦
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Simple 4-step process to get your bulk order
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToOrderSteps.map((step) => (
              <div 
                key={step.step}
                className="relative bg-card p-6 rounded-2xl shadow-lg"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection delay={0.1}>
        <section id="contact-form" className="py-16 px-4 bg-grid-blue">
          <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-primary p-8 text-primary-foreground">
                <h2 className="font-display text-2xl md:text-3xl mb-6">Get in Touch</h2>
                <p className="opacity-90 mb-8">
                  Ready to place a bulk order? Contact us through WhatsApp or email and we'll get back to you within 24 hours!
                </p>
                
                <div className="space-y-6">
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="opacity-80 text-sm">+91 98765 43210</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-8 h-8" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-80 text-sm">{emailAddress}</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-8 h-8" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="opacity-80 text-sm">+91 98765 43210</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Form */}
              <div className="p-8">
                <h3 className="font-display text-xl mb-6">Send an Inquiry</h3>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Company Name</label>
                      <Input 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Contact Person</label>
                      <Input 
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Quantity Required</label>
                    <Input 
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g., 50-100 pieces"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, occasion, timeline, etc."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button type="submit" className="flex-1 gap-2">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1 gap-2"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default CorporateBulkOrders;

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MessageCircle, Send } from "lucide-react";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

interface OrderFormProps {
  product: Product;
}

export const OrderForm = ({ product }: OrderFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickOrder = () => {
    const text = `Hi! I'm interested in ordering: ${product.name} (${product.price})`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    
    if (!name || name.length > 100) {
      toast({
        title: "Invalid name",
        description: "Please enter a valid name (max 100 characters)",
        variant: "destructive"
      });
      return;
    }
    
    if (!phone || !/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    const message = `
🎁 *New Order Request*

*Product:* ${product.name}
*Price:* ${product.price}

*Customer Details:*
Name: ${name}
Phone: ${phone}
Occasion: ${formData.occasion.trim() || "Not specified"}

*Custom Message:*
${formData.message.trim() || "No special instructions"}
    `.trim();

    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
    
    toast({
      title: "Opening WhatsApp! 💬",
      description: "Complete your order on WhatsApp"
    });
  };

  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card">
      <h3 className="font-display text-2xl font-bold text-foreground mb-6">
        Order This Gift 🎁
      </h3>

      {/* Quick Order Button */}
      <Button
        onClick={handleQuickOrder}
        className="w-full bg-mint-green hover:bg-accent text-white font-display text-lg py-6 rounded-full shadow-pop-green hover:-translate-y-1 transition-all mb-6"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Quick Order on WhatsApp
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-card px-4 text-muted-foreground text-sm">
            or fill the form below
          </span>
        </div>
      </div>

      {/* Order Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="font-display">Your Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-1 rounded-xl border-2 border-border focus:border-hot-pink"
            required
            maxLength={100}
          />
        </div>

        <div>
          <Label htmlFor="phone" className="font-display">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="mt-1 rounded-xl border-2 border-border focus:border-hot-pink"
            required
            maxLength={20}
          />
        </div>

        <div>
          <Label htmlFor="occasion" className="font-display">Occasion</Label>
          <Input
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            placeholder="Birthday, Anniversary, etc."
            className="mt-1 rounded-xl border-2 border-border focus:border-hot-pink"
            maxLength={50}
          />
        </div>

        <div>
          <Label htmlFor="message" className="font-display">Special Instructions</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any customization requests or messages..."
            className="mt-1 rounded-xl border-2 border-border focus:border-hot-pink min-h-[100px]"
            maxLength={500}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-hot-pink hover:bg-primary text-white font-display text-lg py-6 rounded-full shadow-pop hover:-translate-y-1 transition-all"
        >
          <Send className="mr-2 h-5 w-5" />
          Send Order Request
        </Button>
      </form>

      <p className="text-center text-muted-foreground text-sm mt-4">
        We'll confirm your order on WhatsApp ✨
      </p>
    </div>
  );
};

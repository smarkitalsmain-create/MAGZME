import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle, Instagram, Building2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open("https://wa.me/918178801635", "_blank");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products section on homepage with search query
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold text-hot-pink">
            MagzMe
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button  
              onClick={() => scrollTo("products")}
              className="font-body text-foreground hover:text-hot-pink transition-colors"
            >
              
              Products
            </button>
            <button 
              onClick={() => scrollTo("art-mail")}
              className="font-body text-foreground hover:text-hot-pink transition-colors"
            >
              Art Mail Club
            </button>
            <Link 
              to="/corporate-bulk-orders"
              className="font-body text-foreground hover:text-hot-pink transition-colors flex items-center gap-1"
            >
              <Building2 className="w-4 h-4" />
              Corporate Orders
            </Link>
            <a 
              href="https://instagram.com/magzme_official"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-foreground hover:text-hot-pink transition-colors flex items-center gap-1"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 h-9 rounded-full border-hot-pink/30 focus:border-hot-pink"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="h-9 w-9"
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="h-9 w-9 text-foreground hover:text-hot-pink"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            <Button
              onClick={openWhatsApp}
              className="bg-mint-green hover:bg-accent text-white font-display rounded-full"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-10 rounded-full border-hot-pink/30 focus:border-hot-pink"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-hot-pink hover:bg-hot-pink/90"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              
              <button 
                onClick={() => scrollTo("products")}
                className="font-body text-foreground hover:text-hot-pink transition-colors text-left py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollTo("art-mail")}
                className="font-body text-foreground hover:text-hot-pink transition-colors text-left py-2"
              >
                Art Mail Club
              </button>
              <Link 
                to="/corporate-bulk-orders"
                onClick={() => setIsOpen(false)}
                className="font-body text-foreground hover:text-hot-pink transition-colors flex items-center gap-1 py-2"
              >
                <Building2 className="w-4 h-4" />
                Corporate Orders
              </Link>
              <a 
                href="https://instagram.com/magzme_official"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-foreground hover:text-hot-pink transition-colors flex items-center gap-1 py-2"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <Button
                onClick={openWhatsApp}
                className="bg-mint-green hover:bg-accent text-white font-display rounded-full w-full mt-2"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat with us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

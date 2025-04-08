
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mylken-primary text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Mylken</h3>
            <p className="text-white mb-4 text-sm">
              Providing premium dairy industry equipment for over 30 years. Quality, reliability, and innovation are at the heart of everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-mylken-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-mylken-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-mylken-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-mylken-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/milk-analyzers" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Milk Analyzers
                </Link>
              </li>
              <li>
                <Link to="/products/khoya-machines" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Khoya Machines
                </Link>
              </li>
              <li>
                <Link to="/products/milk-cans" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Milk Cans
                </Link>
              </li>
              <li>
                <Link to="/products/dairy-processing" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Dairy Processing Equipment
                </Link>
              </li>
              <li>
                <Link to="/products/testing-kits" className="text-white hover:text-mylken-accent transition-colors text-sm">
                  Quality Testing Kits
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-white mb-4">Subscribe to receive updates on new products and dairy industry insights.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                  className="rounded-r-none bg-white/20 border-white/30 focus:border-white text-white placeholder:text-white/70"
                />
                <Button type="submit" className="rounded-l-none bg-mylken-accent text-mylken-dark hover:bg-white">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white">
          <p>© {currentYear} Mylken. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

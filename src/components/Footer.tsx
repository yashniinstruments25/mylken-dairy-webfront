
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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
    <footer className="bg-mylken-blue text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Mylken</h3>
            <p className="text-mylken-cream mb-4 text-sm">
              Providing premium dairy industry equipment for over 30 years. Quality, reliability, and innovation are at the heart of everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-mylken-cream transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-mylken-cream transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-mylken-cream transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-mylken-cream transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-mylken-cream transition-colors text-sm">Home</a></li>
              <li><a href="#products" className="hover:text-mylken-cream transition-colors text-sm">Products</a></li>
              <li><a href="#about" className="hover:text-mylken-cream transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="hover:text-mylken-cream transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Milk Analyzers</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Khoya Machines</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Milk Cans</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Dairy Processing Equipment</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Storage Solutions</a></li>
              <li><a href="#" className="hover:text-mylken-cream transition-colors text-sm">Accessories</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-mylken-cream mb-4">Subscribe to receive updates on new products and dairy industry insights.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                  className="rounded-r-none bg-mylken-blue/50 border-mylken-lightBlue focus:border-white text-white placeholder:text-mylken-cream/70"
                />
                <Button type="submit" className="rounded-l-none bg-white text-mylken-blue hover:bg-mylken-cream">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-mylken-lightBlue/30 pt-6 text-center text-sm text-mylken-cream/70">
          <p>© {currentYear} Mylken. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

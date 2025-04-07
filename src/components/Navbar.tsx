
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-4",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-mylken-blue font-heading font-bold text-3xl">
            Mylken
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-mylken-blue font-medium hover:text-mylken-lightBlue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-mylken-blue hover:bg-mylken-lightBlue transition-colors">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-mylken-blue focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-mylken-blue py-2 hover:text-mylken-lightBlue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-mylken-blue hover:bg-mylken-lightBlue transition-colors w-full">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

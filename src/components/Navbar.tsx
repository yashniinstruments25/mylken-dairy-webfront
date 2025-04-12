
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NavLink from './navbar/NavLink';
import NavDropdown from './navbar/NavDropdown';
import MobileMenu from './navbar/MobileMenu';
import { productCategories, scientificCategories, navLinks } from './navbar/ProductCategories';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-4",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-mylken-primary font-heading font-bold text-2xl md:text-3xl">
            Mylken
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {/* Home and other simple links */}
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              name={link.name} 
              href={link.href} 
              isActive={isActive} 
            />
          ))}

          {/* Dairy Products dropdown */}
          <NavDropdown 
            title="Dairy Products" 
            path="/products" 
            isActive={isActive}
            categories={productCategories}
            viewAllPath="/products"
          />
          
          {/* Scientific Products dropdown */}
          <NavDropdown 
            title="Scientific"
            path="/scientific-products"
            isActive={isActive}
            categories={scientificCategories}
            viewAllPath="/scientific-products"
          />
          
          <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white transition-colors text-sm px-3 py-1 h-auto">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-mylken-primary focus:outline-none"
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
      <MobileMenu 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isActive={isActive}
        productCategories={productCategories}
        scientificCategories={scientificCategories}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;

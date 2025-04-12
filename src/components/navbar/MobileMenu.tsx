
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isActive: (path: string) => boolean;
  productCategories: { name: string; href: string }[];
  scientificCategories: { name: string; href: string }[];
  navLinks: { name: string; href: string }[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  isActive,
  productCategories,
  scientificCategories,
  navLinks
}) => {
  if (!mobileMenuOpen) return null;
  
  return (
    <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
      <div className="container-custom py-3 flex flex-col space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={cn(
              "py-2 transition-colors",
              isActive(link.href) 
                ? "text-mylken-accent font-medium" 
                : "text-mylken-primary hover:text-mylken-secondary"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Mobile Dairy Products Dropdown */}
        <div className="py-2 relative">
          <button 
            className="flex items-center justify-between w-full text-left"
            onClick={(e) => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }}
          >
            <span className={isActive('/products') ? "text-mylken-accent font-medium" : "text-mylken-primary"}>
              Dairy Products
            </span>
            <ChevronDown size={16} />
          </button>
          <div className="pl-4 space-y-2 mt-2 hidden">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="block py-1 text-mylken-primary hover:text-mylken-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="block py-1 font-medium text-mylken-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              View All
            </Link>
          </div>
        </div>
        
        {/* Mobile Scientific Products Dropdown */}
        <div className="py-2 relative">
          <button 
            className="flex items-center justify-between w-full text-left"
            onClick={(e) => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }}
          >
            <span className={isActive('/scientific-products') ? "text-mylken-accent font-medium" : "text-mylken-primary"}>
              Scientific Products
            </span>
            <ChevronDown size={16} />
          </button>
          <div className="pl-4 space-y-2 mt-2 hidden">
            {scientificCategories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="block py-1 text-mylken-primary hover:text-mylken-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/scientific-products"
              className="block py-1 font-medium text-mylken-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              View All
            </Link>
          </div>
        </div>
        
        <Button 
          className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white transition-colors w-full"
          onClick={() => setMobileMenuOpen(false)}
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;


import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const productCategories = [
    { name: 'Milk Analyzers', href: '/products/milk-analyzers' },
    { name: 'Khoya Making Machines', href: '/products/khoya-machines' },
    { name: 'Milk Cans', href: '/products/milk-cans' },
    { name: 'Dairy Processing Equipment', href: '/products/dairy-processing' },
    { name: 'Quality Testing Kits', href: '/products/testing-kits' }
  ];
  
  const scientificCategories = [
    { name: 'Laboratory Equipment', href: '/scientific-products/lab-equipment' },
    { name: 'Analysis Instruments', href: '/scientific-products/analysis' },
    { name: 'Measurement Tools', href: '/scientific-products/measurement' },
    { name: 'Sterilization Equipment', href: '/scientific-products/sterilization' }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

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
          <Link to="/" className="text-mylken-primary font-heading font-bold text-3xl">
            Mylken
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Home and other simple links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-medium transition-colors relative group",
                isActive(link.href) 
                  ? "text-mylken-accent" 
                  : "text-mylken-primary hover:text-mylken-secondary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-mylken-accent transition-all duration-300 group-hover:w-full",
                isActive(link.href) ? "w-full" : "w-0"
              )}></span>
            </Link>
          ))}

          {/* Dairy Products dropdown */}
          <div className="z-50">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-medium transition-colors bg-transparent",
                      isActive('/products') 
                        ? "text-mylken-accent" 
                        : "text-mylken-primary hover:text-mylken-secondary"
                    )}
                  >
                    Dairy Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[260px]">
                    <ul className="grid gap-2 p-4">
                      {productCategories.map((category) => (
                        <li key={category.name} className="relative">
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary"
                            >
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="relative mt-2 border-t pt-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary font-medium"
                          >
                            View All Dairy Products
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Scientific Products dropdown */}
          <div className="z-50">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-medium transition-colors bg-transparent",
                      isActive('/scientific-products') 
                        ? "text-mylken-accent" 
                        : "text-mylken-primary hover:text-mylken-secondary"
                    )}
                  >
                    Scientific Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[260px]">
                    <ul className="grid gap-2 p-4">
                      {scientificCategories.map((category) => (
                        <li key={category.name} className="relative">
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary"
                            >
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="relative mt-2 border-t pt-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/scientific-products"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary font-medium"
                          >
                            View All Scientific Products
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white transition-colors">
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
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
                  View All Dairy Products
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
                  View All Scientific Products
                </Link>
              </div>
            </div>
            
            <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white transition-colors w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

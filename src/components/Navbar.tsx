
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
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
  ];
  
  const scientificCategories = [
    { name: 'Laboratory Equipment', href: '/scientific-products/lab-equipment' },
    { name: 'Analysis Instruments', href: '/scientific-products/analysis' },
    { name: 'Measurement Tools', href: '/scientific-products/measurement' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Milk droplet animation for menu items
  const MilkDroplet = () => (
    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-mylken-accent rounded-full hidden group-hover:block animate-bounce"></div>
  );

  return (
    <nav 
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-4 backdrop-blur-sm",
        isScrolled 
          ? "bg-white/95 shadow-md py-2 before:opacity-0" 
          : "bg-transparent before:opacity-100",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-mylken-primary/10 before:to-transparent before:z-[-1] before:transition-opacity"
      )}
    >
      <div className="container-custom flex items-center justify-between relative z-10">
        {/* Logo */}
        <Logo variant={isScrolled ? 'default' : 'default'} />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
          {/* Home and other simple links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-medium transition-colors relative group text-sm lg:text-base px-2 py-1.5",
                isActive(link.href) 
                  ? "text-mylken-accent" 
                  : "text-mylken-primary hover:text-mylken-secondary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-mylken-accent transition-all duration-300 group-hover:w-full rounded-full",
                isActive(link.href) ? "w-full" : "w-0"
              )}></span>
              {/* Milk droplet effect */}
              {!isActive(link.href) && <MilkDroplet />}
            </Link>
          ))}

          {/* Dairy Products dropdown */}
          <div className="z-50">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-medium transition-colors bg-transparent text-sm lg:text-base",
                      isActive('/products') 
                        ? "text-mylken-accent" 
                        : "text-mylken-primary hover:text-mylken-secondary"
                    )}
                  >
                    Dairy Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[220px]">
                    <div className="absolute -top-2 right-5 h-2 w-2 bg-white rotate-45 border-t border-l border-border"></div>
                    <ul className="grid gap-1 p-3">
                      {productCategories.map((category) => (
                        <li key={category.name} className="relative">
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary group"
                            >
                              <div className="text-sm font-medium leading-none flex items-center">
                                <Droplets className="mr-2 h-3 w-3 text-mylken-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                {category.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="relative mt-1 border-t pt-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products"
                            className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary font-medium"
                          >
                            View All
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
                      "font-medium transition-colors bg-transparent text-sm lg:text-base",
                      isActive('/scientific-products') 
                        ? "text-mylken-accent" 
                        : "text-mylken-primary hover:text-mylken-secondary"
                    )}
                  >
                    Scientific
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[220px]">
                    <div className="absolute -top-2 right-5 h-2 w-2 bg-white rotate-45 border-t border-l border-border"></div>
                    <ul className="grid gap-1 p-3">
                      {scientificCategories.map((category) => (
                        <li key={category.name} className="relative">
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary group"
                            >
                              <div className="text-sm font-medium leading-none flex items-center">
                                <Droplets className="mr-2 h-3 w-3 text-mylken-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                {category.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="relative mt-1 border-t pt-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/scientific-products"
                            className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary font-medium"
                          >
                            View All
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white transition-colors text-sm px-3 py-1 h-auto relative overflow-hidden group">
            <span className="relative z-10">Get Quote</span>
            <span className="absolute top-0 left-0 w-0 h-full bg-mylken-primary transition-all duration-300 group-hover:w-full"></span>
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
          <div className="container-custom py-3 flex flex-col space-y-3">
            {/* Wave effect at top of mobile menu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-mylken-accent" style={{
              clipPath: "polygon(0% 0%, 15% 100%, 30% 0%, 45% 100%, 60% 0%, 75% 100%, 90% 0%, 100% 100%, 100% 0%)"
            }}></div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-2 transition-colors flex items-center",
                  isActive(link.href) 
                    ? "text-mylken-accent font-medium" 
                    : "text-mylken-primary hover:text-mylken-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {isActive(link.href) && <Droplets className="mr-2 h-4 w-4" />}
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
                <span className={isActive('/products') ? "text-mylken-accent font-medium flex items-center" : "text-mylken-primary flex items-center"}>
                  {isActive('/products') && <Droplets className="mr-2 h-4 w-4" />}
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
                <span className={isActive('/scientific-products') ? "text-mylken-accent font-medium flex items-center" : "text-mylken-primary flex items-center"}>
                  {isActive('/scientific-products') && <Droplets className="mr-2 h-4 w-4" />}
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
            
            <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white transition-colors w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Button>
            
            {/* Milk drip effect at bottom of mobile menu */}
            <div className="relative h-6 mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="absolute bg-mylken-light w-2 h-8 rounded-b-full" 
                  style={{
                    left: `${i * 18 - 10}%`,
                    animation: `drip ${0.5 + i * 0.2}s ease-in-out infinite alternate ${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

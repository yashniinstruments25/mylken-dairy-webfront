
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Droplets, Milk, Beaker } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Always visible navbar, no transparency change
  const navbarStyles = "fixed w-full z-40 bg-mylken-primary py-3 shadow-md";

  const dairyProductCategories = [
    { name: 'Milk Analyzers', href: '/milk-analyzers' },
    { name: 'Milk Can', href: '/products/milk-cans' },
    { name: 'BMC', href: '/products/bmc' },
    { name: 'Khoya Machine', href: '/products/khoya-machines' },
    { name: 'Cream Separator', href: '/products/cream-separator' },
    { name: 'Paneer Press', href: '/products/paneer-press' },
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
    <nav className={navbarStyles}>
      <div className="container-custom flex items-center justify-between relative z-10">
        {/* Logo */}
        <Logo variant="default" />

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
                  ? "text-mylken-accent font-bold" 
                  : "text-mylken-accent hover:text-mylken-light"
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

          {/* Products dropdown with new design */}
          <div className="z-50 relative">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-medium transition-colors bg-transparent text-sm lg:text-base hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                      isActive('/products') || isActive('/milk-analyzers')
                        ? "text-mylken-accent font-bold" 
                        : "text-mylken-accent hover:text-mylken-light"
                    )}
                  >
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 top-0 w-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                    <div className="w-[600px] p-0 bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl overflow-hidden">
                      {/* Header with dairy wave pattern */}
                      <div className="bg-gradient-to-r from-mylken-primary to-mylken-secondary p-4 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 left-0 w-full h-full" style={{
                            background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)'
                          }}></div>
                        </div>
                        <h3 className="text-white font-bold text-lg relative z-10 flex items-center">
                          <Droplets className="mr-2 h-5 w-5" />
                          Our Product Range
                        </h3>
                        <p className="text-mylken-light text-sm mt-1 relative z-10">Quality dairy and scientific solutions</p>
                      </div>

                      {/* Two-column layout */}
                      <div className="grid grid-cols-2 gap-0">
                        {/* Dairy Products Column */}
                        <div className="p-6 bg-gradient-to-br from-mylken-accent/5 to-mylken-light/10 border-r border-mylken-accent/10">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-mylken-primary/10 rounded-full flex items-center justify-center mr-3">
                              <Milk className="h-5 w-5 text-mylken-primary" />
                            </div>
                            <div>
                              <h4 className="font-bold text-mylken-primary text-base">Dairy Products</h4>
                              <p className="text-xs text-mylken-primary/70">Premium dairy equipment</p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {dairyProductCategories.map((category, index) => (
                              <NavigationMenuLink asChild key={category.name}>
                                <Link
                                  to={category.href}
                                  className="group flex items-center p-3 rounded-xl hover:bg-white/60 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  <div className="w-2 h-2 bg-mylken-primary/20 rounded-full mr-3 group-hover:bg-mylken-primary transition-colors"></div>
                                  <div className="flex-1">
                                    <div className="font-medium text-mylken-primary text-sm group-hover:text-mylken-secondary transition-colors">
                                      {category.name}
                                    </div>
                                  </div>
                                  <Droplets className="h-3 w-3 text-mylken-primary/0 group-hover:text-mylken-primary/60 transition-all duration-200" />
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>

                        {/* Scientific Products Column */}
                        <div className="p-6 bg-gradient-to-br from-mylken-secondary/5 to-mylken-primary/5">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-mylken-secondary/10 rounded-full flex items-center justify-center mr-3">
                              <Beaker className="h-5 w-5 text-mylken-secondary" />
                            </div>
                            <div>
                              <h4 className="font-bold text-mylken-primary text-base">Scientific Products</h4>
                              <p className="text-xs text-mylken-primary/70">Advanced laboratory tools</p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {scientificCategories.map((category, index) => (
                              <NavigationMenuLink asChild key={category.name}>
                                <Link
                                  to={category.href}
                                  className="group flex items-center p-3 rounded-xl hover:bg-white/60 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                  style={{ animationDelay: `${(index + 3) * 50}ms` }}
                                >
                                  <div className="w-2 h-2 bg-mylken-secondary/20 rounded-full mr-3 group-hover:bg-mylken-secondary transition-colors"></div>
                                  <div className="flex-1">
                                    <div className="font-medium text-mylken-primary text-sm group-hover:text-mylken-secondary transition-colors">
                                      {category.name}
                                    </div>
                                  </div>
                                  <Beaker className="h-3 w-3 text-mylken-secondary/0 group-hover:text-mylken-secondary/60 transition-all duration-200" />
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer with call to action */}
                      <div className="p-4 bg-mylken-accent/10 border-t border-mylken-accent/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-mylken-primary">
                            <Droplets className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">Need help choosing?</span>
                          </div>
                          <Button variant="outline" size="sm" className="border-mylken-primary/20 text-mylken-primary hover:bg-mylken-primary hover:text-white text-xs">
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
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
            className="text-mylken-accent focus:outline-none"
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
            
            {/* Mobile Products Dropdown */}
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
                <span className={isActive('/products') || isActive('/milk-analyzers') ? "text-mylken-accent font-medium flex items-center" : "text-mylken-primary flex items-center"}>
                  {(isActive('/products') || isActive('/milk-analyzers')) && <Droplets className="mr-2 h-4 w-4" />}
                  Products
                </span>
                <ChevronDown size={16} />
              </button>
              <div className="pl-4 space-y-3 mt-2 hidden">
                {/* Dairy Products Category */}
                <div>
                  <div className="flex items-center mb-2 text-mylken-primary font-medium">
                    <Milk className="mr-2 h-4 w-4" />
                    <span className="text-sm">Dairy Products</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    {dairyProductCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block py-1 text-mylken-primary hover:text-mylken-secondary text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Scientific Products Category */}
                <div>
                  <div className="flex items-center mb-2 text-mylken-primary font-medium">
                    <Beaker className="mr-2 h-4 w-4" />
                    <span className="text-sm">Scientific Products</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    {scientificCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block py-1 text-mylken-primary hover:text-mylken-secondary text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
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

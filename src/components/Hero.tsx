
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      imageRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="home" className="relative bg-mylken-primary pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
        <div className="absolute -left-10 bottom-20 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 w-40 h-40 bg-mylken-light rounded-full blur-2xl"></div>
      </div>
      
      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-12 h-12 bg-mylken-accent/30 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-mylken-secondary/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 bg-mylken-light/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
              Premium Dairy Equipment
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Revolutionizing</span>
              <span className="block">The <span className="text-mylken-accent">Dairy Industry</span></span>
            </h1>
            
            <p className="text-mylken-light text-lg md:text-xl max-w-lg">
              Mylken provides state-of-the-art dairy equipment designed for precision, 
              efficiency and reliability in modern dairy operations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group">
                Explore Our Products 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="bg-transparent border border-mylken-light text-white hover:bg-mylken-light/10 transition-colors px-6 py-3 rounded-md font-medium">
                Contact Our Team
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-mylken-secondary flex items-center justify-center text-sm text-white font-bold ring-2 ring-mylken-primary">ISO</div>
                <div className="w-10 h-10 rounded-full bg-mylken-accent flex items-center justify-center text-sm text-mylken-dark font-bold ring-2 ring-mylken-primary">CE</div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm text-mylken-dark font-bold ring-2 ring-mylken-primary">BIS</div>
              </div>
              <div className="text-mylken-light text-sm">
                <span className="font-bold">Certified</span> quality standards
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div ref={imageRef} className="relative ml-auto animate-slide-in-right transition-all duration-300">
            <div className="bg-mylken-light rounded-lg p-3 shadow-2xl relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 rounded-lg bg-mylken-accent rotate-12 animate-float"></div>
              <div className="rounded-lg overflow-hidden relative z-10">
                <img 
                  src="/images/milk-analyzer-hero.jpg" 
                  alt="Mylken Milk Analyzer" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg animate-zoom-in">
                <div className="bg-mylken-primary rounded-full h-16 w-16 flex items-center justify-center">
                  <span className="text-white font-bold">Best<br/>Seller</span>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-mylken-dark/70 backdrop-blur-md p-4 rounded-lg text-white absolute -bottom-10 left-10 right-10 animate-float">
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <div className="font-bold">Advanced Milk Analyzer</div>
                  <div className="text-mylken-light text-xs">Precise measurements, reliable results</div>
                </div>
                <div className="text-mylken-accent font-bold">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


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
    <section id="home" className="relative bg-mylken-primary pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
        <div className="absolute -left-10 bottom-20 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 w-40 h-40 bg-mylken-light rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
              Innovative Startup
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="block">Transforming</span>
              <span className="block">The <span className="text-mylken-accent">Dairy Industry</span></span>
            </h1>
            
            <p className="text-mylken-light text-lg max-w-lg">
              Mylken is a cutting-edge startup providing innovative dairy equipment 
              designed for efficiency and reliability in modern dairy operations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group">
                Our Solutions 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="bg-transparent border border-mylken-light text-white hover:bg-mylken-light/10 transition-colors px-6 py-3 rounded-md font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div ref={imageRef} className="relative ml-auto animate-fade-in transition-all duration-300">
            <div className="bg-mylken-light rounded-lg p-3 shadow-2xl relative">
              <div className="absolute -left-4 -top-4 w-16 h-16 rounded-lg bg-mylken-accent rotate-12 animate-float"></div>
              <div className="rounded-lg overflow-hidden relative z-10">
                <img 
                  src="/images/milk-analyzer-hero.jpg" 
                  alt="Mylken Innovation" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-mylken-primary rounded-full h-14 w-14 flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">Next<br/>Gen</span>
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

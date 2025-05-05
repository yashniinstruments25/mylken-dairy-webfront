
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Milk, Factory, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
    <section id="home" className="relative bg-mylken-primary pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
        <div className="absolute -left-10 bottom-20 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 w-40 h-40 bg-mylken-light rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
                Dairy Processing Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                Since 2005
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Transform Your</span>
              <span className="block">Dairy <span className="text-mylken-accent">Production</span></span>
              <span className="block">With Precision</span>
            </h1>
            
            <p className="text-mylken-light text-lg md:text-xl max-w-lg">
              We provide cutting-edge machinery that helps dairy farmers and processors 
              maximize yield, ensure quality, and increase efficiency in every step of production.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group">
                Browse Equipment 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact">
                <Button variant="milk" className="transition-colors px-6 py-6 h-auto">
                  Request Consultation
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Factory className="text-mylken-accent" size={20} />
                </div>
                <h3 className="text-white font-semibold">Dairy Processing</h3>
                <p className="text-mylken-light text-sm">Equipment</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Milk className="text-mylken-accent" size={20} />
                </div>
                <h3 className="text-white font-semibold">Quality</h3>
                <p className="text-mylken-light text-sm">Testing Tools</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Beaker className="text-mylken-accent" size={20} />
                </div>
                <h3 className="text-white font-semibold">Lab</h3>
                <p className="text-mylken-light text-sm">Analysis</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div ref={imageRef} className="relative ml-auto animate-slide-in-right transition-all duration-300">
            <div className="bg-white rounded-lg p-3 shadow-2xl relative">
              <div className="absolute -left-4 -top-4 w-16 h-16 rounded-lg bg-mylken-accent rotate-12 animate-float"></div>
              <div className="rounded-lg overflow-hidden relative z-10">
                <img 
                  src="/images/milk-analyzer-hero.jpg" 
                  alt="Advanced Milk Analyzer" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg animate-zoom-in">
                <div className="bg-mylken-primary rounded-full h-16 w-16 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">99.8%<br/>Accuracy</span>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-lg absolute -bottom-10 -right-10 w-64 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-mylken-primary/10 p-2 rounded-md">
                  <Factory className="text-mylken-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-mylken-dark">Automation Ready</h4>
                  <p className="text-xs text-gray-500">Smart Dairy Solutions</p>
                </div>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Energy Efficiency</span>
                  <span className="text-mylken-primary font-medium">96%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-mylken-primary h-full rounded-full" style={{ width: "96%" }}></div>
                </div>
              </div>
            </div>
            
            {/* Stats Floating Label */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white py-2 px-4 rounded-full shadow-lg hidden md:flex items-center gap-3">
              <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="font-bold text-mylken-accent">15+</span>
              </div>
              <span className="text-sm font-medium text-mylken-dark">Dairy Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

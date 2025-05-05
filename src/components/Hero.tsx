
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Milk, Factory, Beaker, Droplets, Cow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const milkDropsRef = useRef<HTMLDivElement>(null);
  
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
  
  // Create animated milk drops
  useEffect(() => {
    if (!milkDropsRef.current) return;
    
    const createMilkDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'absolute bg-white rounded-full opacity-60 shadow-md';
      
      // Random position, size and animation duration
      const size = Math.random() * 30 + 10;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 8 + 5;
      
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;
      drop.style.left = `${left}%`;
      drop.style.top = '0';
      drop.style.animation = `fall ${animationDuration}s linear forwards`;
      
      milkDropsRef.current?.appendChild(drop);
      
      // Remove drop after animation completes
      setTimeout(() => {
        if (drop && drop.parentNode) {
          drop.parentNode.removeChild(drop);
        }
      }, animationDuration * 1000);
    };
    
    // Create drops at intervals
    const interval = setInterval(createMilkDrop, 800);
    
    // Add keyframes for fall animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fall {
        0% { transform: translateY(0) scale(0); opacity: 0; }
        10% { transform: translateY(10px) scale(1); opacity: 0.6; }
        80% { opacity: 0.6; }
        100% { transform: translateY(100vh) scale(0.5); opacity: 0; }
      }
      
      @keyframes milkWave {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <section id="home" className="relative bg-mylken-primary pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Milk drops animation container */}
      <div ref={milkDropsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
        <div className="absolute -left-10 bottom-20 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 w-40 h-40 bg-mylken-light rounded-full blur-2xl"></div>
      </div>
      
      {/* Milk wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path 
            d="M0,0 C150,90 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
            className="fill-white opacity-20"
          ></path>
        </svg>
      </div>
      
      {/* Second milk wave with offset */}
      <div className="absolute bottom-0 left-0 right-0" style={{ animation: "milkWave 8s ease-in-out infinite" }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px]">
          <path 
            d="M0,40 C150,0 350,80 500,20 C650,0 750,60 900,30 C1050,0 1200,30 1200,30 V120 H0 Z" 
            className="fill-white opacity-25"
          ></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
                Dairy Processing Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium flex items-center gap-1">
                <Cow size={12} className="text-mylken-accent" />
                Since 2005
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Transform Your</span>
              <span className="block">Dairy <span className="text-mylken-accent relative">
                Production
                {/* Milk splash effect */}
                <svg className="absolute -top-2 -right-4 h-6 w-6 text-mylken-accent" viewBox="0 0 24 24" fill="none">
                  <path d="M15 2L12 5L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="8" cy="10" r="2" fill="currentColor" />
                  <circle cx="16" cy="7" r="1" fill="currentColor" />
                  <circle cx="18" cy="14" r="2" fill="currentColor" />
                  <circle cx="6" cy="15" r="1.5" fill="currentColor" />
                </svg>
              </span></span>
              <span className="block">With Precision</span>
            </h1>
            
            <p className="text-mylken-light text-lg md:text-xl max-w-lg">
              We provide cutting-edge machinery that helps dairy farmers and processors 
              maximize yield, ensure quality, and increase efficiency in every step of production.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group relative overflow-hidden">
                <span className="relative z-10">Browse Equipment</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 relative z-10" />
                {/* Milk splatter effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300">
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform"></div>
                  <div className="absolute top-1/2 right-1/2 w-6 h-6 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform delay-75"></div>
                </div>
              </Link>
              <Link to="/contact">
                <Button variant="milk" className="transition-colors px-6 py-6 h-auto group relative overflow-hidden">
                  <span className="relative z-10">Request Consultation</span>
                  {/* Milk droplet effect on hover */}
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-mylken-accent scale-0 group-hover:scale-100 group-hover:animate-bounce transition-transform"></div>
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                  <Factory className="text-mylken-accent" size={20} />
                  {/* Milk droplet */}
                  <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
                </div>
                <h3 className="text-white font-semibold">Dairy Processing</h3>
                <p className="text-mylken-light text-sm">Equipment</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                  <Milk className="text-mylken-accent" size={20} />
                  {/* Milk droplet */}
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></span>
                </div>
                <h3 className="text-white font-semibold">Quality</h3>
                <p className="text-mylken-light text-sm">Testing Tools</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                  <Beaker className="text-mylken-accent" size={20} />
                  {/* Milk droplet */}
                  <span className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping"></span>
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
              
              {/* Milk splash effect on image */}
              <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-white animate-pulse"></div>
              <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-white/80 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              
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
                {/* Milk overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg animate-zoom-in">
                <div className="bg-mylken-primary rounded-full h-16 w-16 flex items-center justify-center relative">
                  <span className="text-white text-sm font-bold">99.8%<br/>Accuracy</span>
                  {/* Milk droplet */}
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-mylken-accent rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-lg absolute -bottom-10 -right-10 w-64 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-mylken-primary/10 p-2 rounded-md relative">
                  <Factory className="text-mylken-primary h-6 w-6" />
                  {/* Milk droplet */}
                  <Droplets className="absolute -top-2 -right-2 text-mylken-accent h-4 w-4" />
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
                  <div className="bg-mylken-primary h-full rounded-full relative" style={{ width: "96%" }}>
                    {/* Milk bubble effect */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-3 h-3 bg-white rounded-full opacity-70"></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Floating Label */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white py-2 px-4 rounded-full shadow-lg hidden md:flex items-center gap-3 group">
              <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center relative">
                <Cow className="text-mylken-accent h-6 w-6" />
                {/* Milk droplet animation on hover */}
                <span className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity"></span>
              </div>
              <span className="text-sm font-medium text-mylken-dark">15+ Dairy Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

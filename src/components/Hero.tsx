
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Milk, Factory, Beaker, Droplets, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Create a helper component for the milk drops with correct orientation
const MilkDrop = ({ delay = 0, size = 15, left = 50, duration = 5 }) => {
  return (
    <div
      className="absolute milk-drop"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: '-20px',
        animation: `milk-drop-fall ${duration}s linear ${delay}s infinite`,
        transform: 'rotate(45deg)', // Correct orientation for milk drops
        opacity: 0
      }}
    ></div>
  );
};

// Create a milk splash component for interactive elements
const MilkSplash = ({ className }: { className?: string }) => {
  return (
    <div className={cn("milk-splash-container relative overflow-hidden", className)}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="milk-splash absolute"
          style={{
            top: '50%',
            left: '50%',
            width: `${Math.random() * 10 + 10}px`,
            height: `${Math.random() * 10 + 10}px`,
            animationDelay: `${i * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const milkDropsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Create animated milk drops
  useEffect(() => {
    if (!milkDropsRef.current) return;
    
    const createMilkDrop = () => {
      if (!milkDropsRef.current) return;
      
      const drop = document.createElement('div');
      drop.className = 'absolute';
      drop.style.zIndex = '5';
      
      // Create teardrop shape for milk drop with correct orientation
      const innerDrop = document.createElement('div');
      innerDrop.className = 'milk-drop';
      
      // Random position, size and animation duration
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 8 + 5;
      
      innerDrop.style.width = `${size}px`;
      innerDrop.style.height = `${size}px`;
      drop.style.left = `${left}%`;
      drop.style.top = '0';
      drop.style.animation = `milk-drop-fall ${animationDuration}s linear forwards`;
      
      // Add trail effect
      const trail = document.createElement('div');
      trail.className = 'absolute bg-white w-1 opacity-30';
      trail.style.top = `${size}px`;
      trail.style.left = `${size/2}px`;
      trail.style.height = '0';
      trail.style.animation = `drip ${animationDuration/4}s linear infinite alternate`;
      
      drop.appendChild(innerDrop);
      drop.appendChild(trail);
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
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
      }}
    >
      {/* Stars background for dairy farm night sky effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            size={Math.random() * 3 + 1}
            className="text-white absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated circular gradient background */}
      <div 
        className="absolute top-1/4 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-br from-blue-900/30 to-transparent blur-3xl"
        style={{
          transform: `translate(-50%, -25%) scale(${1 + scrollY * 0.001})`,
          opacity: Math.max(0.2, 1 - scrollY * 0.002)
        }}
      ></div>
      
      {/* Dynamic milk illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden z-10">
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/80 to-white/0"
          style={{ 
            transform: `translateY(${Math.min(0, -50 + scrollY * 0.2)}px)`,
            opacity: Math.min(1, 0.3 + scrollY * 0.002) 
          }}
        ></div>
        
        {/* Multiple milk waves with parallax effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-5"
          style={{ transform: `translateY(${Math.min(0, -20 + scrollY * 0.1)}px)` }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px]">
            <path 
              d="M0,0 C150,90 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
              className="fill-white opacity-70"
            ></path>
          </svg>
        </div>
        
        {/* Second milk wave with offset */}
        <div 
          className="absolute bottom-0 left-0 right-0 milk-wave z-4"
          style={{ transform: `translateY(${Math.min(0, -5 + scrollY * 0.05)}px)` }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
            <path 
              d="M0,40 C150,0 350,80 500,20 C650,0 750,60 900,30 C1050,0 1200,30 1200,30 V120 H0 Z" 
              className="fill-white opacity-80"
            ></path>
          </svg>
        </div>
        
        {/* Third milk wave for more dramatic effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-3"
          style={{ 
            animation: "milk-wave 7s ease-in-out infinite reverse",
            transform: `translateY(${Math.min(0, 10 - scrollY * 0.02)}px)`
          }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[50px]">
            <path 
              d="M0,60 C350,0 450,120 650,30 C750,0 950,80 1200,20 V120 H0 Z" 
              className="fill-white opacity-90"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Moon with milk splash effect */}
      <div className="absolute top-24 right-10 md:right-24 w-16 h-16 md:w-24 md:h-24 bg-yellow-100 rounded-full z-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-50"></div>
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-yellow-50/80 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/5 h-1/5 bg-yellow-50/60 rounded-full"></div>
      </div>
      
      {/* Milk drops animation container */}
      <div ref={milkDropsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Predefined milk drops for immediate visual */}
      {[...Array(10)].map((_, i) => (
        <MilkDrop 
          key={i}
          delay={i * 0.7} 
          size={Math.random() * 15 + 10}
          left={Math.random() * 100}
          duration={Math.random() * 3 + 4}
        />
      ))}
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center pt-16 pb-32">
          <div className="space-y-6 animate-slide-in-left max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-400 inline-flex items-center text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
                Dairy Processing Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium flex items-center gap-1">
                <Milk size={12} className="text-yellow-400" />
                Since 2005
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block mb-2">Transform Your</span>
              <span className="block relative">
                <span className="text-yellow-400 mr-2">Dairy</span>
                <span className="relative inline-block">
                  Production
                  {/* Milk splash animation */}
                  <div className="absolute -top-8 -right-8 w-16 h-16">
                    <div className="relative w-full h-full">
                      <div className="absolute w-4 h-8 bg-white rounded-full transform rotate-45 opacity-80 animate-bounce -top-4 -right-2"></div>
                      <div className="absolute w-3 h-6 bg-white rounded-full transform rotate-30 opacity-60 animate-bounce animation-delay-300 -top-2 right-0"></div>
                    </div>
                  </div>
                </span>
              </span>
              
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent my-4"></div>
              
              <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90">With Precision</span>
            </h1>
            
            <p className="text-mylken-light text-lg md:text-xl max-w-2xl mx-auto mt-8">
              We provide cutting-edge machinery that helps dairy farmers and processors 
              maximize yield, ensure quality, and increase efficiency in every step of production.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link to="/products" className="bg-yellow-400 text-mylken-dark hover:bg-yellow-300 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group relative overflow-hidden">
                <span className="relative z-10">Browse Equipment</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 relative z-10" />
                
                {/* Milk splatter effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300">
                  <MilkSplash className="absolute top-0 right-0" />
                </div>
              </Link>
              
              <Link to="/contact">
                <Button variant="milk" className="border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20 transition-colors px-6 py-6 h-auto group relative overflow-hidden">
                  <span className="relative z-10">Request Consultation</span>
                  
                  {/* Milk droplet effect on hover */}
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-white scale-0 group-hover:scale-100 group-hover:animate-bounce transition-transform"></div>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Factory />}
              title="Dairy Processing"
              subtitle="Equipment"
            />
            
            <FeatureCard
              icon={<Milk />}
              title="Quality"
              subtitle="Testing Tools"
            />
            
            <FeatureCard
              icon={<Beaker />}
              title="Lab"
              subtitle="Analysis"
            />
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
            <span className="text-xs mb-2 text-yellow-400">Explore More</span>
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-yellow-400 rounded-full animate-scroll mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature card component to clean up the code
const FeatureCard = ({ icon, title, subtitle }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string 
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all transform hover:translate-y-[-8px] hover:scale-105 duration-300 border border-white/10">
      <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
        <div className="text-yellow-400">{icon}</div>
        {/* Milk droplet */}
        <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -left-1 w-3 h-3 bg-white/50 rounded-full animate-ping animation-delay-700"></span>
      </div>
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-mylken-light">{subtitle}</p>
      
      {/* Interactive milk drop on hover */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 scale-0 group-hover:scale-100 transition-all duration-500">
        <div className="w-full h-full bg-white rounded-full opacity-50 animate-ping"></div>
      </div>
    </div>
  );
};

export default Hero;

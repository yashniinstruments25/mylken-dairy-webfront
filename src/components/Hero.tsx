
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Milk, Factory, Beaker, Droplets, Leaf, Sun } from 'lucide-react';
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
        transform: 'rotate(225deg)', // Corrected orientation for milk drops (pointing down)
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
      
      // Create teardrop shape for milk drop with correct orientation (pointing down)
      const innerDrop = document.createElement('div');
      innerDrop.className = 'milk-drop';
      
      // Random position, size and animation duration
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 8 + 5;
      
      innerDrop.style.width = `${size}px`;
      innerDrop.style.height = `${size}px`;
      innerDrop.style.transform = 'rotate(225deg)'; // Correct orientation (pointing down)
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
        background: 'linear-gradient(180deg, #a7f3d0 0%, #e0f2fe 100%)'
      }}
    >
      {/* Pastoral Farm Elements */}
      <div className="absolute inset-0 z-0">
        {/* Sun */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-80 blur-sm"></div>
        
        {/* Rolling hills */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path fill="#84cc16" fillOpacity="0.4" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0">
            <path fill="#65a30d" fillOpacity="0.5" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,85.3C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Farm animals silhouettes */}
        <div className="absolute bottom-20 left-10 opacity-40">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,70 Q15,60 20,70 Q25,80 30,70 Q35,60 40,70 Q45,80 50,70 L50,80 L10,80 Z" fill="#4b5563"/>
            <circle cx="25" cy="60" r="10" fill="#4b5563"/>
            <circle cx="40" cy="55" r="8" fill="#4b5563"/>
          </svg>
        </div>
        
        <div className="absolute bottom-30 right-20 opacity-40">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,80 Q30,70 40,80 Q50,90 60,80 Q70,70 80,80 Q90,90 100,80 Q110,70 120,80 L120,90 L20,90 Z" fill="#4b5563"/>
            <circle cx="50" cy="60" r="15" fill="#4b5563"/>
            <rect x="45" y="30" width="10" height="30" fill="#4b5563"/>
            <rect x="65" y="30" width="10" height="30" fill="#4b5563"/>
            <circle cx="80" cy="60" r="15" fill="#4b5563"/>
          </svg>
        </div>
        
        {/* Farm barn silhouette */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 opacity-20">
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,80 L100,40 L150,80 L150,150 L50,150 Z" fill="#b91c1c"/>
            <rect x="90" y="110" width="20" height="40" fill="#92400e"/>
            <rect x="60" y="90" width="20" height="20" fill="#f59e0b"/>
            <rect x="120" y="90" width="20" height="20" fill="#f59e0b"/>
          </svg>
        </div>
      </div>
      
      {/* Dynamic milk illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-10">
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/70 to-white/0"
          style={{ 
            transform: `translateY(${Math.min(0, -20 + scrollY * 0.1)}px)`,
            opacity: Math.min(0.7, 0.3 + scrollY * 0.002) 
          }}
        ></div>
        
        {/* Multiple milk waves with parallax effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-5"
          style={{ transform: `translateY(${Math.min(0, -10 + scrollY * 0.05)}px)` }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[20px]">
            <path 
              d="M0,0 C150,40 350,0 500,30 C650,60 750,20 900,40 C1050,60 1200,30 1200,30 V120 H0 Z" 
              className="fill-white opacity-70"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Milk drops animation container */}
      <div ref={milkDropsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Predefined milk drops for immediate visual - with corrected orientation */}
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16 pb-24">
          <div className="space-y-6 animate-slide-in-left max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-700 inline-flex items-center text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2 animate-pulse"></span>
                Farm Fresh Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium flex items-center gap-1">
                <Milk size={12} className="text-yellow-500" />
                Since 2005
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-mylken-dark leading-tight">
              <span className="block mb-2">Transform Your</span>
              <span className="block relative">
                <span className="text-yellow-500 mr-2">Dairy</span>
                <span className="text-mylken-dark relative inline-block">
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
              
              <span className="block text-3xl md:text-4xl text-mylken-primary/80">With Farm-Fresh Precision</span>
            </h1>
            
            <p className="text-mylken-dark text-lg md:text-xl max-w-2xl mt-4">
              We provide cutting-edge machinery that helps dairy farmers and processors 
              maximize yield, ensure quality, and increase efficiency in every step of production.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-yellow-400 text-mylken-dark hover:bg-yellow-500 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group relative overflow-hidden">
                <span className="relative z-10">Browse Equipment</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 relative z-10" />
                
                {/* Milk splatter effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300">
                  <MilkSplash className="absolute top-0 right-0" />
                </div>
              </Link>
              
              <Link to="/contact">
                <Button variant="milk" className="border-2 border-yellow-400/50 text-yellow-500 hover:bg-yellow-400/20 transition-colors px-6 py-6 h-auto group relative overflow-hidden">
                  <span className="relative z-10">Request Consultation</span>
                  
                  {/* Milk droplet effect on hover */}
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-white scale-0 group-hover:scale-100 group-hover:animate-bounce transition-transform"></div>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right side dairy farm illustration */}
          <div className="relative w-full max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-50 rounded-2xl transform rotate-3"></div>
              <div className="bg-white p-4 rounded-2xl shadow-xl relative z-10 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src="/images/placeholder.svg" 
                    alt="Modern dairy farm" 
                    className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Milk className="text-white h-6 w-6" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Leaf className="text-white h-5 w-5" />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-xs text-mylken-dark/70">Annual Production</p>
                  <p className="text-lg font-bold text-mylken-dark">12,500+ Units</p>
                </div>
              </div>
            </div>
            
            {/* Floating dairy icons */}
            <div className="absolute -top-6 right-12 bg-blue-100 p-3 rounded-full shadow-md animate-bounce" style={{animationDuration: "3s"}}>
              <Droplets className="text-blue-500 h-5 w-5" />
            </div>
            <div className="absolute -bottom-2 left-10 bg-yellow-100 p-2 rounded-full shadow-md animate-pulse">
              <Sun className="text-yellow-500 h-4 w-4" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-mylken-dark animate-bounce">
          <span className="text-xs mb-2 text-yellow-500">Explore More</span>
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-yellow-500 rounded-full animate-scroll mt-2"></div>
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
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/90 transition-all transform hover:translate-y-[-8px] hover:scale-105 duration-300 border border-yellow-200 shadow-md">
      <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
        <div className="text-yellow-500">{icon}</div>
        {/* Milk droplet */}
        <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -left-1 w-3 h-3 bg-white/50 rounded-full animate-ping animation-delay-700"></span>
      </div>
      <h3 className="text-mylken-dark text-xl font-semibold">{title}</h3>
      <p className="text-mylken-dark/70">{subtitle}</p>
      
      {/* Interactive milk drop on hover */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 scale-0 group-hover:scale-100 transition-all duration-500">
        <div className="w-full h-full bg-white rounded-full opacity-50 animate-ping"></div>
      </div>
    </div>
  );
};

export default Hero;

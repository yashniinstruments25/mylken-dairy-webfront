
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Milk, Factory, Beaker, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const milkDropsRef = useRef<HTMLDivElement>(null);
  
  // Create animated milk drops
  useEffect(() => {
    if (!milkDropsRef.current) return;
    
    const createMilkDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'absolute';
      drop.style.zIndex = '5';
      
      // Create teardrop shape for milk drop
      const innerDrop = document.createElement('div');
      innerDrop.className = 'milk-drop';
      
      // Random position, size and animation duration
      const size = Math.random() * 30 + 10;
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
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mylken-primary opacity-80"></div>
        <img 
          src="/images/dairy-farm-bg.jpg" 
          alt="Dairy Farm Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      
      {/* Milk drops animation container */}
      <div ref={milkDropsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      {/* Enhanced Milk wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px]">
          <path 
            d="M0,0 C150,90 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
            className="fill-white opacity-50"
          ></path>
        </svg>
      </div>
      
      {/* Second milk wave with offset - more visible */}
      <div className="absolute bottom-0 left-0 right-0 milk-wave z-4">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path 
            d="M0,40 C150,0 350,80 500,20 C650,0 750,60 900,30 C1050,0 1200,30 1200,30 V120 H0 Z" 
            className="fill-white opacity-60"
          ></path>
        </svg>
      </div>
      
      {/* Third milk wave for more dramatic effect */}
      <div className="absolute bottom-0 left-0 right-0 z-3" style={{ animation: "milkWave 7s ease-in-out infinite reverse" }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[50px]">
          <path 
            d="M0,60 C350,0 450,120 650,30 C750,0 950,80 1200,20 V120 H0 Z" 
            className="fill-white opacity-40"
          ></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center pt-16 pb-8">
          <div className="space-y-6 animate-slide-in-left max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
                Dairy Processing Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium flex items-center gap-1">
                <Milk size={12} className="text-mylken-accent" />
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
            
            <p className="text-mylken-light text-lg md:text-xl max-w-2xl mx-auto">
              We provide cutting-edge machinery that helps dairy farmers and processors 
              maximize yield, ensure quality, and increase efficiency in every step of production.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
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
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors transform hover:scale-105 transition-transform duration-300">
      <div className="bg-mylken-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
        <div className="text-mylken-accent">{icon}</div>
        {/* Milk droplet */}
        <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
      </div>
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-mylken-light">{subtitle}</p>
    </div>
  );
};

export default Hero;

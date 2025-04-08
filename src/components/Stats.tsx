
import React, { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Happy Clients", icon: "👥" },
    { value: 30, suffix: "+", label: "Years Experience", icon: "🏆" },
    { value: 100, suffix: "%", label: "Quality Assurance", icon: "✓" },
    { value: 24, suffix: "/7", label: "Technical Support", icon: "🔧" }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animateStats, setAnimateStats] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-mylken-primary text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mylken-secondary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-mylken-accent opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <div className="w-20 h-1 bg-mylken-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-mylken-dark/40 to-transparent backdrop-blur-sm border border-mylken-light/10 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mylken-accent/20 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <CounterAnimation 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  animate={animateStats}
                />
              </h3>
              <div className="w-12 h-1 bg-mylken-accent mx-auto my-3 rounded-full"></div>
              <p className="text-mylken-light text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  animate: boolean;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ value, suffix = "", animate }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!animate) return;
    
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const counterIncrement = value / totalFrames;
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const currentCount = Math.floor(value * progress);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value, animate]);
  
  return (
    <span>{animate ? count : 0}{suffix}</span>
  );
};

export default Stats;

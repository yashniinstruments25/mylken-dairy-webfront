
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Beaker, LineChart, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stats = () => {
  const stats = [
    { 
      value: 500, 
      suffix: "+", 
      label: "Dairy Clients", 
      icon: <Droplets className="text-white h-8 w-8" />, 
      description: "Dairy farms and processing plants served"
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "Years Experience", 
      icon: <LineChart className="text-white h-8 w-8" />, 
      description: "Decades of dairy equipment expertise"
    },
    { 
      value: 100, 
      suffix: "%", 
      label: "Quality Assurance", 
      icon: <Beaker className="text-white h-8 w-8" />, 
      description: "Every product undergoes rigorous testing"
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "Technical Support", 
      icon: <Wheat className="text-white h-8 w-8" />, 
      description: "Round-the-clock assistance for all your needs"
    }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-mylken-primary text-white relative overflow-hidden"
    >
      {/* Professional background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mylken-secondary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-mylken-accent opacity-15 rounded-full blur-3xl"></div>
        
        {/* Subtle milk splash patterns */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-white opacity-5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="w-20 h-20 bg-mylken-accent/30 rounded-full flex items-center justify-center mx-auto">
              <Beaker className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Track Record</h2>
          <div className="w-20 h-1 bg-mylken-accent mx-auto mb-6"></div>
          <p className="text-mylken-light text-lg max-w-2xl mx-auto">
            For over three decades, Mylken has been at the forefront of dairy equipment innovation,
            delivering quality products and exceptional service to the dairy industry.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={animateStats ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 rounded-lg bg-gradient-to-br from-mylken-dark/40 to-transparent backdrop-blur-sm border border-mylken-light/10 hover:border-mylken-accent/30 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Professional background effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-mylken-accent opacity-5 rounded-full blur-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-mylken-light opacity-5 rounded-full blur-lg"></div>
              
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mylken-accent/20 flex items-center justify-center relative">
                {stat.icon}
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 flex items-center justify-center">
                <CounterAnimation 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  animate={animateStats}
                />
              </h3>
              
              <div className="w-12 h-1 bg-mylken-accent mx-auto my-4 rounded-full"></div>
              <p className="text-mylken-light text-lg font-medium mb-2">{stat.label}</p>
              <p className="text-mylken-light/80 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/about" 
            className="inline-flex items-center text-mylken-accent hover:text-white transition-colors font-medium"
          >
            Learn more about our journey
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Subtle bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="white" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
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

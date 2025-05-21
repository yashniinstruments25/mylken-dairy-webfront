
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Milk, Award, Clock, CheckCircle, HeadphonesIcon, Cow } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stats = () => {
  const stats = [
    { 
      value: 500, 
      suffix: "+", 
      label: "Happy Clients", 
      icon: <Award className="text-yellow-400" />, 
      description: "Satisfied dairy farms across the country" 
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "Years Experience", 
      icon: <Clock className="text-yellow-400" />, 
      description: "Decades of dairy equipment expertise" 
    },
    { 
      value: 100, 
      suffix: "%", 
      label: "Quality Assurance", 
      icon: <CheckCircle className="text-yellow-400" />, 
      description: "Every product undergoes rigorous testing" 
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "Technical Support", 
      icon: <HeadphonesIcon className="text-yellow-400" />, 
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
      className="py-24 bg-gradient-to-b from-green-50 to-green-100 text-mylken-dark relative overflow-hidden"
    >
      {/* Farm-themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Rolling hills */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[120px]">
            <path 
              d="M0,80 C200,120 400,30 600,80 C800,130 1000,60 1200,90 L1200,120 L0,120 Z" 
              className="fill-green-600"
            ></path>
          </svg>
        </div>
        
        {/* Abstract farm pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20">
            <Cow className="w-full h-full text-green-900" />
          </div>
          <div className="absolute top-40 right-40 w-16 h-16">
            <Milk className="w-full h-full text-yellow-600" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24">
            <Cow className="w-full h-full text-green-900" />
          </div>
          <div className="absolute top-60 left-1/2 w-16 h-16">
            <Milk className="w-full h-full text-yellow-600" />
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="w-16 h-16 mx-auto relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-30 animate-ping"></div>
              <div className="relative z-10 w-full h-full bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="text-white h-8 w-8" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mylken-dark mb-4 relative inline-block">
            Our Farm-Fresh Achievements
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-yellow-400 rounded-full"></div>
          </h2>
          
          <p className="text-mylken-dark/80 text-lg max-w-2xl mx-auto">
            For over three decades, Mylken has been at the forefront of dairy equipment innovation,
            delivering quality products and exceptional service to farmers and processors across the country.
          </p>
          
          {/* Decorative milk drops */}
          <div className="absolute left-1/4 top-10">
            <div className="w-4 h-4 bg-white rounded-full opacity-80 animate-ping"></div>
          </div>
          <div className="absolute right-1/4 top-20">
            <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: "1s"}}></div>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={animateStats ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl border-b-4 border-yellow-400 transform transition-all hover:-translate-y-2 duration-300"
              variants={itemVariants}
            >
              <div className="relative">
                {/* Decorative milk splash behind icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-100 rounded-full"></div>
                
                {/* Main icon */}
                <div className="w-16 h-16 mx-auto mb-6 relative z-10 flex items-center justify-center">
                  {stat.icon}
                </div>
                
                {/* Small milk droplet */}
                <div className="absolute top-0 right-1/4 w-2 h-2 bg-white rounded-full transform rotate-45 animate-bounce" style={{animationDelay: `${index * 0.3}s`}}></div>
              </div>
              
              <h3 className="flex items-center justify-center text-4xl md:text-5xl font-bold text-mylken-dark mb-4 relative">
                <CounterAnimation 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  animate={animateStats}
                />
                
                {/* Underline effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full"></div>
              </h3>
              
              <p className="text-mylken-dark text-lg font-medium mb-2">{stat.label}</p>
              <p className="text-mylken-dark/70 text-sm">{stat.description}</p>
              
              {/* Milk splash on hover effect */}
              <div className="absolute inset-0 bg-white/0 hover:bg-white/20 rounded-lg transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center relative">
          <div className="absolute left-0 w-full h-0.5 bg-yellow-400/20"></div>
          <span className="relative bg-green-50 inline-block px-6 -top-2.5">
            <Link 
              to="/about" 
              className="inline-flex items-center text-yellow-500 hover:text-yellow-700 transition-colors"
            >
              Learn more about our dairy journey
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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

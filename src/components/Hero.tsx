
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Beaker, Droplets, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroProducts = [
    {
      id: 1,
      name: "Advanced Milk Analyzer",
      description: "Precision testing for comprehensive milk analysis",
      image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=687&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1287&auto=format&fit=crop",
      icon: <Beaker className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Real-time Analysis", "99.9% Accuracy", "Smart Interface"]
    },
    {
      id: 2,
      name: "Premium Cream Separator",
      description: "Efficient separation with maximum yield",
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1287&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1598233847491-f16487adee2f?q=80&w=1776&auto=format&fit=crop",
      icon: <Droplets className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      features: ["High Efficiency", "Easy Cleaning", "Durable Design"]
    },
    {
      id: 3,
      name: "Digital Khoya Machine",
      description: "Modern technology for traditional dairy products",
      image: "https://images.unsplash.com/photo-1603676286968-964a12c69eb7?q=80&w=1286&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1226&auto=format&fit=crop",
      icon: <Gauge className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      features: ["Temperature Control", "Automated Process", "Consistent Quality"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroProducts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
  };

  const currentProduct = heroProducts[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-mylken-primary">
      {/* Dynamic background with animated gradient */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.gradient} opacity-20 transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-mylken-primary via-mylken-primary to-mylken-secondary opacity-85"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mylken-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-32 w-48 h-48 bg-mylken-light rounded-full blur-3xl animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-mylken-accent rounded-full blur-3xl animate-pulse animation-delay-700"></div>
        </div>
      </div>

      {/* Product showcase carousel */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
                Featured Equipment
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Premium</span>
                <span className="block text-mylken-accent">{currentProduct.name.split(' ')[0]}</span>
                <span className="block">{currentProduct.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-mylken-light text-xl max-w-2xl">
                {currentProduct.description}
              </p>
            </div>

            {/* Product features */}
            <div className="flex flex-wrap gap-3">
              {currentProduct.features.map((feature, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-mylken-light/20"
                >
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-8 py-4 rounded-lg font-medium flex items-center gap-2 group shadow-lg">
                Explore Equipment
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-mylken-light text-white hover:bg-mylken-light/10 hover:text-white px-8 py-4 h-auto backdrop-blur-sm">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - Product showcase */}
          <div className="relative">
            {/* Main product display */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-mylken-accent/20 to-transparent rounded-2xl blur-xl transform rotate-3"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                {/* Product icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentProduct.gradient} flex items-center justify-center text-white mb-6 mx-auto`}>
                  {currentProduct.icon}
                </div>
                
                {/* Product image */}
                <div className="aspect-square rounded-xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = currentProduct.fallbackImage;
                    }}
                  />
                </div>
                
                {/* Product info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{currentProduct.name}</h3>
                  <p className="text-mylken-light">{currentProduct.description}</p>
                </div>
              </div>
            </div>
            
            {/* Carousel controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Slide indicators */}
              <div className="flex gap-2">
                {heroProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-mylken-accent' 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[100px]">
          <path 
            d="M0,0 C150,90 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
            className="fill-white opacity-90"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

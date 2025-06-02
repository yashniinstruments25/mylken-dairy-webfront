
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
      description: "Precision testing for comprehensive milk analysis with real-time results",
      image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=800&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=800&auto=format&fit=crop",
      icon: <Beaker className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      accentColor: "bg-blue-500",
      features: ["Real-time Analysis", "99.9% Accuracy", "Smart Interface"]
    },
    {
      id: 2,
      name: "Stainless Steel Milk Cans",
      description: "Premium quality stainless steel milk storage and transport solutions",
      image: "/lovable-uploads/d94866ea-8883-4a2a-ab94-225e53b5827a.png",
      fallbackImage: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=800&auto=format&fit=crop",
      icon: <Droplets className="w-8 h-8" />,
      gradient: "from-gray-400 via-gray-300 to-gray-500",
      accentColor: "bg-gray-500",
      features: ["Food Grade Steel", "Easy Transport", "Durable Design"]
    },
    {
      id: 3,
      name: "Aluminum Milk Cans",
      description: "Lightweight aluminum cans for efficient milk collection and storage",
      image: "/lovable-uploads/7982580a-c690-44c3-8467-75753a40dbd9.png",
      fallbackImage: "https://images.unsplash.com/photo-1598233847491-f16487adee2f?q=80&w=800&auto=format&fit=crop",
      icon: <Gauge className="w-8 h-8" />,
      gradient: "from-slate-400 via-slate-300 to-slate-500",
      accentColor: "bg-slate-500",
      features: ["Lightweight", "Corrosion Resistant", "Cost Effective"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 6000);
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width background with integrated product image */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.gradient} opacity-15 transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-mylken-primary via-mylken-primary/95 to-mylken-secondary/90"></div>
        
        {/* Product image integrated across the background */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16">
          <div className="relative w-full max-w-4xl h-full flex items-center justify-end">
            <img 
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-auto h-[70vh] max-h-[600px] object-contain opacity-80 transition-all duration-1000 transform hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = currentProduct.fallbackImage;
              }}
            />
            
            {/* Decorative milk splash effects */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-mylken-accent/20 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
            <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-700"></div>
          </div>
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-mylken-primary via-mylken-primary/90 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Enhanced typography and layout */}
          <div className="space-y-8 lg:pr-8">
            {/* Featured badge */}
            <div className="flex items-center gap-2">
              <span className={`px-6 py-3 rounded-full ${currentProduct.accentColor}/20 text-white border border-white/20 inline-flex items-center text-sm font-semibold backdrop-blur-sm transition-all duration-1000`}>
                <span className={`w-3 h-3 rounded-full ${currentProduct.accentColor} mr-3 animate-pulse`}></span>
                Featured Equipment
              </span>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="block text-mylken-light/90">Premium</span>
                <span className="block text-mylken-accent text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
                  {currentProduct.name.split(' ')[0]}
                </span>
                <span className="block text-white">
                  {currentProduct.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-mylken-light/90 text-lg md:text-xl max-w-xl leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Product features with enhanced design */}
            <div className="flex flex-wrap gap-3">
              {currentProduct.features.map((feature, index) => (
                <div 
                  key={index}
                  className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {feature}
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-10 py-4 rounded-xl font-semibold flex items-center gap-3 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Explore Equipment
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-10 py-4 h-auto backdrop-blur-md rounded-xl font-semibold shadow-lg">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - Product info card */}
          <div className="relative lg:flex lg:justify-end">
            <div className="relative max-w-md">
              {/* Floating product info card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                {/* Product icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentProduct.gradient} flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                  {currentProduct.icon}
                </div>
                
                {/* Product details */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">{currentProduct.name}</h3>
                  <p className="text-mylken-light/80 leading-relaxed">{currentProduct.description}</p>
                  
                  {/* Learn more link */}
                  <Link 
                    to="/products" 
                    className="inline-flex items-center gap-2 text-mylken-accent hover:text-mylken-light transition-colors font-medium group mt-4"
                  >
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced carousel controls */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Enhanced slide indicators */}
          <div className="flex gap-3">
            {heroProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-mylken-accent scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Enhanced decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <path 
            d="M0,0 C150,100 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

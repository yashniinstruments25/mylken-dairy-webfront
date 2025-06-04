
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
      description: "Precision testing for comprehensive milk analysis with real-time results and laboratory-grade accuracy",
      image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=800&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=800&auto=format&fit=crop",
      icon: <Beaker className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      accentColor: "bg-blue-500",
      bgOverlay: "from-blue-900/80 via-mylken-primary/90 to-mylken-primary",
      features: ["Real-time Analysis", "99.9% Accuracy", "Smart Interface", "Laboratory Grade"]
    },
    {
      id: 2,
      name: "Stainless Steel Milk Cans",
      description: "Premium quality stainless steel milk storage and transport solutions for modern dairy operations",
      image: "/lovable-uploads/d94866ea-8883-4a2a-ab94-225e53b5827a.png",
      fallbackImage: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=800&auto=format&fit=crop",
      icon: <Droplets className="w-8 h-8" />,
      gradient: "from-gray-400 via-gray-300 to-gray-500",
      accentColor: "bg-gray-500",
      bgOverlay: "from-gray-700/80 via-mylken-primary/90 to-mylken-primary",
      features: ["Food Grade Steel", "Easy Transport", "Durable Design", "Hygienic"]
    },
    {
      id: 3,
      name: "Aluminum Milk Cans",
      description: "Lightweight aluminum cans for efficient milk collection and storage with superior durability",
      image: "/lovable-uploads/7982580a-c690-44c3-8467-75753a40dbd9.png",
      fallbackImage: "https://images.unsplash.com/photo-1598233847491-f16487adee2f?q=80&w=800&auto=format&fit=crop",
      icon: <Gauge className="w-8 h-8" />,
      gradient: "from-slate-400 via-slate-300 to-slate-500",
      accentColor: "bg-slate-500",
      bgOverlay: "from-slate-700/80 via-mylken-primary/90 to-mylken-primary",
      features: ["Lightweight", "Corrosion Resistant", "Cost Effective", "Eco-Friendly"]
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
      {/* Enhanced background with better product integration */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient overlay that changes with each product */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.bgOverlay} transition-all duration-1000`}></div>
        
        {/* Enhanced product image positioning */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-20">
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-auto h-[60vh] lg:h-[75vh] max-h-[700px] object-contain opacity-90 transition-all duration-1000 transform hover:scale-105 filter drop-shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = currentProduct.fallbackImage;
                }}
              />
              
              {/* Enhanced product glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentProduct.gradient} opacity-20 blur-3xl rounded-full scale-150 animate-pulse`}></div>
            </div>
          </div>
        </div>

        {/* Animated milk splash effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-16 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-mylken-accent/15 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse animation-delay-700"></div>
          <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-mylken-accent/12 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left content - Enhanced and expanded */}
          <div className="lg:col-span-7 space-y-8">
            {/* Enhanced product badge */}
            <div className="flex items-center gap-3">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentProduct.gradient} flex items-center justify-center text-white shadow-xl transition-all duration-1000`}>
                {currentProduct.icon}
              </div>
              <div className="space-y-1">
                <span className={`px-4 py-2 rounded-full ${currentProduct.accentColor}/20 text-white border border-white/20 text-sm font-semibold backdrop-blur-sm transition-all duration-1000 inline-block`}>
                  Featured Equipment
                </span>
              </div>
            </div>
            
            {/* Enhanced main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="block text-mylken-light/90 text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
                  Premium Dairy Equipment
                </span>
                <span className={`block bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent transition-all duration-1000`}>
                  {currentProduct.name.split(' ')[0]}
                </span>
                <span className="block text-white">
                  {currentProduct.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-mylken-light/90 text-lg md:text-xl max-w-2xl leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Enhanced product features grid */}
            <div className="grid grid-cols-2 gap-3">
              {currentProduct.features.map((feature, index) => (
                <div 
                  key={index}
                  className="px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${currentProduct.accentColor} transition-all duration-1000`}></div>
                    {feature}
                  </div>
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
          
          {/* Right side - Product showcase area */}
          <div className="lg:col-span-5 relative">
            {/* Product metrics or additional info can go here */}
            <div className="hidden lg:block space-y-6">
              {/* Optional: Add some product stats or highlights */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mylken-accent mb-2">99.9%</div>
                    <div className="text-white/80 text-sm">Accuracy Rate</div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mylken-accent mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced carousel controls */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <button 
            onClick={prevSlide}
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg group"
          >
            <ChevronLeft size={28} className="transition-transform group-hover:-translate-x-1" />
          </button>
          
          {/* Enhanced slide indicators with product previews */}
          <div className="flex gap-4">
            {heroProducts.map((product, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 border-2 ${
                  index === currentSlide 
                    ? 'border-mylken-accent scale-110 shadow-xl' 
                    : 'border-white/20 hover:border-white/40 hover:scale-105'
                }`}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white transition-all duration-300`}>
                    {React.cloneElement(product.icon, { size: 16 })}
                  </div>
                </div>
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-mylken-accent/20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg group"
          >
            <ChevronRight size={28} className="transition-transform group-hover:translate-x-1" />
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

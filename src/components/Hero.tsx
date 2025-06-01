
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
      description: "Precision testing for comprehensive milk analysis with real-time results and laboratory-grade accuracy for your dairy operations",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1581092921461-eab98af79b0b?q=80&w=800&auto=format&fit=crop",
      icon: <Beaker className="w-8 h-8" />,
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      accentColor: "bg-blue-500",
      features: ["Real-time Analysis", "99.9% Accuracy", "Smart Interface", "Laboratory Grade"]
    },
    {
      id: 2,
      name: "Stainless Steel Milk Cans",
      description: "Premium quality stainless steel milk storage and transport solutions designed for maximum durability and hygiene standards",
      image: "/lovable-uploads/41647ff8-2ad2-4b02-9a92-dd813c452bb8.png",
      fallbackImage: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=800&auto=format&fit=crop",
      icon: <Droplets className="w-8 h-8" />,
      gradient: "from-green-600 via-green-500 to-emerald-500",
      accentColor: "bg-green-500",
      features: ["Food Grade Steel", "Easy Transport", "Durable Design", "Hygienic Storage"]
    },
    {
      id: 3,
      name: "Aluminum Milk Cans",
      description: "Lightweight aluminum cans for efficient milk collection and storage with corrosion-resistant coating for long-lasting performance",
      image: "https://images.unsplash.com/photo-1598233847491-f16487adee2f?q=80&w=800&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=800&auto=format&fit=crop",
      icon: <Gauge className="w-8 h-8" />,
      gradient: "from-slate-600 via-slate-500 to-gray-500",
      accentColor: "bg-slate-500",
      features: ["Lightweight", "Corrosion Resistant", "Cost Effective", "Easy Handling"]
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
      {/* Enhanced milk splash effects from top */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Primary milk splash from top-left */}
        <div className="absolute -top-20 -left-20 w-96 h-96 opacity-30">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200,50 Q150,100 100,150 Q120,180 150,200 Q180,220 200,250 Q220,220 250,200 Q280,180 300,150 Q250,100 200,50 Z"
              fill="white"
              className="animate-[float_6s_ease-in-out_infinite]"
            />
          </svg>
        </div>
        
        {/* Secondary milk splash from top-right */}
        <div className="absolute -top-32 -right-16 w-80 h-80 opacity-25 animation-delay-300">
          <svg viewBox="0 0 320 320" className="w-full h-full">
            <path
              d="M160,40 Q120,80 80,120 Q100,140 120,160 Q140,180 160,200 Q180,180 200,160 Q220,140 240,120 Q200,80 160,40 Z"
              fill="white"
              className="animate-[float_8s_ease-in-out_infinite_reverse]"
            />
          </svg>
        </div>

        {/* Floating milk droplets */}
        <div className="absolute top-10 left-1/4 w-8 h-8 bg-white/40 rounded-full animate-[float_4s_ease-in-out_infinite] animation-delay-500"></div>
        <div className="absolute top-20 right-1/3 w-6 h-6 bg-white/35 rounded-full animate-[float_5s_ease-in-out_infinite] animation-delay-700"></div>
        <div className="absolute top-32 left-1/2 w-10 h-10 bg-white/30 rounded-full animate-[float_6s_ease-in-out_infinite] animation-delay-300"></div>
        <div className="absolute top-40 left-1/3 w-4 h-4 bg-white/45 rounded-full animate-[float_7s_ease-in-out_infinite] animation-delay-900"></div>
      </div>

      {/* Dynamic gradient background that changes with carousel */}
      <div className="absolute inset-0 z-5">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.gradient} opacity-20 transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-mylken-primary via-mylken-primary/95 to-mylken-secondary/90"></div>
      </div>

      {/* Full-width background product image */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full">
          <img 
            src={currentProduct.image}
            alt={currentProduct.name}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-[80vh] max-h-[700px] object-contain opacity-60 transition-all duration-1000 transform"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = currentProduct.fallbackImage;
            }}
          />
          
          {/* Enhanced decorative elements around product */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-32 h-32 bg-mylken-accent/20 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-700"></div>
        </div>
      </div>

      {/* Content overlay with enhanced readability */}
      <div className="absolute inset-0 z-15 bg-gradient-to-r from-mylken-primary via-mylken-primary/95 to-mylken-primary/60"></div>

      {/* Main content */}
      <div className="container-custom relative z-20 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left content - Enhanced with better spacing */}
          <div className="lg:col-span-7 space-y-8">
            {/* Featured badge with enhanced design */}
            <div className="flex items-center gap-3">
              <span className={`px-6 py-3 rounded-full ${currentProduct.accentColor}/20 text-white border border-white/30 inline-flex items-center text-sm font-semibold backdrop-blur-md transition-all duration-1000 shadow-lg`}>
                <span className={`w-3 h-3 rounded-full ${currentProduct.accentColor} mr-3 animate-pulse shadow-lg`}></span>
                Featured Equipment
              </span>
            </div>
            
            {/* Enhanced main heading with better typography hierarchy */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="block text-mylken-light/90 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Premium</span>
                <span className="block text-mylken-accent text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black drop-shadow-lg">
                  {currentProduct.name.split(' ')[0]}
                </span>
                <span className="block text-white">
                  {currentProduct.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-mylken-light/90 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light">
                {currentProduct.description}
              </p>
            </div>

            {/* Enhanced product features with better visual hierarchy */}
            <div className="grid grid-cols-2 gap-3 max-w-xl">
              {currentProduct.features.map((feature, index) => (
                <div 
                  key={index}
                  className="px-4 py-3 bg-white/15 backdrop-blur-md rounded-xl text-white text-sm font-medium border border-white/30 hover:bg-white/25 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <div className={`w-2 h-2 rounded-full ${currentProduct.accentColor}`}></div>
                  {feature}
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA buttons with better spacing */}
            <div className="flex flex-wrap gap-4 pt-8">
              <Link to="/products">
                <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-10 py-6 h-auto rounded-xl font-semibold flex items-center gap-3 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
                  Explore Equipment
                  <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/15 hover:text-white hover:border-white/60 px-10 py-6 h-auto backdrop-blur-md rounded-xl font-semibold shadow-lg text-lg">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - Product showcase with enhanced visual elements */}
          <div className="lg:col-span-5 flex justify-end items-center">
            <div className="relative">
              {/* Product icon showcase */}
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${currentProduct.gradient} flex items-center justify-center text-white mb-8 shadow-2xl backdrop-blur-sm border border-white/20 transition-all duration-1000`}>
                {currentProduct.icon}
              </div>
              
              {/* Product metrics or additional info */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
                  <p className="text-mylken-light/80 text-sm">Industry-leading standards with certified quality assurance</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                  <p className="text-mylken-light/80 text-sm">24/7 technical assistance and maintenance services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced carousel controls with better positioning */}
        <div className="flex justify-center items-center gap-8 mt-20">
          <button 
            onClick={prevSlide}
            className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-xl"
          >
            <ChevronLeft size={28} />
          </button>
          
          {/* Enhanced slide indicators */}
          <div className="flex gap-4">
            {heroProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 h-4 bg-mylken-accent rounded-full shadow-lg scale-110' 
                    : 'w-4 h-4 bg-white/40 rounded-full hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-xl"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Enhanced decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-25">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <path 
            d="M0,0 C150,100 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
            className="fill-white drop-shadow-lg"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

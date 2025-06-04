
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Star, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroProducts = [
    {
      id: 1,
      name: "Advanced Milk Analyzer",
      tagline: "Precision Testing Technology",
      description: "Revolutionary milk testing equipment with real-time analysis and laboratory-grade accuracy for modern dairy operations.",
      image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1200&auto=format&fit=crop",
      badge: "Best Seller",
      accuracy: "99.9%",
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      bgGradient: "from-blue-900/90 via-blue-800/80 to-cyan-700/70",
      features: ["Real-time Results", "Laboratory Grade", "Smart Interface", "Data Export"]
    },
    {
      id: 2,
      name: "Premium Steel Milk Cans",
      tagline: "Industrial Grade Storage",
      description: "Food-grade stainless steel milk cans designed for optimal storage, transport, and hygiene in commercial dairy operations.",
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1200&auto=format&fit=crop",
      badge: "Premium Quality",
      accuracy: "100%",
      gradient: "from-gray-600 via-gray-500 to-gray-400",
      bgGradient: "from-gray-800/90 via-gray-700/80 to-gray-600/70",
      features: ["Food Grade Steel", "Easy Transport", "Leak Proof", "Easy Cleaning"]
    },
    {
      id: 3,
      name: "Smart Dairy Solutions",
      tagline: "Complete Automation",
      description: "Integrated dairy management systems with IoT connectivity, automated monitoring, and comprehensive analytics.",
      image: "https://images.unsplash.com/photo-1581092921461-eab98af79b0b?q=80&w=1200&auto=format&fit=crop",
      badge: "Innovation Award",
      accuracy: "AI Powered",
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      bgGradient: "from-green-900/90 via-emerald-800/80 to-teal-700/70",
      features: ["IoT Integration", "Real-time Monitoring", "Analytics Dashboard", "Remote Control"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
  };

  const currentProduct = heroProducts[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.bgGradient} transition-all duration-1000`}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Product Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold text-sm">{currentProduct.badge}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block text-xl lg:text-2xl font-normal text-white/80 mb-2">
                  {currentProduct.tagline}
                </span>
                <span className={`bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent transition-all duration-1000`}>
                  {currentProduct.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-white">
                  {currentProduct.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {currentProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentProduct.gradient}`}></div>
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent`}>
                  {currentProduct.accuracy}
                </div>
                <div className="text-white/70 text-sm">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-white/70 text-sm">Premium Quality</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button className={`bg-gradient-to-r ${currentProduct.gradient} text-white hover:opacity-90 px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group`}>
                  <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 h-auto text-lg font-semibold rounded-xl backdrop-blur-md">
                  Get Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Product Showcase - Reduced Size */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Product Image - Reduced max width */}
              <div className="relative group">
                <img 
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full max-w-sm h-auto object-contain transition-all duration-1000 transform group-hover:scale-105 filter drop-shadow-2xl"
                />
                
                {/* Glowing Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentProduct.gradient} opacity-20 blur-3xl rounded-full scale-110 animate-pulse`}></div>
              </div>

              {/* Floating Elements - Adjusted positioning */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 animate-float">
                <Shield className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-3 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-float animation-delay-500">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">24/7</div>
                  <div className="text-white/70 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex gap-3">
            {heroProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 h-4 bg-white' 
                    : 'w-4 h-4 bg-white/30 hover:bg-white/50'
                }`}
              >
                {index === currentSlide && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentProduct.gradient} animate-pulse`}></div>
                )}
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path 
            d="M0,0 C150,80 350,20 500,60 C650,100 750,40 900,60 C1050,80 1200,20 1200,20 V120 H0 Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

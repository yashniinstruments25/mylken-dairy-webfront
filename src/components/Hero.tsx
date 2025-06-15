
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Star, Award, Shield, Droplets, Zap, Factory, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dairyProducts = [
    {
      id: 1,
      title: "Milk Analysis Technology",
      subtitle: "Precision Testing Solutions",
      description: "Advanced milk analyzers with real-time testing capabilities for fat, protein, and quality parameters. Get laboratory-grade results instantly on your farm.",
      image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1200&auto=format&fit=crop",
      icon: <TestTube className="w-8 h-8" />,
      stats: { accuracy: "99.9%", speed: "60 sec", certified: "ISO Approved" },
      gradient: "from-blue-600 via-cyan-500 to-blue-400",
      bgGradient: "from-blue-900/90 via-blue-800/80 to-cyan-700/70",
      features: ["Real-time Analysis", "Multi-parameter Testing", "Data Export", "Mobile Connectivity"]
    },
    {
      id: 2,
      title: "Dairy Processing Equipment",
      subtitle: "Complete Farm Solutions",
      description: "Industrial-grade milk processing and storage solutions including steel cans, pasteurizers, and automated milking systems for modern dairy operations.",
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1200&auto=format&fit=crop",
      icon: <Factory className="w-8 h-8" />,
      stats: { capacity: "5000L", efficiency: "95%", warranty: "5 Years" },
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      bgGradient: "from-green-900/90 via-emerald-800/80 to-teal-700/70",
      features: ["Food Grade Steel", "Automated Systems", "Easy Maintenance", "Scalable Solutions"]
    },
    {
      id: 3,
      title: "Smart Farm Automation",
      subtitle: "IoT-Enabled Dairy Management",
      description: "Revolutionary IoT solutions for modern dairy farms with automated monitoring, data analytics, and remote control capabilities for optimal milk production.",
      image: "https://images.unsplash.com/photo-1581092921461-eab98af79b0b?q=80&w=1200&auto=format&fit=crop",
      icon: <Zap className="w-8 h-8" />,
      stats: { monitoring: "24/7", efficiency: "+40%", connectivity: "Cloud Based" },
      gradient: "from-purple-600 via-pink-500 to-red-400",
      bgGradient: "from-purple-900/90 via-purple-800/80 to-pink-700/70",
      features: ["IoT Sensors", "Cloud Analytics", "Mobile App", "Predictive Maintenance"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dairyProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dairyProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dairyProducts.length) % dairyProducts.length);
  };

  const currentProduct = dairyProducts[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.bgGradient} transition-all duration-1000`}></div>
        
        {/* Animated Farm Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-24 h-24 border border-white/15 rounded-lg rotate-45 animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-40 left-32 w-40 h-40 border border-white/10 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 border-2 border-white/25 rounded-full animate-pulse animation-delay-300"></div>
        </div>

        {/* Floating Dairy Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float">
            <Droplets className="w-12 h-12 text-white/20" />
          </div>
          <div className="absolute top-3/4 right-1/3 transform translate-x-1/2 -translate-y-1/2 animate-float animation-delay-500">
            <Factory className="w-10 h-10 text-white/15" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Product Icon & Category */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center shadow-2xl`}>
                <div className="text-white">
                  {currentProduct.icon}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Premium Quality</span>
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider">
                  {currentProduct.subtitle}
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent transition-all duration-1000 block`}>
                  {currentProduct.title.split(' ')[0]}
                </span>
                <span className="text-white block">
                  {currentProduct.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                {currentProduct.description}
              </p>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {Object.entries(currentProduct.stats).map(([key, value], index) => (
                <div key={key} className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                  <div className="text-white/70 text-sm capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Product Features */}
            <div className="space-y-3">
              <h3 className="text-white/90 font-semibold text-lg">Key Features:</h3>
              <div className="grid grid-cols-2 gap-3">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentProduct.gradient}`}></div>
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/products">
                <Button className={`bg-gradient-to-r ${currentProduct.gradient} text-white hover:opacity-90 px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group`}>
                  <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Explore Solutions
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 h-auto text-lg font-semibold rounded-xl backdrop-blur-md">
                  Get Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative flex items-center justify-center">
            <div className="relative group">
              {/* Main Product Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="w-full max-w-lg h-auto object-cover transition-all duration-1000 transform group-hover:scale-105"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Product Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">Premium</span>
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 animate-float">
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="text-sm font-bold text-gray-800">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assured</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 animate-float animation-delay-500">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">24/7</div>
                  <div className="text-xs text-gray-600">Support Available</div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentProduct.gradient} opacity-20 blur-3xl rounded-3xl scale-110 animate-pulse`}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Carousel Controls */}
        <div className="flex justify-center items-center gap-8 mt-20">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Enhanced Slide Indicators */}
          <div className="flex gap-4">
            {dairyProducts.map((product, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-16 h-4 bg-white shadow-lg' 
                    : 'w-4 h-4 bg-white/40 hover:bg-white/60'
                }`}
              >
                {index === currentSlide && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentProduct.gradient} animate-pulse rounded-full`}></div>
                )}
                {index === currentSlide && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path 
            d="M0,0 C150,80 350,20 500,60 C650,100 750,40 900,60 C1050,80 1200,20 1200,20 V120 H0 Z" 
            fill="url(#waveGradient)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

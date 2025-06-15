
import React from 'react';
import { ArrowRight, CheckCircle, Star, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-mylken-light/30 to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Soft geometric shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-mylken-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-mylken-secondary/10 rounded-full blur-3xl animate-float animation-delay-500"></div>
        
        {/* Floating dairy icons */}
        <div className="absolute top-1/4 left-1/6 opacity-5 animate-float">
          <Droplets className="w-16 h-16 text-mylken-primary" />
        </div>
        <div className="absolute bottom-1/3 right-1/5 opacity-5 animate-float animation-delay-700">
          <Droplets className="w-12 h-12 text-mylken-secondary" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-mylken-primary/20 shadow-sm">
              <Star className="w-4 h-4 text-mylken-accent fill-current" />
              <span className="text-sm font-medium text-mylken-dark">Trusted by 500+ Dairy Farms</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-mylken-dark">
                Premium
                <span className="block text-mylken-primary">
                  Dairy Solutions
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your dairy operations with our cutting-edge equipment and technology. 
                From precision testing to automated processing.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                'ISO Certified Equipment',
                '24/7 Expert Support',
                'Advanced Technology'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-mylken-secondary" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Link to="/products">
                <Button 
                  size="xl" 
                  className="bg-mylken-primary hover:bg-mylken-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-mylken-primary/30 text-mylken-primary hover:bg-mylken-primary/5 hover:border-mylken-primary/50 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-mylken-primary/10">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading dairy companies</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-28 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Product Showcase */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <img 
                  src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=800&auto=format&fit=crop"
                  alt="Premium Dairy Equipment"
                  className="w-full max-w-md h-auto object-cover rounded-xl"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg border border-mylken-primary/10 animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mylken-primary">99.9%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg border border-mylken-primary/10 animate-float animation-delay-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mylken-secondary">5000+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-mylken-accent/20 blur-3xl rounded-3xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,40 V120 H0 Z" 
            fill="white"
            className="drop-shadow-sm"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

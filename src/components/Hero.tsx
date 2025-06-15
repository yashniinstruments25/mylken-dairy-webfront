
import React from 'react';
import { ArrowRight, CheckCircle, Star, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-mylken-light via-white to-mylken-light/50 overflow-hidden">
      {/* Animated Milk Droplets */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Droplets 
              className="text-mylken-primary/30" 
              size={12 + Math.random() * 8} 
            />
          </div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-mylken-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-mylken-secondary/25 rounded-full blur-3xl animate-float animation-delay-500"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-left animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-mylken-primary/20 shadow-sm animate-slide-in-left">
              <div className="w-2 h-2 bg-mylken-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-mylken-primary">Dairy Processing Innovation</span>
              <div className="flex items-center gap-1 ml-4 text-mylken-dark/70">
                <Star className="w-3 h-3 fill-current text-mylken-accent" />
                <span className="text-xs">Since 2005</span>
              </div>
            </div>

            {/* Main Heading with elegant animation */}
            <div className="space-y-6 animate-slide-in-left animation-delay-300">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-mylken-dark">
                Transform Your
                <span className="block text-mylken-primary relative mt-2">
                  Dairy Production
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-mylken-accent rounded-full animate-pulse"></div>
                </span>
                <span className="block text-mylken-secondary text-3xl lg:text-4xl mt-4">
                  With Precision & Excellence
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-mylken-dark/80 leading-relaxed max-w-2xl">
                We provide cutting-edge machinery that helps dairy farmers and processors maximize yield, ensure quality, and increase efficiency in every step of production.
              </p>
            </div>

            {/* Key Features with staggered animation */}
            <div className="flex flex-wrap gap-6 animate-slide-in-left animation-delay-500">
              {[
                'Advanced Technology',
                '24/7 Expert Support',
                'Proven Results'
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 animate-fade-in"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-mylken-primary" />
                  <span className="text-mylken-dark font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons with proper spacing and visibility */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-slide-in-left animation-delay-700 pb-8">
              <Link to="/products" className="inline-block">
                <Button 
                  size="xl" 
                  className="bg-mylken-primary text-white hover:bg-mylken-primary/90 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto"
                >
                  Browse Equipment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact" className="inline-block">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Enhanced Dashboard with better spacing */}
          <div className="relative flex items-center justify-center animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Container */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 animate-float">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-mylken-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-mylken-secondary rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Dashboard</div>
                </div>

                {/* Analytics Cards */}
                <div className="space-y-4">
                  {/* Production Efficiency Card */}
                  <div className="bg-gradient-to-r from-mylken-primary/10 to-mylken-secondary/10 rounded-2xl p-4 animate-fade-in animation-delay-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Production Efficiency</span>
                      <Droplets className="w-4 h-4 text-mylken-primary" />
                    </div>
                    <div className="text-2xl font-bold text-mylken-primary mb-2">96%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-mylken-primary h-2 rounded-full w-[96%] animate-pulse"></div>
                    </div>
                  </div>

                  {/* Quality Score Card */}
                  <div className="bg-gradient-to-r from-mylken-accent/20 to-mylken-accent/10 rounded-2xl p-4 animate-fade-in animation-delay-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Quality Score</span>
                      <Star className="w-4 h-4 text-mylken-accent fill-current" />
                    </div>
                    <div className="text-2xl font-bold text-mylken-dark mb-2">A+</div>
                    <div className="text-xs text-gray-500">Exceeds Standards</div>
                  </div>

                  {/* Equipment Status */}
                  <div className="bg-gradient-to-r from-mylken-secondary/10 to-mylken-secondary/5 rounded-2xl p-4 animate-fade-in animation-delay-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Equipment Status</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm text-mylken-secondary font-semibold">All Systems Operational</div>
                  </div>
                </div>
              </div>

              {/* Floating Success Metrics */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-mylken-primary/20 animate-float animation-delay-300">
                <div className="text-center">
                  <div className="text-lg font-bold text-mylken-primary">99.9%</div>
                  <div className="text-xs text-gray-600">Accuracy</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-mylken-secondary/20 animate-float animation-delay-500">
                <div className="text-center">
                  <div className="text-lg font-bold text-mylken-secondary">5000+</div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-mylken-primary/5 blur-3xl rounded-3xl scale-110 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,85 1200,45 1200,45 V120 H0 Z" 
            fill="white"
            className="drop-shadow-sm"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

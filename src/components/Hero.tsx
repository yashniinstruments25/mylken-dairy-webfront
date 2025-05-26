
import React from 'react';
import { ArrowRight, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-mylken-primary">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mylken-primary via-mylken-primary to-mylken-secondary opacity-90"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-mylken-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-mylken-light rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-mylken-accent rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Subtle wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px]">
          <path 
            d="M0,0 C150,90 350,0 500,80 C650,160 750,40 900,80 C1050,120 1200,30 1200,30 V120 H0 Z" 
            className="fill-white opacity-80"
          ></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
          <div className="space-y-6 md:w-1/2 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent inline-flex items-center text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2 animate-pulse"></span>
                Dairy Processing Innovation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Transform Your</span>
              <span className="block">Dairy <span className="text-mylken-accent">Production</span></span>
              <span className="block">With Precision</span>
            </h1>
            
            <p className="text-mylken-light text-lg md:text-xl max-w-2xl">
              We provide cutting-edge machinery that helps dairy farmers and processors 
              maximize yield, ensure quality, and increase efficiency in every step of production.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center gap-2 group">
                Browse Equipment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-mylken-light text-white hover:bg-mylken-light/10 hover:text-white px-6 py-6 h-auto backdrop-blur-sm">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Equipment showcase */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Main equipment image */}
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=687&auto=format&fit=crop"
                  alt="Modern Milk Analyzer"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1287&auto=format&fit=crop";
                  }}
                />
                <div className="p-4 bg-white">
                  <h3 className="text-mylken-primary font-semibold text-lg">Advanced Milk Analyzer</h3>
                  <p className="text-mylken-secondary text-sm">Precision testing for quality control</p>
                </div>
              </div>
              
              {/* Secondary equipment images */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-lg shadow-lg overflow-hidden border-4 border-white bg-white hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1603676286968-964a12c69eb7?q=80&w=1286&auto=format&fit=crop"
                  alt="Khoya Machine"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1226&auto=format&fit=crop";
                  }}
                />
              </div>
              
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-lg shadow-lg overflow-hidden border-4 border-white bg-white hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1568694309228-0b29e1c3a621?q=80&w=1584&auto=format&fit=crop"
                  alt="Dairy Production Line"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1287&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
            
            {/* Equipment features */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {["Precision Testing", "Rapid Analysis", "Quality Control"].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-mylken-light/20">
                  <div className="bg-mylken-accent/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Beaker className="text-mylken-accent h-5 w-5" />
                  </div>
                  <p className="text-white text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

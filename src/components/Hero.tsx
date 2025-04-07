
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-mylken-blue pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-white rounded-full"></div>
        <div className="absolute -left-10 bottom-20 w-60 h-60 bg-white rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium Dairy Industry Equipment
            </h1>
            <p className="text-mylken-cream text-lg md:text-xl max-w-lg">
              Mylken provides high-quality dairy products including milk analyzers, 
              khoya machines, milk cans, and more for your business needs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="bg-white text-mylken-blue hover:bg-mylken-cream transition-colors px-6 py-3 rounded-md font-medium flex items-center gap-2">
                Explore Products <ArrowRight size={18} />
              </a>
              <a href="#contact" className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-md font-medium">
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative ml-auto animate-fade-in animation-delay-300">
            <div className="bg-mylken-cream rounded-lg p-3 shadow-2xl">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Mylken Dairy Equipment" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-mylken-blue rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-white font-bold">30+</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-mylken-blue font-bold text-center">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Check, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const features = [
    "Premium quality dairy equipment",
    "Expert technical support",
    "Advanced technology integration",
    "Customized solutions for your dairy needs",
    "Reliable after-sales service",
    "Industry-leading warranty policies"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <Badge className="bg-mylken-cream text-mylken-blue hover:bg-mylken-cream/80">About Mylken</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-mylken-blue">
              Your Trusted Partner in Dairy Industry Equipment
            </h2>
            <p className="text-gray-600">
              For over 30 years, Mylken has been delivering superior quality dairy equipment to businesses 
              across the country. We specialize in milk analyzers, khoya machines, milk cans, and other 
              essential dairy industry tools designed for precision and efficiency.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, innovation, and customer satisfaction has made us a preferred 
              choice among dairy industry professionals seeking reliable and high-performing equipment.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-mylken-blue mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-flex items-center">
                Learn More About Us
              </a>
            </div>
          </div>
          
          {/* About Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="About Mylken" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 md:bottom-8 md:left-auto md:-right-8 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-mylken-blue rounded-full p-2">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-mylken-blue">98%</div>
                    <div className="text-sm text-gray-500">Customer Satisfaction</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xl font-bold text-mylken-blue">1000+</div>
                      <div className="text-sm text-gray-500">Clients</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-mylken-blue">30+</div>
                      <div className="text-sm text-gray-500">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

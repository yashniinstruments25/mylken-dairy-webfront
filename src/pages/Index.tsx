
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Sparkles, Zap, Droplets, Milk } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    return () => {
      document.body.classList.remove('page-transition');
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

// Enhanced Why Choose Us section with creative milk-themed animations
const WhyChooseUs = () => {
  const features = [
    {
      title: "Innovation First",
      description: "Our equipment incorporates the latest technology advances for better efficiency and results.",
      icon: <Sparkles className="text-yellow-400" size={24} />,
      animationDelay: 0
    },
    {
      title: "Agile Support",
      description: "Our startup team provides rapid, personalized technical assistance whenever needed.",
      icon: <Zap className="text-yellow-400" size={24} />,
      animationDelay: 200
    },
    {
      title: "Quality Engineering",
      description: "Every product is precision-engineered by our team of experts for reliable performance.",
      icon: <Shield className="text-yellow-400" size={24} />,
      animationDelay: 400
    }
  ];

  // Interactive milk animation on scroll
  useEffect(() => {
    // Create bubbling milk effect
    const createMilkBubble = (e: MouseEvent) => {
      const container = document.getElementById('why-choose-section');
      if (!container) return;
      
      const bubble = document.createElement('div');
      bubble.className = 'milk-bubble';
      
      // Calculate position relative to the container
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Style the bubble
      const size = Math.random() * 20 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.animationDuration = `${Math.random() * 3 + 1}s`;
      
      container.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 4000);
    };

    const whyChooseSection = document.getElementById('why-choose-section');
    if (whyChooseSection) {
      whyChooseSection.addEventListener('mousemove', (e) => {
        // Create bubble with 5% probability on each mousemove to avoid too many
        if (Math.random() < 0.05) {
          createMilkBubble(e);
        }
      });
    }

    return () => {
      if (whyChooseSection) {
        whyChooseSection.removeEventListener('mousemove', createMilkBubble);
      }
    };
  }, []);

  return (
    <section id="why-choose-section" className="py-20 overflow-hidden relative">
      {/* Milk-themed background - dairy farm pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-mylken-light to-white"></div>
        
        {/* Milk pattern background */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-24.57 0l-5.657 5.657 1.415 1.415L22.627 0h-3.885zm16.686 0l-7.07 7.07 1.414 1.415 9.9-9.9h-4.243zm-8.485 0l-8.485 8.485 1.414 1.414L24.97 0h-4.243zm-4.242 0L12.143 10.657l1.414 1.414L26.143 0h-4.244zm-8.485 0L2.144 12.97l1.414 1.415L16.97 0H8.485zm-4.243 0L0 8.485l1.414 1.414L11.314 0H4.243zm-2.83 2.829l-.828.828L.828 4.9 1.656 4.07 0 2.412v2.83zM0 5.657l1.414 1.414L5.657 2.83 4.243 1.414 0 5.657z' fill='%23fbbf24' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }}></div>
        
        {/* Milk bubbles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="milk-bubble absolute"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
        
        {/* Milk drops flowing on both sides */}
        <div className="absolute left-0 top-0 h-full overflow-hidden w-16">
          {[...Array(5)].map((_, i) => (
            <div
              key={`left-${i}`}
              className="absolute milk-drip"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.7
              }}
            ></div>
          ))}
        </div>
        
        <div className="absolute right-0 top-0 h-full overflow-hidden w-16">
          {[...Array(5)].map((_, i) => (
            <div
              key={`right-${i}`}
              className="absolute milk-drip"
              style={{
                right: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.7
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="relative">
              <Milk className="text-yellow-400 h-12 w-12 mx-auto animate-bounce" />
              
              {/* Interactive milk splash effect */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-12 h-2 bg-yellow-400/30 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400/50 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-4 relative inline-block">
            Why Choose Mylken
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-yellow-400 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As an innovative startup in the dairy industry, we combine cutting-edge technology with agile service to provide equipment that meets modern challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${feature.animationDelay}ms` }}
            >
              {/* Milk splash on hover */}
              <div className="absolute inset-0 bg-mylken-light/0 group-hover:bg-mylken-light/20 transition-all duration-500"></div>
              
              {/* Animated milk bottle effect */}
              <div className="absolute -right-16 -bottom-16 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 2L8 5V8C8 9.5 6 11 6 13V21H18V13C18 11 16 9.5 16 8V5L12 2Z" stroke="#0F172A" strokeWidth="2" fill="#FBBF24" fillOpacity="0.5" />
                  <path d="M12 2V5" stroke="#0F172A" strokeWidth="2" />
                  <path d="M10 15H14" stroke="#0F172A" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Floating milk drops */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute top-2 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-4 w-1.5 h-1.5 bg-yellow-400 rounded-full" style={{animationDelay: "0.3s", animation: "ping 2s infinite"}}></div>
              </div>
              
              {/* Feature icon with pulsing milk drop effect */}
              <div className="w-16 h-16 bg-mylken-light rounded-full flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0 group-hover:animate-bounce transition-all duration-300">
                {feature.icon}
                
                {/* Animated milk ring */}
                <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
                
                {/* Milk splash on hover */}
                <div className="absolute -right-1 -top-1 w-4 h-4 bg-white rounded-full scale-0 group-hover:scale-100 group-hover:animate-ping transition-all"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-mylken-dark mb-4 relative z-10">{feature.title}</h3>
              
              <div className="h-0.5 w-12 bg-yellow-400 mb-4 relative z-10"></div>
              
              <p className="text-gray-600 relative z-10">{feature.description}</p>
              
              {/* Animated milk drop */}
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Droplets className="text-yellow-400/40 h-20 w-20 transform -translate-y-1/2 group-hover:animate-bounce" style={{animationDuration: "3s"}} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative">
          <div className="absolute left-0 w-full h-0.5 bg-yellow-400/10"></div>
          <span className="relative bg-mylken-light inline-block px-6 -top-2.5">
            <Link to="/about" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 transition-colors">
              Learn more about our innovative approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </span>
        </div>
      </div>

      {/* Milk wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f5f5f5" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

// Call to Action section
const CallToAction = () => {
  return (
    <section className="py-16 bg-mylken-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Grow Your Dairy Business?
          </h2>
          <p className="text-mylken-light text-lg mb-8 animate-fade-in animation-delay-300">
            Partner with our innovative startup to revolutionize your operations with cutting-edge equipment
            and technology-driven solutions customized for your needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
            <Link to="/products">
              <Button className="bg-yellow-400 text-mylken-dark hover:bg-yellow-300 group px-6 py-6 h-auto">
                Explore Products
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border border-mylken-light text-white hover:bg-mylken-light/10 px-6 py-6 h-auto">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

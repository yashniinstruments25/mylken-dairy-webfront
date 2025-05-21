
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Sparkles, Zap, Droplets, Milk, Wheat, Sun } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Create bubble trail effect for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Create bubble trail at random intervals
      if (Math.random() > 0.9) {
        const bubble = document.createElement('div');
        bubble.className = 'milk-bubble-trail';
        
        // Random size
        const size = Math.random() * 20 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Position at cursor
        bubble.style.left = `${e.clientX}px`;
        bubble.style.top = `${e.clientY}px`;
        
        document.body.appendChild(bubble);
        
        // Remove after animation completes
        setTimeout(() => {
          document.body.removeChild(bubble);
        }, 2000);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.classList.remove('page-transition');
      document.removeEventListener('mousemove', handleMouseMove);
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

// Enhanced Why Choose Us section with dairy farm theme
const WhyChooseUs = () => {
  const features = [
    {
      title: "Innovation First",
      description: "Our equipment incorporates the latest technology advances for better efficiency and results.",
      icon: <Sparkles className="text-mylken-primary" size={24} />,
      emoji: "🚜",
      animationDelay: 0
    },
    {
      title: "Agile Support",
      description: "Our startup team provides rapid, personalized technical assistance whenever needed.",
      icon: <Zap className="text-mylken-primary" size={24} />,
      emoji: "👨‍🌾",
      animationDelay: 200
    },
    {
      title: "Quality Engineering",
      description: "Every product is precision-engineered by our team of experts for reliable performance.",
      icon: <Shield className="text-mylken-primary" size={24} />,
      emoji: "🧪",
      animationDelay: 400
    }
  ];

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Farm-themed background */}
      <div className="absolute inset-0 z-0">
        {/* Light background */}
        <div className="absolute inset-0 bg-gradient-to-br from-mylken-light to-white"></div>
        
        {/* Farm pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Animated farm elements */}
        <div className="absolute top-10 left-10 text-4xl dairy-float">🐄</div>
        <div className="absolute bottom-20 right-10 text-3xl dairy-float" style={{animationDelay: '2s'}}>🥛</div>
        <div className="absolute top-40 right-20 text-2xl dairy-float" style={{animationDelay: '4s'}}>🧀</div>
        <div className="absolute bottom-40 left-20 text-3xl dairy-float" style={{animationDelay: '6s'}}>🚜</div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="bg-mylken-primary/10 rounded-full p-5">
              <Milk className="text-mylken-primary h-12 w-12 mx-auto animate-bounce" />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-mylken-accent rounded-full opacity-70"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-4 relative inline-block">
            Why Choose Mylken
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-mylken-accent rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As an innovative dairy equipment provider, we combine cutting-edge technology with deep agricultural expertise to deliver solutions that boost productivity and quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-mylken-primary hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${feature.animationDelay}ms` }}
            >
              {/* Farm background patterns */}
              <div className="absolute inset-0 bg-mylken-light/0 group-hover:bg-mylken-light/20 transition-all duration-500"></div>
              <div className="group-hover:animate-milk-splash absolute -right-4 -bottom-4 w-24 h-24 bg-mylken-light/0 group-hover:bg-mylken-light/30 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              
              {/* Dairy farm element */}
              <div className="absolute top-3 right-3 text-2xl opacity-40 group-hover:opacity-70 transition-opacity">
                {feature.emoji}
              </div>
              
              <div className="w-16 h-16 bg-mylken-light rounded-full flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0">
                {feature.icon}
                <div className="absolute inset-0 border-4 border-mylken-primary/20 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-mylken-dark mb-4 relative z-10">{feature.title}</h3>
              
              <div className="h-0.5 w-12 bg-mylken-accent mb-4 relative z-10"></div>
              
              <p className="text-gray-600 relative z-10">{feature.description}</p>
              
              {/* Animated farm element on hover */}
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Droplets className="text-mylken-primary/40 h-20 w-20 transform -translate-y-1/2 group-hover:animate-bounce" style={{animationDuration: "3s"}} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative">
          <div className="absolute left-0 w-full h-0.5 bg-mylken-primary/10"></div>
          <span className="relative bg-mylken-light inline-block px-6 -top-2.5">
            <Link to="/about" className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary transition-colors">
              Learn more about our dairy equipment solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </span>
        </div>
      </div>

      {/* Farm-themed bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#EEF2F6" fill-opacity="0.8" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          
          {/* Farm elements on the wave */}
          <div className="absolute bottom-0 left-1/4 text-xl">🌾</div>
          <div className="absolute bottom-5 left-1/2 text-2xl">🐄</div>
          <div className="absolute bottom-10 right-1/4 text-xl">🥛</div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Call to Action section
const CallToAction = () => {
  return (
    <section className="py-16 bg-mylken-primary relative overflow-hidden">
      {/* Farm-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating farm elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 dairy-float">🚜</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20 dairy-float" style={{animationDelay: '3s'}}>🥛</div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block relative">
              <span className="text-5xl">🧪</span>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-mylken-accent rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Modernize Your Dairy Operation?
          </h2>
          <p className="text-mylken-light text-lg mb-8 animate-fade-in animation-delay-300">
            Partner with Mylken to revolutionize your dairy production with cutting-edge equipment
            and technology-driven solutions customized for your farm's unique needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
            <Link to="/products">
              <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light group px-6 py-6 h-auto">
                Explore Dairy Equipment
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border border-mylken-light text-white hover:bg-mylken-light/10 px-6 py-6 h-auto">
                Contact Our Specialists
              </Button>
            </Link>
          </div>
          
          {/* Farm-themed decorative elements */}
          <div className="mt-12 flex justify-center space-x-8 opacity-60">
            <div className="dairy-float text-3xl" style={{animationDelay: '1s'}}>🥛</div>
            <div className="dairy-float text-3xl" style={{animationDelay: '2s'}}>🧀</div>
            <div className="dairy-float text-3xl" style={{animationDelay: '3s'}}>🐄</div>
            <div className="dairy-float text-3xl" style={{animationDelay: '4s'}}>🚜</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

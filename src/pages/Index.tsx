import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Sparkles, Zap, Droplets, Milk, Beef, Leaf } from 'lucide-react';

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

// Enhanced Why Choose Us section with creative farm-themed animations
const WhyChooseUs = () => {
  const features = [
    {
      title: "Farm-to-Factory Innovation",
      description: "Our equipment incorporates the latest technology to preserve the freshness and quality of farm products.",
      icon: <Sparkles className="text-yellow-500" size={24} />,
      animationDelay: 0
    },
    {
      title: "Farmer-Focused Support",
      description: "Our dedicated team provides personalized technical assistance to dairy farmers whenever needed.",
      icon: <Zap className="text-yellow-500" size={24} />,
      animationDelay: 200
    },
    {
      title: "Superior Craftsmanship",
      description: "Every product is precision-engineered for the unique needs of modern dairy production.",
      icon: <Shield className="text-yellow-500" size={24} />,
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
    <section id="why-choose-section" className="py-20 overflow-hidden relative bg-gradient-to-b from-white to-green-50">
      {/* Farm-themed background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Decorative farm elements */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQuNjI3IDBsLjgzLjgyOC0xLjQxNSAxLjQxNUw1MS44IDBoMi44Mjd6TTUuMzczIDBsLS44My44MjhMNS45NiAyLjI0MyA4LjIgMEg1LjM3NHpNNDguOTcgMGwzLjY1NyAzLjY1Ny0xLjQxNCAxLjQxNEw0Ni4xNDMgMGgyLjgyOHpNMTEuMDMgMEw3LjM3MiAzLjY1NyA4Ljc4NyA1LjA3IDEzLjg1NyAwSDExLjAzem0zMi4yODQgMEw0OS44IDYuNDg1IDQ4LjM4NCA3LjlsLTcuOS03LjloMi44M3ptLTI0LjU3IDBsLTUuNjU3IDUuNjU3IDEuNDE1IDEuNDE1TDIyLjYyNyAwSDE4Ljc0NXptLTQuMjQzIDBMMi4xNDQgMTIuOTdsMS40MTQgMS40MTVMMTYuOTcgMEg4LjQ4NXptLTQuMjQzIDB6TTAgNS42NTdsMS40MTQgMS40MTRMNS42NTcgMi44MyA0LjI0MyAxLjQxNCAwIDUuNjU3eiIgZmlsbD0iIzY1YTMwZCIgZmlsbC1vcGFjaXR5PSIwLjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white/0"></div>
        
        {/* Abstract farm silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111,985.66,92.83Z" className="fill-green-900 opacity-5"></path>
          </svg>
        </div>
        
        {/* Cow silhouettes */}
        <div className="absolute bottom-10 left-1/4 w-20 h-12 opacity-20">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path d="M10,40 Q15,30 25,40 Q35,50 45,40 Q55,30 65,40 L65,55 L10,55 Z" fill="#4b5563"/>
            <circle cx="35" cy="30" r="10" fill="#4b5563"/>
            <path d="M25,30 L20,15 M45,30 L50,15" stroke="#4b5563" strokeWidth="3"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-1/4 w-24 h-16 opacity-20">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            <path d="M20,60 Q30,50 40,60 Q50,70 60,60 Q70,50 80,60 Q90,70 100,60 L100,75 L20,75 Z" fill="#4b5563"/>
            <circle cx="50" cy="40" r="15" fill="#4b5563"/>
            <path d="M40,40 L35,20 M60,40 L65,20" stroke="#4b5563" strokeWidth="3"/>
          </svg>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full animate-ping"></div>
              <div className="relative bg-yellow-400 rounded-full p-3 z-10">
                <Milk className="text-white h-10 w-10" />
              </div>
              
              {/* Interactive milk splash effect */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
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
            As an innovative partner to dairy farmers, we combine cutting-edge technology with deep agricultural knowledge to provide equipment that meets modern farming challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden"
              style={{ animationDelay: `${feature.animationDelay}ms` }}
            >
              {/* Farm field background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOGg2djZoLTZ2NmgtNnY2aDZ2LTZoNnY2aC02djZoNnYtNmg2djZoLTZ2NmgyNGMwLTkuOTQtOC4wNi0xOC0xOC0xOC05Ljk0IDAtMTgtOC4wNi0xOC0xOGg2eiIgZmlsbD0iIzY1YTMwZCIvPjxwYXRoIGQ9Ik0zMCAzMGgtNnYtNmgtNnY2aC02djZoNnYtNmg2djZoLTZ2Nmg2di02aDZ2LTZ6IiBmaWxsPSIjNjVhMzBkIi8+PC9nPjwvc3ZnPg==')] group-hover:opacity-10 transition-opacity"></div>
              
              {/* Farm scene overlay */}
              <div className="absolute inset-0 bg-green-50/0 group-hover:bg-green-50/20 transition-all duration-500"></div>
              
              {/* Farm-themed icon with milk drop effect */}
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0 group-hover:bg-yellow-100 transition-all duration-300">
                {feature.icon}
                
                {/* Animated milk ring */}
                <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
                
                {/* Milk splash on hover */}
                <div className="absolute -right-1 -top-1 w-4 h-4 bg-white rounded-full scale-0 group-hover:scale-100 group-hover:animate-ping transition-all"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-mylken-dark mb-4 relative z-10">{feature.title}</h3>
              
              <div className="h-0.5 w-12 bg-yellow-400 mb-4 relative z-10"></div>
              
              <p className="text-gray-600 relative z-10">{feature.description}</p>
              
              {/* Farm element animations */}
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {index === 0 ? (
                  <Beef className="text-green-600/20 h-20 w-20 transform -translate-y-1/2 group-hover:animate-bounce" style={{animationDuration: "3s"}} />
                ) : index === 1 ? (
                  <Droplets className="text-blue-400/20 h-20 w-20 transform -translate-y-1/2 group-hover:animate-bounce" style={{animationDuration: "2.5s"}} />
                ) : (
                  <Leaf className="text-green-500/20 h-20 w-20 transform -translate-y-1/2 group-hover:animate-bounce" style={{animationDuration: "3.5s"}} />
                )}
              </div>
              
              {/* Interactive milk drops */}
              <div className="absolute top-0 right-0 w-20 h-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 right-6 w-2 h-2 bg-white rounded-full milk-drop transform rotate-225deg animate-ping"></div>
                <div className="absolute top-8 right-10 w-1.5 h-1.5 bg-white rounded-full milk-drop transform rotate-225deg" style={{animationDelay: "0.3s", animation: "milk-drop-fall 3s infinite"}}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative">
          <div className="absolute left-0 w-full h-0.5 bg-yellow-400/10"></div>
          <span className="relative bg-white inline-block px-6 -top-2.5">
            <Link to="/about" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 transition-colors">
              Learn more about our farming innovations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </span>
        </div>
      </div>

      {/* Grass and field at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#d9f99d" fillOpacity="0.3" d="M0,64L120,69.3C240,75,480,85,720,80C960,75,1200,53,1320,42.7L1440,32L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

// Call to Action section
const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 relative overflow-hidden">
      {/* Pastoral background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Sun rays */}
        <div className="absolute right-0 top-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        
        {/* Fields */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px]">
            <path d="M0,0 C150,80 350,30 500,60 C650,90 750,40 900,70 C1050,100 1200,50 1200,50 V120 H0 Z" className="fill-green-800 opacity-30"></path>
          </svg>
        </div>
        
        {/* Cow silhouettes */}
        <div className="absolute bottom-10 left-20 w-32 opacity-30">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path d="M10,40 Q15,30 25,40 Q35,50 45,40 Q55,30 65,40 L65,55 L10,55 Z" fill="#fff"/>
            <circle cx="35" cy="30" r="10" fill="#fff"/>
          </svg>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Enhance Your Dairy Farm?
          </h2>
          <p className="text-green-100 text-lg mb-8 animate-fade-in animation-delay-300">
            Partner with our innovative team to revolutionize your operations with cutting-edge equipment
            and farm-focused solutions customized for your dairy needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
            <Link to="/products">
              <Button className="bg-yellow-400 text-mylken-dark hover:bg-yellow-300 group px-6 py-6 h-auto">
                Explore Equipment
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border border-yellow-400 text-white hover:bg-yellow-400/10 px-6 py-6 h-auto">
                Contact Our Farm Specialists
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative grass blades */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" className="w-full">
          <path fill="#ffffff" fillOpacity="0.2" d="M0,0L40,5.3C80,11,160,21,240,26.7C320,32,400,32,480,32C560,32,640,32,720,26.7C800,21,880,11,960,16C1040,21,1120,43,1200,48C1280,53,1360,43,1400,37.3L1440,32L1440,70L1400,70C1360,70,1280,70,1200,70C1120,70,1040,70,960,70C880,70,800,70,720,70C640,70,560,70,480,70C400,70,320,70,240,70C160,70,80,70,40,70L0,70Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Index;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

// Why Choose Us section
const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Our equipment is built with high-grade materials ensuring durability and consistent performance.",
      icon: "✓"
    },
    {
      title: "Technical Support",
      description: "Get expert assistance from our technical team whenever you need it.",
      icon: "✓"
    },
    {
      title: "Precision Engineering",
      description: "Every product is precision-engineered for accurate results and efficient operations.",
      icon: "✓"
    },
    {
      title: "Industry Compliant",
      description: "All our equipment meets strict industry standards and regulatory requirements.",
      icon: "✓"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-mylken-light to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-4 relative inline-block">
            Why Choose Mylken
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-mylken-secondary rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With decades of experience in the dairy industry, we provide equipment that combines innovation with reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-mylken-primary hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-mylken-light rounded-full flex items-center justify-center text-mylken-primary text-xl font-bold mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-mylken-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
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
        <div className="absolute right-0 top-0 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Upgrade Your Dairy Operations?
          </h2>
          <p className="text-mylken-light text-lg mb-8 animate-fade-in animation-delay-300">
            Discover how our premium dairy equipment can improve your productivity, 
            efficiency, and product quality. Our specialists are ready to help you 
            find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
            <Link to="/products">
              <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light group px-6 py-6 h-auto">
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

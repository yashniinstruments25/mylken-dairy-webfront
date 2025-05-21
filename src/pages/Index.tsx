
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Beaker, Zap, Droplets } from 'lucide-react';

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

// Professional Why Choose Us section focused on machinery
const WhyChooseUs = () => {
  const features = [
    {
      title: "Advanced Technology",
      description: "Our equipment incorporates the latest technological advances for better efficiency and results.",
      icon: <Beaker className="text-mylken-primary" size={24} />,
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop",
      alt: "Advanced Milk Testing Equipment"
    },
    {
      title: "Expert Support",
      description: "Our specialized team provides rapid, personalized technical assistance whenever needed.",
      icon: <Zap className="text-mylken-primary" size={24} />,
      image: "https://images.unsplash.com/photo-1581092921461-eab98af79b0b?q=80&w=1770&auto=format&fit=crop",
      alt: "Technical Support Team"
    },
    {
      title: "Precision Engineering",
      description: "Every product is precision-engineered by our team of experts for reliable performance.",
      icon: <Shield className="text-mylken-primary" size={24} />,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1770&auto=format&fit=crop",
      alt: "Precision Engineering Machinery"
    }
  ];

  return (
    <section className="py-16 overflow-hidden relative bg-mylken-light/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="bg-mylken-primary/10 rounded-full p-5">
              <Droplets className="text-mylken-primary h-12 w-12 mx-auto" />
            </div>
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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Feature image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=687&auto=format&fit=crop";
                  }}
                />
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-mylken-light rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-mylken-dark mb-2">{feature.title}</h3>
                <div className="h-0.5 w-12 bg-mylken-accent mb-4"></div>
                <p className="text-gray-600">{feature.description}</p>
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
    </section>
  );
};

// Enhanced Call to Action section with machinery focus
const CallToAction = () => {
  return (
    <section className="py-16 bg-mylken-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-72 h-72 bg-mylken-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-mylken-secondary opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="md:flex items-center justify-between gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Dairy Operation?
            </h2>
            <p className="text-mylken-light text-lg mb-8 max-w-lg">
              Partner with Mylken to revolutionize your dairy production with cutting-edge equipment
              and technology-driven solutions customized for your farm's unique needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
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
          </div>
          
          {/* Equipment imagery */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop"
                  alt="Milk Testing Equipment"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=687&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1598233847491-f16487adee2f?q=80&w=1776&auto=format&fit=crop"
                  alt="Dairy Processing"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1287&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab98af79b0b?q=80&w=1770&auto=format&fit=crop"
                  alt="Quality Control Lab"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '16/9' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1770&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/ProductsSection';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for Products Page */}
        <section className="bg-mylken-primary pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Our Product Range
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Premium Dairy Industry Equipment
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                Discover our complete range of high-quality dairy equipment designed for precision, 
                efficiency, and reliability in modern dairy operations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Extended Products Section */}
        <ProductsSection />
        
        {/* Additional Products Info */}
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-mylken-light/50 p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-mylken-dark text-xl font-bold">Custom Solutions</h3>
                <p className="mt-2 text-gray-600">
                  We offer customized equipment tailored to your specific dairy operation requirements.
                </p>
                <a href="#" className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary mt-4 font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="bg-mylken-light/50 p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-mylken-dark text-xl font-bold">Installation Services</h3>
                <p className="mt-2 text-gray-600">
                  Professional installation and setup for all our equipment by trained technicians.
                </p>
                <a href="#" className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary mt-4 font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="bg-mylken-light/50 p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-mylken-dark text-xl font-bold">Maintenance Plans</h3>
                <p className="mt-2 text-gray-600">
                  Regular maintenance packages to ensure your equipment operates at peak efficiency.
                </p>
                <a href="#" className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary mt-4 font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

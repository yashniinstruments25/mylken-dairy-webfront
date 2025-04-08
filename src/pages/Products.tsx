
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/ProductsSection';
import { ArrowRight, Award, Settings, Wrench, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        
        {/* Product Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Products</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our dairy equipment combines innovative technology, superior craftsmanship, and decades of industry expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Award className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Premium Quality</h3>
                <p className="mt-3 text-gray-600">
                  Manufactured using high-grade stainless steel and advanced components that ensure durability and long-term performance.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Settings className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Technological Innovation</h3>
                <p className="mt-3 text-gray-600">
                  Incorporating the latest advancements in dairy technology for improved accuracy, efficiency, and productivity.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Easy Maintenance</h3>
                <p className="mt-3 text-gray-600">
                  Designed for simple cleaning and maintenance, saving time and reducing operational costs.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Clock className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Efficiency & Speed</h3>
                <p className="mt-3 text-gray-600">
                  Our equipment optimizes processing time while maintaining the highest quality standards for your dairy products.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Shield className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Compliance Standards</h3>
                <p className="mt-3 text-gray-600">
                  All products meet and exceed international food safety and quality standards required in the dairy industry.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-accent/10 flex items-center justify-center mb-4">
                  <Settings className="text-mylken-accent" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Customization Options</h3>
                <p className="mt-3 text-gray-600">
                  Tailored solutions to meet your specific operational requirements and production capacity needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Extended Products Section */}
        <ProductsSection />
        
        {/* Technical Support Section */}
        <section className="py-16 bg-mylken-light/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-mylken-dark mb-6">Expert Technical Support</h2>
                <p className="text-gray-600 mb-4">
                  Our team of experienced technicians provides comprehensive support for all our products:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Installation & Setup</h4>
                      <p className="text-gray-600">Professional installation and configuration by certified technicians</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Operator Training</h4>
                      <p className="text-gray-600">Comprehensive training for your staff on optimal equipment operation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Maintenance Plans</h4>
                      <p className="text-gray-600">Scheduled maintenance to ensure peak performance and longevity</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">24/7 Technical Support</h4>
                      <p className="text-gray-600">Round-the-clock assistance for urgent technical issues</p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-8 bg-mylken-primary text-white hover:bg-mylken-secondary">
                  Contact Support Team <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/images/dairy-technician.jpg" 
                    alt="Dairy Equipment Technical Support" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg w-40 hidden md:block">
                  <p className="text-mylken-primary font-bold">15+ Years</p>
                  <p className="text-sm text-gray-600">Service Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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

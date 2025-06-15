
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScientificProductsSection from '@/components/ScientificProductsSection';
import { ArrowRight, Microscope, FlaskConical, TestTube, Binary, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScientificProducts = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for Scientific Products Page */}
        <section className="bg-mylken-primary pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Laboratory Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Advanced Scientific & Lab Equipment
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                Precision instruments and laboratory equipment for research, quality control, and scientific analysis
              </p>
            </div>
          </div>
        </section>
        
        {/* Product Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Scientific Equipment</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our laboratory instruments combine precision engineering, reliable technology, and industry-leading accuracy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Microscope className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Precision Engineered</h3>
                <p className="mt-3 text-gray-600">
                  Manufactured to strict tolerances with premium materials for accurate, consistent results in laboratory settings.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <FlaskConical className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Research Grade</h3>
                <p className="mt-3 text-gray-600">
                  Designed for research institutions and quality laboratories that demand the highest levels of performance.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <TestTube className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Calibration Services</h3>
                <p className="mt-3 text-gray-600">
                  Regular calibration and maintenance services ensure your equipment maintains accuracy and reliability.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Binary className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Digital Integration</h3>
                <p className="mt-3 text-gray-600">
                  Modern interfaces and data management systems for seamless integration with your laboratory workflow.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-primary/10 flex items-center justify-center mb-4">
                  <Shield className="text-mylken-primary" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Compliance Certified</h3>
                <p className="mt-3 text-gray-600">
                  All products meet international standards and regulations for laboratory and scientific equipment.
                </p>
              </div>
              
              <div className="bg-mylken-light/30 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-mylken-accent/10 flex items-center justify-center mb-4">
                  <ArrowRight className="text-mylken-accent" />
                </div>
                <h3 className="text-xl font-semibold text-mylken-dark">Training & Support</h3>
                <p className="mt-3 text-gray-600">
                  Comprehensive training and ongoing technical support for optimal utilization of all equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Extended Products Section */}
        <ScientificProductsSection />
        
        {/* Technical Support Section */}
        <section className="py-16 bg-mylken-light/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-mylken-dark mb-6">Scientific Technical Support</h2>
                <p className="text-gray-600 mb-4">
                  Our team of specialists provides comprehensive support for all scientific equipment:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Expert Installation</h4>
                      <p className="text-gray-600">Professional setup and calibration by qualified technicians</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Method Development</h4>
                      <p className="text-gray-600">Assistance with protocol development and optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Regular Calibration</h4>
                      <p className="text-gray-600">Scheduled maintenance to ensure accuracy and compliance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mylken-primary flex items-center justify-center text-white mr-3 mt-1 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-mylken-dark">Technical Consultation</h4>
                      <p className="text-gray-600">Expert advice for equipment selection and laboratory setup</p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-8 bg-mylken-primary text-white hover:bg-mylken-secondary">
                  Contact Scientific Support <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/images/lab-technician.jpg" 
                    alt="Scientific Equipment Technical Support" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg w-40 hidden md:block">
                  <p className="text-mylken-primary font-bold">ISO 9001</p>
                  <p className="text-sm text-gray-600">Certified Support</p>
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
                <h3 className="text-mylken-dark text-xl font-bold">Method Development</h3>
                <p className="mt-2 text-gray-600">
                  We help develop customized testing methods specific to your laboratory requirements.
                </p>
                <a href="#" className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary mt-4 font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="bg-mylken-light/50 p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-mylken-dark text-xl font-bold">Equipment Validation</h3>
                <p className="mt-2 text-gray-600">
                  Expert validation services to ensure your equipment meets regulatory standards.
                </p>
                <a href="#" className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary mt-4 font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="bg-mylken-light/50 p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-mylken-dark text-xl font-bold">Lab Design Services</h3>
                <p className="mt-2 text-gray-600">
                  Professional laboratory design and setup services for optimal workflow and efficiency.
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

export default ScientificProducts;

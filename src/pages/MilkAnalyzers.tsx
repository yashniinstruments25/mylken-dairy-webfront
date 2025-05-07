
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beaker, Milk, Factory } from 'lucide-react';

const MilkAnalyzers = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const analyzers = [
    {
      id: 'ultrasonic-milk-analyzer',
      name: 'Ultrasonic Milk Analyzer',
      image: '/images/milk-analyzer-1.jpg',
      description: 'High-precision analyzer for fat, protein, density, lactose, and water content in milk.',
      features: ['Fast analysis: 40 seconds', 'Multiple parameters', 'Self-cleaning system'],
    },
    {
      id: 'portable-milk-tester',
      name: 'Portable Milk Tester',
      image: '/images/milk-analyzer-2.jpg',
      description: 'Compact field device for rapid quality testing at collection points.',
      features: ['Battery operated', 'Lightweight design', 'Simple operation'],
    },
    {
      id: 'advanced-multiparameter-analyzer',
      name: 'Advanced Multiparameter Analyzer',
      image: '/images/milk-analyzer-3.jpg',
      description: 'Laboratory-grade milk analysis system with comprehensive testing capabilities.',
      features: ['15+ parameters tested', 'Cloud data storage', 'Industry 4.0 compatible'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-mylken-primary to-mylken-primary/80 pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Precision Testing Equipment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Milk Analyzers
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                State-of-the-art analyzers for precise measurement of milk composition and quality.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyzers.map((analyzer, index) => (
                <div key={analyzer.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-mylken-light hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={analyzer.image} 
                      alt={analyzer.name} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mylken-dark mb-2">{analyzer.name}</h3>
                    <p className="text-gray-600 mb-4">{analyzer.description}</p>
                    <ul className="mb-6 space-y-2">
                      {analyzer.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/products/milk-analyzers/${analyzer.id}`}>
                      <Button variant="primary" className="w-full">
                        View Details <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Analyzers */}
        <section className="py-16 bg-mylken-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Milk Analyzers?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our analyzers are designed to provide accurate results with minimal effort, helping you ensure product quality.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Beaker className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">High Precision</h3>
                <p className="text-gray-600">Our analyzers deliver accuracy up to 99.8% with consistent and reliable results every time.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Factory className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Integration</h3>
                <p className="text-gray-600">Seamlessly connect with your existing processes and software systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Milk className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Rapid Analysis</h3>
                <p className="text-gray-600">Get comprehensive results in seconds, increasing throughput and productivity.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-mylken-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade Your Milk Testing?</h2>
              <p className="text-mylken-light text-lg mb-8">
                Contact our team to find the perfect analyzer for your dairy business needs.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Request Consultation
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="milk" size="lg">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MilkAnalyzers;

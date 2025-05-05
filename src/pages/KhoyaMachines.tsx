
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Flame, Milk } from 'lucide-react';

const KhoyaMachines = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const machines = [
    {
      id: 'automatic-khoya-plant',
      name: 'Automatic Khoya Making Plant',
      image: '/images/khoya-machine-1.jpg',
      description: 'Fully automatic system for continuous khoya production with minimal manual intervention.',
      features: ['Production: 100-500 kg/hr', 'Automatic stirring', 'CIP system included'],
    },
    {
      id: 'semi-automatic-khoya',
      name: 'Semi-Automatic Khoya Machine',
      image: '/images/khoya-machine-2.jpg',
      description: 'Versatile equipment for medium-scale khoya production with some manual control.',
      features: ['Production: 50-150 kg/hr', 'Energy efficient', 'Compact design'],
    },
    {
      id: 'traditional-khoya-kettle',
      name: 'Traditional Khoya Processing Kettle',
      image: '/images/khoya-machine-3.jpg',
      description: 'Enhanced traditional design with modern heating and mixing systems.',
      features: ['Authentic texture', 'Consistent quality', 'Easy maintenance'],
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
                Traditional Dairy Processing
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Khoya Making Machines
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                Modern equipment for producing traditional Indian khoya with consistency and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {machines.map((machine) => (
                <div key={machine.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-mylken-light hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={machine.image} 
                      alt={machine.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mylken-dark mb-2">{machine.name}</h3>
                    <p className="text-gray-600 mb-4">{machine.description}</p>
                    <ul className="mb-6 space-y-2">
                      {machine.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-mylken-accent mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/products/khoya-machines/${machine.id}`}>
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

        {/* Features Section */}
        <section className="py-16 bg-mylken-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Key Benefits of Our Khoya Making Machines</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We combine traditional processes with modern technology to create machines that deliver perfect results.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Flame className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Energy Efficient</h3>
                <p className="text-gray-600">Our machines use advanced heating systems that reduce energy consumption by up to 30%.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Factory className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Consistent Quality</h3>
                <p className="text-gray-600">Precise temperature controls and automated stirring ensure the same high quality in every batch.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Milk className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Higher Yield</h3>
                <p className="text-gray-600">Get more khoya from the same amount of milk with our optimized processing technology.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-mylken-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Modernize Your Khoya Production?</h2>
              <p className="text-mylken-light text-lg mb-8">
                Talk to our experts about finding the right khoya making solution for your business.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Get a Custom Quote
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="milk" size="lg">
                    Explore All Products
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

export default KhoyaMachines;

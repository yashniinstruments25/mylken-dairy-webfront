
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Beaker, Milk, Factory, Filter, Search, IndianRupee } from 'lucide-react';

const MilkAnalyzers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productCategories = {
    'ultra-scan-basic': {
      name: 'Ultra Scan Basic Series',
      description: 'Essential milk analysis with fast results',
      products: [
        { name: 'Ultra Scan Kurien Milk Analyzer(30 second)', price: 32000, features: ['30-second analysis', 'Basic parameters', 'User-friendly'] },
        { name: 'Ultra Scan Kurien Twinsonic Milk Analyzer', price: 38000, features: ['Twin sensor technology', 'Enhanced accuracy', 'Compact design'] },
        { name: 'Ultra Scan Swift Milk Analyzer Fast Sensor', price: 40000, features: ['Fast sensor technology', 'Quick results', 'Reliable performance'] },
        { name: 'Ultra Scan Swift Twinsonic Milk Analyzer', price: 45000, features: ['Twin sensor system', 'Swift processing', 'Professional grade'] }
      ]
    },
    'ultra-scan-thermal': {
      name: 'Ultra Scan with Thermal Printer',
      description: 'Advanced analyzers with built-in printing capability',
      products: [
        { name: 'Ultra Scan Kurien With Thermal Printer', price: 36000, features: ['Built-in printer', 'Instant reports', 'Data logging'] },
        { name: 'Ultra Scan Kurien Twinsonic With Thermal Printer', price: 41500, features: ['Thermal printing', 'Twin sensor tech', 'Report generation'] },
        { name: 'Ultra Scan Swift With Thermal Printer', price: 43500, features: ['Swift analysis', 'Thermal printer', 'Professional reports'] },
        { name: 'Ultra Scan Swift Twinsonic With Thermal Printer', price: 49000, features: ['Advanced printing', 'Dual sensors', 'Complete solution'] }
      ]
    },
    'ultra-scan-iot': {
      name: 'Ultra Scan IoT Series',
      description: 'Smart analyzers with IoT connectivity and cloud integration',
      products: [
        { name: 'Ultra Scan Kurien Milk Analyzer With IoT', price: 42500, features: ['IoT connectivity', 'Cloud data sync', 'Remote monitoring'] },
        { name: 'Ultra Scan Kurien Twinsonic With IoT', price: 48000, features: ['IoT enabled', 'Real-time data', 'Smart analytics'] },
        { name: 'Ultra Scan Swift Milk Analyzer With IoT', price: 50000, features: ['IoT integration', 'Data analytics', 'Mobile app'] },
        { name: 'Ultra Scan Swift Twinsonic Milk Analyzer With IoT', price: 53500, features: ['Complete IoT solution', 'Advanced analytics', 'Cloud storage'] }
      ]
    },
    'ultra-scan-premium': {
      name: 'Ultra Scan Premium Series',
      description: 'Top-tier analyzers with thermal printer and IoT capabilities',
      products: [
        { name: 'Ultra Scan Kurien With Thermal Printer & IoT', price: 46500, features: ['Thermal printer', 'IoT connectivity', 'Complete package'] },
        { name: 'Ultra Scan Kurien Twinsonic With Thermal Printer & IoT', price: 52000, features: ['Premium features', 'All-in-one solution', 'Professional grade'] },
        { name: 'Ultra Scan Swift With Thermal Printer & IoT', price: 54000, features: ['Swift processing', 'IoT + Printing', 'Advanced reporting'] },
        { name: 'Ultra Scan Swift Twinsonic with Thermal Printer & IoT', price: 60000, features: ['Ultimate solution', 'Complete package', 'Enterprise grade'] }
      ]
    },
    'specialized': {
      name: 'Specialized Analyzers',
      description: 'Specialized milk analyzers for specific applications',
      products: [
        { name: 'Ultra Scan Kurien Milk Analyzer with Ph', price: 39000, features: ['pH measurement', 'Acidity testing', 'Quality control'] },
        { name: 'Ultra Scan Kurien with Ph & Conductivity', price: 41000, features: ['pH & conductivity', 'Comprehensive testing', 'Quality assurance'] }
      ]
    },
    'mobile-units': {
      name: 'Mobile Collection Units',
      description: 'Portable solutions for field collection and analysis',
      products: [
        { name: 'Ultra Scan Swift IOT Bond POS', price: 82500, features: ['POS integration', 'IoT connectivity', 'Field ready'] },
        { name: 'Mobile Automatic Milk Collection Unit (Swift mAMCU POS)', price: 81000, features: ['Automatic collection', 'POS system', 'Mobile solution'] },
        { name: 'Ultra Scan Swift IOT Bond', price: 67000, features: ['IoT enabled', 'Portable design', 'Bond connectivity'] },
        { name: 'Mobile Automatic Milk Collection Unit (Swift mAMCU)', price: 64500, features: ['Automatic collection', 'Mobile unit', 'Efficient processing'] },
        { name: 'Ultra Scan Kurien IOT Bond POS', price: 75000, features: ['Kurien series', 'IoT + POS', 'Complete solution'] },
        { name: 'Mobile Automatic Milk Collection Unit (mAMCU POS Kurien)', price: 73500, features: ['Kurien technology', 'POS integration', 'Mobile collection'] },
        { name: 'Ultra Scan Kurien IOT Bond', price: 60000, features: ['IoT connectivity', 'Bond system', 'Portable'] },
        { name: 'Mobile Automatic Milk Collection Unit (mAMCU Kurien)', price: 58500, features: ['Kurien series', 'Automatic collection', 'Mobile'] }
      ]
    },
    'accessories': {
      name: 'Testing Equipment & Accessories',
      description: 'Essential tools and accessories for milk testing',
      products: [
        { name: 'Data Processor Milk Collection Unit', price: 6000, features: ['Data processing', 'Collection interface', 'System integration'] },
        { name: 'Electronic Weighing Scale 100Kg', price: 8500, features: ['100kg capacity', 'Digital display', 'Precision weighing'] },
        { name: 'Electronic Weighing Scale 200Kg', price: 15000, features: ['200kg capacity', 'Heavy duty', 'Professional grade'] },
        { name: 'Digital Ultrasonic Stirrer', price: 4000, features: ['Ultrasonic mixing', 'Digital control', 'Sample preparation'] },
        { name: 'Ultra Scan Kurien Android Bond', price: 76500, features: ['Android interface', 'Touch screen', 'Modern UI'] }
      ]
    },
    'testing-kits': {
      name: 'Testing Kits & Solutions',
      description: 'Comprehensive testing solutions and maintenance products',
      products: [
        { name: 'Milk Butyrometer 0-8%', price: 100, features: ['Fat measurement', '0-8% range', 'Standard testing'] },
        { name: 'Milk Butyrometer 0-10% ISI Mark', price: 100, features: ['ISI certified', '0-10% range', 'Quality assured'] },
        { name: 'Milk Butyrometer 0-10% Double Tested', price: 100, features: ['Double tested', 'Enhanced accuracy', 'Reliable results'] },
        { name: 'Milk Butyrometer 0-10% for Milk analyzer calibration and Lab purpose', price: 2500, features: ['Calibration tool', 'Lab grade', 'Precision instrument'] },
        { name: 'Lactodaily Milk Analyzer Cleaning Solution', price: 150, features: ['Daily cleaning', 'Maintenance solution', 'Equipment care'] },
        { name: 'Lactoweekly Milk Analyzer Cleaning Solution', price: 150, features: ['Weekly cleaning', 'Deep maintenance', 'System care'] }
      ]
    }
  };

  const categories = Object.keys(productCategories);
  const filteredProducts = selectedCategory === 'all' 
    ? Object.values(productCategories).flatMap(cat => cat.products.map(p => ({...p, category: cat.name})))
    : productCategories[selectedCategory]?.products || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-mylken-primary to-mylken-primary/80 pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Professional Milk Analysis Equipment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Complete Range of Milk Analyzers
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                From basic analyzers to IoT-enabled systems with thermal printing and mobile collection units
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant={selectedCategory === 'all' ? "default" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full"
              >
                <Filter size={16} className="mr-2" />
                All Products
              </Button>
              {categories.map((cat) => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full text-sm"
                >
                  {productCategories[cat].name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-mylken-light/30">
          <div className="container-custom">
            {selectedCategory === 'all' ? (
              // Show all categories
              <div className="space-y-16">
                {Object.entries(productCategories).map(([key, category]) => (
                  <div key={key}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-mylken-dark mb-2">{category.name}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.products.slice(0, 6).map((product, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                              <Badge className="bg-mylken-primary text-white whitespace-nowrap ml-2">
                                <IndianRupee size={12} />
                                {product.price.toLocaleString()}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1">
                              {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 pt-4 border-t flex justify-between items-center">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm" className="bg-mylken-primary text-white">
                                Get Quote
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    {category.products.length > 6 && (
                      <div className="text-center mt-6">
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedCategory(key)}
                          className="bg-white"
                        >
                          View All {category.name} <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Show selected category
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-mylken-dark mb-2">
                    {productCategories[selectedCategory]?.name}
                  </h2>
                  <p className="text-gray-600">
                    {productCategories[selectedCategory]?.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                          <Badge className="bg-mylken-primary text-white whitespace-nowrap ml-2">
                            <IndianRupee size={12} />
                            {product.price.toLocaleString()}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t flex justify-between items-center">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-mylken-primary text-white">
                            Get Quote
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Analyzers */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Milk Analyzers?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our analyzers are designed to provide accurate results with minimal effort, helping you ensure product quality.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Beaker className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">High Precision</h3>
                <p className="text-gray-600">Our analyzers deliver accuracy up to 99.8% with consistent and reliable results every time.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Factory className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Integration</h3>
                <p className="text-gray-600">Seamlessly connect with your existing processes and software systems.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md">
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

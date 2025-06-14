
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Beaker, Milk, Factory, Filter, Search, IndianRupee, Zap, Wifi, Printer } from 'lucide-react';

const MilkAnalyzers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productCategories = {
    'ultra-scan-basic': {
      name: 'Ultra Scan Basic Series',
      description: 'Essential milk analysis with fast results',
      icon: <Zap size={20} />,
      products: [
        { 
          name: 'Ultra Scan Kurien Milk Analyzer (30 second)', 
          price: 32000, 
          features: ['30-second analysis', 'Fat, SNF, Protein analysis', 'User-friendly interface', 'Basic parameters testing'] 
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic Milk Analyzer', 
          price: 38000, 
          features: ['Twin sensor technology', 'Enhanced accuracy', 'Compact design', 'Multiple parameter testing'] 
        },
        { 
          name: 'Ultra Scan Swift Milk Analyzer Fast Sensor', 
          price: 40000, 
          features: ['Fast sensor technology', 'Quick results', 'Reliable performance', 'Advanced calibration'] 
        },
        { 
          name: 'Ultra Scan Swift Twinsonic Milk Analyzer', 
          price: 45000, 
          features: ['Twin sensor system', 'Swift processing', 'Professional grade', 'High precision results'] 
        }
      ]
    },
    'ultra-scan-thermal': {
      name: 'Ultra Scan with Thermal Printer',
      description: 'Advanced analyzers with built-in printing capability',
      icon: <Printer size={20} />,
      products: [
        { 
          name: 'Ultra Scan Kurien With Thermal Printer', 
          price: 36000, 
          features: ['Built-in thermal printer', 'Instant report generation', 'Data logging capability', 'Professional reports'] 
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic With Thermal Printer', 
          price: 41500, 
          features: ['Thermal printing technology', 'Twin sensor precision', 'Automated reporting', 'Multi-format output'] 
        },
        { 
          name: 'Ultra Scan Swift With Thermal Printer', 
          price: 43500, 
          features: ['Swift analysis with printing', 'High-speed thermal printer', 'Custom report formats', 'Data backup'] 
        },
        { 
          name: 'Ultra Scan Swift Twinsonic With Thermal Printer', 
          price: 49000, 
          features: ['Advanced dual printing', 'Twin sensor accuracy', 'Complete documentation', 'Professional grade output'] 
        }
      ]
    },
    'ultra-scan-iot': {
      name: 'Ultra Scan IoT Series',
      description: 'Smart analyzers with IoT connectivity and cloud integration',
      icon: <Wifi size={20} />,
      products: [
        { 
          name: 'Ultra Scan Kurien Milk Analyzer With IoT', 
          price: 42500, 
          features: ['IoT connectivity', 'Cloud data synchronization', 'Remote monitoring', 'Mobile app integration'] 
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic With IoT', 
          price: 48000, 
          features: ['IoT-enabled twin sensors', 'Real-time data transmission', 'Smart analytics dashboard', 'Remote diagnostics'] 
        },
        { 
          name: 'Ultra Scan Swift Milk Analyzer With IoT', 
          price: 50000, 
          features: ['IoT integration', 'Advanced data analytics', 'Mobile app control', 'Cloud storage'] 
        },
        { 
          name: 'Ultra Scan Swift Twinsonic Milk Analyzer With IoT', 
          price: 53500, 
          features: ['Complete IoT solution', 'Advanced cloud analytics', 'Real-time monitoring', 'Predictive maintenance'] 
        }
      ]
    },
    'ultra-scan-premium': {
      name: 'Ultra Scan Premium Series',
      description: 'Top-tier analyzers with thermal printer and IoT capabilities',
      icon: <Factory size={20} />,
      products: [
        { 
          name: 'Ultra Scan Kurien With Thermal Printer & IoT', 
          price: 46500, 
          features: ['Thermal printer + IoT', 'Complete documentation', 'Cloud connectivity', 'Professional reporting'] 
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic With Thermal Printer & IoT', 
          price: 52000, 
          features: ['Premium twin sensor tech', 'All-in-one solution', 'Professional grade output', 'Enterprise features'] 
        },
        { 
          name: 'Ultra Scan Swift With Thermal Printer & IoT', 
          price: 54000, 
          features: ['Swift processing + IoT', 'Integrated printing', 'Advanced cloud features', 'Professional reporting'] 
        },
        { 
          name: 'Ultra Scan Swift Twinsonic with Thermal Printer & IoT', 
          price: 60000, 
          features: ['Ultimate analyzer solution', 'Complete feature package', 'Enterprise-grade performance', 'Maximum connectivity'] 
        }
      ]
    },
    'specialized': {
      name: 'Specialized Analyzers',
      description: 'Specialized milk analyzers for specific applications',
      icon: <Beaker size={20} />,
      products: [
        { 
          name: 'Ultra Scan Kurien Milk Analyzer with Ph', 
          price: 39000, 
          features: ['pH measurement capability', 'Acidity level testing', 'Quality control features', 'Multi-parameter analysis'] 
        },
        { 
          name: 'Ultra Scan Kurien with Ph & Conductivity', 
          price: 41000, 
          features: ['pH & conductivity testing', 'Comprehensive quality analysis', 'Advanced quality assurance', 'Professional validation'] 
        }
      ]
    },
    'mobile-units': {
      name: 'Mobile Collection Units',
      description: 'Portable solutions for field collection and analysis',
      icon: <Milk size={20} />,
      products: [
        { 
          name: 'Ultra Scan Swift IOT Bond POS', 
          price: 82500, 
          features: ['POS system integration', 'IoT connectivity', 'Field-ready design', 'Complete payment solution'] 
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (Swift mAMCU POS)', 
          price: 81000, 
          features: ['Automatic milk collection', 'Integrated POS system', 'Mobile operation', 'Farmer payment system'] 
        },
        { 
          name: 'Ultra Scan Swift IOT Bond', 
          price: 67000, 
          features: ['IoT-enabled bonding', 'Portable analyzer', 'Bond system connectivity', 'Field deployment ready'] 
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (Swift mAMCU)', 
          price: 64500, 
          features: ['Automatic collection system', 'Mobile unit design', 'Efficient milk processing', 'Field operation capable'] 
        },
        { 
          name: 'Ultra Scan Kurien IOT Bond POS', 
          price: 75000, 
          features: ['Kurien series technology', 'IoT + POS integration', 'Complete field solution', 'Farmer management system'] 
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (mAMCU POS Kurien)', 
          price: 73500, 
          features: ['Kurien technology base', 'POS integration', 'Mobile collection unit', 'Payment processing'] 
        },
        { 
          name: 'Ultra Scan Kurien IOT Bond', 
          price: 60000, 
          features: ['IoT connectivity', 'Bond system integration', 'Portable design', 'Field-tested reliability'] 
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (mAMCU Kurien)', 
          price: 58500, 
          features: ['Kurien series base', 'Automatic collection', 'Mobile operation', 'Dairy cooperative ready'] 
        }
      ]
    },
    'accessories': {
      name: 'Testing Equipment & Accessories',
      description: 'Essential tools and accessories for milk testing',
      icon: <Search size={20} />,
      products: [
        { 
          name: 'Data Processor Milk Collection Unit', 
          price: 6000, 
          features: ['Data processing capability', 'Collection interface', 'System integration', 'Data management'] 
        },
        { 
          name: 'Electronic Weighing Scale 100Kg', 
          price: 8500, 
          features: ['100kg capacity', 'Digital display', 'Precision weighing', 'Milk collection support'] 
        },
        { 
          name: 'Electronic Weighing Scale 200Kg', 
          price: 15000, 
          features: ['200kg heavy-duty capacity', 'Professional grade', 'High precision', 'Industrial use'] 
        },
        { 
          name: 'Digital Ultrasonic Stirrer', 
          price: 4000, 
          features: ['Ultrasonic mixing technology', 'Digital control panel', 'Sample preparation', 'Laboratory grade'] 
        },
        { 
          name: 'Ultra Scan Kurien Android Bond', 
          price: 76500, 
          features: ['Android interface', 'Touch screen operation', 'Modern UI design', 'User-friendly controls'] 
        }
      ]
    },
    'testing-kits': {
      name: 'Testing Kits & Solutions',
      description: 'Comprehensive testing solutions and maintenance products',
      icon: <Beaker size={20} />,
      products: [
        { 
          name: 'Milk Butyrometer 0-8%', 
          price: 100, 
          features: ['Fat content measurement', '0-8% measurement range', 'Standard testing tool', 'Laboratory essential'] 
        },
        { 
          name: 'Milk Butyrometer 0-10% ISI Mark', 
          price: 100, 
          features: ['ISI certified quality', '0-10% measurement range', 'Quality assured product', 'Standard compliance'] 
        },
        { 
          name: 'Milk Butyrometer 0-10% Double Tested', 
          price: 100, 
          features: ['Double-tested accuracy', 'Enhanced precision', 'Reliable measurements', 'Quality control'] 
        },
        { 
          name: 'Milk Butyrometer 0-10% for Milk analyzer calibration and Lab purpose', 
          price: 2500, 
          features: ['Calibration tool', 'Laboratory grade precision', 'Professional instrument', 'Analyzer calibration'] 
        },
        { 
          name: 'Lactodaily Milk Analyzer Cleaning Solution', 
          price: 150, 
          features: ['Daily maintenance solution', 'Analyzer cleaning', 'Equipment care', 'Performance maintenance'] 
        },
        { 
          name: 'Lactoweekly Milk Analyzer Cleaning Solution', 
          price: 150, 
          features: ['Weekly deep cleaning', 'Advanced maintenance', 'System care solution', 'Extended equipment life'] 
        }
      ]
    }
  };

  const categories = Object.keys(productCategories);
  const filteredProducts = selectedCategory === 'all' 
    ? Object.values(productCategories).flatMap(cat => cat.products.map(p => ({...p, category: cat.name})))
    : productCategories[selectedCategory]?.products || [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant={viewMode === 'cards' ? "primary" : "outline"}
                  onClick={() => setViewMode('cards')}
                >
                  Card View
                </Button>
                <Button 
                  variant={viewMode === 'table' ? "primary" : "outline"}
                  onClick={() => setViewMode('table')}
                >
                  Table View
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant={selectedCategory === 'all' ? "primary" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full"
              >
                <Filter size={16} className="mr-2" />
                All Products ({Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0)})
              </Button>
              {categories.map((cat) => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "primary" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full text-sm"
                >
                  {productCategories[cat].icon}
                  <span className="ml-2">{productCategories[cat].name} ({productCategories[cat].products.length})</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            {selectedCategory === 'all' ? (
              // Show all categories
              <div className="space-y-16">
                {Object.entries(productCategories).map(([key, category]) => (
                  <div key={key} className="bg-white rounded-lg shadow-sm p-8">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-mylken-primary/10 p-3 rounded-full">
                          {category.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-mylken-dark">{category.name}</h2>
                      </div>
                      <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                    </div>
                    
                    {viewMode === 'cards' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.slice(0, 6).map((product, index) => (
                          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start gap-3">
                                <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                                <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0">
                                  <IndianRupee size={12} />
                                  {product.price.toLocaleString()}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 mb-4">
                                {product.features.map((feature, i) => (
                                  <li key={i} className="flex items-start text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2 mt-2 shrink-0"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <div className="pt-4 border-t flex justify-between items-center gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                  View Details
                                </Button>
                                <Button size="sm" className="bg-mylken-primary text-white flex-1">
                                  Get Quote
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Product Name</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead>Key Features</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {category.products.slice(0, 6).map((product, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>
                                  <Badge className="bg-mylken-primary text-white">
                                    <IndianRupee size={12} />
                                    {product.price.toLocaleString()}
                                  </Badge>
                                </TableCell>
                                <TableCell className="max-w-md">
                                  <div className="flex flex-wrap gap-1">
                                    {product.features.slice(0, 2).map((feature, i) => (
                                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {feature}
                                      </span>
                                    ))}
                                    {product.features.length > 2 && (
                                      <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
                                    )}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Details</Button>
                                    <Button size="sm" className="bg-mylken-primary text-white">Quote</Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                    
                    {category.products.length > 6 && (
                      <div className="text-center mt-6">
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedCategory(key)}
                          className="bg-white hover:bg-mylken-light"
                        >
                          View All {category.products.length} Products <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Show selected category
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-mylken-primary/10 p-3 rounded-full">
                      {productCategories[selectedCategory]?.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-mylken-dark">
                      {productCategories[selectedCategory]?.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {productCategories[selectedCategory]?.description}
                  </p>
                </div>
                
                {viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start gap-3">
                            <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                            <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0">
                              <IndianRupee size={12} />
                              {product.price.toLocaleString()}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-4">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2 mt-2 shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="pt-4 border-t flex justify-between items-center gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-mylken-primary text-white flex-1">
                              Get Quote
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product Name</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Key Features</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProducts.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>
                              <Badge className="bg-mylken-primary text-white">
                                <IndianRupee size={12} />
                                {product.price.toLocaleString()}
                              </Badge>
                            </TableCell>
                            <TableCell className="max-w-md">
                              <div className="flex flex-wrap gap-1">
                                {product.features.slice(0, 2).map((feature, i) => (
                                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                    {feature}
                                  </span>
                                ))}
                                {product.features.length > 2 && (
                                  <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">Details</Button>
                                <Button size="sm" className="bg-mylken-primary text-white">Quote</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
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

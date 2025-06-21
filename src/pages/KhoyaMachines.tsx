
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Phone, Mail, MapPin, Clock, Award, Star, CheckCircle, Filter, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';

const KhoyaMachines = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const khoyaProducts = [
    // Khoya Making Machines
    {
      name: "Khoya Making Machine 120 LTR",
      category: "Khoya Machines",
      capacity: "120 Litre",
      features: ["High capacity production", "Automatic stirring system", "Temperature control", "Energy efficient"],
      productDescription: [
        "Large capacity khoya making machine for commercial dairy operations",
        "Advanced heating system ensures uniform cooking and texture",
        "Automated stirring mechanism prevents burning and ensures consistency"
      ],
      detailedFeatures: [
        "Capacity: 120 litres milk processing",
        "Material: Food grade stainless steel construction",
        "Heating: Steam/Electric heating system",
        "Stirring: Automatic paddle stirring system",
        "Control: Digital temperature and time control",
        "Output: Consistent khoya texture and quality",
        "Maintenance: Easy cleaning and maintenance"
      ]
    },
    {
      name: "Khoya Making Machine 180 LTR",
      category: "Khoya Machines",
      capacity: "180 Litre",
      features: ["Extra large capacity", "Automatic stirring system", "Temperature control", "Industrial grade"],
      productDescription: [
        "Industrial grade khoya making machine for large-scale production",
        "High-capacity design suitable for major dairy processing units",
        "Advanced control systems ensure optimal cooking conditions"
      ],
      detailedFeatures: [
        "Capacity: 180 litres milk processing",
        "Material: Heavy-duty stainless steel construction",
        "Heating: Multi-zone heating system",
        "Stirring: Heavy-duty automatic stirring mechanism",
        "Control: Advanced digital control panel",
        "Efficiency: High milk to khoya conversion rate",
        "Design: Robust industrial construction"
      ]
    },
    {
      name: "Khoya Making Machine 250 LTR",
      category: "Khoya Machines",
      capacity: "250 Litre",
      features: ["Maximum capacity", "Commercial grade", "Automated operation", "Superior quality output"],
      productDescription: [
        "Maximum capacity khoya making machine for large commercial operations",
        "Commercial-grade design for continuous heavy-duty production",
        "Superior quality output with consistent texture and taste"
      ],
      detailedFeatures: [
        "Capacity: 250 litres milk processing",
        "Material: Commercial grade stainless steel",
        "Heating: High-efficiency heating system",
        "Stirring: Professional grade stirring mechanism",
        "Automation: Fully automated operation cycle",
        "Quality: Superior khoya texture and consistency",
        "Durability: Built for continuous commercial use"
      ]
    },
    // Paneer Press Machines
    {
      name: "Basic Paneer Press",
      category: "Paneer Equipment",
      capacity: "Manual",
      features: ["Manual operation", "Compact design", "Easy to use", "Food grade materials"],
      productDescription: [
        "Basic manual paneer press for small-scale paneer production",
        "Simple and efficient design for home and small dairy use",
        "Food grade materials ensure safe and hygienic operation"
      ],
      detailedFeatures: [
        "Operation: Manual pressing mechanism",
        "Material: Food grade stainless steel",
        "Design: Compact and portable",
        "Capacity: Small batch production",
        "Usage: Ideal for home and small dairy",
        "Maintenance: Easy to clean and maintain",
        "Durability: Long-lasting construction"
      ]
    },
    {
      name: "Paneer Press Manual Machine (12kg)",
      category: "Paneer Equipment",
      capacity: "12 kg",
      features: ["12kg capacity", "Manual operation", "Efficient pressing", "Durable construction"],
      productDescription: [
        "Manual paneer press machine with 12kg processing capacity",
        "Efficient pressing mechanism ensures optimal whey extraction",
        "Durable construction suitable for regular commercial use"
      ],
      detailedFeatures: [
        "Capacity: 12kg paneer processing",
        "Operation: Manual pressing system",
        "Material: Robust stainless steel construction",
        "Pressing: Efficient whey extraction mechanism",
        "Output: Consistent paneer texture and firmness",
        "Usage: Suitable for medium-scale production",
        "Design: Ergonomic and user-friendly"
      ]
    },
    {
      name: "Paneer Press Manual Machine (8kg)",
      category: "Paneer Equipment",
      capacity: "8 kg",
      features: ["8kg capacity", "Manual operation", "Compact design", "Easy handling"],
      productDescription: [
        "Compact manual paneer press machine with 8kg processing capacity",
        "Ideal for small to medium-scale paneer production",
        "Easy handling and operation for efficient paneer making"
      ],
      detailedFeatures: [
        "Capacity: 8kg paneer processing",
        "Operation: Manual pressing mechanism",
        "Material: High-quality stainless steel",
        "Size: Compact and space-efficient",
        "Handling: Easy to operate and clean",
        "Quality: Consistent paneer texture",
        "Application: Small to medium dairy operations"
      ]
    },
    {
      name: "Pneumatic Paneer Press Machine (12kg)",
      category: "Paneer Equipment",
      capacity: "12 kg",
      features: ["Pneumatic operation", "12kg capacity", "Automated pressing", "High efficiency"],
      productDescription: [
        "Advanced pneumatic paneer press machine with 12kg capacity",
        "Automated pneumatic operation ensures consistent pressing force",
        "High efficiency design for commercial paneer production"
      ],
      detailedFeatures: [
        "Capacity: 12kg paneer processing",
        "Operation: Pneumatic pressing system",
        "Automation: Automated pressing cycle",
        "Pressure: Consistent pneumatic pressure control",
        "Efficiency: High-speed processing capability",
        "Quality: Superior paneer texture and firmness",
        "Control: Easy pneumatic controls"
      ]
    },
    {
      name: "Pneumatic Paneer Press Machine (8kg)",
      category: "Paneer Equipment",
      capacity: "8 kg",
      features: ["Pneumatic operation", "8kg capacity", "Automated pressing", "Precise control"],
      productDescription: [
        "Compact pneumatic paneer press machine with 8kg capacity",
        "Precise pneumatic control ensures optimal pressing results",
        "Automated operation reduces manual effort and improves efficiency"
      ],
      detailedFeatures: [
        "Capacity: 8kg paneer processing",
        "Operation: Advanced pneumatic system",
        "Control: Precise pressure regulation",
        "Automation: Fully automated pressing cycle",
        "Speed: Fast and efficient processing",
        "Quality: Uniform paneer texture",
        "Maintenance: Low maintenance pneumatic system"
      ]
    }
  ];

  const categories = ['All', 'Khoya Machines', 'Paneer Equipment'];

  const filteredProducts = selectedCategory === 'All' 
    ? khoyaProducts 
    : khoyaProducts.filter(product => product.category === selectedCategory);

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handleRequestQuote = (product?: any) => {
    if (product) {
      setSelectedProduct(product);
    }
    setIsDetailModalOpen(false);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-mylken-primary pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
              Traditional Dairy Processing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
              Khoya & Paneer Machines
            </h1>
            <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
              Advanced equipment for producing traditional Indian khoya and paneer with consistency and efficiency
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-mylken-light">
              <div className="flex items-center gap-2">
                <Factory size={20} />
                <span>Industrial Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span>Energy Efficient</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} />
                <span>Consistent Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-mylken-light/20">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <Filter className="text-mylken-primary mt-2" size={20} />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-mylken-primary text-white" 
                  : "border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mylken-dark">
              {selectedCategory === 'All' ? 'All Products' : `${selectedCategory}`}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of khoya making machines and paneer equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-mylken-accent/20">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-mylken-primary text-white">
                      {product.capacity}
                    </Badge>
                    <Badge variant="outline" className="border-mylken-accent text-mylken-primary">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-mylken-dark text-lg">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewDetails(product)}
                      className="flex-1 border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleRequestQuote(product)}
                      className="flex-1 bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-mylken-light/30 py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-mylken-dark">Need Technical Assistance?</h2>
            <p className="mt-4 text-gray-600">Contact our experts for personalized recommendations</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-mylken-primary text-white hover:bg-mylken-secondary">
              <Phone size={16} className="mr-2" />
              Call Expert
            </Button>
            <Button variant="outline" className="border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white">
              <Mail size={16} className="mr-2" />
              Email Us
            </Button>
            <Button variant="outline" className="border-mylken-accent text-mylken-primary hover:bg-mylken-accent hover:text-mylken-dark">
              <MapPin size={16} className="mr-2" />
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProductDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        product={selectedProduct}
        onRequestQuote={() => handleRequestQuote(selectedProduct)}
        onDownloadBrochure={() => console.log('Download brochure')}
        onContactSales={() => console.log('Contact sales')}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default KhoyaMachines;

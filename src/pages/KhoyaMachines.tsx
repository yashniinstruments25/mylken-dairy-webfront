
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const khoyaProducts = [
    // Only Khoya Making Machines
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
    }
  ];

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
              Khoya Making Machines
            </h1>
            <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
              Advanced equipment for producing traditional Indian khoya with consistency and efficiency
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mylken-dark">
              Khoya Making Machines
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of khoya making machines for different production capacities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {khoyaProducts.map((product, index) => (
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

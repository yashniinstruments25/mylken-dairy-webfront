
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Phone, Mail, MapPin, Clock, Award, Star, CheckCircle, Filter, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';

const BMC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bmcProducts = [
    {
      name: "Bulk Milk Cooler BMC 100 Ltr",
      category: "Standard BMC",
      capacity: "100 Litre",
      features: ["Efficient cooling system", "Temperature control", "Energy efficient", "Food grade materials"],
      productDescription: [
        "High-capacity bulk milk cooler designed for dairy farms and collection centers",
        "Advanced cooling technology ensures rapid temperature reduction",
        "Energy-efficient operation reduces operational costs"
      ],
      detailedFeatures: [
        "Capacity: 100 litres",
        "Cooling Technology: Direct expansion system",
        "Temperature Range: 2°C to 4°C",
        "Material: Stainless steel construction",
        "Insulation: High-grade polyurethane foam",
        "Power Consumption: Energy efficient compressor",
        "Control Panel: Digital temperature display"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 200 Ltr",
      category: "Standard BMC",
      capacity: "200 Litre",
      features: ["Efficient cooling system", "Temperature control", "Energy efficient", "Food grade materials"],
      productDescription: [
        "High-capacity bulk milk cooler designed for dairy farms and collection centers",
        "Advanced cooling technology ensures rapid temperature reduction",
        "Energy-efficient operation reduces operational costs"
      ],
      detailedFeatures: [
        "Capacity: 200 litres",
        "Cooling Technology: Direct expansion system",
        "Temperature Range: 2°C to 4°C",
        "Material: Stainless steel construction",
        "Insulation: High-grade polyurethane foam",
        "Power Consumption: Energy efficient compressor",
        "Control Panel: Digital temperature display"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 300 Ltr",
      category: "Standard BMC",
      capacity: "300 Litre",
      features: ["Efficient cooling system", "Temperature control", "Energy efficient", "Food grade materials"],
      productDescription: [
        "High-capacity bulk milk cooler designed for dairy farms and collection centers",
        "Advanced cooling technology ensures rapid temperature reduction",
        "Energy-efficient operation reduces operational costs"
      ],
      detailedFeatures: [
        "Capacity: 300 litres",
        "Cooling Technology: Direct expansion system",
        "Temperature Range: 2°C to 4°C",
        "Material: Stainless steel construction",
        "Insulation: High-grade polyurethane foam",
        "Power Consumption: Energy efficient compressor",
        "Control Panel: Digital temperature display"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC (Horizontal) 500 Ltr",
      category: "Horizontal BMC",
      capacity: "500 Litre",
      features: ["Horizontal design", "Space efficient", "Easy maintenance", "Rapid cooling"],
      productDescription: [
        "Horizontal bulk milk cooler optimized for space-constrained installations",
        "Efficient horizontal design maximizes cooling performance",
        "Easy access for cleaning and maintenance"
      ],
      detailedFeatures: [
        "Capacity: 500 litres",
        "Design: Horizontal configuration",
        "Cooling Technology: Direct expansion system",
        "Temperature Range: 2°C to 4°C",
        "Material: Stainless steel construction",
        "Insulation: High-grade polyurethane foam",
        "Dimensions: Space-optimized design"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC (Vertical) 500 Ltr",
      category: "Vertical BMC",
      capacity: "500 Litre",
      features: ["Vertical design", "Compact footprint", "Efficient cooling", "Easy operation"],
      productDescription: [
        "Vertical bulk milk cooler designed for efficient space utilization",
        "Compact footprint suitable for various installation spaces",
        "Reliable cooling performance with easy operation"
      ],
      detailedFeatures: [
        "Capacity: 500 litres",
        "Design: Vertical configuration",
        "Cooling Technology: Direct expansion system",
        "Temperature Range: 2°C to 4°C",
        "Material: Stainless steel construction",
        "Insulation: High-grade polyurethane foam",
        "Footprint: Compact design"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 1000 Ltr",
      category: "Large Capacity",
      capacity: "1000 Litre",
      features: ["High capacity", "Industrial grade", "Advanced cooling", "Robust construction"],
      productDescription: [
        "Industrial-grade bulk milk cooler for large-scale dairy operations",
        "High-capacity design suitable for commercial dairy farms",
        "Robust construction ensures reliable long-term operation"
      ],
      detailedFeatures: [
        "Capacity: 1000 litres",
        "Cooling Technology: Advanced direct expansion",
        "Temperature Range: 2°C to 4°C",
        "Material: Heavy-duty stainless steel",
        "Insulation: Superior polyurethane foam",
        "Compressor: Industrial grade",
        "Control System: Advanced temperature control"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 1000 Ltr (Vertical)",
      category: "Large Capacity",
      capacity: "1000 Litre",
      features: ["Vertical design", "High capacity", "Space efficient", "Industrial grade"],
      productDescription: [
        "Large capacity vertical bulk milk cooler for industrial applications",
        "Space-efficient vertical design maximizes storage capacity",
        "Industrial-grade construction for heavy-duty operations"
      ],
      detailedFeatures: [
        "Capacity: 1000 litres",
        "Design: Vertical configuration",
        "Cooling Technology: Advanced direct expansion",
        "Temperature Range: 2°C to 4°C",
        "Material: Heavy-duty stainless steel",
        "Insulation: Superior polyurethane foam",
        "Installation: Space-efficient vertical design"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 2000 Ltr",
      category: "Large Capacity",
      capacity: "2000 Litre",
      features: ["Extra large capacity", "Commercial grade", "Advanced technology", "High efficiency"],
      productDescription: [
        "Extra large capacity bulk milk cooler for major dairy operations",
        "Commercial-grade design for high-volume milk processing",
        "Advanced cooling technology ensures optimal temperature maintenance"
      ],
      detailedFeatures: [
        "Capacity: 2000 litres",
        "Cooling Technology: Multi-stage cooling system",
        "Temperature Range: 2°C to 4°C",
        "Material: Commercial grade stainless steel",
        "Insulation: Premium polyurethane foam",
        "Efficiency: High-performance compressor",
        "Monitoring: Advanced control system"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 3000 Ltr",
      category: "Large Capacity",
      capacity: "3000 Litre",
      features: ["Maximum capacity", "Industrial strength", "Superior cooling", "Automated controls"],
      productDescription: [
        "Maximum capacity bulk milk cooler for large-scale dairy facilities",
        "Industrial-strength construction for continuous operation",
        "Superior cooling performance with automated control systems"
      ],
      detailedFeatures: [
        "Capacity: 3000 litres",
        "Cooling Technology: Multi-stage direct expansion",
        "Temperature Range: 2°C to 4°C",
        "Material: Industrial grade stainless steel",
        "Insulation: Premium grade polyurethane",
        "Automation: Fully automated control system",
        "Monitoring: Remote monitoring capability"
      ]
    },
    {
      name: "Bulk Milk Cooler BMC 5000 Ltr",
      category: "Large Capacity",
      capacity: "5000 Litre",
      features: ["Ultra-high capacity", "Commercial installation", "Advanced refrigeration", "Professional grade"],
      productDescription: [
        "Ultra-high capacity bulk milk cooler for major commercial installations",
        "Professional-grade refrigeration system for industrial applications",
        "Designed for continuous heavy-duty operation"
      ],
      detailedFeatures: [
        "Capacity: 5000 litres",
        "Cooling Technology: Advanced multi-stage system",
        "Temperature Range: 2°C to 4°C",
        "Material: Professional grade stainless steel",
        "Insulation: Superior thermal insulation",
        "System: Industrial refrigeration unit",
        "Controls: Professional control panel"
      ]
    }
  ];

  const categories = ['All', 'Standard BMC', 'Horizontal BMC', 'Vertical BMC', 'Large Capacity'];

  const filteredProducts = selectedCategory === 'All' 
    ? bmcProducts 
    : bmcProducts.filter(product => product.category === selectedCategory);

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
              Cooling Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
              Bulk Milk Coolers (BMC)
            </h1>
            <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
              Advanced bulk milk cooling systems for efficient milk preservation and quality maintenance
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-mylken-light">
              <div className="flex items-center gap-2">
                <Thermometer size={20} />
                <span>Temperature Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span>Energy Efficient</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} />
                <span>Industrial Grade</span>
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
              {selectedCategory === 'All' ? 'All BMC Products' : `${selectedCategory} Products`}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of bulk milk coolers in various capacities and configurations
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
            <p className="mt-4 text-gray-600">Contact our cooling system experts for personalized solutions</p>
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

export default BMC;

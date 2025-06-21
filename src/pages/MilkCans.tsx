
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Phone, Mail, MapPin, Clock, Award, Star, CheckCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';

const MilkCans = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milkCanProducts = [
    // Stainless Steel Milk Cans
    {
      name: "Stainless Steel Milk Can 5 Litre",
      category: "Stainless Steel",
      capacity: "5 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 5 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    {
      name: "Stainless Steel Milk Can 10 Litre",
      category: "Stainless Steel",
      capacity: "10 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 10 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    {
      name: "Stainless Steel Milk Can 15 Litre",
      category: "Stainless Steel",
      capacity: "15 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 15 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    {
      name: "Stainless Steel Milk Can 20 Litre",
      category: "Stainless Steel",
      capacity: "20 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 20 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    {
      name: "Stainless Steel Milk Can 30 Litre",
      category: "Stainless Steel",
      capacity: "30 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 30 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    {
      name: "Milk Can Stainless Steel 40 LTR",
      category: "Stainless Steel",
      capacity: "40 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 40 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    {
      name: "Milk Can Stainless Steel 50 Ltr",
      category: "Stainless Steel",
      capacity: "50 Litre",
      features: ["Premium stainless steel construction", "Food grade material", "Easy to clean", "Rust resistant"],
      productDescription: [
        "High-quality stainless steel milk can designed for dairy operations",
        "Durable construction ensures long-lasting performance",
        "Easy to maintain and clean for hygiene standards"
      ],
      detailedFeatures: [
        "Material: Food grade stainless steel",
        "Capacity: 50 litres",
        "Finish: Mirror polish",
        "Handle: Ergonomic design",
        "Lid: Secure fitting with gasket"
      ]
    },
    // Aluminum Milk Cans
    {
      name: "Aluminum Milk Cans 5 Ltr",
      category: "Aluminum",
      capacity: "5 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 5 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    {
      name: "Aluminum Milk Cans 10 Ltr",
      category: "Aluminum",
      capacity: "10 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 10 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    {
      name: "Aluminum Milk Cans 15 Ltr",
      category: "Aluminum",
      capacity: "15 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 15 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    {
      name: "Aluminum Milk Cans 20 Ltr",
      category: "Aluminum",
      capacity: "20 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 20 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    {
      name: "Aluminum Milk Cans 30 Ltr",
      category: "Aluminum",
      capacity: "30 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 30 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    {
      name: "Aluminum Milk Cans 40 Ltr",
      category: "Aluminum",
      capacity: "40 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 40 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    {
      name: "Aluminum Milk Cans 50 Ltr",
      category: "Aluminum",
      capacity: "50 Litre",
      features: ["Lightweight aluminum construction", "Food grade material", "Corrosion resistant", "Easy handling"],
      productDescription: [
        "Lightweight aluminum milk can ideal for daily dairy operations",
        "Corrosion resistant material ensures durability",
        "Easy to handle and transport"
      ],
      detailedFeatures: [
        "Material: Food grade aluminum",
        "Capacity: 50 litres",
        "Weight: Lightweight design",
        "Handle: Comfortable grip",
        "Lid: Tight sealing mechanism"
      ]
    },
    // Milk Can Scrubber
    {
      name: "Milk Can Scrubber",
      category: "Accessories",
      capacity: "Universal",
      features: ["Cleaning accessory", "Durable bristles", "Ergonomic handle", "Easy to use"],
      productDescription: [
        "Specialized scrubber designed for cleaning milk cans",
        "Durable bristles ensure thorough cleaning",
        "Ergonomic design for comfortable use"
      ],
      detailedFeatures: [
        "Material: High-quality bristles",
        "Handle: Ergonomic grip",
        "Usage: Universal for all can sizes",
        "Durability: Long-lasting construction",
        "Maintenance: Easy to clean and store"
      ]
    }
  ];

  const categories = ['All', 'Stainless Steel', 'Aluminum', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? milkCanProducts 
    : milkCanProducts.filter(product => product.category === selectedCategory);

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
              Milk Storage Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
              Premium Milk Cans
            </h1>
            <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
              High-quality stainless steel and aluminum milk cans for safe milk storage and transportation
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-mylken-light">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Food Grade Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} />
                <span>Durable Construction</span>
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
              {selectedCategory === 'All' ? 'All Milk Cans' : `${selectedCategory} Milk Cans`}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of milk cans in various sizes and materials
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
            <h2 className="text-3xl font-bold text-mylken-dark">Need Help Choosing?</h2>
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

export default MilkCans;


import React, { useEffect, useState } from 'react';
import { ArrowLeft, Search, ShoppingCart, Phone, Mail, MapPin, Check, Droplets, Filter, IndianRupee, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';
import ConsultationModal from '@/components/ConsultationModal';
import { useToast } from '@/hooks/use-toast';

interface CreamSeparatorProduct {
  id: number;
  name: string;
  capacity: string;
  operationType: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  features: string[];
  image: string;
  description: string;
  specifications: {
    capacity: string;
    powerConsumption?: string;
    dimensions?: string;
    weight?: string;
    material: string;
    efficiency: string;
  };
  productDescription: string[];
  detailedFeatures: string[];
}

const CreamSeparators = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dairy-themed animation styles
  const milkDropAnimation = {
    animation: 'milkDrop 2s ease-in-out infinite',
  };

  const floatingAnimation = {
    animation: 'float 3s ease-in-out infinite',
  };

  // Add custom CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes milkDrop {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
        50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-5px) rotate(1deg); }
        66% { transform: translateY(-2px) rotate(-1deg); }
      }
      @keyframes milkWave {
        0%, 100% { transform: translateX(0%); }
        50% { transform: translateX(100%); }
      }
      .milk-wave {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: milkWave 3s ease-in-out infinite;
      }
      .product-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      .product-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const productCategories = {
    'hand-operated': {
      name: 'Hand Operated Series',
      description: 'Manual cream separators for small to medium operations',
      icon: <Zap size={20} style={floatingAnimation} />,
      products: [
        {
          id: 1,
          name: "60 LPH Hand Operated Cream Separator",
          capacity: "60 LPH",
          operationType: "Hand Operated",
          priceRange: "₹7,000.00 – ₹14,000.00",
          minPrice: 7000,
          maxPrice: 14000,
          features: ["Manual Operation", "Easy Maintenance", "Portable Design", "High Efficiency"],
          image: "/placeholder.svg",
          description: "Compact hand-operated cream separator ideal for small dairy operations with 60 LPH capacity.",
          specifications: {
            capacity: "60 Liters/Hour",
            dimensions: "45 x 35 x 85 cm",
            weight: "25 kg",
            material: "Stainless Steel",
            efficiency: "98%"
          },
          productDescription: ["Manual Operation", "Easy Maintenance", "Portable Design", "High Efficiency"],
          detailedFeatures: ["Manual Operation", "Easy Maintenance", "Portable Design", "High Efficiency"]
        },
        {
          id: 4,
          name: "90 LPH Hand Operated Cream Separator",
          capacity: "90 LPH",
          operationType: "Hand Operated",
          priceRange: "₹10,000.00 – ₹18,000.00",
          minPrice: 10000,
          maxPrice: 18000,
          features: ["Higher Capacity", "Manual Control", "Robust Build", "Cost Effective"],
          image: "/placeholder.svg",
          description: "High capacity hand-operated cream separator with 90 LPH capacity for medium dairy operations.",
          specifications: {
            capacity: "90 Liters/Hour",
            dimensions: "50 x 40 x 90 cm",
            weight: "35 kg",
            material: "Stainless Steel",
            efficiency: "98%"
          },
          productDescription: ["Higher Capacity", "Manual Control", "Robust Build", "Cost Effective"],
          detailedFeatures: ["Higher Capacity", "Manual Control", "Robust Build", "Cost Effective"]
        },
        {
          id: 6,
          name: "300 LPH Hand Operated Cream Separator",
          capacity: "300 LPH",
          operationType: "Hand Operated",
          priceRange: "₹29,000.00 – ₹41,000.00",
          minPrice: 29000,
          maxPrice: 41000,
          features: ["High Capacity", "Industrial Grade", "Manual Operation", "Reliable Performance"],
          image: "/placeholder.svg",
          description: "Industrial grade hand-operated cream separator with 300 LPH capacity for large dairy operations.",
          specifications: {
            capacity: "300 Liters/Hour",
            dimensions: "80 x 60 x 120 cm",
            weight: "85 kg",
            material: "Stainless Steel",
            efficiency: "97%"
          },
          productDescription: ["High Capacity", "Industrial Grade", "Manual Operation", "Reliable Performance"],
          detailedFeatures: ["High Capacity", "Industrial Grade", "Manual Operation", "Reliable Performance"]
        },
        {
          id: 7,
          name: "600 Hand Operated Cream Separator",
          capacity: "600 LPH",
          operationType: "Hand Operated",
          priceRange: "₹50,000.00 – ₹70,000.00",
          minPrice: 50000,
          maxPrice: 70000,
          features: ["Maximum Capacity", "Heavy Duty", "Commercial Grade", "High Efficiency"],
          image: "/placeholder.svg",
          description: "Heavy duty hand-operated cream separator with 600 LPH capacity for commercial dairy processing.",
          specifications: {
            capacity: "600 Liters/Hour",
            dimensions: "100 x 80 x 140 cm",
            weight: "150 kg",
            material: "SS316 Grade",
            efficiency: "96%"
          },
          productDescription: ["Maximum Capacity", "Heavy Duty", "Commercial Grade", "High Efficiency"],
          detailedFeatures: ["Maximum Capacity", "Heavy Duty", "Commercial Grade", "High Efficiency"]
        }
      ]
    },
    'electric-operated': {
      name: 'Electric Operated Series',
      description: 'Automated electric cream separators for consistent performance',
      icon: <Zap size={20} style={floatingAnimation} />,
      products: [
        {
          id: 2,
          name: "60 LPH Electric Operated Cream Separator",
          capacity: "60 LPH",
          operationType: "Electric Operated",
          priceRange: "₹11,000.00 – ₹18,000.00",
          minPrice: 11000,
          maxPrice: 18000,
          features: ["Electric Motor", "Consistent Performance", "Low Maintenance", "Auto Operation"],
          image: "/placeholder.svg",
          description: "Electric operated cream separator with 60 LPH capacity for efficient and consistent cream separation.",
          specifications: {
            capacity: "60 Liters/Hour",
            powerConsumption: "0.5 HP",
            dimensions: "50 x 40 x 90 cm",
            weight: "35 kg",
            material: "Stainless Steel",
            efficiency: "99%"
          },
          productDescription: ["Electric Motor", "Consistent Performance", "Low Maintenance", "Auto Operation"],
          detailedFeatures: ["Electric Motor", "Consistent Performance", "Low Maintenance", "Auto Operation"]
        },
        {
          id: 5,
          name: "90 LPH Electric Operated Cream Separator",
          capacity: "90 LPH",
          operationType: "Electric Operated",
          priceRange: "₹12,000.00 – ₹19,000.00",
          minPrice: 12000,
          maxPrice: 19000,
          features: ["Electric Motor", "Higher Throughput", "Automated Operation", "Energy Efficient"],
          image: "/placeholder.svg",
          description: "Electric cream separator with 90 LPH capacity offering automated and efficient operation.",
          specifications: {
            capacity: "90 Liters/Hour",
            powerConsumption: "0.75 HP",
            dimensions: "55 x 45 x 95 cm",
            weight: "45 kg",
            material: "Stainless Steel",
            efficiency: "99%"
          },
          productDescription: ["Electric Motor", "Higher Throughput", "Automated Operation", "Energy Efficient"],
          detailedFeatures: ["Electric Motor", "Higher Throughput", "Automated Operation", "Energy Efficient"]
        }
      ]
    },
    'ss-covering': {
      name: 'SS Covering Series',
      description: 'Premium stainless steel covered separators for enhanced hygiene',
      icon: <Droplets size={20} style={floatingAnimation} />,
      products: [
        {
          id: 3,
          name: "60 LPH SS Covering Cream Separator",
          capacity: "60 LPH",
          operationType: "SS Covering",
          priceRange: "₹8,200.00 – ₹16,500.00",
          minPrice: 8200,
          maxPrice: 16500,
          features: ["Stainless Steel Cover", "Hygienic Design", "Corrosion Resistant", "Easy Cleaning"],
          image: "/placeholder.svg",
          description: "Premium stainless steel covered cream separator with 60 LPH capacity for enhanced hygiene.",
          specifications: {
            capacity: "60 Liters/Hour",
            dimensions: "48 x 38 x 88 cm",
            weight: "30 kg",
            material: "SS304 Grade",
            efficiency: "98.5%"
          },
          productDescription: ["Stainless Steel Cover", "Hygienic Design", "Corrosion Resistant", "Easy Cleaning"],
          detailedFeatures: ["Stainless Steel Cover", "Hygienic Design", "Corrosion Resistant", "Easy Cleaning"]
        },
        {
          id: 8,
          name: "1200 LPH SS Covering Cream Separator",
          capacity: "1200 LPH",
          operationType: "SS Covering",
          priceRange: "₹230,000.00 – ₹245,000.00",
          minPrice: 230000,
          maxPrice: 245000,
          features: ["Ultra High Capacity", "Premium SS Cover", "Industrial Grade", "Advanced Design"],
          image: "/placeholder.svg",
          description: "Ultra high capacity stainless steel covered cream separator for large scale dairy processing.",
          specifications: {
            capacity: "1200 Liters/Hour",
            powerConsumption: "3 HP",
            dimensions: "150 x 120 x 180 cm",
            weight: "300 kg",
            material: "SS316L Grade",
            efficiency: "99.5%"
          },
          productDescription: ["Ultra High Capacity", "Premium SS Cover", "Industrial Grade", "Advanced Design"],
          detailedFeatures: ["Ultra High Capacity", "Premium SS Cover", "Industrial Grade", "Advanced Design"]
        }
      ]
    }
  };

  const categories = Object.keys(productCategories);
  const filteredProducts = selectedCategory === 'all' 
    ? Object.values(productCategories).flatMap(cat => cat.products.map(p => ({...p, category: cat.name})))
    : productCategories[selectedCategory]?.products || [];

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleGetQuote = (product: any) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleDownloadBrochure = (productName?: string) => {
    console.log('Downloading brochure for:', productName || 'All Products');
    
    toast({
      title: "Download Started",
      description: `${productName ? productName + ' ' : ''}Product brochure is being downloaded.`,
    });
  };

  const handleContactSales = () => {
    toast({
      title: "Redirecting to Sales",
      description: "You'll be connected with our sales team shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section with enhanced animations */}
        <section className="bg-gradient-to-br from-mylken-primary to-mylken-primary/80 pt-32 pb-16 relative overflow-hidden">
          {/* Animated milk drops */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-6 bg-white/10 rounded-full"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 10}%`,
                  ...milkDropAnimation,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Professional Cream Separation Equipment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Complete Range of Cream Separators
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                From hand-operated to electric and premium SS covering models for efficient dairy processing
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant={viewMode === 'cards' ? "default" : "outline"}
                  onClick={() => setViewMode('cards')}
                  className="relative overflow-hidden"
                >
                  <span className="relative z-10">Card View</span>
                  <div className="absolute inset-0 milk-wave"></div>
                </Button>
                <Button 
                  variant={viewMode === 'table' ? "default" : "outline"}
                  onClick={() => setViewMode('table')}
                  className="relative overflow-hidden"
                >
                  <span className="relative z-10">Table View</span>
                  <div className="absolute inset-0 milk-wave"></div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant={selectedCategory === 'all' ? "default" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full hover-scale"
              >
                <Filter size={16} className="mr-2" style={milkDropAnimation} />
                All Products ({Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0)})
              </Button>
              {categories.map((cat) => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full text-sm hover-scale"
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
          <div className="container mx-auto px-4">
            {selectedCategory === 'all' ? (
              // Show all categories
              <div className="space-y-16">
                {Object.entries(productCategories).map(([key, category]) => (
                  <div key={key} className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-mylken-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="text-center mb-8 relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-mylken-primary/10 p-3 rounded-full" style={floatingAnimation}>
                          {category.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-mylken-dark">{category.name}</h2>
                      </div>
                      <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.products.map((product, index) => (
                        <Card key={index} className="product-card border border-gray-200 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-mylken-accent/0 to-mylken-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <CardHeader className="pb-3 relative z-10">
                            <div className="flex justify-between items-start gap-3">
                              <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                              <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0" style={milkDropAnimation}>
                                <IndianRupee size={12} />
                                {product.minPrice.toLocaleString()}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="relative z-10">
                            <ul className="space-y-2 mb-4">
                              {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2 mt-2 shrink-0" style={milkDropAnimation}></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pt-4 border-t flex justify-between items-center gap-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 hover-scale"
                                onClick={() => handleViewDetails(product)}
                              >
                                View Details
                              </Button>
                              <Button 
                                size="sm" 
                                className="bg-mylken-primary text-white flex-1 hover-scale"
                                onClick={() => handleGetQuote(product)}
                              >
                                Get Quote
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Show selected category
              <div className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-mylken-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="text-center mb-8 relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-mylken-primary/10 p-3 rounded-full" style={floatingAnimation}>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card key={index} className="product-card border border-gray-200 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-mylken-accent/0 to-mylken-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-3 relative z-10">
                        <div className="flex justify-between items-start gap-3">
                          <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                          <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0" style={milkDropAnimation}>
                            <IndianRupee size={12} />
                            {product.minPrice.toLocaleString()}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-2 mb-4">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2 mt-2 shrink-0" style={milkDropAnimation}></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t flex justify-between items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 hover-scale"
                            onClick={() => handleViewDetails(product)}
                          >
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-mylken-primary text-white flex-1 hover-scale"
                            onClick={() => handleGetQuote(product)}
                          >
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

        {/* Why Choose Our Separators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Cream Separators?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our separators are designed to provide efficient cream separation with minimal effort, helping you maintain product quality.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Droplets className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">High Efficiency</h3>
                <p className="text-gray-600">Our separators deliver efficiency up to 99.5% with consistent and reliable results every time.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Zap className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Operation</h3>
                <p className="text-gray-600">Both manual and electric options available to suit your operational needs and preferences.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Check className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Durable Construction</h3>
                <p className="text-gray-600">Built with premium stainless steel for long-lasting performance and easy maintenance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-mylken-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-6 h-8 bg-white/5 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 15}%`,
                  ...milkDropAnimation,
                  animationDelay: `${i * 1}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade Your Cream Separation?</h2>
              <p className="text-mylken-light text-lg mb-8">
                Contact our team to find the perfect separator for your dairy business needs.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale border-mylken-accent text-mylken-accent hover:bg-mylken-accent hover:text-mylken-dark"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Request Consultation
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="lg" className="hover-scale border-mylken-accent text-mylken-accent hover:bg-mylken-accent hover:text-mylken-dark">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onRequestQuote={() => {
            setIsModalOpen(false);
            handleGetQuote(selectedProduct);
          }}
          onDownloadBrochure={() => handleDownloadBrochure(selectedProduct.name)}
          onContactSales={handleContactSales}
        />
      )}

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={quoteProduct}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
};

export default CreamSeparators;

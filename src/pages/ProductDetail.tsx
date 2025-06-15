
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import ConsultationModal from '@/components/ConsultationModal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  IndianRupee, 
  CheckCircle, 
  Star, 
  Clock, 
  Zap, 
  Wifi, 
  Download, 
  Phone, 
  ListChecks, 
  FileText,
  Package,
  Award,
  Shield,
  Gauge
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Product data - In a real app, this would come from an API
  const productData = {
    'ultra-scan-kurien-milk-analyzer-30-second': {
      name: 'Ultra Scan Kurien Milk Analyzer (30 second)',
      price: 35000,
      category: 'Ultra Scan Basic Series',
      image: '/placeholder.svg',
      rating: 4.8,
      features: ['30-second analysis', 'Fat, SNF, Protein analysis', 'User-friendly interface', 'Basic parameters testing'],
      productDescription: [
        "Manual as well as automatic cleaning",
        "Application – Milk Testing",
        "Display Type – LCD",
        "Warranty – 1 Year",
        "Accuracy – 0.1"
      ],
      detailedFeatures: [
        "Best in class LCD Display.",
        "Automatic and Manual Cleaning support.",
        "Cleaning history on the display and on cloud.",
        "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.",
        "Bidirectional communication through RS 232 port.",
        "Detachable Ultrasonic Sensor.",
        "Right to Repair – if you can't fix it, you don't own it.",
        "Food grade Stainless Steel 304 body."
      ],
      specifications: {
        'Analysis Time': '30 seconds',
        'Parameters': 'Fat, SNF, Protein, Density, CLR',
        'Display': 'LCD',
        'Material': 'Stainless Steel 304',
        'Voltage': '100-240V',
        'Weight': '3.5 Kg',
        'Dimensions': '145 x 210 x 220 mm',
        'Warranty': '1 Year'
      },
      benefits: [
        'Fastest analysis in its class with 30-second results',
        'Robust and rugged shock-proof body for long life',
        'Easy to use interface with minimal training required',
        'Automatic cleaning reduces manual effort',
        'High accuracy ensures reliable results',
        'Compact design saves valuable counter space'
      ]
    }
  };

  useEffect(() => {
    if (productId) {
      const foundProduct = productData[productId as keyof typeof productData];
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/milk-analyzers');
      }
    }
  }, [productId, navigate]);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Download Started",
      description: `${product.name} brochure is being downloaded.`,
    });
  };

  const handleContactSales = () => {
    toast({
      title: "Redirecting to Sales",
      description: "You'll be connected with our sales team shortly.",
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Product not found</h2>
          <Link to="/milk-analyzers">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container-custom py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-mylken-primary">Home</Link>
              <span>/</span>
              <Link to="/milk-analyzers" className="hover:text-mylken-primary">Milk Analyzers</Link>
              <span>/</span>
              <span className="text-mylken-primary">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Header */}
        <section className="bg-white py-8 border-b">
          <div className="container-custom">
            <div className="flex items-start gap-6">
              <Button 
                variant="outline" 
                onClick={() => navigate('/milk-analyzers')}
                className="shrink-0"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Products
              </Button>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}/5</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-mylken-dark mb-4">{product.name}</h1>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-3xl font-bold text-mylken-primary flex items-center">
                      <IndianRupee size={24} />
                      {product.price.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-mylken-primary" />
                        <span>Fast Analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>ISO Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-mylken-accent" />
                        <span>High Accuracy</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="lg" 
                      className="bg-mylken-primary text-white"
                      onClick={handleGetQuote}
                    >
                      Get Quote
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleDownloadBrochure}
                    >
                      <Download size={16} className="mr-2" />
                      Brochure
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleContactSales}
                    >
                      <Phone size={16} className="mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Content */}
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-mylken-primary" />
                          Product Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-mylken-dark mb-3">Product Details</h4>
                            <ul className="space-y-2">
                              {product.productDescription.map((desc: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-mylken-accent mt-2 shrink-0"></div>
                                  <span className="text-gray-700">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-mylken-dark mb-3">Key Highlights</h4>
                            <ul className="space-y-2">
                              {product.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ListChecks className="w-5 h-5 text-mylken-primary" />
                          Detailed Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.detailedFeatures.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Zap className="w-4 h-4 text-mylken-primary mt-1 shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Gauge className="w-5 h-5 text-mylken-primary" />
                          Technical Specifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">{key}:</span>
                              <span className="text-mylken-primary font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="benefits" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-mylken-primary" />
                          Key Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {product.benefits.map((benefit: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-mylken-light/20 to-mylken-accent/10 rounded-lg border-l-4 border-mylken-primary">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      className="w-full bg-mylken-primary text-white"
                      onClick={handleGetQuote}
                    >
                      Request Quote
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleDownloadBrochure}
                    >
                      <Download size={16} className="mr-2" />
                      Download Brochure
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsConsultationModalOpen(true)}
                    >
                      <Phone size={16} className="mr-2" />
                      Expert Consultation
                    </Button>
                  </CardContent>
                </Card>

                {/* Product Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Package className="w-5 h-5 text-mylken-primary" />
                      Product Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Analysis Time:</span>
                      <span className="font-medium">30 seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warranty:</span>
                      <span className="font-medium">1 Year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material:</span>
                      <span className="font-medium">Stainless Steel</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Products */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Our experts are here to help you choose the right analyzer for your needs.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsConsultationModalOpen(true)}
                    >
                      Get Expert Advice
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={product}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;

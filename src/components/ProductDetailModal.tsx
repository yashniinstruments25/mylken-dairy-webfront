import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Phone, Mail, CheckCircle, FileText, Settings, Award } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  specifications?: { [key: string]: string };
  applications?: string[];
  benefits?: string[];
  category?: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote?: () => void;
  onDownloadBrochure?: () => void;
  onContactSales?: () => void;
}

const ProductDetailModal = ({ 
  product, 
  isOpen, 
  onClose, 
  onRequestQuote, 
  onDownloadBrochure, 
  onContactSales 
}: ProductDetailModalProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  if (!product) return null;

  const handleQuoteRequest = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      toast({
        title: "Quote Request Sent",
        description: `We'll send you a detailed quote for ${product.name} shortly.`,
      });
      onClose();
    }
  };

  const handleContactExpert = () => {
    if (onContactSales) {
      onContactSales();
    } else {
      toast({
        title: "Expert Consultation",
        description: "Our technical expert will contact you within 24 hours.",
      });
      onClose();
    }
  };

  const handleDownloadBrochure = () => {
    if (onDownloadBrochure) {
      onDownloadBrochure();
    } else {
      toast({
        title: "Download Started",
        description: `${product.name} product brochure is being downloaded.`,
      });
    }
  };

  // Enhanced product data with more details
  const enhancedProduct = {
    ...product,
    specifications: product.specifications || {
      "Model": product.name,
      "Application": product.applications?.[0] || "Dairy Processing",
      "Display Type": "LCD",
      "Warranty": "1 Year",
      "Power Supply": "220V AC",
      "Operating Temperature": "5°C to 40°C"
    },
    benefits: product.benefits || [
      "Improved efficiency and productivity",
      "Consistent quality results",
      "User-friendly operation",
      "Low maintenance requirements",
      "Cost-effective solution"
    ],
    keyHighlights: [
      "30-second analysis",
      "Fat, SNF, Protein analysis",
      "User-friendly interface",
      "Basic parameters testing"
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-mylken-primary to-mylken-primary/90">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold text-white mb-2">
                  {product.name}
                </DialogTitle>
                <Badge variant="secondary" className="bg-mylken-accent text-white">
                  {product.category || 'Dairy Equipment'}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              {/* Custom Tab Navigation */}
              <TabsList className="grid w-full grid-cols-4 bg-gray-50 rounded-none border-b h-14">
                <TabsTrigger 
                  value="overview" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-mylken-primary data-[state=active]:border-b-2 data-[state=active]:border-mylken-primary rounded-none h-full"
                >
                  <FileText size={16} />
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="features" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-mylken-primary data-[state=active]:border-b-2 data-[state=active]:border-mylken-primary rounded-none h-full"
                >
                  <Settings size={16} />
                  Features
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-mylken-primary data-[state=active]:border-b-2 data-[state=active]:border-mylken-primary rounded-none h-full"
                >
                  <FileText size={16} />
                  Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="benefits" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-mylken-primary data-[state=active]:border-b-2 data-[state=active]:border-mylken-primary rounded-none h-full"
                >
                  <Award size={16} />
                  Benefits
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto">
                <TabsContent value="overview" className="mt-0 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="space-y-4">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                    </div>

                    {/* Product Overview */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-mylken-dark mb-3 flex items-center gap-2">
                          <FileText className="text-mylken-primary" size={20} />
                          Product Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-mylken-dark mb-3">Key Highlights</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {enhancedProduct.keyHighlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {product.applications && (
                        <div>
                          <h4 className="font-semibold text-mylken-dark mb-2">Applications</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-0 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-mylken-dark mb-4 flex items-center gap-2">
                        <Settings className="text-mylken-primary" size={20} />
                        Product Features
                      </h3>
                      <div className="space-y-3">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="text-mylken-accent mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-mylken-primary/5 to-mylken-accent/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-mylken-dark mb-3">Why Choose This Product?</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our advanced technology ensures reliable performance, accurate results, and efficient operation. 
                        Designed with user experience in mind, this equipment delivers consistent quality while minimizing 
                        operational costs and maintenance requirements.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="mt-0 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-mylken-dark mb-4 flex items-center gap-2">
                        <FileText className="text-mylken-primary" size={20} />
                        Technical Specifications
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(enhancedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">{key}</span>
                            <span className="text-mylken-dark font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-mylken-primary/5 p-6 rounded-lg border border-mylken-primary/20">
                        <h4 className="font-semibold text-mylken-dark mb-2">Quality Assurance</h4>
                        <p className="text-sm text-gray-600">
                          All our equipment undergoes rigorous testing to ensure it meets international quality standards 
                          and provides reliable performance in demanding industrial environments.
                        </p>
                      </div>
                      
                      <div className="bg-mylken-accent/5 p-6 rounded-lg border border-mylken-accent/20">
                        <h4 className="font-semibold text-mylken-dark mb-2">Support & Service</h4>
                        <p className="text-sm text-gray-600">
                          Comprehensive warranty coverage with dedicated technical support and maintenance services 
                          to ensure optimal performance throughout the equipment lifecycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="mt-0 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-mylken-dark mb-4 flex items-center gap-2">
                        <Award className="text-mylken-primary" size={20} />
                        Key Benefits
                      </h3>
                      <div className="space-y-3">
                        {enhancedProduct.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-50/50 rounded-lg border border-green-100">
                            <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-mylken-primary to-mylken-primary/80 p-6 rounded-lg text-white">
                        <h4 className="font-bold mb-3">Return on Investment</h4>
                        <p className="text-sm text-mylken-light">
                          Experience significant cost savings through improved efficiency, reduced waste, 
                          and enhanced product quality that leads to better market positioning.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-mylken-accent to-mylken-accent/80 p-6 rounded-lg text-white">
                        <h4 className="font-bold mb-3">Expert Support</h4>
                        <p className="text-sm">
                          Our team of experienced engineers provides comprehensive training, installation support, 
                          and ongoing technical assistance to maximize your equipment's potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Footer Actions */}
          <div className="border-t bg-gray-50 px-6 py-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Phone size={14} />
                  <span>Call for pricing</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={14} />
                  <span>Custom configurations available</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleContactExpert}
                  className="border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white"
                >
                  Contact Expert
                </Button>
                <Button 
                  onClick={handleQuoteRequest}
                  className="bg-mylken-primary hover:bg-mylken-primary/90"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;

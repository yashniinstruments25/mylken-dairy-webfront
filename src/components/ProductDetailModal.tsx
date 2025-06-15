
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { IndianRupee, CheckCircle, Star, Clock, Zap, Wifi, Download, Phone, ListChecks, FileText, Award, Shield, Gauge } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    features: string[];
    category?: string;
    productDescription?: string[];
    detailedFeatures?: string[];
  };
  onRequestQuote?: () => void;
  onDownloadBrochure?: () => void;
  onContactSales?: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  product,
  onRequestQuote,
  onDownloadBrochure,
  onContactSales
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const keyHighlights = [
    { icon: Clock, label: "Fast Analysis", color: "text-blue-500" },
    { icon: Award, label: "ISO Certified", color: "text-green-500" },
    { icon: Gauge, label: "High Accuracy", color: "text-purple-500" },
    { icon: Shield, label: "Reliable", color: "text-orange-500" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-mylken-primary via-mylken-primary/90 to-mylken-accent text-white p-8">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              {product.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-wrap items-center justify-between gap-6 mt-6">
            <div className="flex items-center gap-3">
              <Badge className="bg-white text-mylken-primary text-xl px-6 py-3 hover:bg-white/90">
                <IndianRupee size={20} />
                {product.price.toLocaleString()}
              </Badge>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8/5 Rating</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <highlight.icon className={`w-4 h-4 ${highlight.color}`} />
                  <span className="text-sm font-medium">{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mx-6 mt-6">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-2">
                <ListChecks className="w-4 h-4" />
                Features
              </TabsTrigger>
              <TabsTrigger value="specifications" className="flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Specifications
              </TabsTrigger>
            </TabsList>

            <div className="p-6">
              <TabsContent value="overview" className="space-y-6 mt-0">
                {product.productDescription && product.productDescription.length > 0 && (
                  <Card className="border-l-4 border-l-mylken-accent">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-mylken-dark mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-mylken-primary" />
                        Product Overview
                      </h3>
                      <div className="grid gap-4">
                        {product.productDescription.filter(desc => desc !== 'Product Details:').map((desc, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 bg-mylken-light/20 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-mylken-accent mt-2 shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="features" className="space-y-6 mt-0">
                {product.detailedFeatures && product.detailedFeatures.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-mylken-dark flex items-center gap-2">
                      <ListChecks className="w-5 h-5 text-mylken-primary" />
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.detailedFeatures.map((feature, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6 mt-0">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-mylken-dark mb-4 flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-mylken-primary" />
                      Technical Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-600">Analysis Time</span>
                          <span className="text-mylken-dark">60 seconds</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-600">Sample Volume</span>
                          <span className="text-mylken-dark">25ml minimum</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-600">Temperature Range</span>
                          <span className="text-mylken-dark">5°C to 40°C</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-600">Power Supply</span>
                          <span className="text-mylken-dark">220V AC</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-600">Display</span>
                          <span className="text-mylken-dark">LCD Digital</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-600">Warranty</span>
                          <span className="text-mylken-dark">2 Years</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Action Footer */}
        <div className="border-t bg-gray-50/50 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 bg-mylken-primary text-white hover:bg-mylken-primary/90 h-12 text-base font-medium"
              onClick={onRequestQuote}
            >
              Request Quote
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 hover:bg-mylken-light border-mylken-primary text-mylken-primary h-12"
              onClick={onDownloadBrochure}
            >
              <Download size={18} className="mr-2" />
              Download Brochure
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 hover:bg-mylken-accent/20 border-mylken-accent text-mylken-accent h-12"
              onClick={onContactSales}
            >
              <Phone size={18} className="mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;

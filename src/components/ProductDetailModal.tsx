
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IndianRupee, CheckCircle, Star, Clock, Zap, Wifi, Download, Phone, ListChecks, FileText } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price?: number;
    minPrice?: number;
    maxPrice?: number;
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
  // Handle price display - use price if available, otherwise use minPrice
  const displayPrice = product.price || product.minPrice || 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-mylken-primary flex items-center gap-2">
            <div className="w-8 h-8 bg-mylken-accent/20 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-mylken-primary" />
            </div>
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Price and Quick Info */}
          <div className="bg-mylken-light/30 rounded-lg p-4 border-l-4 border-mylken-accent">
            <div className="flex justify-between items-center mb-3">
              <Badge className="bg-mylken-primary text-white text-lg px-4 py-2">
                <IndianRupee size={16} />
                {displayPrice.toLocaleString()}
                {product.minPrice && product.maxPrice && product.minPrice !== product.maxPrice && (
                  <span className="ml-1">- ₹{product.maxPrice.toLocaleString()}</span>
                )}
              </Badge>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">4.8/5 Rating</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mylken-primary" />
                <span>Fast Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-mylken-accent" />
                <span>High Accuracy</span>
              </div>
              {product.name.includes('IoT') && (
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-blue-500" />
                  <span>IoT Enabled</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            {/* Product Description */}
            {product.productDescription && product.productDescription.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-mylken-dark flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mylken-primary" />
                  Product Details
                </h3>
                <ul className="space-y-2">
                  {product.productDescription.filter(desc => desc !== 'Product Details:').map((desc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-mylken-accent mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-700">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Detailed Features */}
            {product.detailedFeatures && product.detailedFeatures.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-mylken-dark flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-mylken-primary" />
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.detailedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button 
              className="flex-1 bg-mylken-primary text-white hover:bg-mylken-primary/90"
              onClick={onRequestQuote}
            >
              Request Quote
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 hover:bg-mylken-light"
              onClick={onDownloadBrochure}
            >
              <Download size={16} className="mr-2" />
              Download Brochure
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 hover:bg-mylken-accent/20"
              onClick={onContactSales}
            >
              <Phone size={16} className="mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;

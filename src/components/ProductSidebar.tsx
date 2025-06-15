
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Download, 
  Phone, 
  Package
} from 'lucide-react';
import { ProductData } from '@/types/product';

interface ProductSidebarProps {
  product: ProductData;
  onGetQuote: () => void;
  onDownloadBrochure: () => void;
  onConsultation: () => void;
}

const ProductSidebar = ({ product, onGetQuote, onDownloadBrochure, onConsultation }: ProductSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            className="w-full bg-mylken-primary text-white"
            onClick={onGetQuote}
          >
            Request Quote
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onDownloadBrochure}
          >
            <Download size={16} className="mr-2" />
            Download Brochure
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onConsultation}
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

      {/* Need Help */}
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
            onClick={onConsultation}
          >
            Get Expert Advice
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSidebar;

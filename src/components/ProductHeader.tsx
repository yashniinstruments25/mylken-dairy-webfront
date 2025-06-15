
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  IndianRupee, 
  Star, 
  Clock, 
  Download, 
  Phone, 
  Shield,
  Award
} from 'lucide-react';
import { ProductData } from '@/types/product';

interface ProductHeaderProps {
  product: ProductData;
  onGetQuote: () => void;
  onDownloadBrochure: () => void;
  onContactSales: () => void;
}

const ProductHeader = ({ product, onGetQuote, onDownloadBrochure, onContactSales }: ProductHeaderProps) => {
  const navigate = useNavigate();

  return (
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
                  onClick={onGetQuote}
                >
                  Get Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={onDownloadBrochure}
                >
                  <Download size={16} className="mr-2" />
                  Brochure
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={onContactSales}
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
  );
};

export default ProductHeader;

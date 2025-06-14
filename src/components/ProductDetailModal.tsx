
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IndianRupee, CheckCircle, Star, Clock, Zap, Wifi } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    features: string[];
    category?: string;
  };
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product }) => {
  // Enhanced product data with detailed specifications
  const getProductDetails = (productName: string) => {
    const baseDetails = {
      warranty: '2 Years',
      certification: 'ISO 9001:2015',
      powerRequirement: '220V AC',
      dimensions: '45cm x 35cm x 25cm',
      weight: '8-12 kg',
      sampleVolume: '20-30ml',
      accuracy: '±0.1%',
      repeatability: '±0.05%',
      calibration: 'Auto-calibration',
      displayType: 'LCD Display',
      dataStorage: '1000+ records',
      connectivity: 'USB Port',
      operatingTemp: '5°C to 35°C',
      humidity: '20% to 80% RH'
    };

    // Add specific details based on product type
    if (productName.includes('IoT') || productName.includes('IOT')) {
      return {
        ...baseDetails,
        connectivity: 'WiFi, Bluetooth, USB',
        cloudSync: 'Real-time data sync',
        mobileApp: 'Android & iOS compatible',
        remoteAccess: 'Web dashboard included',
        notifications: 'Email & SMS alerts'
      };
    }

    if (productName.includes('Thermal Printer')) {
      return {
        ...baseDetails,
        printSpeed: '50mm/sec',
        paperWidth: '57mm thermal paper',
        printResolution: '203 DPI',
        reportFormats: 'Standard & Custom formats'
      };
    }

    if (productName.includes('Twinsonic')) {
      return {
        ...baseDetails,
        sensorType: 'Dual Ultrasonic Sensors',
        measurementTime: '15-20 seconds',
        accuracy: '±0.05%',
        selfDiagnostics: 'Built-in sensor check'
      };
    }

    return baseDetails;
  };

  const productDetails = getProductDetails(product.name);

  const getApplications = () => [
    'Dairy farms and cooperatives',
    'Milk collection centers',
    'Quality control laboratories',
    'Food processing units',
    'Government testing facilities',
    'Research institutions'
  ];

  const getBenefits = () => [
    'Rapid and accurate analysis',
    'Reduces manual testing time',
    'Ensures consistent quality',
    'Prevents adulteration detection',
    'Improves operational efficiency',
    'Cost-effective solution'
  ];

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
                {product.price.toLocaleString()}
              </Badge>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">4.8/5 Rating</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mylken-primary" />
                <span>30 sec analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-mylken-accent" />
                <span>±0.1% Accuracy</span>
              </div>
              {product.name.includes('IoT') && (
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-blue-500" />
                  <span>IoT Enabled</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-mylken-dark mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-mylken-primary" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded bg-white">
                  <div className="w-2 h-2 rounded-full bg-mylken-accent mt-2 animate-pulse"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-lg font-semibold text-mylken-dark mb-3">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(productDetails).map(([key, value]) => (
                <div key={key} className="bg-white p-3 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-sm font-medium text-mylken-dark">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-lg font-semibold text-mylken-dark mb-3">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {getApplications().map((app, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-mylken-primary"></div>
                  <span className="text-sm text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-mylken-dark mb-3">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {getBenefits().map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <Button className="flex-1 bg-mylken-primary text-white hover:bg-mylken-primary/90">
              Request Quote
            </Button>
            <Button variant="outline" className="flex-1 hover:bg-mylken-light">
              Download Brochure
            </Button>
            <Button variant="outline" className="hover:bg-mylken-accent/20">
              Contact Sales
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;

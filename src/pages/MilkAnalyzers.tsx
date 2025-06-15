
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  IndianRupee, 
  Star, 
  Clock, 
  Shield,
  Eye,
  Download,
  Phone
} from 'lucide-react';
import { getProductsByCategory } from '@/utils/productData';

const MilkAnalyzers = () => {
  const navigate = useNavigate();
  const ultraScanBasic = getProductsByCategory('Ultra Scan Basic Series');
  const ultraScanAdvanced = getProductsByCategory('Ultra Scan Advanced Series');

  const handleViewProduct = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const ProductCard = ({ id, product }: { id: string; product: any }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <Badge variant="secondary" className="w-fit text-xs mb-2">
          {product.category}
        </Badge>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{product.rating}/5</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>Fast Analysis</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-mylken-primary flex items-center">
          <IndianRupee size={20} />
          {product.price.toLocaleString()}
        </div>
        
        <div className="space-y-2">
          {product.features.slice(0, 3).map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-3 h-3 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button 
            onClick={() => handleViewProduct(id)}
            className="flex-1 bg-mylken-primary text-white"
          >
            <Eye size={16} className="mr-2" />
            View Details
          </Button>
          <Button variant="outline" size="sm">
            <Download size={16} />
          </Button>
          <Button variant="outline" size="sm">
            <Phone size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-white py-12 border-b">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-mylken-dark mb-6">
                Milk Analyzers
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Professional-grade milk analyzers for accurate composition analysis. 
                From basic testing to advanced laboratory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Ultra Scan Basic Series */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-mylken-dark mb-8">Ultra Scan Basic Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ultraScanBasic.map(({ id, product }) => (
                <ProductCard key={id} id={id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Ultra Scan Advanced Series */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-mylken-dark mb-8">Ultra Scan Advanced Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ultraScanAdvanced.map(({ id, product }) => (
                <ProductCard key={id} id={id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MilkAnalyzers;

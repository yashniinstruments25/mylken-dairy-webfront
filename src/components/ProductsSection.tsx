
import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  featured: boolean;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Advanced Milk Analyzer",
    category: "Analyzers",
    description: "High-precision milk analyzer with advanced features for fat, SNF, protein measurement.",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Modern Khoya Machine",
    category: "Processing",
    description: "Efficient khoya making machine with temperature control and uniform heating.",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Premium Milk Can",
    category: "Storage",
    description: "Heavy-duty stainless steel milk cans with secure lids and easy carrying handles.",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Compact Milk Analyzer",
    category: "Analyzers",
    description: "Space-saving milk analyzer with quick results and user-friendly operation.",
    featured: true,
    image: "/placeholder.svg"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section bg-mylken-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-3 bg-mylken-cream text-mylken-blue hover:bg-mylken-cream/80">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-blue mb-4">Featured Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality dairy equipment designed for precision, 
            efficiency, and reliability in modern dairy operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-square relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-mylken-blue text-white">Featured</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-mylken-blue">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <a href="#" className="flex items-center text-mylken-blue hover:text-mylken-lightBlue transition-colors">
                  View Details <ArrowUpRight size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center">
            View All Products <ArrowUpRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

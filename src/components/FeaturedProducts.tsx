
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smart Milk Analyzer",
      image: "/images/milk-analyzer.jpg",
      description: "Next-gen milk analyzer with IoT connectivity for real-time quality monitoring.",
      features: ["IoT Enabled", "User Friendly"]
    },
    {
      id: 2,
      name: "Automated Khoya Machine",
      image: "/images/khoya-machine.jpg",
      description: "Smart khoya making machine with temperature control and maintenance alerts.",
      features: ["Energy Efficient", "Smart Control"]
    },
    {
      id: 3,
      name: "Connected Milk Can",
      image: "/images/milk-can.jpg",
      description: "Smart stainless steel milk cans with temperature sensors and tracking.",
      features: ["Temperature Sensing", "Durable"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <Badge variant="outline" className="bg-mylken-light text-mylken-primary mb-3">Startup Innovation</Badge>
            <h2 className="text-3xl font-bold text-mylken-dark">Our Solutions</h2>
          </div>
          <Link 
            to="/products"
            className="mt-4 md:mt-0 flex items-center text-mylken-primary hover:text-mylken-secondary transition-colors group"
          >
            View All Solutions 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="pt-5">
                <h3 className="text-xl font-semibold text-mylken-dark mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary transition-colors group text-sm"
                >
                  Learn More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-mylken-light/50 text-mylken-primary px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

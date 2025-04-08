
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Milk Analyzer",
      image: "/images/milk-analyzer.jpg",
      description: "High-precision milk analyzer with advanced ultrasonic technology for accurate measurement of fat, SNF, protein, and other parameters.",
      features: ["Accurate Results", "Fast Analysis", "User Friendly"]
    },
    {
      id: 2,
      name: "Khoya Machine",
      image: "/images/khoya-machine.jpg",
      description: "State-of-the-art khoya making machine with temperature control and uniform heating for consistent product quality.",
      features: ["Energy Efficient", "Temperature Control", "Stainless Steel"]
    },
    {
      id: 3,
      name: "Stainless Steel Milk Can",
      image: "/images/milk-can.jpg",
      description: "Heavy-duty stainless steel milk cans with secure lids and ergonomic handles for safe and convenient milk transport.",
      features: ["Durable", "Easy to Clean", "Tamper-proof Lid"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <Badge variant="outline" className="bg-mylken-light text-mylken-primary mb-3">Featured Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark">Our Best Selling Equipment</h2>
          </div>
          <Link 
            to="/products"
            className="mt-4 md:mt-0 flex items-center text-mylken-primary hover:text-mylken-secondary transition-colors group"
          >
            View All Products 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <ul className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs bg-mylken-accent text-mylken-dark px-2 py-1 rounded-full">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-mylken-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 line-clamp-2">{product.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary transition-colors group"
                >
                  Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <span className="inline-block px-2 py-1 bg-mylken-light/50 text-mylken-primary text-sm rounded-md">
                  Bestseller
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-mylken-dark mb-6">Trusted by Leading Dairy Businesses</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <div className="bg-gray-100 h-16 w-32 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-bold">Client {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

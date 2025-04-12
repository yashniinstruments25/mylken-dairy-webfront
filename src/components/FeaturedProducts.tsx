
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
      description: "Next-gen milk analyzer with IoT connectivity and cloud analytics for real-time quality monitoring.",
      features: ["IoT Enabled", "Cloud Analytics", "User Friendly"]
    },
    {
      id: 2,
      name: "Automated Khoya Machine",
      image: "/images/khoya-machine.jpg",
      description: "AI-powered khoya making machine with smart temperature control and predictive maintenance.",
      features: ["AI Powered", "Energy Efficient", "Smart Control"]
    },
    {
      id: 3,
      name: "Connected Milk Can",
      image: "/images/milk-can.jpg",
      description: "Smart stainless steel milk cans with temperature sensors and location tracking for supply chain visibility.",
      features: ["Temperature Sensing", "Location Tracking", "Durable"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <Badge variant="outline" className="bg-mylken-light text-mylken-primary mb-3">Startup Innovation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark">Our Game-Changing Solutions</h2>
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
              <CardContent className="pt-5">
                <h3 className="text-xl font-semibold text-mylken-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 line-clamp-2 text-sm">{product.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center text-mylken-primary hover:text-mylken-secondary transition-colors group text-sm"
                >
                  Learn More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <span className="inline-block px-2 py-1 bg-mylken-light/50 text-mylken-primary text-xs rounded-md">
                  New Release
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-mylken-dark mb-5">Trusted by Forward-Thinking Dairy Businesses</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <div className="bg-gray-100 h-14 w-28 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">Partner {item}</span>
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

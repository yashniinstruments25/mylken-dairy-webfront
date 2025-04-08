
import React, { useState } from 'react';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  featured: boolean;
  image: string;
  specs?: string[];
  rating?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Advanced Milk Analyzer",
    category: "Analyzers",
    description: "High-precision milk analyzer with advanced features for fat, SNF, protein measurement.",
    featured: true,
    image: "/images/milk-analyzer.jpg",
    specs: ["13 Parameters", "60-second analysis", "Auto Cleaning", "Data Storage"],
    rating: 5
  },
  {
    id: 2,
    name: "Modern Khoya Machine",
    category: "Processing",
    description: "Efficient khoya making machine with temperature control and uniform heating.",
    featured: true,
    image: "/images/khoya-machine.jpg",
    specs: ["200L Capacity", "Digital Control", "SS304 Construction", "Energy Efficient"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Premium Milk Can",
    category: "Storage",
    description: "Heavy-duty stainless steel milk cans with secure lids and easy carrying handles.",
    featured: true,
    image: "/images/milk-can.jpg",
    specs: ["Food Grade SS", "Tamper-proof", "40L Capacity", "Ergonomic Design"],
    rating: 4.9
  },
  {
    id: 4,
    name: "Compact Milk Analyzer",
    category: "Analyzers",
    description: "Space-saving milk analyzer with quick results and user-friendly operation.",
    featured: true,
    image: "/placeholder.svg",
    specs: ["9 Parameters", "45-second analysis", "Portable Design", "Battery Option"],
    rating: 4.7
  },
  {
    id: 5,
    name: "Industrial Milk Chiller",
    category: "Cold Storage",
    description: "Rapid cooling system for maintaining milk freshness and extending shelf life.",
    featured: false,
    image: "/placeholder.svg",
    specs: ["500L Capacity", "Quick Cooling", "Digital Temperature Control", "Energy Saving"],
    rating: 4.8
  },
  {
    id: 6,
    name: "Automatic Paneer Press",
    category: "Processing",
    description: "Consistent pressure application for uniform paneer texture and moisture content.",
    featured: false,
    image: "/placeholder.svg",
    specs: ["100kg/hr Output", "Pressure Control", "SS Construction", "CIP Compatible"],
    rating: 4.6
  }
];

const ProductsSection = () => {
  const [category, setCategory] = useState<string | null>(null);
  
  const filteredProducts = category 
    ? products.filter(p => p.category === category) 
    : products;
  
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  return (
    <section id="products" className="section bg-mylken-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-3 bg-mylken-accent text-mylken-dark hover:bg-mylken-accent/80">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-4">Premium Dairy Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality dairy equipment designed for precision, 
            efficiency, and reliability in modern dairy operations.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button 
              variant={category === null ? "default" : "outline"}
              onClick={() => setCategory(null)}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button 
                key={cat}
                variant={category === cat ? "default" : "outline"}
                onClick={() => setCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Featured Products Carousel */}
        {!category && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-mylken-dark mb-6">Featured Products</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {products.filter(p => p.featured).map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden h-full">
                        <div className="aspect-square relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                          <Badge className="absolute top-3 left-3 bg-mylken-primary text-white">
                            Featured
                          </Badge>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-mylken-dark">{product.name}</CardTitle>
                              <CardDescription>{product.category}</CardDescription>
                            </div>
                            <div className="flex items-center text-yellow-500">
                              <Star size={16} fill="currentColor" />
                              <span className="ml-1 text-sm">{product.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {product.specs?.map((spec, idx) => (
                              <span key={idx} className="text-xs bg-mylken-light px-2 py-1 rounded-full text-mylken-dark">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button variant="link" className="text-mylken-primary hover:text-mylken-secondary p-0">
                            View Details <ArrowUpRight size={16} className="ml-1" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white" />
              <CarouselNext className="right-2 bg-white" />
            </Carousel>
          </div>
        )}
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-square relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                {product.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-mylken-primary text-white">Featured</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-mylken-dark">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-1">
                  {product.specs?.slice(0, 3).map((spec, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check size={14} className="mr-2 text-mylken-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <Button variant="link" className="text-mylken-primary hover:text-mylken-secondary p-0">
                  View Details <ArrowUpRight size={16} className="ml-1" />
                </Button>
                <Button size="sm">
                  Inquire Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Can't find what you're looking for? We offer customized solutions for dairy businesses of all sizes.</p>
          <Button className="bg-mylken-primary text-white hover:bg-mylken-secondary">
            Request Custom Quote <ArrowUpRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

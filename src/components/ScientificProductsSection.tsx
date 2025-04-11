
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

interface ScientificProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  featured: boolean;
  image: string;
  specs?: string[];
  rating?: number;
}

const scientificProducts: ScientificProduct[] = [
  {
    id: 1,
    name: "Advanced Spectrophotometer",
    category: "Analysis",
    description: "High-precision spectrophotometer for accurate measurement of light absorption in liquid samples.",
    featured: true,
    image: "/images/spectrophotometer.jpg",
    specs: ["UV-Vis Range", "0.001 abs resolution", "Data export", "Automated calibration"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Digital Centrifuge",
    category: "Lab Equipment",
    description: "High-speed centrifuge with digital controls for precise separation of biological samples.",
    featured: true,
    image: "/images/centrifuge.jpg",
    specs: ["15,000 RPM max", "Digital controls", "Auto-balance", "Multiple rotors"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Precision Analytical Balance",
    category: "Measurement",
    description: "High-accuracy analytical balance for laboratory weighing with excellent repeatability.",
    featured: true,
    image: "/images/analytical-balance.jpg",
    specs: ["0.1mg readability", "Internal calibration", "Draft shield", "GLP compliance"],
    rating: 5.0
  },
  {
    id: 4,
    name: "Laboratory Autoclave",
    category: "Sterilization",
    description: "Professional autoclave for sterilizing laboratory equipment and media with precise temperature control.",
    featured: true,
    image: "/placeholder.svg",
    specs: ["40L capacity", "Digital display", "Safety locks", "Multiple cycles"],
    rating: 4.7
  },
  {
    id: 5,
    name: "Digital pH Meter",
    category: "Analysis",
    description: "Advanced pH meter for accurate measurement of acidity and alkalinity in liquid samples.",
    featured: false,
    image: "/placeholder.svg",
    specs: ["±0.01 pH accuracy", "Auto calibration", "Data logging", "Temperature compensation"],
    rating: 4.8
  },
  {
    id: 6,
    name: "Laboratory Incubator",
    category: "Lab Equipment",
    description: "Precision temperature-controlled incubator for culturing microorganisms and biological samples.",
    featured: false,
    image: "/placeholder.svg",
    specs: ["50L capacity", "Digital control", "±0.1°C accuracy", "Forced air circulation"],
    rating: 4.6
  }
];

const ScientificProductsSection = () => {
  const [category, setCategory] = useState<string | null>(null);
  
  const filteredProducts = category 
    ? scientificProducts.filter(p => p.category === category) 
    : scientificProducts;
  
  const categories = Array.from(new Set(scientificProducts.map(p => p.category)));
  
  return (
    <section id="scientific-products" className="section bg-mylken-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-3 bg-mylken-accent text-mylken-dark hover:bg-mylken-accent/80">Laboratory Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-4">Scientific Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-precision laboratory equipment for research, 
            quality control, and scientific analysis applications.
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
            <h3 className="text-2xl font-semibold text-mylken-dark mb-6">Featured Scientific Products</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {scientificProducts.filter(p => p.featured).map((product) => (
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
          <p className="text-gray-600 mb-6">Need specialized laboratory equipment? We offer customized scientific solutions.</p>
          <Button className="bg-mylken-primary text-white hover:bg-mylken-secondary">
            Request Scientific Consultation <ArrowUpRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScientificProductsSection;


import React, { useState } from 'react';
import { ArrowLeft, Filter, Search, ShoppingCart, Phone, Mail, MapPin, Star, Check, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CreamSeparatorProduct {
  id: number;
  name: string;
  capacity: string;
  operationType: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  features: string[];
  image: string;
  description: string;
  specifications: {
    capacity: string;
    powerConsumption?: string;
    dimensions?: string;
    weight?: string;
    material: string;
    efficiency: string;
  };
}

const creamSeparatorProducts: CreamSeparatorProduct[] = [
  {
    id: 1,
    name: "60 LPH Hand Operated Cream Separator",
    capacity: "60 LPH",
    operationType: "Hand Operated",
    priceRange: "₹7,000.00 – ₹14,000.00",
    minPrice: 7000,
    maxPrice: 14000,
    features: ["Manual Operation", "Easy Maintenance", "Portable Design", "High Efficiency"],
    image: "/placeholder.svg",
    description: "Compact hand-operated cream separator ideal for small dairy operations with 60 LPH capacity.",
    specifications: {
      capacity: "60 Liters/Hour",
      dimensions: "45 x 35 x 85 cm",
      weight: "25 kg",
      material: "Stainless Steel",
      efficiency: "98%"
    }
  },
  {
    id: 2,
    name: "60 LPH Electric Operated Cream Separator",
    capacity: "60 LPH",
    operationType: "Electric Operated",
    priceRange: "₹11,000.00 – ₹18,000.00",
    minPrice: 11000,
    maxPrice: 18000,
    features: ["Electric Motor", "Consistent Performance", "Low Maintenance", "Auto Operation"],
    image: "/placeholder.svg",
    description: "Electric operated cream separator with 60 LPH capacity for efficient and consistent cream separation.",
    specifications: {
      capacity: "60 Liters/Hour",
      powerConsumption: "0.5 HP",
      dimensions: "50 x 40 x 90 cm",
      weight: "35 kg",
      material: "Stainless Steel",
      efficiency: "99%"
    }
  },
  {
    id: 3,
    name: "60 LPH SS Covering Cream Separator",
    capacity: "60 LPH",
    operationType: "SS Covering",
    priceRange: "₹8,200.00 – ₹16,500.00",
    minPrice: 8200,
    maxPrice: 16500,
    features: ["Stainless Steel Cover", "Hygienic Design", "Corrosion Resistant", "Easy Cleaning"],
    image: "/placeholder.svg",
    description: "Premium stainless steel covered cream separator with 60 LPH capacity for enhanced hygiene.",
    specifications: {
      capacity: "60 Liters/Hour",
      dimensions: "48 x 38 x 88 cm",
      weight: "30 kg",
      material: "SS304 Grade",
      efficiency: "98.5%"
    }
  },
  {
    id: 4,
    name: "90 LPH Hand Operated Cream Separator",
    capacity: "90 LPH",
    operationType: "Hand Operated",
    priceRange: "₹10,000.00 – ₹18,000.00",
    minPrice: 10000,
    maxPrice: 18000,
    features: ["Higher Capacity", "Manual Control", "Robust Build", "Cost Effective"],
    image: "/placeholder.svg",
    description: "High capacity hand-operated cream separator with 90 LPH capacity for medium dairy operations.",
    specifications: {
      capacity: "90 Liters/Hour",
      dimensions: "50 x 40 x 90 cm",
      weight: "35 kg",
      material: "Stainless Steel",
      efficiency: "98%"
    }
  },
  {
    id: 5,
    name: "90 LPH Electric Operated Cream Separator",
    capacity: "90 LPH",
    operationType: "Electric Operated",
    priceRange: "₹12,000.00 – ₹19,000.00",
    minPrice: 12000,
    maxPrice: 19000,
    features: ["Electric Motor", "Higher Throughput", "Automated Operation", "Energy Efficient"],
    image: "/placeholder.svg",
    description: "Electric cream separator with 90 LPH capacity offering automated and efficient operation.",
    specifications: {
      capacity: "90 Liters/Hour",
      powerConsumption: "0.75 HP",
      dimensions: "55 x 45 x 95 cm",
      weight: "45 kg",
      material: "Stainless Steel",
      efficiency: "99%"
    }
  },
  {
    id: 6,
    name: "300 LPH Hand Operated Cream Separator",
    capacity: "300 LPH",
    operationType: "Hand Operated",
    priceRange: "₹29,000.00 – ₹41,000.00",
    minPrice: 29000,
    maxPrice: 41000,
    features: ["High Capacity", "Industrial Grade", "Manual Operation", "Reliable Performance"],
    image: "/placeholder.svg",
    description: "Industrial grade hand-operated cream separator with 300 LPH capacity for large dairy operations.",
    specifications: {
      capacity: "300 Liters/Hour",
      dimensions: "80 x 60 x 120 cm",
      weight: "85 kg",
      material: "Stainless Steel",
      efficiency: "97%"
    }
  },
  {
    id: 7,
    name: "600 Hand Operated Cream Separator",
    capacity: "600 LPH",
    operationType: "Hand Operated",
    priceRange: "₹50,000.00 – ₹70,000.00",
    minPrice: 50000,
    maxPrice: 70000,
    features: ["Maximum Capacity", "Heavy Duty", "Commercial Grade", "High Efficiency"],
    image: "/placeholder.svg",
    description: "Heavy duty hand-operated cream separator with 600 LPH capacity for commercial dairy processing.",
    specifications: {
      capacity: "600 Liters/Hour",
      dimensions: "100 x 80 x 140 cm",
      weight: "150 kg",
      material: "SS316 Grade",
      efficiency: "96%"
    }
  },
  {
    id: 8,
    name: "1200 LPH SS Covering Cream Separator",
    capacity: "1200 LPH",
    operationType: "SS Covering",
    priceRange: "₹230,000.00 – ₹245,000.00",
    minPrice: 230000,
    maxPrice: 245000,
    features: ["Ultra High Capacity", "Premium SS Cover", "Industrial Grade", "Advanced Design"],
    image: "/placeholder.svg",
    description: "Ultra high capacity stainless steel covered cream separator for large scale dairy processing.",
    specifications: {
      capacity: "1200 Liters/Hour",
      powerConsumption: "3 HP",
      dimensions: "150 x 120 x 180 cm",
      weight: "300 kg",
      material: "SS316L Grade",
      efficiency: "99.5%"
    }
  }
];

const CreamSeparators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredProducts = creamSeparatorProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCapacity = selectedCapacity === 'all' || product.capacity.includes(selectedCapacity);
    const matchesType = selectedType === 'all' || product.operationType === selectedType;
    
    return matchesSearch && matchesCapacity && matchesType;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.minPrice - b.minPrice;
      case 'price-high':
        return b.minPrice - a.minPrice;
      case 'capacity':
        return parseInt(a.capacity) - parseInt(b.capacity);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const capacityOptions = Array.from(new Set(creamSeparatorProducts.map(p => p.capacity.split(' ')[0]))).sort((a, b) => parseInt(a) - parseInt(b));
  const typeOptions = Array.from(new Set(creamSeparatorProducts.map(p => p.operationType)));

  return (
    <div className="min-h-screen bg-mylken-light/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mylken-primary to-mylken-secondary text-white py-16">
        <div className="container-custom">
          <Link to="/" className="inline-flex items-center text-mylken-accent hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
              <Droplets className="mr-4 h-12 w-12" />
              Cream Separators
            </h1>
            <p className="text-xl text-mylken-light mb-6">
              Professional cream separation equipment for efficient dairy processing. Our range of cream separators 
              offers superior performance with various capacities to meet your dairy operation needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-mylken-accent text-mylken-dark px-4 py-2">
                Hand & Electric Operated
              </Badge>
              <Badge className="bg-mylken-accent text-mylken-dark px-4 py-2">
                60 - 1200 LPH Capacity
              </Badge>
              <Badge className="bg-mylken-accent text-mylken-dark px-4 py-2">
                Premium Quality
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search cream separators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCapacity} onValueChange={setSelectedCapacity}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Capacities</SelectItem>
                  {capacityOptions.map(capacity => (
                    <SelectItem key={capacity} value={capacity}>{capacity} LPH</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Operation Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {typeOptions.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="capacity">Capacity</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="rounded-l-none"
                >
                  Table
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedProducts.length} of {creamSeparatorProducts.length} cream separators
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="py-12">
        <div className="container-custom">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <Badge className="absolute top-3 right-3 bg-mylken-primary text-white">
                      {product.capacity}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-mylken-dark">{product.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Droplets size={16} className="mr-1 text-mylken-primary" />
                      {product.operationType}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Check size={14} className="mr-2 text-mylken-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-mylken-primary">
                      {product.priceRange}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart size={16} className="mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableCaption>Complete list of cream separators with specifications and pricing</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Efficiency</TableHead>
                    <TableHead>Price Range</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.capacity}</TableCell>
                      <TableCell>{product.operationType}</TableCell>
                      <TableCell>{product.specifications.efficiency}</TableCell>
                      <TableCell className="font-semibold text-mylken-primary">
                        {product.priceRange}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Phone size={14} />
                          </Button>
                          <Button size="sm">
                            Quote
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-mylken-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Cream Separator?</h2>
          <p className="text-mylken-light mb-8 max-w-2xl mx-auto">
            Our dairy experts are here to help you select the perfect cream separator for your needs. 
            Contact us for personalized recommendations and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light">
              <Phone className="mr-2" size={20} />
              Call Now: +91 12345 67890
            </Button>
            <Button variant="outline" className="border-mylken-accent text-mylken-accent hover:bg-mylken-accent hover:text-mylken-dark">
              <Mail className="mr-2" size={20} />
              Email Us
            </Button>
            <Button variant="outline" className="border-mylken-accent text-mylken-accent hover:bg-mylken-accent hover:text-mylken-dark">
              <MapPin className="mr-2" size={20} />
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreamSeparators;

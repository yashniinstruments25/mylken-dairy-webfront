
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Download, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Product category data
const productCategories = {
  'milk-analyzers': {
    title: 'Milk Analyzers',
    description: 'High-precision instruments for measuring milk composition including fat, protein, lactose, and SNF content.',
    heroImage: '/images/milk-analyzer-hero.jpg',
    products: [
      {
        id: 1,
        name: 'Ultrasonic Milk Analyzer',
        image: '/images/milk-analyzer.jpg',
        shortDesc: 'Advanced ultrasonic technology for rapid and accurate milk analysis.',
        specifications: [
          'Fat: 0-50%',
          'SNF: 0-15%',
          'Density: 1000-1160 kg/m³',
          'Protein: 0-15%',
          'Lactose: 0-20%',
          'Added Water: 0-70%'
        ],
        features: [
          'Fast analysis in 30 seconds',
          'Auto cleaning system',
          'LCD display with user-friendly interface',
          'Memory for up to 500 measurements',
          'Compact and portable design'
        ]
      },
      {
        id: 2,
        name: 'Infrared Milk Analyzer',
        image: '/placeholder.svg',
        shortDesc: 'Infrared technology for highly accurate milk component analysis.',
        specifications: [
          'Fat: 0-55%',
          'SNF: 0-20%',
          'Density: 1000-1160 kg/m³',
          'Protein: 0-15%',
          'Lactose: 0-20%',
          'Added Water: 0-80%'
        ],
        features: [
          'Fast analysis in 45 seconds',
          'Calibration for various milk types',
          'Touch screen interface',
          'USB and printer connectivity',
          'Advanced data management'
        ]
      }
    ]
  },
  'khoya-machines': {
    title: 'Khoya Making Machines',
    description: 'Efficient equipment for producing high-quality khoya with consistent texture and taste.',
    heroImage: '/images/khoya-machine.jpg',
    products: [
      {
        id: 1,
        name: 'Automatic Khoya Making Machine',
        image: '/images/khoya-machine.jpg',
        shortDesc: 'Fully automated process for consistent and high-quality khoya production.',
        specifications: [
          'Capacity: 100-200 kg/hour',
          'Power: 12-15 kW',
          'Material: Food-grade stainless steel',
          'Temperature Control: 30-150°C',
          'Dimension: 1800×900×1200 mm'
        ],
        features: [
          'Automated stirring system',
          'Digital temperature control',
          'Easy cleaning and maintenance',
          'Low energy consumption',
          'Continuous production capability'
        ]
      }
    ]
  },
  'milk-cans': {
    title: 'Milk Cans',
    description: 'Durable and hygienic containers for milk storage and transportation.',
    heroImage: '/images/milk-can.jpg',
    products: [
      {
        id: 1,
        name: 'Stainless Steel Milk Can',
        image: '/images/milk-can.jpg',
        shortDesc: 'Heavy-duty stainless steel cans for safe milk storage and transport.',
        specifications: [
          'Capacity: 20L, 30L, 40L, 50L',
          'Material: SS304 food-grade stainless steel',
          'Weight: 3-7 kg depending on capacity',
          'Handle: Ergonomic design',
          'Lid: Airtight with rubber seal'
        ],
        features: [
          'Leak-proof design',
          'Rust and corrosion resistant',
          'Easy to clean and sterilize',
          'Stackable design',
          'Temperature retention capability'
        ]
      }
    ]
  },
  'dairy-processing': {
    title: 'Dairy Processing Equipment',
    description: 'Complete range of equipment for dairy processing operations.',
    heroImage: '/placeholder.svg',
    products: [
      {
        id: 1,
        name: 'Milk Pasteurizer',
        image: '/placeholder.svg',
        shortDesc: 'Efficient pasteurization systems for safe milk processing.',
        specifications: [
          'Capacity: 500-10000 L/hr',
          'Temperature Range: 4-95°C',
          'Material: SS304/SS316',
          'Heating Method: Steam/Hot Water/Electric',
          'Cooling Method: Chilled Water/Ice Bank'
        ],
        features: [
          'PLC control system',
          'CIP compatibility',
          'Energy recovery system',
          'Automatic temperature control',
          'Data logging and monitoring'
        ]
      }
    ]
  },
  'testing-kits': {
    title: 'Quality Testing Kits',
    description: 'Reliable testing equipment for ensuring milk quality and safety.',
    heroImage: '/placeholder.svg',
    products: [
      {
        id: 1,
        name: 'Milk Adulteration Testing Kit',
        image: '/placeholder.svg',
        shortDesc: 'Comprehensive testing kit for detecting common adulterants in milk.',
        specifications: [
          'Tests: 23 different adulterants',
          'Test Time: 2-5 minutes per test',
          'Sample Size: 5-10 ml',
          'Kit Contents: Reagents, test tubes, droppers, manual',
          'Shelf Life: 1 year'
        ],
        features: [
          'Easy to use with minimal training',
          'Rapid results',
          'Portable carrying case',
          'Detailed instruction manual',
          'Cost-effective testing solution'
        ]
      }
    ]
  }
};

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get category data
    if (categoryId && productCategories[categoryId as keyof typeof productCategories]) {
      const categoryData = productCategories[categoryId as keyof typeof productCategories];
      setCategory(categoryData);
      // Set first product as selected by default
      if (categoryData.products && categoryData.products.length > 0) {
        setSelectedProduct(categoryData.products[0]);
      }
    }
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading category data...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-mylken-primary pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium">
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                {category.title}
              </h1>
              <p className="text-mylken-light text-lg mt-4">
                {category.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Products Display */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Product List Sidebar */}
              <div className="lg:col-span-3">
                <div className="bg-mylken-light/30 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-4 text-mylken-primary">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.products.map((product: any) => (
                      <button
                        key={product.id}
                        className={`w-full text-left p-3 rounded-md transition-colors ${
                          selectedProduct && selectedProduct.id === product.id
                            ? "bg-mylken-primary text-white"
                            : "hover:bg-mylken-light/80"
                        }`}
                        onClick={() => setSelectedProduct(product)}
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-mylken-accent/10 rounded-lg">
                    <h4 className="font-bold text-mylken-primary">Need Assistance?</h4>
                    <p className="text-sm mt-2 mb-4">Contact our product specialists for expert advice</p>
                    <div className="space-y-3">
                      <a href="tel:+1234567890" className="flex items-center text-sm text-mylken-primary">
                        <Phone size={16} className="mr-2" /> +1 (234) 567-890
                      </a>
                      <a href="mailto:info@mylken.com" className="flex items-center text-sm text-mylken-primary">
                        <Mail size={16} className="mr-2" /> info@mylken.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              {selectedProduct && (
                <motion.div 
                  className="lg:col-span-9"
                  key={selectedProduct.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    {/* Product Image */}
                    <div className="relative h-80 overflow-hidden bg-mylken-light/30">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6">
                          <h2 className="text-3xl font-bold text-white">{selectedProduct.name}</h2>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Content */}
                    <div className="p-8">
                      <p className="text-lg text-gray-700 mb-8">
                        {selectedProduct.shortDesc}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Specifications */}
                        <div>
                          <h3 className="text-xl font-bold text-mylken-primary mb-4 flex items-center">
                            <span className="mr-2 bg-mylken-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">S</span>
                            Specifications
                          </h3>
                          <ul className="space-y-3">
                            {selectedProduct.specifications.map((spec: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <Check size={16} className="text-mylken-accent mt-1 mr-2" />
                                <span className="text-gray-700">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Features */}
                        <div>
                          <h3 className="text-xl font-bold text-mylken-primary mb-4 flex items-center">
                            <span className="mr-2 bg-mylken-accent text-mylken-dark w-8 h-8 rounded-full flex items-center justify-center text-sm">F</span>
                            Features & Benefits
                          </h3>
                          <ul className="space-y-3">
                            {selectedProduct.features.map((feature: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <Check size={16} className="text-mylken-accent mt-1 mr-2" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Call to Action */}
                      <div className="mt-10 flex flex-col sm:flex-row gap-4 border-t pt-8">
                        <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-secondary hover:text-white flex items-center">
                          Request Quotation <ArrowRight size={16} className="ml-2" />
                        </Button>
                        <Button variant="outline" className="border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white flex items-center">
                          Download Brochure <Download size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Related Products */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-mylken-dark mb-6">Related Products</h3>
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {category.products.filter((p: any) => p.id !== selectedProduct.id).map((product: any) => (
                        <motion.div 
                          key={product.id}
                          className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => setSelectedProduct(product)}
                          variants={itemVariants}
                        >
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover object-center"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="text-lg font-bold text-mylken-primary">{product.name}</h4>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.shortDesc}</p>
                            <button className="mt-3 text-sm text-mylken-accent hover:text-mylken-secondary flex items-center">
                              View Details <ArrowRight size={14} className="ml-1" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
        
        {/* Inquiry Form */}
        <section className="py-16 bg-mylken-light/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-mylken-dark">Request Product Information</h2>
                <p className="text-gray-600 mt-2">Fill out the form below and our product specialist will get back to you</p>
              </div>
              
              <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mylken-primary focus:border-mylken-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mylken-primary focus:border-mylken-primary"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mylken-primary focus:border-mylken-primary"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mylken-primary focus:border-mylken-primary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mylken-primary focus:border-mylken-primary"
                      placeholder="Product name or category"
                      defaultValue={selectedProduct ? selectedProduct.name : category.title}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mylken-primary focus:border-mylken-primary h-32"
                      placeholder="Let us know your requirements or questions"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full md:w-auto bg-mylken-primary text-white hover:bg-mylken-secondary px-8 py-2 h-auto">
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;

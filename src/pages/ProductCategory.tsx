
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Download, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

// Product category data
const productCategories = {
  'milk-analyzers': {
    title: 'Milk Analyzers',
    description: 'High-precision instruments for measuring milk composition including fat, protein, lactose, and SNF content.',
    heroImage: '/images/milk-analyzer-hero.jpg',
    products: [
      {
        id: 1,
        name: 'Advanced Milk Analyzer',
        image: '/images/milk-analyzer.jpg',
        shortDesc: 'State-of-the-art milk analyzer for accurate and quick composition testing.',
        price: "₹175,000",
        priceNote: "Price includes standard installation and 1-year warranty",
        keyFeatures: [
          'Fast results in under 60 seconds',
          'Tests for fat, SNF, protein, lactose, and density',
          'Accurate adulteration detection',
          'User-friendly interface with data management'
        ],
        fullDescription: 'Our flagship milk analyzer offers industry-leading accuracy and reliability for testing milk composition. With rapid analysis of fat, protein, lactose, and other components, this analyzer is the perfect solution for dairy farms, milk collection centers, and processing plants.',
        specifications: [
          'Measuring Parameters: Fat, SNF, Protein, Lactose, Added Water, Density',
          'Measuring Range: Fat 0-50%, SNF 0-15%, Protein 0-15%, Lactose 0-20%',
          'Accuracy: Fat ±0.1%, Protein ±0.15%, Lactose ±0.2%',
          'Sample Volume: 25ml',
          'Measuring Speed: 60 seconds',
          'Display: 7" LCD Touch Screen',
          'Connectivity: USB, RS232, Ethernet',
          'Power Supply: 110-240V, 50/60Hz',
          'Dimensions: 300 x 350 x 290mm',
          'Weight: 5kg'
        ],
        features: [
          'Fast results in under 60 seconds',
          'Tests for fat, SNF, protein, lactose, and density',
          'Accurate adulteration detection',
          'User-friendly interface with data management',
          'USB and printer connectivity',
          'Low maintenance requirements',
          'Compact, durable design',
          'Suitable for cow, buffalo, and mixed milk'
        ],
        applications: [
          'Dairy Farms',
          'Milk Collection Centers',
          'Dairy Processing Plants',
          'Quality Control Labs',
          'Research Institutions'
        ],
        faq: [
          {
            question: "How often should I calibrate the milk analyzer?",
            answer: "We recommend calibrating the analyzer once every month for optimal accuracy. The process takes about 15 minutes using our calibration samples."
          },
          {
            question: "Can this analyzer detect milk adulteration?",
            answer: "Yes, the Advanced Milk Analyzer can detect common adulterants including added water, salt, sugar, and preservatives through its comprehensive testing parameters."
          },
          {
            question: "What maintenance is required?",
            answer: "The analyzer requires minimal maintenance - just daily cleaning using our specialized cleaning solution after use, and replacing filters every 6 months."
          },
          {
            question: "Is training provided with the purchase?",
            answer: "Yes, we provide comprehensive training for operators during installation, and our technical support team is available for any further assistance."
          }
        ]
      },
      {
        id: 2,
        name: 'Infrared Milk Analyzer',
        image: '/placeholder.svg',
        shortDesc: 'Infrared technology for highly accurate milk component analysis.',
        price: "₹225,000",
        priceNote: "Price includes standard installation and 2-year warranty",
        keyFeatures: [
          'Fast analysis in 45 seconds',
          'Advanced infrared spectroscopy',
          'Multi-parameter analysis',
          'Touch screen interface'
        ],
        fullDescription: 'The Infrared Milk Analyzer uses advanced spectroscopy to deliver precise measurements of milk composition. Designed for high-volume testing environments, this analyzer offers exceptional accuracy and reliability.',
        specifications: [
          'Measuring Parameters: Fat, SNF, Protein, Lactose, Added Water, Density, Freezing Point',
          'Measuring Range: Fat 0-55%, SNF 0-20%, Protein 0-15%, Lactose 0-20%',
          'Accuracy: Fat ±0.06%, Protein ±0.1%, Lactose ±0.15%',
          'Sample Volume: 20ml',
          'Measuring Speed: 45 seconds',
          'Display: 10" Color Touch Screen',
          'Connectivity: USB, Ethernet, Bluetooth',
          'Power Supply: 110-240V, 50/60Hz',
          'Dimensions: 350 x 380 x 310mm',
          'Weight: 7kg'
        ],
        features: [
          'Fast analysis in 45 seconds',
          'Calibration for various milk types',
          'Touch screen interface',
          'USB and printer connectivity',
          'Advanced data management',
          'Self-cleaning system',
          'Multiple language support',
          'Cloud data synchronization'
        ],
        applications: [
          'Large Dairy Plants',
          'Milk Testing Laboratories',
          'Research Facilities',
          'Dairy Cooperatives',
          'Food Safety Inspection'
        ],
        faq: [
          {
            question: "What is the difference between infrared and ultrasonic analyzers?",
            answer: "Infrared analyzers offer higher precision and can detect a wider range of parameters compared to ultrasonic analyzers, but they typically require more maintenance and are more expensive."
          },
          {
            question: "Can this analyzer be connected to our existing data management system?",
            answer: "Yes, the analyzer features an open API and supports various data formats for seamless integration with most laboratory and dairy management systems."
          },
          {
            question: "What is the lifespan of this analyzer?",
            answer: "With proper maintenance, our Infrared Milk Analyzer typically operates effectively for 8-10 years, with periodic calibration and component updates."
          }
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
        price: "₹320,000",
        priceNote: "Price includes installation, training and 1-year warranty",
        keyFeatures: [
          'Output capacity: 100-200 kg/hour',
          'Digital temperature control',
          'Automated stirring system',
          'Food-grade stainless steel construction'
        ],
        fullDescription: 'Our Automatic Khoya Making Machine streamlines the traditional khoya-making process with modern technology, ensuring consistent quality and increased production efficiency for your dairy business.',
        specifications: [
          'Capacity: 100-200 kg/hour',
          'Power: 12-15 kW',
          'Material: Food-grade stainless steel (304 grade)',
          'Temperature Control Range: 30-150°C',
          'Control System: PLC with touchscreen interface',
          'Dimensions: 1800×900×1200 mm',
          'Weight: 350kg',
          'Voltage: 380-440V, 3 phase'
        ],
        features: [
          'Automated stirring system',
          'Digital temperature control',
          'Uniform heating for consistent results',
          'Easy cleaning and maintenance',
          'Low energy consumption',
          'Continuous production capability',
          'Safety features including emergency stop',
          'Minimal product loss during processing'
        ],
        applications: [
          'Sweet Manufacturing Units',
          'Dairy Product Facilities',
          'Food Processing Companies',
          'Commercial Kitchens',
          'Milk Cooperatives'
        ],
        faq: [
          {
            question: "How much space is required to install this machine?",
            answer: "The machine requires approximately 25 square feet of floor space, plus adequate clearance space around it for operation and maintenance access."
          },
          {
            question: "What utilities are required for operation?",
            answer: "The machine requires a 3-phase electrical connection (380-440V), access to water for cleaning, and proper drainage. No special ventilation is needed beyond standard kitchen requirements."
          },
          {
            question: "How difficult is the cleaning process?",
            answer: "The machine features a CIP (Clean-In-Place) system that significantly simplifies the cleaning process. Daily cleaning takes approximately 30 minutes."
          }
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
        name: 'Premium Stainless Steel Milk Can',
        image: '/images/milk-can.jpg',
        shortDesc: 'Heavy-duty stainless steel cans for safe milk storage and transport.',
        price: "₹3,500 - ₹6,200",
        priceNote: "Price varies by capacity (20L to 50L)",
        keyFeatures: [
          'Food-grade SS304 stainless steel',
          'Airtight locking system',
          'Easy-grip ergonomic handles',
          'Seamless construction'
        ],
        fullDescription: 'Our Premium Stainless Steel Milk Cans are designed for durability and hygiene, ensuring safe transportation and storage of milk from farms to processing facilities. These cans meet all food safety standards and are built to last for years.',
        specifications: [
          'Capacity Options: 20L, 30L, 40L, 50L',
          'Material: SS304 food-grade stainless steel',
          'Wall Thickness: 1.2mm',
          'Weight: 3-7 kg depending on capacity',
          'Lid Type: Airtight with silicone seal',
          'Handle: Ergonomic design with comfortable grip',
          'Surface Finish: Mirror polished interior, brushed exterior',
          'Base: Reinforced for stability'
        ],
        features: [
          'Leak-proof design',
          'Rust and corrosion resistant',
          'Easy to clean and sterilize',
          'Stackable design for storage efficiency',
          'Temperature retention capability',
          'Resistant to impact and deformation',
          'Suitable for mechanical washing systems',
          'Long service life of 10+ years'
        ],
        applications: [
          'Dairy Farms',
          'Milk Collection Centers',
          'Milk Transportation',
          'Dairy Processing Units',
          'Food Service Operations'
        ],
        faq: [
          {
            question: "Are these cans suitable for pasteurized milk?",
            answer: "Yes, our stainless steel milk cans are ideal for both raw and pasteurized milk. The food-grade stainless steel doesn't react with milk components and maintains quality."
          },
          {
            question: "How should I clean and maintain these milk cans?",
            answer: "Clean with warm water and mild detergent after each use. For sanitization, use food-grade sanitizers. Periodically check the rubber seal and replace if needed. Store upside down after cleaning to ensure complete drainage."
          },
          {
            question: "Can they be used for other liquids besides milk?",
            answer: "Absolutely! While designed primarily for milk, these cans are excellent for transporting and storing other food-grade liquids including water, juices, and oils."
          }
        ]
      }
    ]
  },
  'dairy-processing': {
    title: 'Dairy Processing Equipment',
    description: 'Complete range of equipment for dairy processing operations.',
    heroImage: '/lovable-uploads/a3bd83e6-2003-4f6f-b552-df2eacbfb664.png',
    products: [
      {
        id: 1,
        name: 'Advanced Milk Pasteurizer',
        image: '/lovable-uploads/a3bd83e6-2003-4f6f-b552-df2eacbfb664.png',
        shortDesc: 'Efficient pasteurization systems for safe milk processing.',
        price: "₹450,000 - ₹950,000",
        priceNote: "Price varies based on capacity and configuration",
        keyFeatures: [
          'Capacity: 500-10000 L/hr',
          'HTST pasteurization method',
          'PLC control system',
          'CIP compatibility'
        ],
        fullDescription: 'Our Advanced Milk Pasteurizer ensures food safety while preserving milk quality. Using the High-Temperature Short-Time (HTST) method, it efficiently eliminates harmful bacteria while maintaining the nutritional value and taste of the milk.',
        specifications: [
          'Capacity Range: 500-10000 L/hr',
          'Temperature Range: 4-95°C',
          'Material: SS304/SS316',
          'Heating Method: Steam/Hot Water/Electric',
          'Cooling Method: Chilled Water/Ice Bank',
          'Control System: PLC with HMI touchscreen',
          'CIP System: Integrated',
          'Power Requirements: 380-440V, 3-phase',
          'Dimensions: Varies by capacity',
          'Regeneration Efficiency: >90%'
        ],
        features: [
          'PLC control system with recipe management',
          'CIP compatibility for thorough cleaning',
          'Energy recovery system reducing utility costs',
          'Automatic temperature control and monitoring',
          'Data logging and reporting capabilities',
          'Flow diversion valve for product safety',
          'Holding tube with precision timing',
          'Remote monitoring and control options'
        ],
        applications: [
          'Dairy Processing Plants',
          'Milk Packaging Units',
          'Cheese Production Facilities',
          'Ice Cream Manufacturing',
          'Yogurt Production Lines'
        ],
        faq: [
          {
            question: "What pasteurization method does this equipment use?",
            answer: "Our pasteurizer uses the HTST (High-Temperature Short-Time) method, heating milk to 72-75°C for 15-20 seconds, which effectively eliminates pathogens while preserving milk quality."
          },
          {
            question: "How much energy does the pasteurizer consume?",
            answer: "Energy consumption varies by capacity, but our regeneration section recovers up to 90% of heat energy, significantly reducing operational costs compared to traditional systems."
          },
          {
            question: "What maintenance is required?",
            answer: "Regular maintenance includes daily CIP cleaning, weekly inspection of gaskets and seals, monthly calibration of temperature sensors, and bi-annual service of pumps and heat exchangers."
          }
        ]
      }
    ]
  },
  'testing-kits': {
    title: 'Quality Testing Kits',
    description: 'Reliable testing equipment for ensuring milk quality and safety.',
    heroImage: '/lovable-uploads/05dc96f3-1b1c-4e14-85ff-d33030c87ba4.png',
    products: [
      {
        id: 1,
        name: 'Comprehensive Milk Adulteration Testing Kit',
        image: '/lovable-uploads/05dc96f3-1b1c-4e14-85ff-d33030c87ba4.png',
        shortDesc: 'Complete testing kit for detecting common adulterants in milk.',
        price: "₹12,500",
        priceNote: "Includes 100 tests for each parameter",
        keyFeatures: [
          'Tests for 23 different adulterants',
          'Results in 2-5 minutes',
          'Portable carrying case',
          'Detailed instruction manual'
        ],
        fullDescription: 'The Comprehensive Milk Adulteration Testing Kit provides dairy professionals with a quick and reliable way to detect common adulterants in milk. Designed for ease of use in field conditions, this kit helps ensure milk quality and safety at every stage of the supply chain.',
        specifications: [
          'Tests: 23 different adulterants including urea, starch, detergents, neutralizers',
          'Test Time: 2-5 minutes per test',
          'Sample Size: 5-10 ml per test',
          'Kit Contents: Reagents, test tubes, droppers, color charts, instruction manual',
          'Shelf Life: 1 year for reagents',
          'Storage: Room temperature (15-30°C)',
          'Case Dimensions: 40 x 30 x 15 cm',
          'Weight: 2.5 kg'
        ],
        features: [
          'Easy to use with minimal training',
          'Rapid results for on-site decisions',
          'Portable carrying case for field use',
          'Detailed instruction manual with color charts',
          'Cost-effective testing solution',
          'No electricity or special equipment needed',
          'Reagents can be reordered separately',
          'Training videos available via QR code'
        ],
        applications: [
          'Milk Collection Centers',
          'Dairy Farms',
          'Processing Plants',
          'Quality Control Labs',
          'Food Safety Inspection'
        ],
        faq: [
          {
            question: "Can untrained personnel use this testing kit?",
            answer: "Yes, the kit is designed to be user-friendly with simple, color-based reactions. Basic training takes only 1-2 hours, and our instruction manual includes step-by-step guides with images."
          },
          {
            question: "How accurate are the test results?",
            answer: "The tests can detect adulterants at concentrations as low as 0.1% with approximately 95% accuracy compared to laboratory methods. For regulatory compliance, positive results should be confirmed by laboratory testing."
          },
          {
            question: "How many tests can be performed with one kit?",
            answer: "Each kit contains reagents for 100 tests for each of the 23 parameters. Additional reagents can be purchased separately when needed."
          }
        ]
      }
    ]
  }
};

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("description");

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Product Hero Section */}
        {selectedProduct && (
          <section className="py-12 bg-gradient-to-br from-[#FEF9E7] to-[#FCF3CF]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Product Image */}
                  <div className="bg-white rounded-lg shadow-sm p-4 h-full">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-auto object-contain aspect-square rounded-md"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-2">
                      {selectedProduct.name}
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                      {selectedProduct.shortDesc}
                    </p>
                    
                    <Card className="bg-white shadow-sm border-0 mb-8">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-gray-600 mb-1">Price:</p>
                            <p className="text-3xl font-bold text-mylken-primary">
                              {selectedProduct.price}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{selectedProduct.priceNote}</p>
                      </CardContent>
                    </Card>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-mylken-dark mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {selectedProduct.keyFeatures.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <ChevronRight className="text-mylken-accent mr-2 shrink-0" size={18} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-mylken-accent text-mylken-dark hover:bg-mylken-accent/90">
                        Request Quote
                      </Button>
                      <Button size="lg" variant="outline" className="border-mylken-primary text-mylken-primary hover:bg-mylken-primary hover:text-white flex items-center gap-2">
                        <Download size={18} /> Download Brochure
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Product Details Tabs */}
        {selectedProduct && (
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-7xl mx-auto">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                    <TabsTrigger value="description" className="text-center py-3">Description</TabsTrigger>
                    <TabsTrigger value="specifications" className="text-center py-3">Specifications</TabsTrigger>
                    <TabsTrigger value="faq" className="text-center py-3">FAQ</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-mylken-dark mb-4">Product Description</h2>
                    <p className="text-gray-700 mb-8">{selectedProduct.fullDescription}</p>
                    
                    <h3 className="text-xl font-semibold text-mylken-dark mb-4">Features & Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="text-mylken-accent mt-1 mr-2 shrink-0" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-mylken-dark mb-4">Applications</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedProduct.applications.map((app: string, index: number) => (
                        <li key={index} className="bg-mylken-light/30 rounded-md px-4 py-3 text-gray-700">
                          {app}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-mylken-dark mb-6">Technical Specifications</h2>
                    <div className="divide-y">
                      {selectedProduct.specifications.map((spec: string, index: number) => {
                        const [label, value] = spec.split(':').map(s => s.trim());
                        return (
                          <div key={index} className="py-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="font-medium text-mylken-dark">{label}</div>
                            <div className="md:col-span-2 text-gray-700">{value || spec}</div>
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="faq" className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-mylken-dark mb-6">Frequently Asked Questions</h2>
                    <div className="divide-y">
                      {selectedProduct.faq?.map((item: any, index: number) => (
                        <div key={index} className="py-4">
                          <h3 className="font-semibold text-mylken-dark text-lg mb-2">{item.question}</h3>
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      )) || (
                        <p className="text-gray-500">No FAQs available for this product.</p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        )}
        
        {/* Related Products */}
        {category.products.length > 1 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-mylken-dark mb-8">Related Products</h2>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.products.filter((p: any) => p.id !== (selectedProduct?.id || 0)).map((product: any) => (
                    <motion.div 
                      key={product.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveTab("description");
                        window.scrollTo(0, 0);
                      }}
                      variants={itemVariants}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-mylken-primary mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{product.shortDesc}</p>
                        <Button variant="link" className="p-0 h-auto text-mylken-primary hover:text-mylken-secondary flex items-center gap-1">
                          View Details <ArrowRight size={16} />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}
        
        {/* Inquiry Form */}
        <section className="py-16 bg-mylken-light/30">
          <div className="container mx-auto px-4 md:px-6">
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

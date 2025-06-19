import React, { useEffect, useState } from 'react';
import { ArrowLeft, Search, ShoppingCart, Phone, Mail, MapPin, Check, Droplets, Filter, IndianRupee, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';
import ConsultationModal from '@/components/ConsultationModal';
import { useToast } from '@/hooks/use-toast';

interface CreamSeparatorProduct {
  id: number;
  name: string;
  capacity: string;
  operationType: string;
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
  productDescription: string[];
  detailedFeatures: string[];
}

const CreamSeparators = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dairy-themed animation styles
  const milkDropAnimation = {
    animation: 'milkDrop 2s ease-in-out infinite',
  };

  const floatingAnimation = {
    animation: 'float 3s ease-in-out infinite',
  };

  // Add custom CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes milkDrop {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
        50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-5px) rotate(1deg); }
        66% { transform: translateY(-2px) rotate(-1deg); }
      }
      @keyframes milkWave {
        0%, 100% { transform: translateX(0%); }
        50% { transform: translateX(100%); }
      }
      .milk-wave {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: milkWave 3s ease-in-out infinite;
      }
      .product-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      .product-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const productCategories = {
    'hand-operated': {
      name: 'Hand Operated Series',
      description: 'Manual cream separators for small to medium operations',
      icon: <Zap size={20} style={floatingAnimation} />,
      products: [
        {
          id: 1,
          name: "60 LPH Hand Operated Cream Separator",
          capacity: "60 LPH",
          operationType: "Hand Operated",
          features: ["Manual Operation", "Easy Maintenance", "Portable Design", "High Efficiency"],
          image: "/placeholder.svg",
          description: "Compact hand-operated cream separator ideal for small dairy operations with 60 LPH capacity.",
          specifications: {
            capacity: "60 Liters/Hour",
            dimensions: "45 x 35 x 85 cm",
            weight: "25 kg",
            material: "Stainless Steel",
            efficiency: "98%"
          },
          productDescription: [
            "Manual operation with ergonomic handle design",
            "Easy maintenance with removable components",
            "Portable design suitable for small dairy farms",
            "High efficiency cream separation technology"
          ],
          detailedFeatures: [
            "Capacity: 60 LPH",
            "Operation: Manual/Hand Operated",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 98% separation rate",
            "Maintenance: Low maintenance design",
            "Portability: Compact and portable",
            "Applications: Small dairy farms, home use"
          ]
        },
        {
          id: 2,
          name: "90 LPH Hand Operated Cream Separator",
          capacity: "90 LPH",
          operationType: "Hand Operated",
          features: ["Higher Capacity", "Manual Control", "Robust Build", "Cost Effective"],
          image: "/placeholder.svg",
          description: "High capacity hand-operated cream separator with 90 LPH capacity for medium dairy operations.",
          specifications: {
            capacity: "90 Liters/Hour",
            dimensions: "50 x 40 x 90 cm",
            weight: "35 kg",
            material: "Stainless Steel",
            efficiency: "98%"
          },
          productDescription: [
            "Higher capacity for medium dairy operations",
            "Manual control with smooth operation",
            "Robust construction for long-lasting performance",
            "Cost-effective solution for dairy processing"
          ],
          detailedFeatures: [
            "Capacity: 90 LPH",
            "Operation: Manual/Hand Operated",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 98% separation rate",
            "Construction: Robust and durable",
            "Control: Manual speed control",
            "Applications: Medium dairy farms"
          ]
        },
        {
          id: 3,
          name: "120 LPH Hand Operated Cream Separator",
          capacity: "120 LPH",
          operationType: "Hand Operated",
          features: ["High Capacity", "Manual Operation", "Easy Cleaning", "Durable Construction"],
          image: "/placeholder.svg",
          description: "High capacity hand-operated cream separator for commercial dairy operations.",
          specifications: {
            capacity: "120 Liters/Hour",
            dimensions: "55 x 45 x 95 cm",
            weight: "45 kg",
            material: "Stainless Steel",
            efficiency: "97%"
          },
          productDescription: [
            "High capacity manual operation",
            "Easy cleaning and maintenance",
            "Durable construction for commercial use",
            "Efficient cream separation process"
          ],
          detailedFeatures: [
            "Capacity: 120 LPH",
            "Operation: Manual/Hand Operated",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 97% separation rate",
            "Cleaning: Easy to clean design",
            "Durability: Commercial grade construction",
            "Applications: Commercial dairy operations"
          ]
        },
        {
          id: 4,
          name: "150 LPH Hand Operated Cream Separator",
          capacity: "150 LPH",
          operationType: "Hand Operated",
          features: ["Large Capacity", "Manual Control", "Industrial Grade", "High Performance"],
          image: "/placeholder.svg",
          description: "Large capacity hand-operated cream separator for industrial dairy processing.",
          specifications: {
            capacity: "150 Liters/Hour",
            dimensions: "60 x 50 x 100 cm",
            weight: "55 kg",
            material: "Stainless Steel",
            efficiency: "97%"
          },
          productDescription: [
            "Large capacity for industrial applications",
            "Manual control with precise operation",
            "Industrial grade components",
            "High performance separation technology"
          ],
          detailedFeatures: [
            "Capacity: 150 LPH",
            "Operation: Manual/Hand Operated",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 97% separation rate",
            "Grade: Industrial quality",
            "Performance: High speed separation",
            "Applications: Industrial dairy processing"
          ]
        },
        {
          id: 5,
          name: "200 LPH Hand Operated Cream Separator",
          capacity: "200 LPH",
          operationType: "Hand Operated",
          features: ["Maximum Manual Capacity", "Heavy Duty", "Efficient Separation", "Professional Grade"],
          image: "/placeholder.svg",
          description: "Maximum capacity hand-operated cream separator for large-scale manual operations.",
          specifications: {
            capacity: "200 Liters/Hour",
            dimensions: "65 x 55 x 105 cm",
            weight: "65 kg",
            material: "SS316 Grade",
            efficiency: "96%"
          },
          productDescription: [
            "Maximum capacity for manual operation",
            "Heavy duty construction",
            "Efficient separation technology",
            "Professional grade components"
          ],
          detailedFeatures: [
            "Capacity: 200 LPH",
            "Operation: Manual/Hand Operated",
            "Material: SS316 Grade Stainless Steel",
            "Efficiency: 96% separation rate",
            "Construction: Heavy duty design",
            "Grade: Professional quality",
            "Applications: Large-scale manual operations"
          ]
        }
      ]
    },
    'electric-operated': {
      name: 'Electric Operated Series',
      description: 'Automated electric cream separators for consistent performance',
      icon: <Zap size={20} style={floatingAnimation} />,
      products: [
        {
          id: 6,
          name: "60 LPH Electric Operated Cream Separator",
          capacity: "60 LPH",
          operationType: "Electric Operated",
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
          },
          productDescription: [
            "Electric motor driven operation",
            "Consistent performance with automation",
            "Low maintenance requirements",
            "Automated operation for ease of use"
          ],
          detailedFeatures: [
            "Capacity: 60 LPH",
            "Operation: Electric Motor Driven",
            "Power: 0.5 HP Motor",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 99% separation rate",
            "Maintenance: Low maintenance design",
            "Control: Automatic operation"
          ]
        },
        {
          id: 7,
          name: "90 LPH Electric Operated Cream Separator",
          capacity: "90 LPH",
          operationType: "Electric Operated",
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
          },
          productDescription: [
            "Electric motor for higher throughput",
            "Automated operation system",
            "Energy efficient design",
            "Consistent separation quality"
          ],
          detailedFeatures: [
            "Capacity: 90 LPH",
            "Operation: Electric Motor Driven",
            "Power: 0.75 HP Motor",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 99% separation rate",
            "Energy: Energy efficient operation",
            "Automation: Fully automated process"
          ]
        },
        {
          id: 8,
          name: "120 LPH Electric Operated Cream Separator",
          capacity: "120 LPH",
          operationType: "Electric Operated",
          features: ["High Capacity Electric", "Advanced Motor", "Precise Control", "Commercial Grade"],
          image: "/placeholder.svg",
          description: "High capacity electric cream separator for commercial dairy operations.",
          specifications: {
            capacity: "120 Liters/Hour",
            powerConsumption: "1 HP",
            dimensions: "60 x 50 x 100 cm",
            weight: "55 kg",
            material: "Stainless Steel",
            efficiency: "99%"
          },
          productDescription: [
            "High capacity electric operation",
            "Advanced motor technology",
            "Precise control systems",
            "Commercial grade construction"
          ],
          detailedFeatures: [
            "Capacity: 120 LPH",
            "Operation: Electric Motor Driven",
            "Power: 1 HP Advanced Motor",
            "Material: Food Grade Stainless Steel",
            "Efficiency: 99% separation rate",
            "Control: Precise speed control",
            "Grade: Commercial quality"
          ]
        },
        {
          id: 9,
          name: "200 LPH Electric Operated Cream Separator",
          capacity: "200 LPH",
          operationType: "Electric Operated",
          features: ["Large Electric Capacity", "High Power Motor", "Industrial Automation", "Premium Quality"],
          image: "/placeholder.svg",
          description: "Large capacity electric cream separator for industrial dairy processing.",
          specifications: {
            capacity: "200 Liters/Hour",
            powerConsumption: "1.5 HP",
            dimensions: "70 x 60 x 110 cm",
            weight: "75 kg",
            material: "SS316 Grade",
            efficiency: "99%"
          },
          productDescription: [
            "Large electric capacity operation",
            "High power motor for efficiency",
            "Industrial automation features",
            "Premium quality construction"
          ],
          detailedFeatures: [
            "Capacity: 200 LPH",
            "Operation: Electric Motor Driven",
            "Power: 1.5 HP High Power Motor",
            "Material: SS316 Grade Stainless Steel",
            "Efficiency: 99% separation rate",
            "Automation: Industrial grade automation",
            "Quality: Premium construction"
          ]
        },
        {
          id: 10,
          name: "300 LPH Electric Operated Cream Separator",
          capacity: "300 LPH",
          operationType: "Electric Operated",
          features: ["Maximum Electric Capacity", "Heavy Duty Motor", "Advanced Controls", "Industrial Grade"],
          image: "/placeholder.svg",
          description: "Maximum capacity electric cream separator for large-scale industrial operations.",
          specifications: {
            capacity: "300 Liters/Hour",
            powerConsumption: "2 HP",
            dimensions: "80 x 70 x 120 cm",
            weight: "95 kg",
            material: "SS316L Grade",
            efficiency: "98%"
          },
          productDescription: [
            "Maximum electric capacity",
            "Heavy duty motor system",
            "Advanced control features",
            "Industrial grade performance"
          ],
          detailedFeatures: [
            "Capacity: 300 LPH",
            "Operation: Electric Motor Driven",
            "Power: 2 HP Heavy Duty Motor",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 98% separation rate",
            "Controls: Advanced control system",
            "Grade: Industrial quality"
          ]
        }
      ]
    },
    'ss-covering': {
      name: 'SS Covering Series',
      description: 'Premium stainless steel covered separators for enhanced hygiene',
      icon: <Droplets size={20} style={floatingAnimation} />,
      products: [
        {
          id: 11,
          name: "60 LPH SS Covering Cream Separator",
          capacity: "60 LPH",
          operationType: "SS Covering",
          features: ["Stainless Steel Cover", "Hygienic Design", "Corrosion Resistant", "Easy Cleaning"],
          image: "/placeholder.svg",
          description: "Premium stainless steel covered cream separator with 60 LPH capacity for enhanced hygiene.",
          specifications: {
            capacity: "60 Liters/Hour",
            dimensions: "48 x 38 x 88 cm",
            weight: "30 kg",
            material: "SS304 Grade",
            efficiency: "98.5%"
          },
          productDescription: [
            "Premium stainless steel covering",
            "Hygienic design for food safety",
            "Corrosion resistant construction",
            "Easy cleaning and maintenance"
          ],
          detailedFeatures: [
            "Capacity: 60 LPH",
            "Covering: Full SS304 Grade Cover",
            "Design: Hygienic food-safe design",
            "Material: SS304 Grade Stainless Steel",
            "Efficiency: 98.5% separation rate",
            "Resistance: Corrosion resistant",
            "Cleaning: Easy to clean surfaces"
          ]
        },
        {
          id: 12,
          name: "90 LPH SS Covering Cream Separator",
          capacity: "90 LPH",
          operationType: "SS Covering",
          features: ["Premium SS Cover", "Food Grade Safety", "Enhanced Durability", "Professional Finish"],
          image: "/placeholder.svg",
          description: "Premium stainless steel covered cream separator for professional dairy operations.",
          specifications: {
            capacity: "90 Liters/Hour",
            dimensions: "52 x 42 x 92 cm",
            weight: "40 kg",
            material: "SS304 Grade",
            efficiency: "98.5%"
          },
          productDescription: [
            "Premium stainless steel cover",
            "Food grade safety standards",
            "Enhanced durability features",
            "Professional finish quality"
          ],
          detailedFeatures: [
            "Capacity: 90 LPH",
            "Covering: Premium SS304 Grade Cover",
            "Safety: Food grade compliance",
            "Material: SS304 Grade Stainless Steel",
            "Efficiency: 98.5% separation rate",
            "Durability: Enhanced long-life design",
            "Finish: Professional mirror finish"
          ]
        },
        {
          id: 13,
          name: "120 LPH SS Covering Cream Separator",
          capacity: "120 LPH",
          operationType: "SS Covering",
          features: ["High Capacity SS", "Superior Hygiene", "Advanced Protection", "Commercial Quality"],
          image: "/placeholder.svg",
          description: "High capacity stainless steel covered separator for commercial applications.",
          specifications: {
            capacity: "120 Liters/Hour",
            dimensions: "58 x 48 x 98 cm",
            weight: "50 kg",
            material: "SS316 Grade",
            efficiency: "98%"
          },
          productDescription: [
            "High capacity with SS covering",
            "Superior hygiene standards",
            "Advanced protection features",
            "Commercial quality construction"
          ],
          detailedFeatures: [
            "Capacity: 120 LPH",
            "Covering: SS316 Grade Full Cover",
            "Hygiene: Superior hygienic design",
            "Material: SS316 Grade Stainless Steel",
            "Efficiency: 98% separation rate",
            "Protection: Advanced contamination protection",
            "Quality: Commercial grade construction"
          ]
        },
        {
          id: 14,
          name: "200 LPH SS Covering Cream Separator",
          capacity: "200 LPH",
          operationType: "SS Covering",
          features: ["Large SS Covered", "Industrial Hygiene", "Premium Protection", "Heavy Duty SS"],
          image: "/placeholder.svg",
          description: "Large capacity stainless steel covered separator for industrial hygiene requirements.",
          specifications: {
            capacity: "200 Liters/Hour",
            dimensions: "68 x 58 x 108 cm",
            weight: "70 kg",
            material: "SS316L Grade",
            efficiency: "97.5%"
          },
          productDescription: [
            "Large capacity SS covered design",
            "Industrial hygiene compliance",
            "Premium protection features",
            "Heavy duty stainless steel construction"
          ],
          detailedFeatures: [
            "Capacity: 200 LPH",
            "Covering: SS316L Grade Heavy Duty Cover",
            "Hygiene: Industrial hygiene standards",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 97.5% separation rate",
            "Protection: Premium contamination shield",
            "Construction: Heavy duty industrial build"
          ]
        },
        {
          id: 15,
          name: "300 LPH SS Covering Cream Separator",
          capacity: "300 LPH",
          operationType: "SS Covering",
          features: ["Maximum SS Capacity", "Ultra Hygienic", "Complete Protection", "Premium Grade SS"],
          image: "/placeholder.svg",
          description: "Maximum capacity stainless steel covered separator with ultra-hygienic design.",
          specifications: {
            capacity: "300 Liters/Hour",
            dimensions: "78 x 68 x 118 cm",
            weight: "90 kg",
            material: "SS316L Grade",
            efficiency: "97%"
          },
          productDescription: [
            "Maximum capacity SS covered",
            "Ultra-hygienic design standards",
            "Complete protection system",
            "Premium grade stainless steel"
          ],
          detailedFeatures: [
            "Capacity: 300 LPH",
            "Operation: SS Covering",
            "Design: Ultra-hygienic food processing",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 97% separation rate",
            "Protection: Complete contamination barrier",
            "Grade: Premium pharmaceutical grade"
          ]
        }
      ]
    },
    'special-models': {
      name: 'Special Models',
      description: 'Specialized cream separators for unique applications',
      icon: <Zap size={20} style={floatingAnimation} />,
      products: [
        {
          id: 16,
          name: "400 LPH Industrial Cream Separator",
          capacity: "400 LPH",
          operationType: "Industrial Electric",
          features: ["Ultra High Capacity", "Industrial Motor", "Continuous Operation", "Heavy Duty Build"],
          image: "/placeholder.svg",
          description: "Ultra-high capacity industrial cream separator for continuous large-scale operations.",
          specifications: {
            capacity: "400 Liters/Hour",
            powerConsumption: "3 HP",
            dimensions: "90 x 80 x 130 cm",
            weight: "120 kg",
            material: "SS316L Grade",
            efficiency: "96%"
          },
          productDescription: [
            "Ultra-high capacity industrial model",
            "Powerful industrial motor system",
            "Designed for continuous operation",
            "Heavy duty construction for durability"
          ],
          detailedFeatures: [
            "Capacity: 400 LPH",
            "Operation: Industrial Electric Drive",
            "Power: 3 HP Industrial Motor",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 96% separation rate",
            "Operation: Continuous 24/7 capability",
            "Construction: Heavy duty industrial grade"
          ]
        },
        {
          id: 17,
          name: "500 LPH Industrial Cream Separator",
          capacity: "500 LPH",
          operationType: "Industrial Electric",
          features: ["Maximum Industrial Capacity", "High Power Motor", "Advanced Control", "Professional Grade"],
          image: "/placeholder.svg",
          description: "Maximum capacity industrial cream separator for large dairy processing plants.",
          specifications: {
            capacity: "500 Liters/Hour",
            powerConsumption: "5 HP",
            dimensions: "100 x 90 x 140 cm",
            weight: "150 kg",
            material: "SS316L Grade",
            efficiency: "95%"
          },
          productDescription: [
            "Maximum industrial capacity",
            "High power motor for efficiency",
            "Advanced control systems",
            "Professional grade components"
          ],
          detailedFeatures: [
            "Capacity: 500 LPH",
            "Operation: Industrial Electric Drive",
            "Power: 5 HP High Power Motor",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 95% separation rate",
            "Control: Advanced PLC control system",
            "Grade: Professional dairy plant quality"
          ]
        },
        {
          id: 18,
          name: "600 LPH Continuous Cream Separator",
          capacity: "600 LPH",
          operationType: "Continuous Industrial",
          features: ["Continuous Flow", "Self-Cleaning", "Automated Controls", "Maximum Efficiency"],
          image: "/placeholder.svg",
          description: "Continuous flow cream separator for maximum efficiency in large-scale operations.",
          specifications: {
            capacity: "600 Liters/Hour",
            powerConsumption: "7.5 HP",
            dimensions: "120 x 100 x 160 cm",
            weight: "200 kg",
            material: "SS316L Grade",
            efficiency: "94%"
          },
          productDescription: [
            "Continuous flow operation",
            "Self-cleaning capabilities",
            "Fully automated controls",
            "Maximum efficiency design"
          ],
          detailedFeatures: [
            "Capacity: 600 LPH",
            "Operation: Continuous Flow System",
            "Power: 7.5 HP Industrial Motor",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 94% separation rate",
            "Cleaning: Automated CIP system",
            "Controls: Full automation package"
          ]
        },
        {
          id: 19,
          name: "750 LPH High Volume Cream Separator",
          capacity: "750 LPH",
          operationType: "High Volume Industrial",
          features: ["High Volume Processing", "Advanced Technology", "Energy Efficient", "Modular Design"],
          image: "/placeholder.svg",
          description: "High volume cream separator with advanced technology for large dairy facilities.",
          specifications: {
            capacity: "750 Liters/Hour",
            powerConsumption: "10 HP",
            dimensions: "140 x 120 x 180 cm",
            weight: "250 kg",
            material: "SS316L Grade",
            efficiency: "93%"
          },
          productDescription: [
            "High volume processing capability",
            "Advanced separation technology",
            "Energy efficient operation",
            "Modular design for flexibility"
          ],
          detailedFeatures: [
            "Capacity: 750 LPH",
            "Operation: High Volume Industrial",
            "Power: 10 HP Energy Efficient Motor",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 93% separation rate",
            "Technology: Advanced centrifugal system",
            "Design: Modular expandable system"
          ]
        },
        {
          id: 20,
          name: "1000 LPH Mega Capacity Cream Separator",
          capacity: "1000 LPH",
          operationType: "Mega Industrial",
          features: ["Mega Capacity", "Dual Motor System", "Smart Controls", "Premium Construction"],
          image: "/placeholder.svg",
          description: "Mega capacity cream separator for the largest dairy processing operations.",
          specifications: {
            capacity: "1000 Liters/Hour",
            powerConsumption: "15 HP",
            dimensions: "160 x 140 x 200 cm",
            weight: "300 kg",
            material: "SS316L Grade",
            efficiency: "92%"
          },
          productDescription: [
            "Mega capacity processing",
            "Dual motor system for reliability",
            "Smart control technology",
            "Premium construction quality"
          ],
          detailedFeatures: [
            "Capacity: 1000 LPH",
            "Operation: Mega Industrial System",
            "Power: 15 HP Dual Motor System",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 92% separation rate",
            "Controls: Smart IoT enabled controls",
            "Construction: Premium heavy duty build"
          ]
        },
        {
          id: 21,
          name: "1200 LPH Ultra Capacity Cream Separator",
          capacity: "1200 LPH",
          operationType: "Ultra Industrial",
          features: ["Ultra High Capacity", "Triple Safety System", "Remote Monitoring", "Automatic Operation"],
          image: "/placeholder.svg",
          description: "Ultra-high capacity cream separator with advanced automation for mega dairy plants.",
          specifications: {
            capacity: "1200 Liters/Hour",
            powerConsumption: "20 HP",
            dimensions: "180 x 160 x 220 cm",
            weight: "350 kg",
            material: "SS316L Grade",
            efficiency: "91%"
          },
          productDescription: [
            "Ultra-high capacity operation",
            "Triple safety system protection",
            "Remote monitoring capabilities",
            "Fully automatic operation"
          ],
          detailedFeatures: [
            "Capacity: 1200 LPH",
            "Operation: Ultra Industrial Automation",
            "Power: 20 HP Multi-Motor System",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 91% separation rate",
            "Safety: Triple redundancy safety system",
            "Monitoring: Remote IoT monitoring"
          ]
        },
        {
          id: 22,
          name: "1500 LPH Supreme Cream Separator",
          capacity: "1500 LPH",
          operationType: "Supreme Industrial",
          features: ["Supreme Capacity", "AI-Powered Controls", "Zero Maintenance", "Industry 4.0 Ready"],
          image: "/placeholder.svg",
          description: "Supreme capacity cream separator with AI-powered controls for next-generation dairy processing.",
          specifications: {
            capacity: "1500 Liters/Hour",
            powerConsumption: "25 HP",
            dimensions: "200 x 180 x 240 cm",
            weight: "400 kg",
            material: "SS316L Grade",
            efficiency: "90%"
          },
          productDescription: [
            "Supreme processing capacity",
            "AI-powered control systems",
            "Zero maintenance design",
            "Industry 4.0 ready technology"
          ],
          detailedFeatures: [
            "Capacity: 1500 LPH",
            "Operation: Supreme AI-Controlled",
            "Power: 25 HP Advanced Motor Array",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 90% separation rate",
            "Controls: AI-powered optimization",
            "Technology: Industry 4.0 integration"
          ]
        },
        {
          id: 23,
          name: "2000 LPH Ultimate Cream Separator",
          capacity: "2000 LPH",
          operationType: "Ultimate Industrial",
          features: ["Ultimate Capacity", "Quantum Processing", "Self-Optimizing", "Future-Ready Design"],
          image: "/placeholder.svg",
          description: "Ultimate capacity cream separator representing the pinnacle of dairy processing technology.",
          specifications: {
            capacity: "2000 Liters/Hour",
            powerConsumption: "30 HP",
            dimensions: "220 x 200 x 260 cm",
            weight: "500 kg",
            material: "SS316L Grade",
            efficiency: "89%"
          },
          productDescription: [
            "Ultimate processing capacity",
            "Quantum processing technology",
            "Self-optimizing algorithms",
            "Future-ready design architecture"
          ],
          detailedFeatures: [
            "Capacity: 2000 LPH",
            "Operation: Ultimate Quantum System",
            "Power: 30 HP Quantum Motor Complex",
            "Material: SS316L Grade Stainless Steel",
            "Efficiency: 89% separation rate",
            "Processing: Quantum optimization algorithms",
            "Design: Future-ready modular architecture"
          ]
        }
      ]
    }
  };

  const categories = Object.keys(productCategories);
  const filteredProducts = selectedCategory === 'all' 
    ? Object.values(productCategories).flatMap(cat => cat.products.map(p => ({...p, category: cat.name})))
    : productCategories[selectedCategory]?.products || [];

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleGetQuote = (product: any) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleDownloadBrochure = (productName?: string) => {
    console.log('Downloading brochure for:', productName || 'All Products');
    
    toast({
      title: "Download Started",
      description: `${productName ? productName + ' ' : ''}Product brochure is being downloaded.`,
    });
  };

  const handleContactSales = () => {
    toast({
      title: "Redirecting to Sales",
      description: "You'll be connected with our sales team shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section with enhanced animations */}
        <section className="bg-gradient-to-br from-mylken-primary to-mylken-primary/80 pt-32 pb-16 relative overflow-hidden">
          {/* Animated milk drops */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-6 bg-white/10 rounded-full"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 10}%`,
                  ...milkDropAnimation,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Professional Cream Separation Equipment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Complete Range of Cream Separators
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                From hand-operated to electric and premium SS covering models for efficient dairy processing
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant={viewMode === 'cards' ? "default" : "outline"}
                  onClick={() => setViewMode('cards')}
                  className="relative overflow-hidden"
                >
                  <span className="relative z-10">Card View</span>
                  <div className="absolute inset-0 milk-wave"></div>
                </Button>
                <Button 
                  variant={viewMode === 'table' ? "default" : "outline"}
                  onClick={() => setViewMode('table')}
                  className="relative overflow-hidden"
                >
                  <span className="relative z-10">Table View</span>
                  <div className="absolute inset-0 milk-wave"></div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant={selectedCategory === 'all' ? "default" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full hover-scale"
              >
                <Filter size={16} className="mr-2" style={milkDropAnimation} />
                All Products ({Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0)})
              </Button>
              {categories.map((cat) => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full text-sm hover-scale"
                >
                  {productCategories[cat].icon}
                  <span className="ml-2">{productCategories[cat].name} ({productCategories[cat].products.length})</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {selectedCategory === 'all' ? (
              // Show all categories
              <div className="space-y-16">
                {Object.entries(productCategories).map(([key, category]) => (
                  <div key={key} className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-mylken-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="text-center mb-8 relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-mylken-primary/10 p-3 rounded-full" style={floatingAnimation}>
                          {category.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-mylken-dark">{category.name}</h2>
                      </div>
                      <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.products.map((product, index) => (
                        <Card key={index} className="product-card border border-gray-200 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-mylken-accent/0 to-mylken-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <CardHeader className="pb-3 relative z-10">
                            <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                            <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0 w-fit">
                              {product.capacity}
                            </Badge>
                          </CardHeader>
                          <CardContent className="relative z-10">
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm text-mylken-dark mb-2">Key Features:</h4>
                              <div className="overflow-x-auto">
                                <Table className="text-xs">
                                  <TableBody>
                                    {product.detailedFeatures.map((feature, i) => {
                                      const [key, value] = feature.split(': ');
                                      return (
                                        <TableRow key={i} className="border-gray-100">
                                          <TableCell className="font-medium py-1 px-2 text-gray-600">{key}</TableCell>
                                          <TableCell className="py-1 px-2">{value}</TableCell>
                                        </TableRow>
                                      );
                                    })}
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                            <div className="pt-4 border-t flex justify-between items-center gap-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 hover-scale"
                                onClick={() => handleViewDetails(product)}
                              >
                                View Details
                              </Button>
                              <Button 
                                size="sm" 
                                className="bg-mylken-primary text-white flex-1 hover-scale"
                                onClick={() => handleGetQuote(product)}
                              >
                                Get Quote
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Show selected category
              <div className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-mylken-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="text-center mb-8 relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-mylken-primary/10 p-3 rounded-full" style={floatingAnimation}>
                      {productCategories[selectedCategory]?.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-mylken-dark">
                      {productCategories[selectedCategory]?.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {productCategories[selectedCategory]?.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card key={index} className="product-card border border-gray-200 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-mylken-accent/0 to-mylken-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-3 relative z-10">
                        <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                        <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0 w-fit">
                          {product.capacity}
                        </Badge>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm text-mylken-dark mb-2">Key Features:</h4>
                          <div className="overflow-x-auto">
                            <Table className="text-xs">
                              <TableBody>
                                {product.detailedFeatures.map((feature, i) => {
                                  const [key, value] = feature.split(': ');
                                  return (
                                    <TableRow key={i} className="border-gray-100">
                                      <TableCell className="font-medium py-1 px-2 text-gray-600">{key}</TableCell>
                                      <TableCell className="py-1 px-2">{value}</TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                        <div className="pt-4 border-t flex justify-between items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 hover-scale"
                            onClick={() => handleViewDetails(product)}
                          >
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-mylken-primary text-white flex-1 hover-scale"
                            onClick={() => handleGetQuote(product)}
                          >
                            Get Quote
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Separators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Cream Separators?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our separators are designed to provide efficient cream separation with minimal effort, helping you maintain product quality.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Droplets className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">High Efficiency</h3>
                <p className="text-gray-600">Our separators deliver efficiency up to 99.5% with consistent and reliable results every time.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Zap className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Operation</h3>
                <p className="text-gray-600">Both manual and electric options available to suit your operational needs and preferences.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Check className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Durable Construction</h3>
                <p className="text-gray-600">Built with premium stainless steel for long-lasting performance and easy maintenance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-mylken-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-6 h-8 bg-white/5 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 15}%`,
                  ...milkDropAnimation,
                  animationDelay: `${i * 1}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade Your Cream Separation?</h2>
              <p className="text-mylken-light text-lg mb-8">
                Contact our team to find the perfect separator for your dairy business needs.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale border-mylken-accent text-mylken-accent hover:bg-mylken-accent hover:text-mylken-dark"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Request Consultation
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="lg" className="hover-scale border-mylken-accent text-mylken-accent hover:bg-mylken-accent hover:text-mylken-dark">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onRequestQuote={() => {
            setIsModalOpen(false);
            handleGetQuote(selectedProduct);
          }}
          onDownloadBrochure={() => handleDownloadBrochure(selectedProduct.name)}
          onContactSales={handleContactSales}
        />
      )}

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={quoteProduct}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
};

export default CreamSeparators;

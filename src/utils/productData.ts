
import { ProductData } from '@/types/product';

export const productData: Record<string, ProductData> = {
  // Ultra Scan Basic Series
  'ultra-scan-kurien-milk-analyzer-30-second': {
    name: 'Ultra Scan Kurien Milk Analyzer (30 second)',
    price: 35000,
    category: 'Ultra Scan Basic Series',
    image: '/placeholder.svg',
    rating: 4.8,
    features: ['30-second analysis', 'Fat, SNF, Protein analysis', 'User-friendly interface', 'Basic parameters testing'],
    productDescription: [
      "Manual as well as automatic cleaning",
      "Application – Milk Testing",
      "Display Type – LCD",
      "Warranty – 1 Year",
      "Accuracy – 0.1"
    ],
    detailedFeatures: [
      "Best in class LCD Display.",
      "Automatic and Manual Cleaning support.",
      "Cleaning history on the display and on cloud.",
      "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.",
      "Bidirectional communication through RS 232 port.",
      "Detachable Ultrasonic Sensor.",
      "Right to Repair – if you can't fix it, you don't own it.",
      "Food grade Stainless Steel 304 body."
    ],
    specifications: {
      'Analysis Time': '30 seconds',
      'Parameters': 'Fat, SNF, Protein, Density, CLR',
      'Display': 'LCD',
      'Material': 'Stainless Steel 304',
      'Voltage': '100-240V',
      'Weight': '3.5 Kg',
      'Dimensions': '145 x 210 x 220 mm',
      'Warranty': '1 Year'
    },
    benefits: [
      'Fastest analysis in its class with 30-second results',
      'Robust and rugged shock-proof body for long life',
      'Easy to use interface with minimal training required',
      'Automatic cleaning reduces manual effort',
      'High accuracy ensures reliable results',
      'Compact design saves valuable counter space'
    ]
  },
  'ultra-scan-kurien-milk-analyzer-60-second': {
    name: 'Ultra Scan Kurien Milk Analyzer (60 second)',
    price: 28000,
    category: 'Ultra Scan Basic Series',
    image: '/placeholder.svg',
    rating: 4.6,
    features: ['60-second analysis', 'Fat, SNF analysis', 'Cost-effective solution', 'Easy maintenance'],
    productDescription: [
      "Manual cleaning system",
      "Application – Basic Milk Testing",
      "Display Type – LED",
      "Warranty – 1 Year",
      "Accuracy – 0.15"
    ],
    detailedFeatures: [
      "LED Display for basic readings.",
      "Manual cleaning system.",
      "USB PC Interface available.",
      "Compact and portable design.",
      "Food grade materials used.",
      "Simple operation procedure.",
      "Low maintenance requirements.",
      "Cost-effective solution for small dairies."
    ],
    specifications: {
      'Analysis Time': '60 seconds',
      'Parameters': 'Fat, SNF, Density',
      'Display': 'LED',
      'Material': 'Stainless Steel',
      'Voltage': '100-240V',
      'Weight': '3.0 Kg',
      'Dimensions': '140 x 200 x 210 mm',
      'Warranty': '1 Year'
    },
    benefits: [
      'Budget-friendly option for small operations',
      'Simple and reliable operation',
      'Low power consumption',
      'Minimal training required',
      'Suitable for basic milk testing needs',
      'Durable construction for long-term use'
    ]
  },
  // Ultra Scan Advanced Series
  'ultra-scan-advanced-milk-analyzer': {
    name: 'Ultra Scan Advanced Milk Analyzer',
    price: 55000,
    category: 'Ultra Scan Advanced Series',
    image: '/placeholder.svg',
    rating: 4.9,
    features: ['20-second analysis', 'Advanced parameters', 'Touch screen display', 'Cloud connectivity'],
    productDescription: [
      "Automatic cleaning with multiple cycles",
      "Application – Advanced Milk Testing",
      "Display Type – Color Touch Screen",
      "Warranty – 2 Years",
      "Accuracy – 0.05"
    ],
    detailedFeatures: [
      "7-inch color touch screen display.",
      "Multi-stage automatic cleaning.",
      "Cloud data storage and analytics.",
      "Wi-Fi and Bluetooth connectivity.",
      "Advanced sensor technology.",
      "Multi-language support.",
      "Data export capabilities.",
      "Remote monitoring features."
    ],
    specifications: {
      'Analysis Time': '20 seconds',
      'Parameters': 'Fat, SNF, Protein, Lactose, Density, pH, Conductivity',
      'Display': 'Color Touch Screen',
      'Material': 'Stainless Steel 316',
      'Voltage': '100-240V',
      'Weight': '4.5 Kg',
      'Dimensions': '160 x 240 x 250 mm',
      'Warranty': '2 Years'
    },
    benefits: [
      'Ultra-fast 20-second analysis time',
      'Comprehensive parameter testing',
      'Advanced connectivity options',
      'Superior accuracy and precision',
      'Professional-grade construction',
      'Future-ready technology platform'
    ]
  },
  // Khoya Machines
  'automatic-khoya-machine-50kg': {
    name: 'Automatic Khoya Making Machine (50kg/hr)',
    price: 85000,
    category: 'Khoya Machines',
    image: '/placeholder.svg',
    rating: 4.7,
    features: ['50kg/hr capacity', 'Automatic operation', 'Temperature control', 'Easy cleaning'],
    productDescription: [
      "Fully automatic khoya making process",
      "Application – Khoya Production",
      "Capacity – 50 kg per hour",
      "Warranty – 1 Year",
      "Material – Food grade stainless steel"
    ],
    detailedFeatures: [
      "Automatic temperature control system.",
      "Continuous stirring mechanism.",
      "Easy loading and unloading.",
      "Minimal manual intervention required.",
      "Energy efficient heating system.",
      "Safety features included.",
      "Easy maintenance and cleaning.",
      "Consistent quality output."
    ],
    specifications: {
      'Capacity': '50 kg/hr',
      'Power': '15 kW',
      'Material': 'Stainless Steel 304',
      'Heating': 'Electric/Steam',
      'Dimensions': '200 x 120 x 150 cm',
      'Weight': '350 Kg',
      'Voltage': '415V, 3 Phase',
      'Warranty': '1 Year'
    },
    benefits: [
      'High production capacity for commercial use',
      'Consistent quality khoya production',
      'Reduced labor requirements',
      'Energy efficient operation',
      'Food grade construction ensures hygiene',
      'Low maintenance costs'
    ]
  },
  'semi-automatic-khoya-machine-25kg': {
    name: 'Semi-Automatic Khoya Making Machine (25kg/hr)',
    price: 45000,
    category: 'Khoya Machines',
    image: '/placeholder.svg',
    rating: 4.5,
    features: ['25kg/hr capacity', 'Semi-automatic operation', 'Compact design', 'Affordable'],
    productDescription: [
      "Semi-automatic khoya making process",
      "Application – Small scale Khoya Production",
      "Capacity – 25 kg per hour",
      "Warranty – 1 Year",
      "Material – Stainless steel body"
    ],
    detailedFeatures: [
      "Manual loading with automatic processing.",
      "Temperature monitoring system.",
      "Compact footprint design.",
      "Cost-effective solution.",
      "Simple operation controls.",
      "Easy to clean and maintain.",
      "Suitable for small businesses.",
      "Reliable performance."
    ],
    specifications: {
      'Capacity': '25 kg/hr',
      'Power': '8 kW',
      'Material': 'Stainless Steel 304',
      'Heating': 'Electric',
      'Dimensions': '150 x 100 x 120 cm',
      'Weight': '200 Kg',
      'Voltage': '230V, Single Phase',
      'Warranty': '1 Year'
    },
    benefits: [
      'Perfect for small to medium operations',
      'Cost-effective investment',
      'Simple operation and maintenance',
      'Space-saving compact design',
      'Good return on investment',
      'Reliable khoya production'
    ]
  },
  // Scientific Products
  'laboratory-ph-meter': {
    name: 'Digital Laboratory pH Meter',
    price: 15000,
    category: 'Scientific Products',
    image: '/placeholder.svg',
    rating: 4.8,
    features: ['High precision', 'Digital display', 'Auto calibration', 'Data logging'],
    productDescription: [
      "High precision pH measurement",
      "Application – Laboratory testing",
      "Display Type – Digital LCD",
      "Warranty – 1 Year",
      "Accuracy – ±0.01 pH"
    ],
    detailedFeatures: [
      "Auto calibration with buffer solutions.",
      "Temperature compensation feature.",
      "Data logging and storage capability.",
      "Multiple measurement modes.",
      "Waterproof electrode design.",
      "Battery and AC power options.",
      "User-friendly interface.",
      "Portable and lightweight."
    ],
    specifications: {
      'Range': '0.00 to 14.00 pH',
      'Accuracy': '±0.01 pH',
      'Resolution': '0.01 pH',
      'Temperature Range': '0 to 100°C',
      'Display': 'LCD',
      'Power': 'Battery/AC Adapter',
      'Weight': '0.5 Kg',
      'Warranty': '1 Year'
    },
    benefits: [
      'Laboratory-grade accuracy and precision',
      'Easy to use and maintain',
      'Portable for field measurements',
      'Long battery life',
      'Reliable and consistent results',
      'Cost-effective solution for pH testing'
    ]
  },
  'digital-weighing-scale': {
    name: 'Digital Precision Weighing Scale',
    price: 8000,
    category: 'Scientific Products',
    image: '/placeholder.svg',
    rating: 4.6,
    features: ['High precision', 'Multiple units', 'Calibration weights', 'Digital display'],
    productDescription: [
      "Precision weighing for laboratory use",
      "Application – Accurate measurements",
      "Display Type – LED",
      "Warranty – 1 Year",
      "Capacity – 5000g"
    ],
    detailedFeatures: [
      "High precision load cell technology.",
      "Multiple weighing units support.",
      "External calibration capability.",
      "Overload protection system.",
      "Stable and anti-vibration design.",
      "Easy to clean stainless steel pan.",
      "RS232 interface for data transfer.",
      "Compact and portable design."
    ],
    specifications: {
      'Capacity': '5000g',
      'Readability': '0.1g',
      'Accuracy': '±0.1g',
      'Units': 'g, kg, oz, lb',
      'Display': 'LED',
      'Power': 'AC Adapter',
      'Dimensions': '25 x 30 x 8 cm',
      'Warranty': '1 Year'
    },
    benefits: [
      'High accuracy for precise measurements',
      'Multiple unit conversions',
      'Durable and reliable construction',
      'Easy calibration and maintenance',
      'Suitable for various applications',
      'Cost-effective precision weighing'
    ]
  }
};

// Helper function to get all products by category
export const getProductsByCategory = (category: string): Array<{ id: string; product: ProductData }> => {
  return Object.entries(productData)
    .filter(([_, product]) => product.category === category)
    .map(([id, product]) => ({ id, product }));
};

// Helper function to get all categories
export const getAllCategories = (): string[] => {
  return Array.from(new Set(Object.values(productData).map(product => product.category)));
};

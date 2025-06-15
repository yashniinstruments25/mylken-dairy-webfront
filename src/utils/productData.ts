
import { ProductData } from '@/types/product';

export const productData: Record<string, ProductData> = {
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
  }
};

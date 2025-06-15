import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import ConsultationModal from '@/components/ConsultationModal';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Beaker, Milk, Factory, Filter, Search, IndianRupee, Zap, Wifi, Printer, Download, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MilkAnalyzers = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to create product slug
  const createProductSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

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

  const commonFeatures = [
    "Best in class LCD Display.",
    "Automatic and Manual Cleaning support.",
    "Cleaning history on the display and on cloud.",
    "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.",
    "Bidirectional communication through RS 232 port.",
    "Detachable Ultrasonic Sensor.",
    "Right to Repair – if you can't fix it, you don't own it.",
    "Food grade Stainless Steel 304 body."
  ];

  const productCategories = {
    'ultra-scan-basic': {
      name: 'Ultra Scan Basic Series',
      description: 'Essential milk analysis with fast results',
      icon: <Zap size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Ultra Scan Kurien Milk Analyzer (30 second)', 
          price: 35000, 
          features: ['30-second analysis', 'Fat, SNF, Protein analysis', 'User-friendly interface', 'Basic parameters testing'],
          productDescription: ["Manual as well as automatic cleaning", "Application – Milk Testing", "Display Type – LCD", "Warranty – 1 Year", "Accuracy – 0.1"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic Milk Analyzer', 
          price: 40000, 
          features: ['Twin sensor technology', 'Enhanced accuracy', 'Compact design', 'Multiple parameter testing'],
          productDescription: ["Ultra Scan Kurien Twinsonic Milk Analyzer with stirrer, it gives 9 parameters of the milk in just 30 secs.", "Warranty – 1 year", "Voltage – 100-240 V", "Test Time 30 Sec", "Stainless Steel Body"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift Milk Analyzer Fast Sensor', 
          price: 42000, 
          features: ['Fast sensor technology', 'Quick results', 'Reliable performance', 'Advanced calibration'],
          productDescription: ["20 Second", "Automation Grade – Automatic", "Dimension – 145 x 210 x 220 mm", "Relative Humidity – 0-80% Rh", "Weight – 3.5 Kg", "Material – SS", "Model – Swift"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift Twinsonic Milk Analyzer', 
          price: 48000, 
          features: ['Twin sensor system', 'Swift processing', 'Professional grade', 'High precision results'],
          productDescription: ["(20 second)", "We are offering a wide range of Ultra Scan Swift Twin Sonic Milk Analyzer with stirrer (swift fast sensor).", "Test Time – 20 Sec.", "Material – Stainless Steel", "Stainless Steel Body", "Ultrasonic Stirrer"],
          detailedFeatures: commonFeatures
        }
      ]
    },
    'ultra-scan-thermal': {
      name: 'Ultra Scan with Thermal Printer',
      description: 'Advanced analyzers with built-in printing capability',
      icon: <Printer size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Ultra Scan Kurien With Thermal Printer', 
          price: 38000, 
          features: ['Built-in thermal printer', 'Instant report generation', 'Data logging capability', 'Professional reports'],
          productDescription: ["(30 second)", "With Thermal Printer", "Manual as well as automatic cleaning", "Application – Milk Testing", "Display Type – LCD", "Warranty – 1 Year", "Accuracy – 0.1"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic With Thermal Printer', 
          price: 43500, 
          features: ['Thermal printing technology', 'Twin sensor precision', 'Automated reporting', 'Multi-format output'],
          productDescription: ["(30 second)", "With Thermal Printer", "Ultra Scan Kurien Twinsonic Milk Analyzer with stirrer, it gives 9 parameters of the milk in just 30 secs.", "Warranty – 1 year", "Voltage – 100-240 V", "Test Time 30 Sec", "Stainless Steel Body"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift With Thermal Printer', 
          price: 45500, 
          features: ['Swift analysis with printing', 'High-speed thermal printer', 'Custom report formats', 'Data backup'],
          productDescription: ["(20 Second)", "With Thermal Printer", "Automation Grade – Automatic", "Dimension – 145 x 210 x 220 mm", "Relative Humidity – 0-80% Rh", "Weight – 3.5 Kg", "Material – SS", "Model – Swift"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift Twinsonic With Thermal Printer', 
          price: 49000, 
          features: ['Advanced dual printing', 'Twin sensor accuracy', 'Complete documentation', 'Professional grade output'],
          productDescription: ["(20 second)", "We are offering a wide range of Ultra Scan Swift Twin Sonic Milk Analyzer with stirrer (swift fast sensor).", "Test Time – 20 Sec.", "Material – Stainless Steel", "Stainless Steel Body", "Ultrasonic Stirrer"],
          detailedFeatures: commonFeatures
        }
      ]
    },
    'ultra-scan-iot': {
      name: 'Ultra Scan IoT Series',
      description: 'Smart analyzers with IoT connectivity and cloud integration',
      icon: <Wifi size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Ultra Scan Kurien Milk Analyzer With IoT', 
          price: 44500, 
          features: ['IoT connectivity', 'Cloud data synchronization', 'Remote monitoring', 'Mobile app integration'],
          productDescription: ["(30 second)", "With IOT", "Manual as well as automatic cleaning"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic With IoT', 
          price: 48000, 
          features: ['IoT-enabled twin sensors', 'Real-time data transmission', 'Smart analytics dashboard', 'Remote diagnostics'],
          productDescription: ["(30 second)", "With IOT", "Ultra Scan Kurien Twinsonic Milk Analyzer with stirrer, it gives 9 parameters of the milk in just 30 secs.", "Warranty – 1 year", "Voltage – 100-240 V", "Test Time 30 Sec.", "Stainless Steel Body"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift Milk Analyzer With IoT', 
          price: 52000, 
          features: ['IoT integration', 'Advanced data analytics', 'Mobile app control', 'Cloud storage'],
          productDescription: ["(20 second)", "With IOT", "Automation Grade – Automatic", "Dimension – 145 x 210 x 220 mm", "Relative Humidity – 0-80% Rh", "Weight – 3.5 Kg", "Material – SS", "Model – Swift"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift Twinsonic Milk Analyzer With IoT', 
          price: 54500, 
          features: ['Complete IoT solution', 'Advanced cloud analytics', 'Real-time monitoring', 'Predictive maintenance'],
          productDescription: ["(20 second)", "We are offering a wide range of Ultra Scan Swift Twin Sonic Milk Analyzer with stirrer (swift fast sensor).", "Test Time – 20 Sec.", "Material – Stainless Steel", "Stainless Steel Body", "Ultrasonic Stirrer"],
          detailedFeatures: commonFeatures
        }
      ]
    },
    'ultra-scan-premium': {
      name: 'Ultra Scan Premium Series',
      description: 'Top-tier analyzers with thermal printer and IoT capabilities',
      icon: <Factory size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Ultra Scan Kurien With Thermal Printer & IoT', 
          price: 48500, 
          features: ['Thermal printer + IoT', 'Complete documentation', 'Cloud connectivity', 'Professional reporting'],
          productDescription: ["(30 second)", "With Thermal Printer and IOT", "Manual as well as automatic cleaning"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Kurien Twinsonic With Thermal Printer & IoT', 
          price: 54000, 
          features: ['Premium twin sensor tech', 'All-in-one solution', 'Professional grade output', 'Enterprise features'],
          productDescription: ["(30 second)", "With Thermal Printer and IOT", "Application – Milk Testing", "Display Type – LCD", "Warranty – 1 year", "Accuracy – 0.1"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift With Thermal Printer & IoT', 
          price: 56000, 
          features: ['Swift processing + IoT', 'Integrated printing', 'Advanced cloud features', 'Professional reporting'],
          productDescription: ["(20 second)", "With Thermal Printer and IOT", "Automation Grade – Automatic", "Dimension – 145 x 210 x 220 mm", "Relative Humidity – 0-80% Rh", "Weight – 3.5 Kg", "Material – Swift"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Ultra Scan Swift Twinsonic with Thermal Printer & IoT', 
          price: 62000, 
          features: ['Ultimate analyzer solution', 'Complete feature package', 'Enterprise-grade performance', 'Maximum connectivity'],
          productDescription: ["(20 second)", "With Thermal Printer and IOT", "We are offering a wide range of Ultra Scan Swift Twin Sonic Milk Analyzer with stirrer (swift fast sensor).", "Test Time – 20 Sec.", "Material – Stainless Steel", "Ultrasonic Stirrer"],
          detailedFeatures: commonFeatures
        }
      ]
    },
    'specialized': {
      name: 'Specialized Analyzers',
      description: 'Specialized milk analyzers for specific applications',
      icon: <Beaker size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Ultra Scan Kurien Milk Analyzer with Ph', 
          price: 40000, 
          features: ['pH measurement capability', 'Acidity level testing', 'Quality control features', 'Multi-parameter analysis'],
          productDescription: ["(30 Second)", "With Ph", "We are offering a wide range of Ultra Scan Kurien Milk analyzer with Ph (Kurien single sensor).", "Test Time – 30 Sec", "Material – Stainless Steel", "Stainless Steel Body"],
          detailedFeatures: ["FASTEST ANALYSIS", "Most unique product in its class which gives results in just 30 secs", "STAINLESS STEEL BODY", "Robust Rugged shock proof body for long life.", "PARAMETERS", "Most unique product in its class which gives 11 parameters of milk.", "CLEANING", "Automatic as well as manual cleaning."]
        },
        { 
          name: 'Ultra Scan Kurien with Ph & Conductivity', 
          price: 42000, 
          features: ['pH & conductivity testing', 'Comprehensive quality analysis', 'Advanced quality assurance', 'Professional validation'],
          productDescription: ["(30 Second)", "With Ph", "We are offering a wide range of Ultra Scan Kurien Milk analyzer with Ph & Conductivity (Kurien single sensor).", "Test Time – 30 Sec", "Material – Stainless Steel", "Stainless Steel Body"],
          detailedFeatures: ["FASTEST ANALYSIS", "Most unique product in its class which gives results in just 30 secs", "STAINLESS STEEL BODY", "Robust Rugged shock proof body for long life.", "PARAMETERS", "Most unique product in its class which gives 12 parameters of milk.", "CLEANING", "Automatic as well as manual cleaning."]
        }
      ]
    },
    'mobile-units': {
      name: 'Mobile Collection Units',
      description: 'Portable solutions for field collection and analysis',
      icon: <Milk size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Ultra Scan Swift IOT Bond POS', 
          price: 84500, 
          features: ['POS system integration', 'IoT connectivity', 'Field-ready design', 'Complete payment solution'],
          productDescription: ["FASTEST ANALYSIS", "Most unique product in its class which gives results in just 20 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Swift Milk Analyzer + Thermal Printer + Ultrasonic Stirrer + 100 Kg Electronic Weighing Scale + Milk Collection Android APP + 100sms + Farmer Mobile App + Supervisor Mobile App + 3 Year Web Server", "Milk Analyzer Kurien (30 Sec) With IoT", "Mobile Amcu Android App with 3 Y Web Server", "Weighing Scale with Attachment To Bluetooth Interface", "Ultrasonic Stirrer"],
          detailedFeatures: ["Best in class LCD Display.", "Automatic and Manual Cleaning support.", "Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (Swift mAMCU POS)', 
          price: 83000, 
          features: ['Automatic milk collection', 'Integrated POS system', 'Mobile operation', 'Farmer payment system'],
          productDescription: ["FASTEST ANALYSIS", "Most unique product in its class which gives results in just 20 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Swift Milk Analyzer + Android POS + Ultrasonic Stirrer + 100 Kg Electronic Weighing Scale + Milk Collection Android APP + 100Sms + Farmer Mobile App + Supervisor Mobile App + 3 Year Web Server"],
          detailedFeatures: ["Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Ultra Scan Swift IOT Bond', 
          price: 69000, 
          features: ['IoT-enabled bonding', 'Portable analyzer', 'Bond system connectivity', 'Field deployment ready'],
          productDescription: ["FASTEST ANALYSIS", "Most unique product in its class which gives results in just 20 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use your own android cell phone to capture & save data", "Kurien Milk Analyzer + Android POS + 100 Kg Electronic Weighing Scale + Milk Collection Android App + 100Sms + Farmer Mobile App + Supervisor Mobile App + 3 Year Web Server"],
          detailedFeatures: ["Best in class LCD Display.", "Automatic and Manual Cleaning support.", "Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (Swift mAMCU)', 
          price: 66500, 
          features: ['Automatic collection system', 'Mobile unit design', 'Efficient milk processing', 'Field operation capable'],
          productDescription: ["FASTEST ANALYSIS", "Most unique product in its class which gives results in just 20 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Kurien Milk Analyzer + Android POS + Ultrasonic Stirrer + 100 Kg Electronic Weighing Scale + Milk Collection Android App + Supervisor Mobile App + 3 Year Web Server"],
          detailedFeatures: ["Best in class LCD Display.", "Automatic and Manual Cleaning support.", "Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Ultra Scan Kurien IOT Bond POS', 
          price: 77000, 
          features: ['Kurien series technology', 'IoT + POS integration', 'Complete field solution', 'Farmer management system'],
          productDescription: ["Product Details:", "FASTEST ANALYSIS", "Most unique product in its class which gives results in just 18 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Kurien Milk Analyzer + Android POS + 100 Kg Electronic Weighing Scale + Milk Collection Android App + 100Sms + Farmer Mobile App + Supervisor Mobile App + 3 Year Web Server", "Milk Analyzer Kurien (30 Sec) With IoT", "Mobile Amcu Android App with 3 Y Web Server", "Weighing Scale with Attachment To Bluetooth Interface", "Ultrasonic Stirrer"],
          detailedFeatures: ["Best in class LCD Display.", "Automatic and Manual Cleaning support.", "Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (mAMCU POS Kurien)', 
          price: 76500, 
          features: ['Kurien technology base', 'POS integration', 'Mobile collection unit', 'Payment processing'],
          productDescription: ["Product Details:", "FASTEST ANALYSIS", "Most unique product in its class which gives results in just 18 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Kurien Milk Analyzer + Android POS + Ultrasonic Stirrer + 100 Kg Electronic Weighing Scale + Milk Collection Android App + Supervisor Mobile App + 3 Year Web Server"],
          detailedFeatures: ["Best in class LCD Display.", "Automatic and Manual Cleaning support.", "Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Ultra Scan Kurien IOT Bond', 
          price: 62000, 
          features: ['IoT connectivity', 'Bond system integration', 'Portable design', 'Field-tested reliability'],
          productDescription: ["PRECISE ANALYSIS", "BLUETOOTH CONNECTIVITY", "Product Details:", "PRECISE ANALYSIS", "Single sensor Mik analyzer which gives 9 parameters of milk just in 30 secs", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use your own android mobile phone to capture & save data", "Kurien Milk Analyzer + Thermal Printer + Ultrasonic Stirrer + 100 Kg Electronic Weighing scale"],
          detailedFeatures: commonFeatures
        },
        { 
          name: 'Mobile Automatic Milk Collection Unit (mAMCU Kurien)', 
          price: 59500, 
          features: ['Kurien series base', 'Automatic collection', 'Mobile operation', 'Dairy cooperative ready'],
          productDescription: ["Product Details:", "FASTEST ANALYSIS", "Most unique product in its class which gives results in just 30 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play Bluetooth connectivity for seamless data capturing.", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Kurien Milk Analyzer + Android POS + Ultrasonic Stirrer + 100 Kg Electronic Weighing Scale + Milk Collection Android App + Supervisor Mobile App + 3 Year Web Server"],
          detailedFeatures: commonFeatures
        }
      ]
    },
    'accessories': {
      name: 'Testing Equipment & Accessories',
      description: 'Essential tools and accessories for milk testing',
      icon: <Search size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Data Processor Milk Collection Unit', 
          price: 62000, 
          features: ['Data processing capability', 'Collection interface', 'System integration', 'Data management'],
          productDescription: ["Product Details:", "FASTEST ANALYSIS", "Most unique product in its class which gives results in just 30 secs for milk (FAT, SNF, Density, CLR, Protein, lactose, Added Water, Freezing Point, Added Salts, Sample Temperature)", "BLUETOOTH CONNECTIVITY", "Just plug and play", "ANDROID POS", "Data output via Bluetooth & use the handheld android pos to generate the receipt & save the data", "Kurien Milk Analyzer + Ultrasonic Stirrer + 100 Kg Electronic Weighing scale"],
          detailedFeatures: ["Best in class LCD Display.", "Automatic and Manual Cleaning support.", "Easiest & user-friendly keypad design.", "Cleaning history on the display and on cloud.", "RS 232 Data Mode, USB PC Interface, Direct Printer Interface.", "Attach to any DPU using our multiple data format selection.", "Bidirectional communication through RS 232 port.", "Detachable as well as Interchangeable Ultrasonic Sensor.", "Right to Repair – if you can't fix it, you don't own it.", "Food grade Stainless Steel 304 body."]
        },
        { 
          name: 'Electronic Weighing Scale 100Kg', 
          price: 9500, 
          features: ['100kg capacity', 'Digital display', 'Precision weighing', 'Milk collection support'],
          productDescription: ["KG To Liter Conversion", "Calculated as per Indian Weights and Measurement department convert kg into liter (liter=kg/Liters)", "RS 232", "Can be connected to any RS-232 Communication device", "SS Platter", "Stainless steel Platter Ideal for keeping one 40 litre milk can", "In Built Battery", "Built in battery backup"],
          detailedFeatures: []
        },
        { 
          name: 'Electronic Weighing Scale 200Kg', 
          price: 15000, 
          features: ['200kg heavy-duty capacity', 'Professional grade', 'High precision', 'Industrial use'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Digital Ultrasonic Stirrer', 
          price: 4000, 
          features: ['Ultrasonic mixing technology', 'Digital control panel', 'Sample preparation', 'Laboratory grade'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Ultra Scan Kurien Android Bond', 
          price: 76500, 
          features: ['Android interface', 'Touch screen operation', 'Modern UI design', 'User-friendly controls'],
          productDescription: [],
          detailedFeatures: []
        }
      ]
    },
    'testing-kits': {
      name: 'Testing Kits & Solutions',
      description: 'Comprehensive testing solutions and maintenance products',
      icon: <Beaker size={20} style={floatingAnimation} />,
      products: [
        { 
          name: 'Milk Butyrometer 0-8%', 
          price: 100, 
          features: ['Fat content measurement', '0-8% measurement range', 'Standard testing tool', 'Laboratory essential'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Milk Butyrometer 0-10% ISI Mark', 
          price: 100, 
          features: ['ISI certified quality', '0-10% measurement range', 'Quality assured product', 'Standard compliance'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Milk Butyrometer 0-10% Double Tested', 
          price: 100, 
          features: ['Double-tested accuracy', 'Enhanced precision', 'Reliable measurements', 'Quality control'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Milk Butyrometer 0-10% for Milk analyzer calibration and Lab purpose', 
          price: 2500, 
          features: ['Calibration tool', 'Laboratory grade precision', 'Professional instrument', 'Analyzer calibration'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Lactodaily Milk Analyzer Cleaning Solution', 
          price: 150, 
          features: ['Daily maintenance solution', 'Analyzer cleaning', 'Equipment care', 'Performance maintenance'],
          productDescription: [],
          detailedFeatures: []
        },
        { 
          name: 'Lactoweekly Milk Analyzer Cleaning Solution', 
          price: 150, 
          features: ['Weekly deep cleaning', 'Advanced maintenance', 'System care solution', 'Extended equipment life'],
          productDescription: [],
          detailedFeatures: []
        }
      ]
    }
  };

  const categories = Object.keys(productCategories);
  const filteredProducts = selectedCategory === 'all' 
    ? Object.values(productCategories).flatMap(cat => cat.products.map(p => ({...p, category: cat.name})))
    : productCategories[selectedCategory]?.products || [];

  const handleViewDetails = (product: any) => {
    const productSlug = createProductSlug(product.name);
    navigate(`/product/${productSlug}`);
  };

  const handleGetQuote = (product: any) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleDownloadBrochure = (productName?: string) => {
    // Simulate PDF download
    console.log('Downloading brochure for:', productName || 'All Products');
    
    toast({
      title: "Download Started",
      description: `${productName ? productName + ' ' : ''}Product brochure is being downloaded.`,
    });

    // Simulate file download
    const link = document.createElement('a');
    link.href = '#'; // In real app, this would be the actual PDF URL
    link.download = `${productName ? productName.replace(/\s+/g, '-') : 'milk-analyzers'}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactSales = () => {
    // Simulate contact sales action
    toast({
      title: "Redirecting to Sales",
      description: "You'll be connected with our sales team shortly.",
    });
    
    // In a real app, this could redirect to a contact form or initiate a chat
    console.log('Contacting sales team');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
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
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Professional Milk Analysis Equipment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Complete Range of Milk Analyzers
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                From basic analyzers to IoT-enabled systems with thermal printing and mobile collection units
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant={viewMode === 'cards' ? "primary" : "outline"}
                  onClick={() => setViewMode('cards')}
                  className="relative overflow-hidden"
                >
                  <span className="relative z-10">Card View</span>
                  <div className="absolute inset-0 milk-wave"></div>
                </Button>
                <Button 
                  variant={viewMode === 'table' ? "primary" : "outline"}
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
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant={selectedCategory === 'all' ? "primary" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full hover-scale"
              >
                <Filter size={16} className="mr-2" style={milkDropAnimation} />
                All Products ({Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0)})
              </Button>
              {categories.map((cat) => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "primary" : "outline"}
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

        {/* Products Section with enhanced cards */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
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
                    
                    {viewMode === 'cards' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.slice(0, 6).map((product, index) => (
                          <Card key={index} className="product-card border border-gray-200 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-mylken-accent/0 to-mylken-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <CardHeader className="pb-3 relative z-10">
                              <div className="flex justify-between items-start gap-3">
                                <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                                <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0" style={milkDropAnimation}>
                                  <IndianRupee size={12} />
                                  {product.price.toLocaleString()}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="relative z-10">
                              <ul className="space-y-2 mb-4">
                                {product.features.map((feature, i) => (
                                  <li key={i} className="flex items-start text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2 mt-2 shrink-0" style={milkDropAnimation}></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
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
                    ) : (
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Product Name</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead>Key Features</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {category.products.slice(0, 6).map((product, index) => (
                              <TableRow key={index} className="hover:bg-mylken-light/20">
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>
                                  <Badge className="bg-mylken-primary text-white">
                                    <IndianRupee size={12} />
                                    {product.price.toLocaleString()}
                                  </Badge>
                                </TableCell>
                                <TableCell className="max-w-md">
                                  <div className="flex flex-wrap gap-1">
                                    {product.features.slice(0, 2).map((feature, i) => (
                                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {feature}
                                      </span>
                                    ))}
                                    {product.features.length > 2 && (
                                      <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
                                    )}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2">
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      onClick={() => handleViewDetails(product)}
                                    >
                                      Details
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      className="bg-mylken-primary text-white"
                                      onClick={() => handleGetQuote(product)}
                                    >
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
                    
                    {category.products.length > 6 && (
                      <div className="text-center mt-6">
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedCategory(key)}
                          className="bg-white hover:bg-mylken-light hover-scale"
                        >
                          View All {category.products.length} Products <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    )}
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
                
                {viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <Card key={index} className="product-card border border-gray-200 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-mylken-accent/0 to-mylken-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardHeader className="pb-3 relative z-10">
                          <div className="flex justify-between items-start gap-3">
                            <CardTitle className="text-lg text-mylken-dark leading-tight">{product.name}</CardTitle>
                            <Badge className="bg-mylken-primary text-white whitespace-nowrap shrink-0" style={milkDropAnimation}>
                              <IndianRupee size={12} />
                              {product.price.toLocaleString()}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <ul className="space-y-2 mb-4">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-mylken-accent mr-2 mt-2 shrink-0" style={milkDropAnimation}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
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
                ) : (
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product Name</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Key Features</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProducts.map((product, index) => (
                          <TableRow key={index} className="hover:bg-mylken-light/20">
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>
                              <Badge className="bg-mylken-primary text-white">
                                <IndianRupee size={12} />
                                {product.price.toLocaleString()}
                              </Badge>
                            </TableCell>
                            <TableCell className="max-w-md">
                              <div className="flex flex-wrap gap-1">
                                {product.features.slice(0, 2).map((feature, i) => (
                                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                    {feature}
                                  </span>
                                ))}
                                {product.features.length > 2 && (
                                  <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleViewDetails(product)}
                                >
                                  Details
                                </Button>
                                <Button 
                                  size="sm" 
                                  className="bg-mylken-primary text-white"
                                  onClick={() => handleGetQuote(product)}
                                >
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
            )}
          </div>
        </section>

        {/* Why Choose Our Analyzers */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mylken-dark">Why Choose Our Milk Analyzers?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our analyzers are designed to provide accurate results with minimal effort, helping you ensure product quality.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Beaker className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">High Precision</h3>
                <p className="text-gray-600">Our analyzers deliver accuracy up to 99.8% with consistent and reliable results every time.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Factory className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Integration</h3>
                <p className="text-gray-600">Seamlessly connect with your existing processes and software systems.</p>
              </div>
              
              <div className="bg-mylken-light/50 p-6 rounded-lg shadow-md hover-scale">
                <div className="bg-mylken-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4" style={floatingAnimation}>
                  <Milk className="text-mylken-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Rapid Analysis</h3>
                <p className="text-gray-600">Get comprehensive results in seconds, increasing throughput and productivity.</p>
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
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade Your Milk Testing?</h2>
              <p className="text-mylken-light text-lg mb-8">
                Contact our team to find the perfect analyzer for your dairy business needs.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="hover-scale"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Request Consultation
                </Button>
                <Link to="/products">
                  <Button variant="milk" size="lg" className="hover-scale">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
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

export default MilkAnalyzers;

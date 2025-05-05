
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ScientificProducts from "./pages/ScientificProducts";
import ProductCategory from "./pages/ProductCategory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MilkAnalyzers from "./pages/MilkAnalyzers";
import KhoyaMachines from "./pages/KhoyaMachines";

// Create milk splash effect on page load
const createMilkSplash = () => {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  
  // Create larger and more visible splash elements
  for (let i = 0; i < 8; i++) {
    const splash = document.createElement('div');
    splash.className = 'milk-splash';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    splash.style.top = `${y}%`;
    splash.style.left = `${x}%`;
    splash.style.width = `${Math.random() * 40 + 20}px`;
    splash.style.height = `${Math.random() * 40 + 20}px`;
    splash.style.opacity = '0.8';
    splash.style.animationDuration = `${Math.random() * 0.5 + 0.7}s`;
    splash.style.animationDelay = `${i * 0.15}s`;
    
    container.appendChild(splash);
  }
  
  document.body.appendChild(container);
  
  // Remove after animation completes
  setTimeout(() => {
    document.body.removeChild(container);
  }, 2500);
};

const createMilkDrops = () => {
  const drops = document.createElement('div');
  drops.style.position = 'fixed';
  drops.style.top = '0';
  drops.style.left = '0';
  drops.style.width = '100%';
  drops.style.height = '100%';
  drops.style.pointerEvents = 'none';
  drops.style.zIndex = '9998';
  drops.id = 'milk-drops-container';
  
  document.body.appendChild(drops);
  
  // Function to create a single drop
  const createDrop = () => {
    const drop = document.createElement('div');
    drop.className = 'milk-drop';
    
    // Random size for variety
    const size = Math.random() * 15 + 5;
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    
    // Random horizontal position
    const left = Math.random() * 100;
    drop.style.left = `${left}%`;
    
    // Start from top
    drop.style.top = '0';
    
    // Animation
    drop.style.animation = `milk-drop-fall ${Math.random() * 3 + 3}s linear forwards`;
    
    drops.appendChild(drop);
    
    // Remove drop after animation completes
    setTimeout(() => {
      if (drop.parentNode) {
        drop.parentNode.removeChild(drop);
      }
    }, 6000);
  };
  
  // Create drops at intervals
  let dropInterval = setInterval(createDrop, 300);
  
  return () => {
    clearInterval(dropInterval);
    if (document.body.contains(drops)) {
      document.body.removeChild(drops);
    }
  };
};

const queryClient = new QueryClient();

const App = () => {
  // Create splash effect on first render
  React.useEffect(() => {
    createMilkSplash();
    
    // Start creating milk drops
    const cleanupDrops = createMilkDrops();
    
    return () => {
      cleanupDrops();
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/scientific-products" element={<ScientificProducts />} />
            <Route path="/products/:categoryId" element={<ProductCategory />} />
            <Route path="/milk-analyzers" element={<MilkAnalyzers />} />
            <Route path="/khoya-machines" element={<KhoyaMachines />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

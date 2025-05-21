
import React, { useEffect } from 'react';
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

// Create farm-themed milk splash effect on page load
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
  
  // Function to create a single drop with correct orientation (pointing down)
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
    
    // Correct orientation for milk drop (pointing down)
    drop.style.transform = 'rotate(225deg)';
    
    // Animation with corrected orientation
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

// Create farm-themed elements that appear occasionally
const createFarmElements = () => {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100px';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '10';
  container.id = 'farm-elements-container';
  
  document.body.appendChild(container);
  
  // Create grass blades at the bottom
  for (let i = 0; i < 30; i++) {
    const grass = document.createElement('div');
    const height = Math.random() * 30 + 20;
    const width = Math.random() * 4 + 2;
    
    grass.style.position = 'absolute';
    grass.style.bottom = '0';
    grass.style.left = `${Math.random() * 100}%`;
    grass.style.height = `${height}px`;
    grass.style.width = `${width}px`;
    grass.style.backgroundColor = `rgba(101, 163, 13, ${Math.random() * 0.5 + 0.3})`;
    grass.style.borderRadius = '0 100% 0 100%';
    grass.style.transformOrigin = 'bottom center';
    grass.style.animation = `grass-sway ${Math.random() * 3 + 2}s ease-in-out infinite`;
    grass.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(grass);
  }
  
  // Create occasional butterflies
  const createButterfly = () => {
    if (!container || Math.random() > 0.1) return;
    
    const butterfly = document.createElement('div');
    butterfly.style.position = 'absolute';
    butterfly.style.bottom = `${Math.random() * 80 + 20}%`;
    butterfly.style.left = `${Math.random() * 100}%`;
    butterfly.style.width = '10px';
    butterfly.style.height = '10px';
    butterfly.style.backgroundColor = Math.random() > 0.5 ? '#fcd34d' : '#a7f3d0';
    butterfly.style.borderRadius = '50%';
    butterfly.style.transform = 'translate(-50%, -50%)';
    butterfly.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.8)';
    
    // Create wings
    const wings = document.createElement('div');
    wings.style.position = 'absolute';
    wings.style.top = '50%';
    wings.style.left = '50%';
    wings.style.width = '16px';
    wings.style.height = '12px';
    wings.style.borderRadius = '50%';
    wings.style.border = '2px solid ' + (Math.random() > 0.5 ? '#fcd34d' : '#a7f3d0');
    wings.style.transform = 'translate(-50%, -50%)';
    wings.style.animation = 'leaf-flutter 0.5s ease-in-out infinite alternate';
    
    butterfly.appendChild(wings);
    container.appendChild(butterfly);
    
    // Add random movement animation
    const keyframes = `
      @keyframes butterfly-${Date.now()} {
        0% { transform: translate(0, 0); }
        25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px); }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px); }
        75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px); }
        100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px); }
      }
    `;
    
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    
    butterfly.style.animation = `butterfly-${Date.now()} ${Math.random() * 5 + 10}s ease-in-out forwards`;
    
    // Remove after animation
    setTimeout(() => {
      if (butterfly.parentNode) {
        butterfly.parentNode.removeChild(butterfly);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }, 15000);
  };
  
  // Create butterflies occasionally
  setInterval(createButterfly, 5000);
  
  return () => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  };
};

const queryClient = new QueryClient();

const App = () => {
  // Create farm-themed effects on first render
  useEffect(() => {
    createMilkSplash();
    
    // Start creating milk drops and farm elements
    const cleanupDrops = createMilkDrops();
    const cleanupFarm = createFarmElements();
    
    return () => {
      cleanupDrops();
      cleanupFarm();
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

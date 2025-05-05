
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
  
  // Create splash elements
  for (let i = 0; i < 5; i++) {
    const splash = document.createElement('div');
    splash.className = 'milk-splash';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    splash.style.top = `${y}%`;
    splash.style.left = `${x}%`;
    splash.style.animationDelay = `${i * 0.2}s`;
    
    container.appendChild(splash);
  }
  
  document.body.appendChild(container);
  
  // Remove after animation completes
  setTimeout(() => {
    document.body.removeChild(container);
  }, 2000);
};

const queryClient = new QueryClient();

const App = () => {
  // Create splash effect on first render
  React.useEffect(() => {
    createMilkSplash();
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

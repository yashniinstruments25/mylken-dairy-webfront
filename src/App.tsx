
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

// Create professional page load animation
const createPageLoadEffect = () => {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  container.style.background = 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.5), rgba(255,255,255,0))';
  container.style.backgroundSize = '200% 100%';
  container.style.animation = 'shine 1.5s ease-in-out';
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shine {
      0% {
        background-position: -200% 0;
        opacity: 1;
      }
      100% {
        background-position: 200% 0;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(container);
  
  setTimeout(() => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
      document.head.removeChild(style);
    }
  }, 1500);
};

const queryClient = new QueryClient();

const App = () => {
  // Create page load effect on first render
  React.useEffect(() => {
    createPageLoadEffect();
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

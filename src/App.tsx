
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import MilkAnalyzers from "./pages/MilkAnalyzers";
import CreamSeparators from "./pages/CreamSeparators";
import KhoyaMachines from "./pages/KhoyaMachines";
import ProductCategory from "./pages/ProductCategory";
import ScientificProducts from "./pages/ScientificProducts";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/milk-analyzers" element={<MilkAnalyzers />} />
              <Route path="/products/cream-separator" element={<CreamSeparators />} />
              <Route path="/products/khoya-machines" element={<KhoyaMachines />} />
              <Route path="/products/:category" element={<ProductCategory />} />
              <Route path="/scientific-products" element={<ScientificProducts />} />
              <Route path="/scientific-products/:category" element={<ProductCategory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

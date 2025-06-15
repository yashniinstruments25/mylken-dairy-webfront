
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import ConsultationModal from '@/components/ConsultationModal';
import ProductHeader from '@/components/ProductHeader';
import ProductTabs from '@/components/ProductTabs';
import ProductSidebar from '@/components/ProductSidebar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ProductData } from '@/types/product';
import { productData } from '@/utils/productData';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (productId) {
      const foundProduct = productData[productId];
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/milk-analyzers');
      }
    }
  }, [productId, navigate]);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Download Started",
      description: `${product?.name} brochure is being downloaded.`,
    });
  };

  const handleContactSales = () => {
    toast({
      title: "Redirecting to Sales",
      description: "You'll be connected with our sales team shortly.",
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Product not found</h2>
          <Link to="/milk-analyzers">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container-custom py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-mylken-primary">Home</Link>
              <span>/</span>
              <Link to="/milk-analyzers" className="hover:text-mylken-primary">Milk Analyzers</Link>
              <span>/</span>
              <span className="text-mylken-primary">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Header */}
        <ProductHeader
          product={product}
          onGetQuote={handleGetQuote}
          onDownloadBrochure={handleDownloadBrochure}
          onContactSales={handleContactSales}
        />

        {/* Product Content */}
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ProductTabs product={product} />
              </div>

              {/* Sidebar */}
              <ProductSidebar
                product={product}
                onGetQuote={handleGetQuote}
                onDownloadBrochure={handleDownloadBrochure}
                onConsultation={() => setIsConsultationModalOpen(true)}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={product}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;

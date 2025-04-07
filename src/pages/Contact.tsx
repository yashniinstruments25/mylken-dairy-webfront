
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for Contact Page */}
        <section className="bg-mylken-primary pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                Contact Us
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                Have questions about our products? Looking for a custom solution? We're here to help!
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Map Section */}
        <section className="py-16 bg-mylken-light">
          <div className="container-custom">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-mylken-dark mb-4">Our Location</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map placeholder - Google Maps integration would go here</p>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-mylken-light rounded-lg">
                  <h3 className="font-bold text-mylken-primary">Head Office</h3>
                  <p className="text-gray-700 mt-2">123 Dairy Lane, Milk City, MC 12345</p>
                </div>
                <div className="p-4 border border-mylken-light rounded-lg">
                  <h3 className="font-bold text-mylken-primary">Working Hours</h3>
                  <p className="text-gray-700 mt-2">Monday-Friday: 9 AM - 6 PM<br />Saturday: 10 AM - 4 PM</p>
                </div>
                <div className="p-4 border border-mylken-light rounded-lg">
                  <h3 className="font-bold text-mylken-primary">Contact Info</h3>
                  <p className="text-gray-700 mt-2">Phone: (123) 456-7890<br />Email: info@mylken.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

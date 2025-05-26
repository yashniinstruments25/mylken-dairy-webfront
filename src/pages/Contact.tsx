
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { MapPin, Phone, Mail, Clock, Users, Headphones, Award } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Redesigned */}
        <section className="relative bg-gradient-to-br from-mylken-primary via-mylken-secondary to-mylken-primary pt-28 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-mylken-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-mylken-light/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium mb-6 backdrop-blur-sm border border-mylken-accent/30">
                <Headphones className="w-4 h-4" />
                We're Here to Help
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">Let's Start a</span>
                <span className="block text-mylken-accent">Conversation</span>
              </h1>
              
              <p className="text-mylken-light text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                Ready to transform your dairy operations? Our team of experts is standing by to help you find the perfect equipment solutions.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: <Users />, stat: "500+", label: "Happy Customers" },
                  { icon: <Award />, stat: "24/7", label: "Expert Support" },
                  { icon: <Phone />, stat: "<2hrs", label: "Response Time" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-mylken-light/20">
                    <div className="text-mylken-accent mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold text-white">{item.stat}</div>
                    <div className="text-mylken-light text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section - Enhanced */}
        <ContactSection />
        
        {/* Enhanced Location & Info Section */}
        <section className="py-16 bg-gradient-to-r from-mylken-light/30 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-mylken-primary mb-4">Get In Touch</h2>
                  <p className="text-gray-600 mb-8">Choose the best way to reach us. We're committed to responding quickly and helping you succeed.</p>
                </div>
                
                <div className="grid gap-4">
                  {[
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Visit Our Facility",
                      details: "123 Dairy Innovation Hub, Industrial Area",
                      subDetails: "New Delhi, India 110001",
                      bgColor: "bg-mylken-primary"
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Call Us",
                      details: "+91 98765 43210",
                      subDetails: "Mon-Sat: 9:00 AM - 6:00 PM",
                      bgColor: "bg-mylken-secondary"
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email Us",
                      details: "info@mylken.com",
                      subDetails: "We respond within 2 hours",
                      bgColor: "bg-mylken-accent"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className={`${item.bgColor} rounded-full p-3 text-white`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-mylken-primary text-lg">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.details}</p>
                        <p className="text-gray-500 text-sm">{item.subDetails}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Map Placeholder - Enhanced */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-mylken-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Our Location
                  </h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-mylken-light/20 to-mylken-primary/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="bg-mylken-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-mylken-primary" />
                    </div>
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-gray-500 text-sm">Google Maps integration available</p>
                  </div>
                </div>
                <div className="p-4 bg-mylken-light/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Distance from Delhi Center:</span>
                    <span className="font-medium text-mylken-primary">25 km</span>
                  </div>
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

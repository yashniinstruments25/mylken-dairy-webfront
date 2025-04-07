
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for About Page */}
        <section className="bg-mylken-primary pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium animate-fade-in">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-in animation-delay-300">
                About Mylken
              </h1>
              <p className="text-mylken-light text-lg mt-4 animate-fade-in animation-delay-500">
                For over 30 years, we've been delivering superior quality dairy equipment with a commitment to innovation and excellence.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Company History Timeline */}
        <section className="bg-mylken-light py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-mylken-dark text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mylken-secondary"></div>
              
              {/* Timeline items */}
              <div className="flex flex-col space-y-12">
                <div className="flex justify-end md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-md mr-8 relative animate-fade-in">
                    <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-4 h-4 bg-mylken-accent rounded-full"></div>
                    <h3 className="text-mylken-primary font-bold text-xl">1990</h3>
                    <p className="mt-2">Mylken was founded with a vision to provide quality dairy equipment.</p>
                  </div>
                </div>
                
                <div className="flex justify-start md:w-1/2 md:ml-auto">
                  <div className="bg-white p-6 rounded-lg shadow-md ml-8 relative animate-fade-in">
                    <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-4 h-4 bg-mylken-accent rounded-full"></div>
                    <h3 className="text-mylken-primary font-bold text-xl">2000</h3>
                    <p className="mt-2">Expanded our product line to include milk analyzers and processing equipment.</p>
                  </div>
                </div>
                
                <div className="flex justify-end md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-md mr-8 relative animate-fade-in">
                    <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-4 h-4 bg-mylken-accent rounded-full"></div>
                    <h3 className="text-mylken-primary font-bold text-xl">2010</h3>
                    <p className="mt-2">Introduced advanced technology integration in our dairy equipment.</p>
                  </div>
                </div>
                
                <div className="flex justify-start md:w-1/2 md:ml-auto">
                  <div className="bg-white p-6 rounded-lg shadow-md ml-8 relative animate-fade-in">
                    <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-4 h-4 bg-mylken-accent rounded-full"></div>
                    <h3 className="text-mylken-primary font-bold text-xl">2020</h3>
                    <p className="mt-2">Reached milestone of serving 1000+ dairy businesses across the country.</p>
                  </div>
                </div>
                
                <div className="flex justify-end md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-md mr-8 relative animate-fade-in">
                    <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-4 h-4 bg-mylken-accent rounded-full"></div>
                    <h3 className="text-mylken-primary font-bold text-xl">Today</h3>
                    <p className="mt-2">Continuing our commitment to innovation and quality in dairy equipment.</p>
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

export default About;

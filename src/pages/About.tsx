
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Briefcase, Clock, Factory, HeartHandshake, Shield, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-mylken-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-mylken-accent rounded-bl-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-mylken-secondary rounded-tr-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium">
                About Mylken
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                Our Dairy Innovation Journey
              </h1>
              <p className="text-mylken-light text-lg mt-6">
                For over three decades, Mylken has been revolutionizing the dairy industry with cutting-edge equipment and unwavering commitment to quality.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-mylken-accent font-medium">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mt-2">A Legacy of Dairy Excellence</h2>
                <div className="w-20 h-1 bg-mylken-accent my-6"></div>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Established in 1990, Mylken began as a small workshop with a big vision: to transform the dairy equipment industry by providing innovative solutions that combine efficiency with quality.
                  </p>
                  <p>
                    What started as a team of just five passionate engineers has grown into a global enterprise, serving dairy businesses across 45 countries. Our journey has been defined by continuous innovation, unwavering quality standards, and close relationships with our customers.
                  </p>
                  <p>
                    Today, Mylken is recognized as an industry leader in dairy processing equipment, offering complete solutions from milk collection to final product packaging. Our equipment powers some of the most efficient dairy operations worldwide.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <div className="bg-mylken-accent/20 p-3 rounded-full mr-4">
                      <Factory size={24} className="text-mylken-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-mylken-primary">3</div>
                      <div className="text-sm text-gray-600">Manufacturing Facilities</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-mylken-accent/20 p-3 rounded-full mr-4">
                      <Users size={24} className="text-mylken-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-mylken-primary">250+</div>
                      <div className="text-sm text-gray-600">Expert Team Members</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-mylken-accent/20 p-3 rounded-full mr-4">
                      <HeartHandshake size={24} className="text-mylken-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-mylken-primary">45</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/factory.jpg" 
                    alt="Mylken Factory" 
                    className="object-cover object-center h-full w-full"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 bg-white rounded-lg shadow-lg p-4 border-l-4 border-mylken-accent">
                  <p className="font-medium text-mylken-primary">
                    "Our mission is to empower dairy businesses with technology that enhances productivity while maintaining product quality."
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="w-10 h-10 bg-mylken-primary rounded-full flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-mylken-primary">John Doe</div>
                      <div className="text-xs text-gray-500">Founder & CEO</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-20 bg-mylken-light/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-mylken-accent font-medium">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mt-2">
                The Principles That Drive Us
              </h2>
              <div className="w-20 h-1 bg-mylken-accent mx-auto my-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                At Mylken, our values form the foundation of everything we do. They guide our decisions, shape our culture, and define how we interact with customers, partners, and communities.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-mylken-primary"
                variants={itemVariants}
              >
                <Award className="text-mylken-accent w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-mylken-primary mb-3">Excellence</h3>
                <p className="text-gray-700">We strive for excellence in every product we design, every service we provide, and every interaction with our customers.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-mylken-primary"
                variants={itemVariants}
              >
                <Shield className="text-mylken-accent w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-mylken-primary mb-3">Integrity</h3>
                <p className="text-gray-700">We conduct our business with the highest level of honesty, transparency, and ethical standards.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-mylken-primary"
                variants={itemVariants}
              >
                <Briefcase className="text-mylken-accent w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-mylken-primary mb-3">Innovation</h3>
                <p className="text-gray-700">We continuously push the boundaries of what's possible, developing solutions that address evolving industry needs.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-mylken-primary"
                variants={itemVariants}
              >
                <HeartHandshake className="text-mylken-accent w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-mylken-primary mb-3">Customer Focus</h3>
                <p className="text-gray-700">We place our customers at the center of everything we do, building lasting relationships based on trust and mutual growth.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Company Timeline */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-mylken-accent font-medium">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mt-2">
                Milestones That Define Us
              </h2>
              <div className="w-20 h-1 bg-mylken-accent mx-auto my-6"></div>
            </div>
            
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-mylken-light"></div>
              
              {/* Timeline events */}
              <div className="space-y-24">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-mylken-accent rounded-full border-4 border-white z-10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-16">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-mylken-primary mb-2">1990</h3>
                        <p className="text-gray-700">Founded as a small workshop specializing in milk cans and basic dairy equipment.</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-mylken-accent rounded-full border-4 border-white z-10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div></div>
                    <div className="md:pl-16">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-mylken-primary mb-2">1997</h3>
                        <p className="text-gray-700">Launched our first automated milk analyzer, revolutionizing quality testing in the industry.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-mylken-accent rounded-full border-4 border-white z-10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-16">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-mylken-primary mb-2">2005</h3>
                        <p className="text-gray-700">Expanded to international markets with our first overseas manufacturing facility.</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-mylken-accent rounded-full border-4 border-white z-10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div></div>
                    <div className="md:pl-16">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mylken-accent">
                        <h3 className="text-xl font-bold text-mylken-primary mb-2">2023</h3>
                        <p className="text-gray-700">Today, we're a global leader serving 45+ countries with a full range of cutting-edge dairy equipment.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-mylken-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-60 h-60 bg-mylken-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Dairy Operations?
              </h2>
              <p className="text-mylken-light text-lg mb-8">
                Partner with Mylken and access the industry's most innovative dairy equipment solutions. Our specialists are ready to help you find the perfect fit for your business needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products">
                  <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light group px-6 py-6 h-auto">
                    Explore Our Products
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="bg-transparent border border-mylken-light text-white hover:bg-mylken-light/10 px-6 py-6 h-auto">
                    Contact Our Team
                  </Button>
                </Link>
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

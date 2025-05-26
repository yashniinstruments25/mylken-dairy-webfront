
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Lightbulb, Target, Users, Zap, Shield, Award, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
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
        <section className="pt-28 pb-16 bg-gradient-to-br from-mylken-primary via-mylken-primary to-mylken-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-mylken-accent rounded-bl-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-mylken-light rounded-tr-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-mylken-accent/20 text-mylken-accent text-sm font-medium backdrop-blur-sm border border-mylken-accent/30">
                  🚀 About Mylken
                </span>
              </motion.div>
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="block">Passionate About</span>
                <span className="block text-mylken-accent">Dairy Innovation</span>
              </motion.h1>
              <motion.p 
                className="text-mylken-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                We're on a mission to revolutionize the dairy industry with innovative equipment that empowers farmers of all sizes.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-mylken-accent h-6 w-6" />
                  <span className="text-mylken-accent font-bold text-base">Our Beginning</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mb-6">
                  Born from a Big Dream
                </h2>
                <div className="w-20 h-1 bg-mylken-accent mb-6"></div>
                
                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                  <p>
                    <strong className="text-mylken-primary">Mylken started with a simple observation:</strong> small and medium dairy farmers were struggling with outdated equipment that limited their potential. We saw an opportunity to bridge this gap with modern, affordable technology.
                  </p>
                  <p>
                    Founded by a team of passionate engineers and dairy industry enthusiasts, we're not just another equipment company - we're your partners in growth. Every product we develop is crafted with one goal: <em>empowering dairy businesses to thrive</em>.
                  </p>
                  <p className="text-mylken-primary font-medium">
                    "We believe that every dairy farmer, regardless of size, deserves access to world-class equipment that can transform their operations."
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-mylken-primary to-mylken-secondary p-6">
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center items-center text-center">
                    <Lightbulb className="text-mylken-accent h-12 w-12 mb-4" />
                    <h3 className="text-white text-xl font-bold mb-3">Innovation Mindset</h3>
                    <p className="text-mylken-light text-sm">
                      We don't just manufacture equipment - we innovate solutions that understand the real challenges faced by dairy businesses today.
                    </p>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-mylken-accent">
                  <div className="flex items-center gap-3">
                    <div className="bg-mylken-primary rounded-full h-10 w-10 flex items-center justify-center">
                      <Target className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-mylken-primary">100%</div>
                      <div className="text-xs text-gray-600">Commitment</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Mission & Vision */}
        <section className="py-16 bg-mylken-light/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-mylken-accent font-bold text-base">Our Purpose</span>
                <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mt-2 mb-4">
                  Mission & Vision
                </h2>
                <div className="w-20 h-1 bg-mylken-accent mx-auto"></div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-mylken-primary"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-mylken-primary rounded-full p-3">
                    <Target className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-mylken-primary">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  To democratize access to high-quality dairy equipment by providing innovative, reliable, and affordable solutions that enable dairy businesses of all sizes to maximize their potential and contribute to a sustainable dairy ecosystem.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-mylken-primary to-mylken-secondary rounded-2xl p-6 shadow-lg text-white"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-mylken-accent rounded-full p-3">
                    <Zap className="text-mylken-dark h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-mylken-light text-base leading-relaxed">
                  To become the most trusted partner for dairy farmers worldwide, known for our innovative solutions, exceptional customer service, and unwavering commitment to supporting the growth of the global dairy industry.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-mylken-accent font-bold text-base">What Drives Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mt-2 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-mylken-accent mx-auto mb-4"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-base">
                These values shape every decision we make and every relationship we build as we work towards our mission.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="group bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="bg-mylken-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-mylken-accent/20 transition-colors">
                  <Heart className="text-mylken-accent w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-mylken-primary mb-3">Passion</h3>
                <p className="text-gray-700 text-sm">We're genuinely passionate about improving dairy operations and helping farmers succeed.</p>
              </motion.div>
              
              <motion.div 
                className="group bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="bg-mylken-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-mylken-primary/20 transition-colors">
                  <Shield className="text-mylken-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-mylken-primary mb-3">Quality</h3>
                <p className="text-gray-700 text-sm">We never compromise on quality because we understand that reliable equipment is crucial for success.</p>
              </motion.div>
              
              <motion.div 
                className="group bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="bg-mylken-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-mylken-secondary/20 transition-colors">
                  <Lightbulb className="text-mylken-secondary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-mylken-primary mb-3">Innovation</h3>
                <p className="text-gray-700 text-sm">We constantly seek new ways to solve problems and improve the dairy industry.</p>
              </motion.div>
              
              <motion.div 
                className="group bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="bg-mylken-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-mylken-accent/20 transition-colors">
                  <Handshake className="text-mylken-accent w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-mylken-primary mb-3">Partnership</h3>
                <p className="text-gray-700 text-sm">We build lasting relationships with our customers, treating their success as our own.</p>
              </motion.div>
              
              <motion.div 
                className="group bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="bg-mylken-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-mylken-primary/20 transition-colors">
                  <Award className="text-mylken-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-mylken-primary mb-3">Excellence</h3>
                <p className="text-gray-700 text-sm">We strive for excellence in everything we do, from product design to customer service.</p>
              </motion.div>
              
              <motion.div 
                className="group bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="bg-mylken-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-mylken-secondary/20 transition-colors">
                  <Users className="text-mylken-secondary w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-mylken-primary mb-3">Community</h3>
                <p className="text-gray-700 text-sm">We believe in supporting and growing the dairy community as a whole.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-mylken-primary via-mylken-primary to-mylken-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-72 h-72 bg-mylken-accent rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-60 h-60 bg-mylken-light rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Dairy Operations?
                </h2>
                <p className="text-mylken-light text-lg mb-8 max-w-3xl mx-auto">
                  We'd love to have you as part of our journey. Let's work together to transform your dairy operations and build something amazing.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Link to="/products">
                    <Button className="bg-mylken-accent text-mylken-dark hover:bg-mylken-light group px-6 py-3 h-auto text-base font-medium">
                      Explore Our Products
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="bg-transparent border-2 border-mylken-light text-white hover:bg-mylken-light/10 px-6 py-3 h-auto text-base font-medium">
                      Let's Talk
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

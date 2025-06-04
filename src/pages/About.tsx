
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Lightbulb, Target, Users, Zap, Shield, Award, Handshake, Sparkles } from 'lucide-react';
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
        staggerChildren: 0.1
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-mylken-primary to-mylken-secondary p-4 max-w-md mx-auto">
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col justify-center items-center text-center">
                    <Lightbulb className="text-mylken-accent h-8 w-8 mb-3" />
                    <h3 className="text-white text-lg font-bold mb-2">Innovation Mindset</h3>
                    <p className="text-mylken-light text-sm">
                      We don't just manufacture equipment - we innovate solutions that understand the real challenges faced by dairy businesses today.
                    </p>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 border-l-4 border-mylken-accent">
                  <div className="flex items-center gap-2">
                    <div className="bg-mylken-primary rounded-full h-8 w-8 flex items-center justify-center">
                      <Target className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-mylken-primary">100%</div>
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
        
        {/* Our Values - Redesigned */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mylken-accent/10 text-mylken-accent text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  What Drives Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-mylken-primary mb-4">
                  Our Core Values
                </h2>
                <div className="w-20 h-1 bg-mylken-accent mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                  These principles guide every decision we make and shape our relationships with customers and partners.
                </p>
              </motion.div>
            </div>
            
            {/* Values Grid - Clean Card Layout */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: Heart, 
                  title: "Passion", 
                  desc: "At the heart of everything we do - genuine passion for improving dairy operations worldwide.",
                  color: "bg-red-50 border-red-200",
                  iconColor: "text-red-600"
                },
                { 
                  icon: Shield, 
                  title: "Quality", 
                  desc: "Never compromising on reliability and excellence in every product we manufacture.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600"
                },
                { 
                  icon: Lightbulb, 
                  title: "Innovation", 
                  desc: "Constantly seeking better solutions and pushing the boundaries of dairy technology.",
                  color: "bg-yellow-50 border-yellow-200",
                  iconColor: "text-yellow-600"
                },
                { 
                  icon: Handshake, 
                  title: "Partnership", 
                  desc: "Building lasting relationships based on trust, transparency, and mutual success.",
                  color: "bg-green-50 border-green-200",
                  iconColor: "text-green-600"
                },
                { 
                  icon: Award, 
                  title: "Excellence", 
                  desc: "Striving for the highest standards in product quality and customer service.",
                  color: "bg-purple-50 border-purple-200",
                  iconColor: "text-purple-600"
                },
                { 
                  icon: Users, 
                  title: "Community", 
                  desc: "Supporting the dairy ecosystem and fostering growth within our industry community.",
                  color: "bg-orange-50 border-orange-200",
                  iconColor: "text-orange-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className={`${value.color} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                  variants={itemVariants}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Values Summary */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-mylken-primary to-mylken-secondary rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Values in Action</h3>
                <p className="text-mylken-light text-lg leading-relaxed">
                  These values aren't just words on a wall - they're the foundation of how we design products, serve customers, and build relationships in the dairy industry. Every interaction reflects our commitment to these principles.
                </p>
              </div>
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

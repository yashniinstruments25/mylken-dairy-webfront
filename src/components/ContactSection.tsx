
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // You'll need to provide your Google Sheets webhook URL or API endpoint
  const GOOGLE_SHEETS_URL = ""; // Add your Google Sheets webhook URL here
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Google Sheets if URL is provided
      if (GOOGLE_SHEETS_URL) {
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'Contact Form'
          }),
        });

        if (response.ok) {
          toast({
            title: "Message Sent Successfully!",
            description: "Thank you for contacting us. We'll get back to you within 2 hours.",
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        } else {
          throw new Error('Failed to save to Google Sheets');
        }
      } else {
        // Fallback if no Google Sheets URL provided
        toast({
          title: "Message Received!",
          description: "We've received your message and will contact you soon. (Note: Google Sheets URL not configured)",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Our Location",
      details: "123 Dairy Innovation Hub, Industrial Area, New Delhi, India",
      color: "text-mylken-primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: "+91 98765 43210",
      color: "text-mylken-secondary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: "info@mylken.com",
      color: "text-mylken-accent"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: "Mon-Sat: 9:00 AM - 6:00 PM",
      color: "text-mylken-primary"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-mylken-light/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mylken-accent/10 text-mylken-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ready to Get Started?
          </div>
          <h2 className="text-4xl font-bold text-mylken-primary mb-4">
            Let's Transform Your Dairy Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Share your requirements with us and our experts will provide personalized recommendations for your dairy equipment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Redesigned */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-mylken-primary to-mylken-secondary rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-mylken-light mb-8 text-lg">
                We're here to help you find the perfect dairy equipment solutions. Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-mylken-accent">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mylken-accent mb-1">{item.title}</h4>
                      <p className="text-mylken-light">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-mylken-accent">Quick Response Guaranteed</h4>
                <p className="text-mylken-light text-sm">
                  We pride ourselves on fast response times. Expect to hear from us within 2 hours during business hours.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Enhanced */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-mylken-light/20">
              <h3 className="text-2xl font-bold text-mylken-primary mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-mylken-primary">Full Name *</label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Enter your full name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-mylken-light/50 focus:border-mylken-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-mylken-primary">Email Address *</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-mylken-light/50 focus:border-mylken-primary"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-mylken-primary">Phone Number</label>
                    <Input 
                      id="phone" 
                      name="phone"
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-mylken-light/50 focus:border-mylken-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-mylken-primary">Subject *</label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="What can we help you with?" 
                      required 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-mylken-light/50 focus:border-mylken-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-mylken-primary">Your Message *</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your dairy equipment needs, current challenges, or any specific requirements..." 
                    required 
                    className="min-h-[120px] border-mylken-light/50 focus:border-mylken-primary resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-mylken-primary hover:bg-mylken-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 p-4 bg-mylken-light/10 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and consent to be contacted by our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

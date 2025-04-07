
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server or API
    toast({
      title: "Message Sent!",
      description: "We've received your message and will contact you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Our Location",
      details: "123 Dairy Road, Industrial Area, New Delhi, India"
    },
    {
      icon: <Phone />,
      title: "Call Us",
      details: "+91 98765 43210"
    },
    {
      icon: <Mail />,
      title: "Email Us",
      details: "info@mylken.com"
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      details: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="section bg-mylken-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-blue mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Contact us today and our team will 
            be happy to assist you with all your dairy equipment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold text-mylken-blue mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-mylken-blue rounded-full p-2 mr-4">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mylken-blue">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-mylken-blue mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                  <Textarea id="message" placeholder="Type your message here..." required className="min-h-[150px]" />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="bg-mylken-blue hover:bg-mylken-lightBlue w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

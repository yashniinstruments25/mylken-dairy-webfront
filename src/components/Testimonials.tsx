
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Owner, Green Valley Dairy",
      image: "/images/testimonial-1.jpg",
      content: "The milk analyzers from Mylken have significantly improved our quality control processes. Their accuracy and reliability have helped us maintain consistent product quality.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Production Manager, Amrit Dairy Products",
      image: "/images/testimonial-2.jpg",
      content: "We've been using Mylken's khoya machines for two years now. The consistency in product quality and the reduction in production time has been remarkable.",
      rating: 5
    },
    {
      id: 3,
      name: "Anand Patel",
      position: "Director, Shree Krishna Milk Cooperative",
      image: "/images/testimonial-3.jpg",
      content: "The technical support team at Mylken is exceptional. They're always available to help with any issues and provide prompt service. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-mylken-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-white text-mylken-primary mb-3">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-mylken-dark mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from dairy professionals who have transformed their operations with our equipment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mylken-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 italic">"{testimonial.content}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { IndianRupee, Send, User, Mail, Phone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: {
    name: string;
    price?: number;
    category?: string;
    capacity?: string;
  };
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, product }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '1',
    requirements: '',
    businessType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate quote request submission
    console.log('Quote request submitted:', { ...formData, product: product?.name });
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      quantity: '1',
      requirements: '',
      businessType: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-mylken-primary flex items-center gap-2">
            <IndianRupee className="w-6 h-6" />
            Request Quote
          </DialogTitle>
        </DialogHeader>

        {product && (
          <div className="bg-mylken-light/30 p-4 rounded-lg border-l-4 border-mylken-accent mb-4">
            <h3 className="font-semibold text-mylken-dark">{product.name}</h3>
            {product.capacity && (
              <Badge className="bg-mylken-primary text-white mt-2">
                {product.capacity}
              </Badge>
            )}
            {product.price && (
              <Badge className="bg-mylken-primary text-white mt-2">
                <IndianRupee size={12} />
                {product.price.toLocaleString()}
              </Badge>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2">
                <User size={16} />
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail size={16} />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone size={16} />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building size={16} />
                Company/Organization
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Enter company name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quantity">Quantity Required</Label>
              <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Unit</SelectItem>
                  <SelectItem value="2-5">2-5 Units</SelectItem>
                  <SelectItem value="6-10">6-10 Units</SelectItem>
                  <SelectItem value="10+">10+ Units</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dairy-farm">Dairy Farm</SelectItem>
                  <SelectItem value="cooperative">Dairy Cooperative</SelectItem>
                  <SelectItem value="processing-unit">Processing Unit</SelectItem>
                  <SelectItem value="laboratory">Testing Laboratory</SelectItem>
                  <SelectItem value="distributor">Distributor/Reseller</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="requirements">Additional Requirements</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => handleInputChange('requirements', e.target.value)}
              placeholder="Tell us about your specific requirements, installation needs, or any questions..."
              rows={4}
            />
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-mylken-primary text-white">
              <Send size={16} className="mr-2" />
              Send Quote Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;

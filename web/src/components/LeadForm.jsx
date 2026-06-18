import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    loanRequirement: '',
    monthlyIncome: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, loanRequirement: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.email || !formData.loanRequirement) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const leads = JSON.parse(localStorage.getItem('anaLeads') || '[]');
      leads.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('anaLeads', JSON.stringify(leads));

      toast.success('Application submitted successfully. Our team will contact you soon.');
      
      setFormData({
        name: '',
        mobile: '',
        email: '',
        city: '',
        loanRequirement: '',
        monthlyIncome: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            type="text"
            placeholder="Your city"
            value={formData.city}
            onChange={handleChange}
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanRequirement">Loan Requirement *</Label>
          <Select value={formData.loanRequirement} onValueChange={handleSelectChange}>
            <SelectTrigger id="loanRequirement">
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home-loan">Home Loan</SelectItem>
              <SelectItem value="personal-loan">Personal Loan</SelectItem>
              <SelectItem value="business-loan">Business Loan</SelectItem>
              <SelectItem value="lap">Loan Against Property</SelectItem>
              <SelectItem value="mortgage-loan">Mortgage Loan</SelectItem>
              <SelectItem value="working-capital">Working Capital Finance</SelectItem>
              <SelectItem value="msme-loan">MSME Loan</SelectItem>
              <SelectItem value="balance-transfer">Balance Transfer</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyIncome">Monthly Income</Label>
          <Input
            id="monthlyIncome"
            name="monthlyIncome"
            type="text"
            placeholder="₹ 50,000"
            value={formData.monthlyIncome}
            onChange={handleChange}
            className="text-foreground"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Apply Now'}
      </Button>
    </form>
  );
}

export default LeadForm;
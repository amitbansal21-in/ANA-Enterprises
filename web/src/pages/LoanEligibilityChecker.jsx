import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function LoanEligibilityChecker() {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    existingEMI: '',
    occupation: '',
    age: '',
    loanType: ''
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateEligibility = (e) => {
    e.preventDefault();

    if (!formData.monthlyIncome || !formData.occupation || !formData.age || !formData.loanType) {
      toast.error('Please fill in all required fields');
      return;
    }

    const income = Number(formData.monthlyIncome);
    const existingEMI = Number(formData.existingEMI) || 0;
    const age = Number(formData.age);

    if (income < 15000) {
      toast.error('Minimum monthly income of ₹15,000 is required');
      return;
    }

    if (age < 21 || age > 65) {
      toast.error('Age must be between 21 and 65 years');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const foir = 0.5;
      const availableIncome = income - existingEMI;
      const maxEMI = availableIncome * foir;

      let interestRate = 8.5;
      let tenure = 240;

      if (formData.loanType === 'personal-loan') {
        interestRate = 11.5;
        tenure = 60;
      } else if (formData.loanType === 'business-loan') {
        interestRate = 10.5;
        tenure = 120;
      } else if (formData.loanType === 'lap' || formData.loanType === 'mortgage-loan') {
        interestRate = 9.5;
        tenure = 180;
      } else if (formData.loanType === 'working-capital') {
        interestRate = 12;
        tenure = 36;
      }

      const monthlyRate = interestRate / 12 / 100;
      const maxLoanAmount = (maxEMI * (Math.pow(1 + monthlyRate, tenure) - 1)) / 
                            (monthlyRate * Math.pow(1 + monthlyRate, tenure));

      let eligibilityStatus = 'Eligible';
      let statusColor = 'text-green-600';
      let statusIcon = CheckCircle2;

      if (maxLoanAmount < 100000) {
        eligibilityStatus = 'Not Eligible';
        statusColor = 'text-destructive';
        statusIcon = AlertCircle;
      } else if (maxLoanAmount < 500000) {
        eligibilityStatus = 'Conditionally Eligible';
        statusColor = 'text-amber-600';
        statusIcon = TrendingUp;
      }

      const recommendedProducts = [];
      if (formData.loanType === 'home-loan' && maxLoanAmount >= 1000000) {
        recommendedProducts.push('Home Loan - Premium', 'Home Loan - Standard');
      } else if (formData.loanType === 'personal-loan' && maxLoanAmount >= 200000) {
        recommendedProducts.push('Personal Loan - Instant', 'Personal Loan - Flexi');
      } else if (formData.loanType === 'business-loan' && maxLoanAmount >= 500000) {
        recommendedProducts.push('Business Loan - SME', 'Business Loan - MSME');
      } else {
        recommendedProducts.push('Personal Loan', 'Balance Transfer');
      }

      setResult({
        status: eligibilityStatus,
        statusColor,
        statusIcon,
        maxLoanAmount: Math.round(maxLoanAmount),
        maxEMI: Math.round(maxEMI),
        recommendedProducts,
        interestRate,
        tenure
      });

      setIsCalculating(false);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      monthlyIncome: '',
      existingEMI: '',
      occupation: '',
      age: '',
      loanType: ''
    });
    setResult(null);
  };

  return (
    <>
      <Helmet>
        <title>{`Loan Eligibility Checker - ANA Enterprises`}</title>
        <meta name="description" content="Check your loan eligibility instantly. Get personalized loan recommendations based on your income, occupation, and requirements." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Loan eligibility checker
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find out how much loan you can get based on your income and profile
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-border shadow-lg">
                  <CardHeader>
                    <CardTitle>Your Details</CardTitle>
                    <CardDescription>Fill in your information to check eligibility</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateEligibility} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="monthlyIncome">Monthly Income (₹) *</Label>
                        <Input
                          id="monthlyIncome"
                          name="monthlyIncome"
                          type="number"
                          placeholder="50000"
                          value={formData.monthlyIncome}
                          onChange={handleChange}
                          required
                          className="text-foreground"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="existingEMI">Existing Monthly EMI (₹)</Label>
                        <Input
                          id="existingEMI"
                          name="existingEMI"
                          type="number"
                          placeholder="0"
                          value={formData.existingEMI}
                          onChange={handleChange}
                          className="text-foreground"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="occupation">Occupation *</Label>
                        <Select value={formData.occupation} onValueChange={(value) => handleSelectChange('occupation', value)}>
                          <SelectTrigger id="occupation">
                            <SelectValue placeholder="Select occupation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="salaried">Salaried</SelectItem>
                            <SelectItem value="self-employed">Self-Employed</SelectItem>
                            <SelectItem value="business-owner">Business Owner</SelectItem>
                            <SelectItem value="professional">Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age">Age (years) *</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="30"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          className="text-foreground"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="loanType">Loan Type *</Label>
                        <Select value={formData.loanType} onValueChange={(value) => handleSelectChange('loanType', value)}>
                          <SelectTrigger id="loanType">
                            <SelectValue placeholder="Select loan type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="home-loan">Home Loan</SelectItem>
                            <SelectItem value="personal-loan">Personal Loan</SelectItem>
                            <SelectItem value="business-loan">Business Loan</SelectItem>
                            <SelectItem value="lap">Loan Against Property</SelectItem>
                            <SelectItem value="mortgage-loan">Mortgage Loan</SelectItem>
                            <SelectItem value="working-capital">Working Capital</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                          disabled={isCalculating}
                        >
                          {isCalculating ? 'Calculating...' : 'Check Eligibility'}
                        </Button>
                        {result && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={resetForm}
                          >
                            Reset
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {result ? (
                  <div className="space-y-6">
                    <Card className="border-border shadow-lg">
                      <CardHeader>
                        <CardTitle>Eligibility Result</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                          <result.statusIcon className={`h-8 w-8 ${result.statusColor}`} />
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className={`text-xl font-bold ${result.statusColor}`}>{result.status}</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                          <p className="text-sm text-muted-foreground mb-1">Maximum Loan Amount</p>
                          <p className="text-2xl font-bold text-primary">
                            ₹{result.maxLoanAmount.toLocaleString('en-IN')}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-muted">
                            <p className="text-xs text-muted-foreground mb-1">Max Monthly EMI</p>
                            <p className="text-lg font-semibold">₹{result.maxEMI.toLocaleString('en-IN')}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-muted">
                            <p className="text-xs text-muted-foreground mb-1">Interest Rate</p>
                            <p className="text-lg font-semibold">{result.interestRate}% p.a.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                          <p className="text-xs text-muted-foreground mb-1">Recommended Tenure</p>
                          <p className="text-lg font-semibold text-accent-foreground">
                            {result.tenure} months ({Math.round(result.tenure / 12)} years)
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border shadow-lg">
                      <CardHeader>
                        <CardTitle>Recommended Products</CardTitle>
                        <CardDescription>Based on your eligibility</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {result.recommendedProducts.map((product, index) => (
                            <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="font-medium">{product}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-border shadow-lg bg-primary text-primary-foreground">
                      <CardContent className="p-6">
                        <p className="text-sm mb-4">
                          Ready to apply? Our team will help you get the best loan deal.
                        </p>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                          <a href="/#lead-form">Apply Now</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Card className="border-border shadow-lg h-full flex items-center justify-center">
                    <CardContent className="text-center p-12">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Fill in your details to check your loan eligibility
                      </p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanEligibilityChecker;
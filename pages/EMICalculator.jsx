import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calculator, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { toast } from 'sonner';

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(240);

  const calculateEMI = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    if (monthlyRate === 0) {
      return {
        emi: principal / months,
        totalInterest: 0,
        totalAmount: principal
      };
    }

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    };
  }, [loanAmount, interestRate, tenure]);

  const chartData = [
    { name: 'Principal Amount', value: loanAmount, color: '#0A3D91' },
    { name: 'Total Interest', value: calculateEMI.totalInterest, color: '#F5B400' }
  ];

  const generateAmortizationSchedule = () => {
    const schedule = [];
    let balance = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const emi = calculateEMI.emi;

    for (let month = 1; month <= tenure; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;

      if (month <= 12 || month % 12 === 0 || month === tenure) {
        schedule.push({
          month,
          emi: Math.round(emi),
          principal: Math.round(principalPayment),
          interest: Math.round(interestPayment),
          balance: Math.round(Math.max(0, balance))
        });
      }
    }

    return schedule;
  };

  const amortizationSchedule = useMemo(() => generateAmortizationSchedule(), [loanAmount, interestRate, tenure]);

  const handleDownloadPDF = () => {
    toast('PDF download feature is not available in this environment');
  };

  return (
    <>
      <Helmet>
        <title>{`EMI Calculator - ANA Enterprises`}</title>
        <meta name="description" content="Calculate your loan EMI with our interactive calculator. Get instant results for monthly EMI, total interest, and amortization schedule." />
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
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              EMI calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your monthly loan payments and plan your finances better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle>Loan Details</CardTitle>
                  <CardDescription>Adjust the values to calculate your EMI</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="loanAmount">Loan Amount</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-32 text-foreground"
                      />
                    </div>
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      min={100000}
                      max={10000000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹1L</span>
                      <span>₹1Cr</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="interestRate">Interest Rate (% p.a.)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-32 text-foreground"
                      />
                    </div>
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      min={5}
                      max={20}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="tenure">Loan Tenure (months)</Label>
                      <Input
                        id="tenure"
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-32 text-foreground"
                      />
                    </div>
                    <Slider
                      value={[tenure]}
                      onValueChange={(value) => setTenure(value[0])}
                      min={12}
                      max={360}
                      step={12}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 year</span>
                      <span>30 years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle>EMI Breakdown</CardTitle>
                  <CardDescription>Your monthly payment details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-primary/5">
                      <span className="text-sm font-medium">Monthly EMI</span>
                      <span className="text-2xl font-bold text-primary">
                        ₹{calculateEMI.emi.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-muted">
                        <p className="text-xs text-muted-foreground mb-1">Principal Amount</p>
                        <p className="text-lg font-semibold">₹{loanAmount.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted">
                        <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                        <p className="text-lg font-semibold">₹{calculateEMI.totalInterest.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                      <p className="text-xs text-muted-foreground mb-1">Total Amount Payable</p>
                      <p className="text-xl font-bold text-accent-foreground">
                        ₹{calculateEMI.totalAmount.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle>Principal vs Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-7xl mx-auto"
          >
            <Card className="border-border shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Amortization Schedule</CardTitle>
                  <CardDescription>Month-by-month payment breakdown</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadPDF}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-sm font-semibold">Month</th>
                        <th className="text-right p-3 text-sm font-semibold">EMI</th>
                        <th className="text-right p-3 text-sm font-semibold">Principal</th>
                        <th className="text-right p-3 text-sm font-semibold">Interest</th>
                        <th className="text-right p-3 text-sm font-semibold">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {amortizationSchedule.map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                          <td className="p-3 text-sm">{row.month}</td>
                          <td className="p-3 text-sm text-right">₹{row.emi.toLocaleString('en-IN')}</td>
                          <td className="p-3 text-sm text-right">₹{row.principal.toLocaleString('en-IN')}</td>
                          <td className="p-3 text-sm text-right">₹{row.interest.toLocaleString('en-IN')}</td>
                          <td className="p-3 text-sm text-right font-medium">₹{row.balance.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default EMICalculator;
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton.jsx';
import FloatingCallButton from './components/FloatingCallButton.jsx';
import HomePage from './pages/HomePage.jsx';
import EMICalculator from './pages/EMICalculator.jsx';
import LoanEligibilityChecker from './pages/LoanEligibilityChecker.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/emi-calculator" element={<EMICalculator />} />
            <Route path="/eligibility-checker" element={<LoanEligibilityChecker />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                  <p className="text-muted-foreground mb-6">The page you are looking for does not exist.</p>
                  <a href="/" className="text-primary hover:underline">Back to Home</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
        <FloatingCallButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

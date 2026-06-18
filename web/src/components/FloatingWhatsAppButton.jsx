import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingWhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919664669669"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-luxury hover:shadow-accent transition-all duration-200 active:scale-95"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp Consultation"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}

export default FloatingWhatsAppButton;
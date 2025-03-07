
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function BookADemo() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Demo request submitted! We will contact you shortly.');
    document.getElementById('book-a-demo-dialog')?.close();
  };

  return (
    <dialog
      id="book-a-demo-dialog"
      className="fixed inset-0 z-50 rounded-lg p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-white dark:bg-gray-800 shadow-2xl max-w-md w-full mx-auto my-16 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule a Demo</h2>
          <button
            onClick={() => document.getElementById('book-a-demo-dialog')?.close()}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Fill out the form below to schedule a personalized demo of our solutions.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Full Name *
            </label>
            <Input 
              className="dark:bg-gray-700" 
              placeholder="John Doe" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Email *
            </label>
            <Input 
              className="dark:bg-gray-700" 
              type="email"
              placeholder="john@example.com" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Company Name *
            </label>
            <Input 
              className="dark:bg-gray-700" 
              placeholder="Your Company" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <Input 
              className="dark:bg-gray-700" 
              type="tel"
              placeholder="+1 (555) 123-4567" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Additional Notes
            </label>
            <Textarea 
              className="dark:bg-gray-700 resize-none" 
              placeholder="Tell us about your specific requirements..."
              rows={3}
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium shadow-md shadow-primary/20 transition-all"
            type="submit"
          >
            Schedule Your Demo
          </motion.button>
        </form>
      </div>
    </dialog>
  );
}

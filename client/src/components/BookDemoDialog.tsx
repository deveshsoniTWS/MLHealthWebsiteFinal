
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function BookDemoDialog() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to backend
    alert('Demo request submitted! We will contact you shortly.');
    document.getElementById('book-demo-dialog')?.close();
  };

  return (
    <dialog
      id="book-demo-dialog"
      className="fixed inset-0 z-50 rounded-lg p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-white dark:bg-gray-800 shadow-2xl max-w-md w-full mx-auto my-16 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Book a Demo</h2>
          <button
            onClick={() => document.getElementById('book-demo-dialog')?.close()}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Fill out the form below to schedule a personalized demo of our AI healthcare solutions.
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
              Company Name
            </label>
            <Input 
              className="dark:bg-gray-700" 
              placeholder="Your Organization" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <Input 
              className="dark:bg-gray-700" 
              type="tel" 
              placeholder="+1 (123) 456-7890" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              What are you interested in?
            </label>
            <Textarea
              className="dark:bg-gray-700"
              placeholder="Tell us about your specific needs and interests..."
              rows={3}
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Demo Request
          </motion.button>
        </form>
      </div>
    </dialog>
  );
}

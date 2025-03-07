import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-secondary/90 text-gray-900 hover:bg-secondary hover:text-gray-900 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30"
          onClick={toggleChat}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[380px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800 dark:text-gray-200">
                  Hello! How can I help you today?
                </p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-3 max-w-[80%] ml-auto">
                <p className="text-gray-800 dark:text-gray-200">
                  I'd like to learn more about Scaida Flow
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800 dark:text-gray-200">
                  Scaida Flow is our cloud-based diagnostic platform for radiologists. It seamlessly integrates with your existing workflow and provides AI-powered analysis...
                </p>
              </div>
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Send
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
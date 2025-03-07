import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookDemoDialog } from "./BookDemoDialog";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent dark:from-primary/20 dark:via-secondary/20 dark:to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your healthcare solutions with AI? We're here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Existing Vertical Contact Info */}
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  contact@mlhealth360.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 (800) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Innovation Hub, Tech Park<br />
                  Bangalore, Karnataka 560001
                </p>
              </div>
            </div>

            {/* Horizontal Social Media Icons with More Spacing */}
            <div className="flex justify-start gap-12 mt-8"> {/* Changed gap-8 to gap-12 */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              >
                <Instagram className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              >
                <Twitter className="h-6 w-6 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Right Column (Form) - Unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <Input className="dark:bg-gray-700" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <Input className="dark:bg-gray-700" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  Subject
                </label>
                <Input className="dark:bg-gray-700" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <Textarea
                  className="dark:bg-gray-700"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
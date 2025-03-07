import { Link } from "wouter";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ui/theme-toggle";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <motion.img 
            src="/mlhealth-logo.png" 
            alt="mlHealth360 Logo" 
            className="h-12 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-10 text-xs md:text-sm font-medium">
          <motion.a 
            href="#features" 
            className="text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#products" 
            className="text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            Products
          </motion.a>
          <motion.a 
            href="#videos" 
            className="text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            Videos
          </motion.a>
          <motion.a 
            href="#achievements" 
            className="text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            Achievements
          </motion.a>
          <motion.a 
            href="#testimonials" 
            className="text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            Testimonials
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            Contact Us
          </motion.a>
        </div>

        <div className="flex items-center gap-6">
          <motion.button 
            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('book-a-demo-dialog')?.showModal()}
          >
            Book a Demo
          </motion.button>
          <ThemeToggle />
          {/* Scaida logo - changed from h-12 to h-10 */}
          <motion.img 
            src="/scaida.png" 
            alt="Scaida Logo" 
            className="h-10 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </div>
    </motion.nav>
  );
}
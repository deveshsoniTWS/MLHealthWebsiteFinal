import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "./ui/theme-toggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo and Hamburger Menu for Mobile */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <motion.img
                src="/mlhealth-logo.png"
                alt="mlHealth360 Logo"
                className="h-10 sm:h-12 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`w-5 h-0.5 bg-gray-600 mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-600 mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm font-medium">
            {["Features", "Products", "Videos", "Achievements", "Testimonials", "Contact Us"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-600 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05, color: "var(--primary)" }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Section: Book a Demo and Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <motion.button
              className="bg-primary text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("book-a-demo-dialog")?.showModal()}
            >
              Book a Demo
            </motion.button>
            <ThemeToggle />
            {/* Scaida logo - hidden on mobile */}
            <motion.img
              src="/scaida.png"
              alt="Scaida Logo"
              className="h-8 sm:h-10 cursor-pointer hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
        >
          {["Features", "Products", "Videos", "Achievements", "Testimonials", "Contact Us"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-gray-600 text-lg mb-4 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
}

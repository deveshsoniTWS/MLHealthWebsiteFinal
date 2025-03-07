import { motion } from "framer-motion";
import { FileSearch, Brain, Cloud } from "lucide-react";

const products = [
  {
    icon: Cloud,
    name: "Scaida Flow",
    description: "Cloud-based diagnostic platform for radiologists with seamless workflow integration",
    logo: "/scaidaflow.png",
  },
  {
    icon: FileSearch,
    name: "Scaida DetectCT",
    description: "AI-driven anomaly detection system that analyzes multiple anatomical regions",
    logo: "/scaidadetect.png",
  },
  {
    icon: Brain,
    name: "Scaida BrainCT",
    description: "Specialized deep learning solution for comprehensive brain CT scan analysis",
    logo: "/scaidabrain.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions for medical imaging and diagnostics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border dark:border-gray-700 relative overflow-hidden"
            >
              <product.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
              <a
                href="#contact"
                className="text-primary font-medium hover:text-primary/80 transition"
              >
                Learn More →
              </a>
              {/* Logo: Upper-right, shorter fade */}
              <img
                src={product.logo}
                alt={`${product.name} logo`}
                className="absolute top-4 right-4 h-1/2 w-1/3 opacity-50 object-contain fade-to-left"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for shorter fading effect */}
      <style jsx>{`
        .fade-to-left {
          mask-image: linear-gradient(to left, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 80%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
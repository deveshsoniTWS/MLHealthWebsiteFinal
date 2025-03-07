import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const taglines = [
    <>
      Third Indian Company with{" "}
      <a 
        href="/CDSCO_Certification.pdf" 
        download="CDSCO_Certification.pdf"
        className="text-primary hover:underline cursor-pointer"
      >
        CDSCO Certification
      </a> in AI Healthcare
    </>,
    <>
      Revolutionizing Medical Imaging with{" "}
      <span className="text-primary">AI Healthcare</span>
    </>,
    <>
      Setting New Standards in{" "}
      <span className="text-primary">Healthcare Technology</span>
    </>,
  ];

  const images = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(taglineInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-14 leading-tight relative h-24 md:h-32">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {taglines[currentIndex]}
              </motion.div>
            </h1>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-xl">
              Transforming healthcare through advanced AI solutions for medical
              imaging and diagnostics with world-class precision.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="#products"
                className="bg-primary text-white hover:bg-primary/90 transition-colors px-8 py-3 rounded-full font-medium inline-flex items-center justify-center"
              >
                Our Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-primary bg-white border border-primary/20 hover:bg-primary/5 transition-colors duration-200 mt-4 sm:mt-0"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt="Healthcare AI Technology"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200";
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
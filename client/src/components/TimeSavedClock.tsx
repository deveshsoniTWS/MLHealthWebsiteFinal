import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function TimeSavedClock() {
  const [handAngle, setHandAngle] = useState(0);

  // Reset handAngle when component mounts, animation will be triggered by whileInView
  useEffect(() => {
    setHandAngle(0); // Initial state, animation will handle the rest
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Time Savings with SCAIDA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Doctors save an average of 9 hours per week
          </p>
        </motion.div>

        {/* Clock and Text Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Clock */}
          <motion.div
            className="relative w-64 h-64 bg-white rounded-full shadow-xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Clock Face */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

            {/* Clock Numbers */}
            {[...Array(12)].map((_, i) => {
              const hour = i === 0 ? 12 : i;
              const hourAngle = i * 30;
              const radians = (hourAngle - 90) * (Math.PI / 180);
              const radius = 32; // Percentage of clock radius
              const x = 50 + radius * Math.cos(radians);
              const y = 50 + radius * Math.sin(radians);

              return (
                <div
                  key={i}
                  className="absolute font-bold text-gray-800"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {hour}
                </div>
              );
            })}

            {/* Clock Center */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            {/* Hour Hand */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-1.5 bg-slate-800 rounded"
              style={{ height: "60px", transformOrigin: "bottom center" }}
              initial={{ x: "-50%", y: -60, rotate: 0 }}
              whileInView={{ rotate: 270 }} // Animate when in view
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Minute Hand */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-1 bg-gray-600 rounded"
              style={{ height: "72px", transformOrigin: "bottom center" }}
              initial={{ x: "-50%", y: -72, rotate: 0 }}
              whileInView={{ rotate: 0 }} // Animate when in view, adjustable if needed
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              9 Hours Saved Weekly
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              With SCAIDA's AI-powered medical imaging analysis, doctors spend
              less time on routine diagnostics and more time on patient care.
            </p>
            <div className="flex items-center gap-2 text-cyan-500 font-medium">
              <Clock className="h-5 w-5" />
              <span>That's over 450 hours saved annually per doctor</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

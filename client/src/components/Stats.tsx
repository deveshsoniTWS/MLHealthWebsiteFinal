import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 12000, label: "Studies Analyzed" },
  { value: 4, label: "Million Image Slices" },
  { value: 8, label: "Anatomical Regions" },
  { value: 95, label: "Accuracy Rate" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.label === "Accuracy Rate" ? "%" : "+"}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

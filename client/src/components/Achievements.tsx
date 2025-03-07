import { motion } from "framer-motion";
import { Award, Star, Users, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "FDA Certification",
    description: "First Indian company to receive FDA certification for AI healthcare solutions",
  },
  {
    icon: Star,
    title: "AI Excellence",
    description: "Over 12,000 studies analyzed with state-of-the-art deep learning models",
  },
  {
    icon: Users,
    title: "Global Impact",
    description: "Helping healthcare providers across multiple countries improve patient care",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description: "95%+ accuracy rate in medical imaging analysis and diagnostics",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the way in AI healthcare innovation with proven results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-6 bg-white rounded-lg shadow-sm border"
            >
              <achievement.icon className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

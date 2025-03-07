import { motion } from "framer-motion";
import { Brain, Activity, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Analysis",
    description:
      "State-of-the-art deep learning models for accurate medical imaging analysis",
    image: "/ai_analysis.png",
  },
  {
    icon: Activity,
    title: "Enhanced Accuracy",
    description:
      "High precision anomaly detection across multiple anatomical regions",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400",
  },
  {
    icon: Clock,
    title: "Faster Diagnosis",
    description: "Reduced diagnosis time with automated analysis and reporting",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400",
  },
  {
    icon: Shield,
    title: "CDSCO Certified",
    description:
      "First Indian company to receive CDSCO certification for AI healthcare solutions",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose mlHealth360
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered solutions revolutionize healthcare diagnostics with
            unmatched accuracy and efficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <feature.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "mlHealth360's AI solutions have significantly improved our diagnostic accuracy and reduced reporting time.",
    author: "Dr. Sanket Swaroop",
    role: "Chief Radiologist",
    hospital: "Advanced Medical Center",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote: "The Scaida platform has revolutionized our workflow. It's intuitive and provides reliable results consistently.",
    author: "Dr. Kartik Sarda",
    role: "Head of Radiology",
    hospital: "City General Hospital",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote: "Outstanding support team and cutting-edge technology. A game-changer for our diagnostic processes.",
    author: "Dr. Raj Mehta",
    role: "Medical Director",
    hospital: "Healthcare Innovation Institute",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading healthcare professionals worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.hospital}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

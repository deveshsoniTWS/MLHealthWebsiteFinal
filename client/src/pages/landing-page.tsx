import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import VideoShowcase from "@/components/VideoShowcase";
import Achievements from "@/components/Achievements";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function LandingPage() {
  useEffect(() => {
    document.title = "SCAIDA - AI Medical Imaging";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <VideoShowcase />
        <Achievements />
        <Testimonials />
        <FAQs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
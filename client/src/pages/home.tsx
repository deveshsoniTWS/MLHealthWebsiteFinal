import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import VideoShowcase from "@/components/VideoShowcase";
import TimeSavedClock from "@/components/TimeSavedClock";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Clock } from "@/components/ui/clock";
import { useTheme } from "@/components/providers/theme-provider";
import { motion } from "framer-motion";
import { BookADemo } from "@/components/BookADemo"; // Added import for BookADemo

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <div id="products" className="bg-background dark:bg-background">
        <Products />
      </div>
      <VideoShowcase />
      <Achievements />

      {/* Just include TimeSavedClock component */}
      <TimeSavedClock />

      <Testimonials />
      <Chatbot />
      <Contact />
      <BookADemo /> {/* Added BookADemo component */}
    </div>
  );
}
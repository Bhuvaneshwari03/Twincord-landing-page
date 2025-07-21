import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import CustomerMarquee from "@/components/CustomerMarquee";
import AboutUsSection from "@/components/AboutUsSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Cybersecurity-focused software startup
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-muted-foreground">
              <TextGenerateEffect words="Secure software" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="solutions for tomorrow" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left"
          >
            Building secure, modern, and scalable web, mobile, and cloud-based solutions for startups, academic institutions, and growing businesses.{" "}
            <span className="text-foreground">Cybersecurity redefined.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Get Started
            </Button>
            <Button size="lg" variant="link" className="text-foreground">
              Our Products <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Keywords Marquee */}
      <CustomerMarquee />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Us Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

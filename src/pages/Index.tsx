import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
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
  // Scroll to section handler for "Our Products" button
  const handleScrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      const yOffset = -100; // Adjust for fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* This wrapper makes the Hero and Marquee fill the viewport height */}
      <div className="h-screen flex flex-col">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          // Use padding for mobile and let the container center it on desktop
          className="relative flex-1 flex items-center container p-6"
        >
          {/* The grid is 1 column by default, and 2 on large screens */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                // Center the tagline on mobile
                className="hidden lg:inline-block mb-4 px-4 py-1.5 rounded-full glass"
              >
                <span className="flex items-center text-sm font-medium">
                  <Shield
                    color="#00bfff"
                    size={16}
                    className="mr-2 flex-shrink-0"
                  />
                  <span>Cybersecurity Redefined. Innovation Delivered</span>
                </span>
              </motion.div>

              {/* Mobile-first font sizes: start smaller, get larger on bigger screens */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal mb-4 lg:mb-6 tracking-tight">
                <span className="text-muted-foreground">
                  <TextGenerateEffect words="Secure software" />
                </span>
                <br />
                <span className="text-foreground font-medium lg:whitespace-nowrap">
                  <TextGenerateEffect words="solutions for tomorrow" />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                // Mobile-first paragraph font size and margins
                className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Building secure, modern, and scalable solutions for startups,
                institutions, and growing businesses.
                <span className="text-foreground block mt-2">
                  Our promise: Securing Tomorrow’s Technology, Today.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                // This correctly stacks buttons on mobile and rows on larger screens
                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              >
                <Button size="lg" className="button-gradient w-full sm:w-auto">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="link"
                  className="text-foreground"
                  onClick={handleScrollToProducts}
                >
                  Our Products <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right Column: This is hidden by default and only appears on large screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <img
                src="/security-hero.svg"
                alt="Cybersecurity Illustration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Customer Keywords Marquee */}
        <CustomerMarquee />
      </div>

      {/* The rest of the page sections remain the same */}
      <section id="about">
        <AboutUsSection />
      </section>

      <section id="products">
        <ProductsSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;

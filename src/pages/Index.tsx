import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomerMarquee from "@/components/CustomerMarquee";
import AboutUsSection from "@/components/AboutUsSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  const handleScrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -100; // Consistent offset for sticky nav
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* This wrapper now applies h-screen only on large screens (lg) and up */}
      <div className="lg:h-screen flex flex-col" id="hero">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex-1 flex items-center container p-6 pt-24 mt-6 pb-12 lg:pt-6 lg:pb-6"
        >
          {/* The grid is 1 column by default, and 2 on large screens */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal my-4 lg:mb-6 tracking-tight">
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
                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="button-gradient w-full sm:w-auto"
                  onClick={handleScrollToContact}
                >
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

            {/* Right Column */}
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

      {/* The rest of the page sections */}
      <section id="about">
        <AboutUsSection />
      </section>

      <section id="products">
        <ProductsSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default Index;

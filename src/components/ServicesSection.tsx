import { motion } from "framer-motion";
import { Code, Palette, Shield, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Secure Website & App Development",
      description: "Building modern, secure, and scalable web and mobile applications with industry-leading security practices.",
      icon: Code
    },
    {
      title: "UI/UX Design & Prototyping", 
      description: "Creating intuitive and beautiful user experiences through thoughtful design and interactive prototyping.",
      icon: Palette
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments, implementations, and monitoring to protect your digital assets.",
      icon: Shield
    },
    {
      title: "Data Science Automation Tools",
      description: "Intelligent automation solutions that streamline data processing and provide actionable insights.",
      icon: Database
    }
  ];

  return (
    <section id="services" className="container px-4 py-24 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software and cybersecurity services to help your business grow securely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
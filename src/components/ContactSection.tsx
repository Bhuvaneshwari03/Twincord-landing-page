import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to secure your digital future? Contact us to discuss your cybersecurity and software development needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
              <CardDescription>info@twincord.com</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Call Us</CardTitle>
              <CardDescription>+91 XXX XXX XXXX</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Visit Us</CardTitle>
              <CardDescription>Kongu TBI, Tamil Nadu</CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Start Your Project
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </section>
  );
};

export default ContactSection;
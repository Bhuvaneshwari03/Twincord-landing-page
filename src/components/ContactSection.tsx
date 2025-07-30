import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Users,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-6 inline-block"
                  >
                    <span className="text-[#3b3b3b] mr-2">Get In</span>
                    <span className="text-[#00bfff] ml-2">Touch</span>
                  </motion.h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to secure your digital future? Contact us to discuss your cybersecurity and software development needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-border h-48 flex flex-col justify-center">
            <CardHeader className="text-center flex-1 flex flex-col justify-center py-6">
              <div className="flex justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Email Us</CardTitle>
              <CardDescription className="text-sm">
                info@twincord.in
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border h-48 flex flex-col justify-center">
            <CardHeader className="text-center flex-1 flex flex-col justify-center py-6">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Careers</CardTitle>
              <CardDescription className="text-sm">
                careers@twincord.in
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border h-48 flex flex-col justify-center">
            <CardHeader className="text-center flex-1 flex flex-col justify-center py-6">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Call Us</CardTitle>
              <CardDescription className="text-sm">
                +91 6383 43 6383
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border h-48 flex flex-col justify-center">
            <CardHeader className="text-center flex-1 flex flex-col justify-center py-6 px-4">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Visit Us</CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                <div>Technology Buisness Incubator,</div>
                <div>@Kongu Engineering College,</div>
                <div>Perundurai, Erode - 638 060,</div>
                <div>Tamil Nadu, India.</div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <a
          href="https://forms.gle/T5UFx6t7xYg1uuuMA"
          target="_blank"
          rel="noopener noreferrer"
        >
<Button
  size="lg"
  className="group bg-[#00bfff] hover:bg-[#33ccff] rounded-full px-6 py-3 font-semibold inline-flex items-center transition-colors duration-300 shadow-md"
>
  <span className="text-white transition-colors duration-300">
    Start Your Project
  </span>
  <ArrowRight className="ml-2 w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-1" />
</Button>
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { Shield, Zap, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwinAV = () => {
  // Gmail compose link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@twincord.in&su=Request%20for%20TwinAV%20Beta%20Access&body=Hello%20TwinCord%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20request%20beta%20access%20for%20the%20TwinAV%20product.%0D%0A%0D%0AThank%20you!`;

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="max-w-4xl relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass">
            <span className="text-sm font-medium">
              <Shield className="w-4 h-4 inline-block mr-2" /> Smart Antivirus
              Engine
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
            <span className="text-foreground font-medium">TwinAV</span>
            <br />
            <span className="text-muted-foreground">Next-Gen Protection</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            A smart, lightweight antivirus engine designed for modern threats.
            Experience real-time protection with minimal system impact.
          </p>

          {/* --- MODIFIED LINE BELOW --- */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="button-gradient">
              Coming Soon
            </Button>
            <a href={gmailLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="link" className="text-foreground">
                Request Beta Access
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-xl"
          >
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Lightning Fast
            </h3>
            <p className="text-muted-foreground">
              Minimal resource usage with maximum protection efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <Cpu className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              AI-Powered
            </h3>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms for threat detection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl"
          >
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Cloud-Enabled
            </h3>
            <p className="text-muted-foreground">
              Real-time threat intelligence from global security networks.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TwinAV;

import { motion } from "framer-motion";
import { Shield, Zap, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TwinAV = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
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
              <Shield className="w-4 h-4 inline-block mr-2" />
              Smart Antivirus Engine
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
            <span className="text-white font-medium">TwinAV</span>
            <br />
            <span className="text-gray-200">Next-Gen Protection</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            A smart, lightweight antivirus engine designed for modern threats. Experience real-time protection with minimal system impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" className="button-gradient">
              Coming Soon
            </Button>
            <Button size="lg" variant="link" className="text-white">
              Learn More
            </Button>
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
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Minimal resource usage with maximum protection efficiency.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <Cpu className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-300">Advanced machine learning algorithms for threat detection.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl"
          >
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud-Enabled</h3>
            <p className="text-gray-300">Real-time threat intelligence from global security networks.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TwinAV;
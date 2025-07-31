import { motion } from "framer-motion";
import { Shield, Cloud, Lock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwinShield = () => {
  // Gmail compose link for beta request
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@twincord.in&su=Request%20for%20TwinShield%20Beta%20Access&body=Hello%20TwinCord%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20request%20beta%20access%20for%20the%20TwinShield%20product.%0D%0A%0D%0AThank%20you!`;

  return (
    <>
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
              Firewall-as-a-Service
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
            <span className="text-foreground font-medium">TwinShield</span>
            <br />
            <span className="text-muted-foreground">Enterprise Security</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Cloud-based firewall service designed for small organizations.
            Advanced protection without the complexity of traditional firewalls.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" className="button-gradient">
              Coming Soon
            </Button>
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="link" className="text-foreground">
                Request Beta Access
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-xl"
          >
            <Cloud className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Cloud-Native
            </h3>
            <p className="text-muted-foreground">
              Fully cloud-based solution with no hardware requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <Lock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Advanced Security
            </h3>
            <p className="text-muted-foreground">
              Enterprise-grade protection with intelligent threat detection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl"
          >
            <Activity className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Real-time Monitoring
            </h3>
            <p className="text-muted-foreground">
              24/7 network monitoring with instant threat alerts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl"
          >
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Easy Management
            </h3>
            <p className="text-muted-foreground">
              Simple dashboard for managing security policies and rules.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TwinShield;
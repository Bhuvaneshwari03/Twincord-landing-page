import { motion } from "framer-motion";
import { Users, Calendar, BarChart3, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwinHRM = () => {
  return (
    // The main wrapper div is replaced with a fragment, as Layout.tsx handles the page container
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
              <Users className="w-4 h-4 inline-block mr-2" />
              Human Resource Management
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
            <span className="text-foreground font-medium">TwinHRM</span>
            <br />
            <span className="text-muted-foreground">
              Streamline Your Workforce
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Comprehensive human resource management system designed for modern
            organizations. Manage your team efficiently and securely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" className="button-gradient">
              Get Started
            </Button>
            <Button size="lg" variant="link" className="text-foreground">
              View Demo
            </Button>
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
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Employee Management
            </h3>
            <p className="text-muted-foreground">
              Complete employee lifecycle management with secure data handling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <Calendar className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Attendance Tracking
            </h3>
            <p className="text-muted-foreground">
              Real-time attendance monitoring with automated reporting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl"
          >
            <BarChart3 className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Performance Analytics
            </h3>
            <p className="text-muted-foreground">
              Comprehensive insights into workforce performance and
              productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl"
          >
            <FileText className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Document Management
            </h3>
            <p className="text-muted-foreground">
              Secure document storage and management for HR processes.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TwinHRM;

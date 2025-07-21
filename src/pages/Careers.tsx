import { motion } from "framer-motion";
import { Briefcase, Users, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const openings = [
    {
      title: "Cybersecurity Engineer",
      type: "Full-time",
      location: "Tamil Nadu, India",
      department: "Engineering"
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Tamil Nadu, India",
      department: "Engineering"
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Tamil Nadu, India",
      department: "Design"
    },
    {
      title: "Mobile App Developer",
      type: "Full-time",
      location: "Tamil Nadu, India",
      department: "Engineering"
    }
  ];

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
        <div className="max-w-4xl relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass">
            <span className="text-sm font-medium">
              <Briefcase className="w-4 h-4 inline-block mr-2" />
              Join Our Team
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
            <span className="text-foreground font-medium">Careers</span>
            <br />
            <span className="text-muted-foreground">Build the Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Join TwinCord Technologies and help us build the next generation of cybersecurity and software solutions. We're looking for passionate individuals who want to make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" className="button-gradient">
              View Open Positions
            </Button>
            <Button size="lg" variant="link" className="text-foreground">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Join Us Section */}
      <section className="container px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why TwinCord?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-xl text-center"
          >
            <Users className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation-Driven</h3>
            <p className="text-muted-foreground">Work on cutting-edge cybersecurity and software solutions that make a real impact.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl text-center"
          >
            <MapPin className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Growth Opportunities</h3>
            <p className="text-muted-foreground">Continuous learning and development in a fast-growing startup environment.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl text-center"
          >
            <Clock className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Work-Life Balance</h3>
            <p className="text-muted-foreground">Flexible working arrangements and a supportive team culture.</p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="container px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Open Positions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {job.department}
                  </span>
                </div>
              </div>
              <Button className="mt-4 md:mt-0 button-gradient">
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
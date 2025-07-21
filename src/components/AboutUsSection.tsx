import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          About <span className="text-gradient">TwinCord Technologies</span>
        </h2>
        
        <div className="prose prose-lg max-w-none text-left space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Twincord Technologies Private Limited is a cybersecurity-focused software startup incubated at Kongu TBI, Tamil Nadu. 
            We specialize in building secure, modern, and scalable web, mobile, and cloud-based solutions for startups, academic institutions, and growing businesses.
          </p>
          
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Our in-house innovation includes the development of:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>TwinAV</strong> – A smart, lightweight antivirus engine (in progress)
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>TwinShield</strong> – A Firewall-as-a-Service platform for small organizations (in progress)
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>TwinHRM</strong> – A Human Resource management tool
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Alongside our products, we offer a range of custom software services, including:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Secure website and app development
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                UI/UX design and prototyping
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Graphic design and motion content
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Data science automation tools
              </li>
            </ul>
          </div>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Twincord is also known for its student training and internship programs, bridging industry needs with talent from students. 
            With a team that values trust, skill, and growth, we are committed to delivering quality-first digital solutions that stay ahead of evolving security threats.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
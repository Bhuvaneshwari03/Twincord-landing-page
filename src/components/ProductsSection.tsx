import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      name: "TwinAV",
      description: "A smart, lightweight antivirus engine designed for modern security threats.",
      icon: Zap,
      path: "/twinav"
    },
    {
      name: "TwinShield", 
      description: "A Firewall-as-a-Service platform built to protect small organizations.",
      icon: Shield,
      path: "/twinshield"
    },
    {
      name: "TwinHRM",
      description: "A Human Resource Management System.",
      icon: Users,
      path: "/twinhrm"
    }
  ];

  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative cybersecurity and management solutions designed to protect and empower your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={product.path}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsSection;
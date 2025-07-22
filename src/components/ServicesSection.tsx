import { motion } from "framer-motion";
import { Shield, Code, Brain, Cloud, Palette, GraduationCap, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      shortDesc: "Complete security solutions to protect your digital infrastructure",
      icon: Shield,
      services: [
        "Penetration Testing & VAPT",
        "Cybersecurity Consulting & Audits", 
        "Managed Security Services (MSSP)",
        "Endpoint Security Solutions",
        "Incident Response & Digital Forensics"
      ],
      gradient: "from-red-500/20 to-orange-500/20",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500",
      hoverTextColor: "text-red-900"
    },
    {
      id: "software-development", 
      title: "Software Development Services",
      shortDesc: "Custom software solutions built with modern technologies",
      icon: Code,
      services: [
        "Custom Software Development",
        "Web Development",
        "Mobile App Development", 
        "SaaS Application Development",
        "API Development & Integration",
        "DevOps & Infrastructure Support"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      hoverTextColor: "text-blue-900"
    },
    {
      id: "ai-data",
      title: "AI & Data Solutions", 
      shortDesc: "Intelligent solutions powered by artificial intelligence and data science",
      icon: Brain,
      services: [
        "AI & ML Model Development",
        "Data Analytics & Business Intelligence",
        "Data Security & Compliance Services"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10", 
      iconColor: "text-purple-500",
      hoverTextColor: "text-purple-900"
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud & Infrastructure Services",
      shortDesc: "Scalable cloud solutions and robust infrastructure management", 
      icon: Cloud,
      services: [
        "Cloud Consulting & Deployment",
        "Infrastructure Management & Monitoring",
        "Firewall & Network Security Services"
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
      hoverTextColor: "text-green-900"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX & Creative Design Services",
      shortDesc: "Beautiful and intuitive designs that enhance user experience",
      icon: Palette, 
      services: [
        "UI/UX Design for Web & Mobile",
        "Branding & Graphic Design",
        "Corporate Video & Animation"
      ],
      gradient: "from-yellow-500/20 to-amber-500/20",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
      hoverTextColor: "text-amber-900"
    },
    {
      id: "training-certification",
      title: "Training & Certification Programs",
      shortDesc: "Professional development programs to enhance your team's skills",
      icon: GraduationCap,
      services: [
        "Corporate Security Training Programs", 
        "Software Development Training",
        "AI & Data Science Training",
        "Internship Programs & Career Building"
      ],
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
      hoverTextColor: "text-indigo-900"
    }
  ];

  const handleServiceClick = (serviceId) => {
    window.location.href = `/services/details#${serviceId}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#3b3b3b' }}>
              Our <span style={{ color: '#00bfff' }}>Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth 
              with security, innovation, and excellence at the core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-100 ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl ${service.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 group-hover:${service.hoverTextColor} transition-colors duration-300`} style={{ color: '#3b3b3b' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-gray-600 group-hover:${service.hoverTextColor}/80 transition-colors duration-300 mb-6 leading-relaxed`}>
                    {service.shortDesc}
                  </p>

                  {/* Service List Preview */}
                  <div className="space-y-2 mb-6">
                    {service.services.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <ChevronRight className={`h-4 w-4 text-blue-500 group-hover:${service.hoverTextColor} transition-colors duration-300`} />
                        <span className={`text-sm text-gray-600 group-hover:${service.hoverTextColor}/80 transition-colors duration-300`}>
                          {item}
                        </span>
                      </div>
                    ))}
                    {service.services.length > 3 && (
                      <div className={`text-sm text-blue-500 group-hover:${service.hoverTextColor} font-medium`}>
                        +{service.services.length - 3} more services
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className={`text-blue-500 group-hover:${service.hoverTextColor} font-semibold transition-colors duration-300`}>
                      Learn More
                    </span>
                    <ArrowRight className={`h-5 w-5 text-blue-500 group-hover:${service.hoverTextColor} group-hover:translate-x-1 transition-all duration-300`} />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
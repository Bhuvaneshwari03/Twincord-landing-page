import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Code,
  Brain,
  Cloud,
  Palette,
  GraduationCap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    shortDesc:
      "Complete security solutions to protect your digital infrastructure.",
    icon: Shield,
    list: [
      "Penetration Testing & VAPT",
      "Cybersecurity Consulting & Audits",
      "Managed Security Services (MSSP)",
      "Endpoint Security Solutions",
      "Incident Response & Digital Forensics",
    ],
    theme: {
      gradient: "from-red-500/20 to-orange-500/20",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500",
      hoverColor: "#7f1d1d",
      hoverColorMuted: "rgba(127, 29, 29, 0.8)",
    },
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDesc: "Custom software solutions built with modern technologies.",
    icon: Code,
    list: [
      "Custom Software Development",
      "Web & Mobile App Development",
      "SaaS Application Development",
      "API Development & Integration",
      "DevOps & Infrastructure Support",
    ],
    theme: {
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      hoverColor: "#1e3a8a",
      hoverColorMuted: "rgba(30, 58, 138, 0.8)",
    },
  },
  {
    id: "ai-data",
    title: "AI & Data Solutions",
    shortDesc: "Intelligent solutions powered by AI and data science.",
    icon: Brain,
    list: [
      "AI & ML Model Development",
      "Data Analytics & Business Intelligence",
      "Data Security & Compliance Services",
    ],
    theme: {
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      hoverColor: "#581c87",
      hoverColorMuted: "rgba(88, 28, 135, 0.8)",
    },
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortDesc: "Scalable cloud solutions and robust infrastructure management.",
    icon: Cloud,
    list: [
      "Cloud Consulting & Deployment",
      "Infrastructure Management",
      "Firewall & Network Security",
    ],
    theme: {
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
      hoverColor: "#14532d",
      hoverColorMuted: "rgba(20, 83, 45, 0.8)",
    },
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Creative Design",
    shortDesc: "Beautiful and intuitive designs that enhance user experience.",
    icon: Palette,
    list: [
      "UI/UX Design for Web & Mobile",
      "Branding & Graphic Design",
      "Corporate Video & Animation",
    ],
    theme: {
      gradient: "from-yellow-500/20 to-amber-500/20",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
      hoverColor: "#b45309",
      hoverColorMuted: "rgba(180, 83, 9, 0.8)",
    },
  },
  {
    id: "training-certification",
    title: "Training & Certification",
    shortDesc:
      "Professional development programs to enhance your team's skills.",
    icon: GraduationCap,
    list: [
      "Corporate Security Training",
      "Software Development Training",
      "AI & Data Science Training",
      "Internship Programs",
    ],
    theme: {
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
      hoverColor: "#312e81",
      hoverColorMuted: "rgba(49, 46, 129, 0.8)",
    },
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50"
      id="services"
    >
      <section className="relative overflow-hidden py-10 px-4">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-800">
              Our <span className="text-[#00bfff]">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              business growth with security, innovation, and excellence at the
              core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.theme.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Main content area */}
                <div className="relative z-10 p-8 flex-grow">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl ${service.theme.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${service.theme.iconColor}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800 group-hover:text-[var(--hover-color)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-[var(--hover-color-muted)] transition-colors duration-300 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Service List Preview */}
                  <div className="space-y-2">
                    {service.list.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ChevronRight className="h-4 w-4 text-[#00bfff] group-hover:text-[var(--hover-color)] transition-colors duration-300 flex-shrink-0" />
                        <span className="text-sm text-gray-600 group-hover:text-[var(--hover-color-muted)] transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                    {service.list.length > 3 && (
                      <div className="text-sm text-[#00bfff] group-hover:text-[var(--hover-color)] font-medium pt-1">
                        +{service.list.length - 3} more services
                      </div>
                    )}
                  </div>
                </div>

                {/* Learn More Button */}
                <div
                  className="relative z-10 mt-auto px-8 pb-8 pt-6"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-black font-semibold transition-colors duration-300 group-hover:text-[#00bfff]">
                      Learn More
                    </span>
                    <ArrowRight className="h-5 w-5 text-black transition-all duration-300 group-hover:text-[#00bfff] group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: Working Partners Section --- */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground/80 font-medium mb-4">
              Our working partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
              <img src="/aws.svg" alt="AWS Logo" className="h-7 w-auto" />
              <img
                src="/gcp.svg"
                alt="Google Cloud Platform Logo"
                className="h-7 w-auto"
              />
              <img src="/zoho.svg" alt="Zoho Logo" className="h-7 w-auto" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- End of Working Partners Section --- */}
    </div>
  );
};

export default ServicesPage;

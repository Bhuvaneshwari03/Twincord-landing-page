import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const ProductsPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [lockedProduct, setLockedProduct] = useState(null);
  const containerRef = useRef(null);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const products = [
    {
      id: 1,
      name: "TwinAV – Next-Gen Antivirus",
      description:
        "An advanced AI-powered antivirus solution designed to detect, protect, and evolve with modern cyber threats.",
      features: ["AI-powered engine", "Real-time protection", "Smart updates"],
      path: "/twinav",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      id: 2,
      name: "TwinShield – Firewall-as-a-Service",
      description:
        "A smart, cloud-based firewall solution built for real-time network protection and threat prevention.",
      features: ["Cloud firewall", "Threat detection", "Easy deployment"],
      path: "/twinshield",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 12V6m8 12V6M4 12h16"
        />
      ),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setLockedProduct(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeProductIndex =
    hoveredProduct !== null ? hoveredProduct : lockedProduct;

  const handleProductClick = (index) => {
    setLockedProduct((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-800">
              Our <span className="text-[#00bfff]">Products</span>
            </h2>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-[#666] max-w-3xl mx-auto"
          >
            Discover our innovative security solutions designed to protect your
            organization from modern threats.
          </motion.p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch"
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="flex flex-col space-y-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`relative p-8 bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 flex flex-col ${
                  activeProductIndex === index
                    ? "border-l-4 border-[#00bfff]"
                    : "border-l-4 border-transparent"
                }`}
                whileHover={{ y: -5 }}
                onClick={() => handleProductClick(index)}
                onMouseEnter={() => setHoveredProduct(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex items-start flex-grow">
                  <div className="w-14 h-14 rounded-xl bg-[#00bfff]/10 flex items-center justify-center mr-6 flex-shrink-0 hidden sm:flex">
  <div className="w-4 h-4 rounded-full bg-[#00bfff]"></div>
</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3b3b3b] mb-2">
                      <Link
                        to={product.path}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00bfff] rounded"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-[#666]">{product.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#00bfff]/10 text-[#00bfff] px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
  to={product.path}
  onClick={(e) => e.stopPropagation()}
  className="text-base font-bold text-black group flex items-center gap-2 transition-colors duration-300"
>
  <span className="transition-colors duration-300 group-hover:text-[#00bfff]">
    Learn More
  </span>
  <ArrowRight
    className="h-5 w-5 text-black-400 transition-all duration-300 group-hover:text-[#00bfff] group-hover:translate-x-1"
    aria-hidden="true"
  />
</Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- MODIFIED SECTION --- */}
          <div
            className={`relative h-full min-h-[550px] bg-white rounded-2xl overflow-hidden flex-col items-center justify-center p-6 transition-shadow duration-300 hidden lg:flex ${
              activeProductIndex !== null ? "shadow-lg" : ""
            }`}
          >
            <AnimatePresence mode="wait">
              {activeProductIndex === null ? (
                <motion.div
                  key="person-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src="/person.svg"
                    alt="Person pointing"
                    className="w-full h-full object-cover bg-white"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={activeProductIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center w-full"
                >
                  <div className="relative mx-auto w-64 h-64 flex items-center justify-center">
                    <motion.div
                      className="absolute w-full h-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#00bfff]/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#00bfff]/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute bottom-8 right-8 w-6 h-6 bg-[#00bfff]/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                    <div className="absolute inset-10 border-2 border-gray-200/50 rounded-full"></div>
                    <div className="relative bg-[#00bfff] w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {products[activeProductIndex].icon}
                      </svg>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-[#3b3b3b] mb-4">
                      {products[activeProductIndex].name}
                    </h3>
                    <p className="text-[#666] text-md max-w-md mx-auto">
                      {products[activeProductIndex].description}
                    </p>
                    <div className="mt-6">
  <Link
    to={products[activeProductIndex].path}
    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium shadow-md transition-colors inline-flex items-center"
  >
    Learn More
    <ArrowRight className="ml-2 w-4 h-4 transition-all duration-300" />
  </Link>
</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

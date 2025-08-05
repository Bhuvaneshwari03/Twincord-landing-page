// src/components/Footer.jsx

import { Github, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // This function handles clicks on hash links (e.g., /#about-us)
  const handleHashLinkClick = (e, hash) => {
    e.preventDefault();

    // If we are already on the homepage, scroll manually
    if (isHomePage) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // Your header's height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      // If we're on the homepage, just scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If we're on a different page, navigate to the homepage
      navigate("/");
    }
  };

  // Reusable component for social media links
  const SocialLink = ({ href, "aria-label": ariaLabel, icon: Icon }) => (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:bg-cyan-500 hover:text-white transition-colors duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  return (
    <footer
      id="footer"
      className="w-full py-12 lg:py-16 bg-neutral-950 text-white"
    >
      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Info */}
          <div className="-mt-12">
            <Link to="/" aria-label="Go to homepage">
              <img
                src="/logo-black.png"
                alt="Twincord Logo"
                className="h-auto w-[92%] transition-opacity hover:opacity-80 -ml-8 -mt-16"
              />
            </Link>
            <div className="pt-2 text-xs text-neutral-500 space-y-3 leading-relaxed -mt-24">
              <p>
                <strong className="text-neutral-400">
                  Twincord Technologies Private Limited
                </strong>
              </p>
            </div>
            <div className="flex space-x-3 pt-2 mt-10">
              <SocialLink
                href="https://github.com/twincord-technologies"
                aria-label="Github"
                icon={Github}
              />
              <SocialLink
                href="https://www.instagram.com/twincord_technologies/"
                aria-label="Instagram"
                icon={Instagram}
              />
              <SocialLink
                href="https://www.linkedin.com/company/twincord"
                aria-label="LinkedIn"
                icon={Linkedin}
              />
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@twincord.in&su=Enquiry%20About%20Your%20Products"
                aria-label="Email"
                icon={Mail}
              />
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={handleHomeClick}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#about-us"
                  onClick={(e) => handleHashLinkClick(e, "#about-us")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  onClick={(e) => handleHashLinkClick(e, "#products")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleHashLinkClick(e, "#contact")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  AI & Data Solutions
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Cloud Services
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Creative Design
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://hrm.twincord.in/web/index.php/recruitmentApply/jobs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleHashLinkClick(e, "#contact")}
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/refundCancellation"
                  className="text-sm text-neutral-400 hover:text-[#00bfff] transition-colors"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-neutral-500">
            Copyright © {new Date().getFullYear()} Twincord Technologies Pvt.
            Ltd.
          </p>
          <p className="credits text-sm text-neutral-500">
            Designed & Developed by 
            <a
              href="https://www.linkedin.com/in/bhuvaneshwari-g-51675724b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00bfff]"
            >
              {" "}Bhuvaneshwari G
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/jeevastudent/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00bfff]"
            >
              Jeeva A
            </a>{" "}
            &
            <a
              href="https://www.linkedin.com/in/iamjabastin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00bfff]"
            >
              {" "}Jabastin A
            </a>
          </p>
          <p className="text-sm text-neutral-500 mt-2 md:mt-0">
            All rights reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="absolute -top-6 right-6 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

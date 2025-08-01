import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Shield,
  Code,
  Brain,
  Cloud,
  Palette,
  GraduationCap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

// --- Type Definitions for TypeScript ---
interface SubItem {
  name: string;
  href: string;
  icon?: React.ElementType;
}

interface NavItem {
  name: string;
  href?: string;
  onClick?: () => void;
  subItems?: SubItem[];
}

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
}

// --- UPDATED: List Item Component for Dropdowns ---
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    icon?: React.ElementType;
    iconClassName?: string;
  }
>(({ className, title, icon: Icon, iconClassName, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "flex select-none items-center gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {Icon && (
            <Icon
              className={cn("h-4 w-4 text-muted-foreground", iconClassName)}
            />
          )}
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// --- Main Navigation Component ---
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // --- MODIFIED: Centralized Data for Services ---
  const servicesData: Service[] = [
    { id: "cybersecurity", title: "Cybersecurity", icon: Shield },
    { id: "software-development", title: "Software Development", icon: Code },
    { id: "ai-data", title: "AI & Data Solutions", icon: Brain },
    {
      id: "cloud-infrastructure",
      title: "Cloud & Infrastructure",
      icon: Cloud,
    },
    { id: "ui-ux-design", title: "UI/UX & Creative Design", icon: Palette },
    {
      id: "training-certification",
      title: "Training & Certification",
      icon: GraduationCap,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const productSubItems: SubItem[] = [
    { name: "TwinAV", href: "/twinav" },
    { name: "TwinShield", href: "/twinshield" },
  ];

  // --- MODIFIED: Service sub-items now include icons ---
  const serviceSubItems: SubItem[] = servicesData.map((service) => ({
    name: service.title,
    href: `/services/${service.id}`,
    icon: service.icon,
  }));

  const isHomePage = location.pathname === "/";

  // --- UPDATED: Unified Navigation Logic for Consistency ---
  const navItems: NavItem[] = [
    { name: "Products", subItems: productSubItems },
    { name: "Services", subItems: serviceSubItems },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact us",
      href: "/#contact",
      // Use smooth scroll on homepage, navigate from other pages
      onClick: isHomePage ? () => scrollToSection("contact") : undefined,
    },
  ];

  const navigate = useNavigate();

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

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full ${
        isScrolled
          ? "h-14 glass-nav scale-95 w-[90%] max-w-2xl shadow-2xl"
          : "h-14 glass-nav w-[95%] max-w-3xl shadow-xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <img
              src="/twincord-logo.png"
              alt="Twincord Logo"
              className="h-36 w-auto"
              onClick={handleHomeClick}
            />
          </Link>

          {/* Desktop Navigation --- */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => {
                const isActive = item.subItems
                  ? item.subItems.some((sub) =>
                      location.pathname.startsWith(sub.href)
                    )
                  : location.pathname === item.href;

                return (
                  <NavigationMenuItem key={item.name}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent",
                            isActive && "bg-accent/80"
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-2 p-4 md:w-[250px]">
                            {item.subItems.map((subItem) => (
                              <ListItem
                                key={subItem.name}
                                to={subItem.href}
                                title={subItem.name}
                                icon={subItem.icon}
                                iconClassName={
                                  item.name === "Services"
                                    ? "!text-[#00bfff]"
                                    : ""
                                }
                                className={
                                  location.pathname === subItem.href
                                    ? "bg-accent"
                                    : ""
                                }
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href || "#"}
                        onClick={
                          item.onClick
                            ? (e) => {
                                e.preventDefault();
                                item.onClick?.();
                              }
                            : undefined
                        }
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent",
                          isActive && "bg-accent/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- Mobile Navigation --- */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="glass border-0 shadow-none"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-nav border-0">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => {
                    const isActive = item.subItems
                      ? item.subItems.some((sub) =>
                          location.pathname.startsWith(sub.href)
                        )
                      : location.pathname === item.href;

                    return item.subItems ? (
                      <Accordion
                        key={item.name}
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem value={item.name} className="border-b-0">
                          <AccordionTrigger
                            className={cn(
                              "py-3 text-lg text-muted-foreground hover:text-foreground hover:no-underline rounded-md hover:bg-accent px-3",
                              isActive && "bg-accent text-accent-foreground"
                            )}
                          >
                            {item.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-3 pl-6 mt-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={cn(
                                    "text-lg text-muted-foreground hover:text-foreground",
                                    location.pathname === subItem.href &&
                                      "text-foreground font-semibold"
                                  )}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="flex items-center gap-3">
                                    {subItem.icon && (
                                      <subItem.icon
                                        className={cn(
                                          "h-4 w-4",
                                          item.name === "Services" &&
                                            "text-[#00bfff]"
                                        )}
                                      />
                                    )}
                                    <span>{subItem.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href || "#"}
                        className={cn(
                          "py-3 px-3 text-lg text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors",
                          isActive && "bg-accent text-accent-foreground"
                        )}
                        onClick={(e) => {
                          if (item.onClick) {
                            e.preventDefault();
                            item.onClick();
                          }
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

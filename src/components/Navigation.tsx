import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle, // Import the style utility
} from "./ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Your existing scrollToSection function remains unchanged
  };

  const isHomePage = location.pathname === "/";

  const productSubItems = [
    { name: "TwinAV", href: "/twinav" },
    { name: "TwinShield", href: "/twinshield" },
  ];

  const navItems = isHomePage
    ? [
        {
          name: "About",
          href: "#about",
          onClick: () => scrollToSection("about"),
        },
        {
          name: "Products",
          href: "#products",
          onClick: () => scrollToSection("products"),
          subItems: productSubItems,
        },
        {
          name: "Services",
          href: "#services",
          onClick: () => scrollToSection("services"),
        },
        {
          name: "Contact us",
          href: "#contact",
          onClick: () => scrollToSection("contact"),
        },
      ]
    : [
        { name: "Products", subItems: productSubItems },
      ];

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
              src="/Twincord.svg"
              alt="Twincord Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* --- MODIFIED: Desktop Navigation with Consistent Styles --- */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-4 md:w-[250px]">
                          {item.subItems.map((subItem) => (
                            <ListItem
                              key={subItem.name}
                              href={subItem.href}
                              title={subItem.name}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    // This now uses NavigationMenuLink for consistent styling
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href || "#"}
                        onClick={
                          item.onClick
                            ? (e) => {
                                e.preventDefault();
                                item.onClick();
                              }
                            : undefined
                        }
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent"
                        )}
                      >
                        {item.name}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- MODIFIED: Mobile Navigation with Enhanced Styles --- */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="glass border-0"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-nav border-0">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) =>
                    item.subItems ? (
                      <Accordion
                        key={item.name}
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem value={item.name} className="border-b-0">
                          <AccordionTrigger className="py-3 text-lg text-muted-foreground hover:text-foreground hover:no-underline rounded-md hover:bg-accent px-3">
                            {item.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-3 pl-6 mt-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="text-lg text-muted-foreground hover:text-foreground"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href || "#"}
                        className="py-3 px-3 text-lg text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        onClick={(e) => {
                          if (item.onClick) e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (item.onClick) item.onClick();
                        }}
                      >
                        {item.name}
                      </a>
                    )
                  )}
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

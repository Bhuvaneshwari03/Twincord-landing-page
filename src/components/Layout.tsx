// src/components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // Good to include this here!

const Layout = () => {
  return (
    // This flex container ensures the footer is pushed to the bottom
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ScrollToTop component ensures navigation brings you to the top of the new page */}
      <ScrollToTop />
      <Navigation />

      {/* Outlet is where the content of your different pages will be injected by the router */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
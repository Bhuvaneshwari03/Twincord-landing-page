import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

// Page Imports
import Index from "./pages/Index";
import About from "./pages/About";
import Policies from "./pages/Policies";
import TwinAV from "./pages/TwinAV";
import TwinHRM from "./pages/TwinHRM";
import TwinShield from "./pages/TwinShield";

// --- UPDATED IMPORTS ---
// Assuming you have a page that shows all service cards
import ServicesPage from "./components/ServicesSection"; 
// Renamed for clarity, this is your page for a single service's details
import ServicesDetailPage from "./components/ServiceDetails"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Standard page routes */}
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="twinav" element={<TwinAV />} />
            <Route path="twinhrm" element={<TwinHRM />} />
            <Route path="twinshield" element={<TwinShield />} />
            <Route path="/policies" element={<Policies />} />

            {/* --- MODIFIED SERVICE ROUTES --- */}
            
            {/* 1. Route to the services overview page (shows all service cards) */}
            <Route path="services" element={<ServicesPage />} />

            {/* 2. Dynamic route for individual service details */}
            {/* This replaces "services/details" and handles all services */}
            <Route path="services/:serviceId" element={<ServicesDetailPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
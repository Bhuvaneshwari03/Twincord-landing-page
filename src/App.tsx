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
import RefundCancellation from "./pages/RefundCancellation";
import ServicesPage from "./components/ServicesSection";
import ServicesDetailPage from "./components/ServiceDetails";

// 1. Import the new helper component
import ScrollToHashElement from "./components/ScrollToHashElement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 2. Add the component here to enable scroll-to-hash */}
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Standard page routes */}
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="twinav" element={<TwinAV />} />
            <Route path="twinhrm" element={<TwinHRM />} />
            <Route path="twinshield" element={<TwinShield />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/refundCancellation" element={<RefundCancellation />} />
            {/* Service Routes */}
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:serviceId" element={<ServicesDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
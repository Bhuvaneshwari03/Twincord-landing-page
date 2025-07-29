import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"; 

import Index from "./pages/Index";
import TwinAV from "./pages/TwinAV";
import TwinHRM from "./pages/TwinHRM";
import TwinShield from "./pages/TwinShield";
import About from "./pages/About";
import ServicesDetailPage from "./components/ServiceDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 2. Set up the nested routes */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* These routes will now render inside the Layout's <Outlet /> */}
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="twinav" element={<TwinAV />} />
            <Route path="twinhrm" element={<TwinHRM />} />
            <Route path="twinshield" element={<TwinShield />} />
            <Route path="services/details" element={<ServicesDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
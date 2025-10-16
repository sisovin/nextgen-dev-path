import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Python from "./pages/Python";
import JavaScript from "./pages/JavaScript";
import TypeScript from "./pages/TypeScript";
import Java from "./pages/Java";
import CSharp from "./pages/CSharp";
import Go from "./pages/Go";
import Ruby from "./pages/Ruby";
import Swift from "./pages/Swift";
import Cpp from "./pages/Cpp";
import PHP from "./pages/PHP";
import CareerGuide from "./pages/CareerGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/python" element={<Python />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/typescript" element={<TypeScript />} />
          <Route path="/java" element={<Java />} />
          <Route path="/csharp" element={<CSharp />} />
          <Route path="/go" element={<Go />} />
          <Route path="/ruby" element={<Ruby />} />
          <Route path="/swift" element={<Swift />} />
          <Route path="/cpp" element={<Cpp />} />
          <Route path="/php" element={<PHP />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

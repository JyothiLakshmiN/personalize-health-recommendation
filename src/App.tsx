
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import GroceryPage from "./pages/GroceryPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import AppSidebar from "./components/AppSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/"
                element={
                  <>
                    <AppSidebar />
                    <div className="flex-1">
                      <Index />
                    </div>
                  </>
                }
              />
              <Route
                path="/grocery"
                element={
                  <>
                    <AppSidebar />
                    <div className="flex-1">
                      <GroceryPage />
                    </div>
                  </>
                }
              />
              <Route
                path="/reports"
                element={
                  <>
                    <AppSidebar />
                    <div className="flex-1">
                      <ReportsPage />
                    </div>
                  </>
                }
              />
              <Route
                path="/settings"
                element={
                  <>
                    <AppSidebar />
                    <div className="flex-1">
                      <SettingsPage />
                    </div>
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

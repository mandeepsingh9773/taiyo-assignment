import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactsPage from "./pages/contactsPage";
import ChartsAndMapsPage from "./pages/chartsAndMapsPage";
import Sidebar from "../src/components/sidebar";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 p-5 overflow-auto">
            <Routes>
              <Route path="/" element={<ContactsPage />} />
              <Route path="/charts-and-maps" element={<ChartsAndMapsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
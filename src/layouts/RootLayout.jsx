import { MessageCircle } from "lucide-react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import React from "react";
import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Link
        to="/ai-chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          AI Plant Assistant
        </span>

        {/* Notification Badge (optional) */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-secondary text-xs font-bold rounded-full flex items-center justify-center">
          !
        </span>
      </Link>
    </div>
  );
};

export default RootLayout;

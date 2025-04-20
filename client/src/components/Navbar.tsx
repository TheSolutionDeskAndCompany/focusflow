import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isAppRoute = location.startsWith("/app");
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo className="text-[#0F766E]" />
              <span className="ml-2 text-xl font-bold text-slate-800">FocusFlow</span>
            </Link>
          </div>
          
          {isAppRoute ? (
            // App navigation for authenticated users
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/app/dashboard" className={`${location === "/app/dashboard" ? "text-[#0F766E]" : "text-slate-600 hover:text-[#0F766E]"} transition duration-150`}>
                Dashboard
              </Link>
              <Link href="/app/goal-input" className={`${location === "/app/goal-input" ? "text-[#0F766E]" : "text-slate-600 hover:text-[#0F766E]"} transition duration-150`}>
                New Challenge
              </Link>
              <Link href="/app/survey" className={`${location === "/app/survey" ? "text-[#0F766E]" : "text-slate-600 hover:text-[#0F766E]"} transition duration-150`}>
                Feedback
              </Link>
            </div>
          ) : (
            // Marketing site navigation
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#features" className="text-slate-600 hover:text-[#0F766E] transition duration-150">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-[#0F766E] transition duration-150">How It Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-[#0F766E] transition duration-150">Pricing</a>
              <a href="#contact" className="text-slate-600 hover:text-[#0F766E] transition duration-150">Contact</a>
            </div>
          )}
          
          <div className="flex items-center">
            {isAppRoute ? (
              // Authenticated user actions
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Profile
                </Button>
                <Button variant="ghost" size="sm">
                  Log Out
                </Button>
              </div>
            ) : (
              // Non-authenticated user actions
              <div className="hidden md:flex items-center">
                <Link href="/app/dashboard" className="text-slate-600 hover:text-[#0F766E] mr-4 font-medium">
                  Login
                </Link>
                <Link href="/app/goal-input">
                  <span className="inline-block">
                    <Button className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white">
                      Get Started
                    </Button>
                  </span>
                </Link>
              </div>
            )}
            
            <button 
              type="button" 
              className="md:hidden ml-2 p-2 rounded-md text-slate-400 hover:text-slate-500"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {isAppRoute ? (
                // App navigation for mobile
                <>
                  <Link href="/app/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Dashboard
                  </Link>
                  <Link href="/app/goal-input" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    New Challenge
                  </Link>
                  <Link href="/app/survey" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Feedback
                  </Link>
                  <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Profile
                  </button>
                  <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Log Out
                  </button>
                </>
              ) : (
                // Marketing nav for mobile
                <>
                  <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Features
                  </a>
                  <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    How It Works
                  </a>
                  <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Pricing
                  </a>
                  <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Contact
                  </a>
                  <Link href="/app/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#0F766E] hover:bg-slate-50">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

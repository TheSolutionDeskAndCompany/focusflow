import { Link } from "wouter";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Logo className="text-white" />
              <span className="ml-2 text-xl font-bold text-white">FocusFlow</span>
            </div>
            <p className="mt-4 text-slate-400">Improving customer satisfaction by focusing on employee experience.</p>
            <div className="mt-6 flex space-x-4">
              {/* Social links */}
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-slate-400 hover:text-white transition duration-150"
                  aria-label={platform}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-slate-400 hover:text-white transition duration-150">Features</a></li>
                <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition duration-150">How it works</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition duration-150">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Request a demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Guides</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">About us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition duration-150">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The Solution Desk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

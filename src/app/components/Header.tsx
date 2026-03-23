import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/f522a487a5184d8acbc1c42b4aa42fcbc306fd2c.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Natasha's Tidy Cleaning" 
              className="h-36 sm:h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className={`text-lg transition-colors ${
                isActive("/")
                  ? "text-pink-400 font-semibold"
                  : "text-gray-600 hover:text-pink-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-lg transition-colors ${
                isActive("/services")
                  ? "text-pink-400 font-semibold"
                  : "text-gray-600 hover:text-pink-400"
              }`}
            >
              Services
            </Link>
            <Link
              to="/schedule"
              className={`text-lg transition-colors ${
                isActive("/schedule")
                  ? "text-pink-400 font-semibold"
                  : "text-gray-600 hover:text-pink-400"
              }`}
            >
              Schedule Service
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-pink-200 p-2 text-pink-500 hover:bg-pink-50 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link
              to="/"
              className={`rounded-lg px-3 py-2 text-base transition-colors ${
                isActive("/")
                  ? "bg-pink-100 text-pink-500 font-semibold"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`rounded-lg px-3 py-2 text-base transition-colors ${
                isActive("/services")
                  ? "bg-pink-100 text-pink-500 font-semibold"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-400"
              }`}
            >
              Services
            </Link>
            <Link
              to="/schedule"
              className={`rounded-lg px-3 py-2 text-base transition-colors ${
                isActive("/schedule")
                  ? "bg-pink-100 text-pink-500 font-semibold"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-400"
              }`}
            >
              Schedule Service
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
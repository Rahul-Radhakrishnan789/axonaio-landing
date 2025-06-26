import React, { useEffect, useState } from "react";
import { Menu, X, LogIn, Gamepad2, Shell } from "lucide-react";


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  icon,
  onClick,
  className = "",
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium ${className}`}
  >
    {icon && <span className="text-current">{icon}</span>}
    <span>{children}</span>
  </a>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);


useEffect(() => {
    let lastScrollY = window.scrollY;
    const scrollThreshold = 10; 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;

      if (deltaY > 0 && currentScrollY > 100) {
       
        setIsNavbarHidden(true);
      } else if (deltaY < -scrollThreshold) {
        
        setIsNavbarHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
      <nav
      className={`bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 transform transition-transform duration-300 ${
        isNavbarHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                GameSoft
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" icon={<Gamepad2 size={18} />}>
                My Games
              </NavLink>
              <NavLink href="/" icon={<Shell size={18} />}>
                About Us
              </NavLink>
              <NavLink
                href="/login"
                icon={<LogIn size={18} />}
                className="bg-green-300 text-black hover:bg-green-400 hover:text-black"
              >
                {"Login / Register"}
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          <NavLink
            href="/"
            icon={<Gamepad2 size={18} />}
            onClick={closeMobileMenu}
            className="block w-full text-left"
          >
            My Games
          </NavLink>
          <NavLink
            href="/vouchers"
            icon={<Shell size={18} />}
            onClick={closeMobileMenu}
            className="block w-full text-left"
          >
            About Us
          </NavLink>
          <NavLink
            href="#auth"
            icon={<LogIn size={18} />}
            className="block w-full text-left bg-green-300 text-black hover:bg-green-400 hover:text-black"
          >
            {"Login / Register"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  const linkStyles = ({ isActive }) =>
    `text-[15px] font-semibold transition-colors ${
      isActive ? "text-[#7C3AED]" : "text-gray-700 hover:text-[#7C3AED]"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <NavLink to="/" className="shrink-0 flex items-center gap-3">
            <img className="w-10" src={logo} alt="logo image" />
            <span className="text-[22px] font-black tracking-tight text-[#7C3AED]">
              AppStack
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkStyles}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side - Button & Mobile Toggle */}
          <div className="flex items-center">
            <a
              href="https://github.com/Mosharrof-Hosen-Munna"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2.5 rounded-lg font-bold shadow-md transition-all active:scale-95"
            >
              {/* GitHub SVG Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Contribute
            </a>

            {/* Mobile Button Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M4 12h16M4 6h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 border-t" : "max-h-0"}`}
      >
        <div className="px-6 py-4 space-y-4 bg-white shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `block text-lg font-bold ${isActive ? "text-[#7C3AED]" : "text-gray-600"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://github.com/Mosharrof-Hosen-Munna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center bg-[#7C3AED] text-white py-3 rounded-lg font-bold"
          >
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

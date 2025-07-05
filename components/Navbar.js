'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {
    console.log('Search clicked');
  };

  const handleSignIn = () => {
    console.log('Sign in clicked');
  };

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/standings', label: 'Standings' },
    { href: '/news', label: 'News' },
    { href: '/teams', label: 'Teams' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-slate-900 border-t border-b border-slate-800 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo/Site Title */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-yellow-400">
                USVI SOFTBALL
              </span>
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-baseline space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-yellow-400 hover:text-yellow-300 px-4 py-3 text-lg font-semibold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Utility Icons/Buttons */}
          <div className="hidden md:flex items-center space-x-6 ml-8">
            {/* Search Icon */}
            <button
              onClick={handleSearch}
              className="text-yellow-400 hover:text-yellow-300 p-3 transition-colors duration-200"
              aria-label="Search"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Apply Button */}
            <button
              onClick={handleSignIn}
              className="bg-yellow-600 hover:bg-blue-700 text-white-700 px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
            >
              APPLY
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Icon */}
            <button
              onClick={handleSearch}
              className="text-yellow-400 hover:text-yellow-300 p-2 transition-colors duration-200"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile Sign In Button */}
            <button
              onClick={handleSignIn}
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200"
            >
              APPLY
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-yellow-400 hover:text-yellow-300 p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-800">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-yellow-400 hover:text-yellow-300 block px-4 py-3 text-lg font-semibold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
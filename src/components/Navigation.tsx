"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Wand2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      {/* Header Topbar */}
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <a 
                  href="tel:+919942576886" 
                  className="flex items-center border-r border-primary pr-2 mr-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  +91 9942576886
                </a>
                <a 
                  href="mailto:support@dreamstechnologies.com" 
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Mail className="w-3 h-3 mr-1" />
                  support@dreamstechnologies.com
                </a>
              </div>
              <div className="hidden md:flex items-center">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors mr-1">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors mr-1">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors mr-1">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors mr-1">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaPinterest className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="SmartHR Logo" 
                  className="w-full h-10 object-cover"
                />
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden xl:flex items-center space-x-8">
              <a href="#features" className="text-body hover:text-primary transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-body hover:text-primary transition-colors font-medium">Pricing</a>
              <a href="#reviews" className="text-body hover:text-primary transition-colors font-medium">Reviews</a>
              <a href="#contactus" className="text-body hover:text-primary transition-colors font-medium">Contact us</a>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center">
              <a 
                href="#" 
                className="bg-primary-gradient text-white px-4 py-2 rounded text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Request Demo
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className="xl:hidden ml-4 text-primary" 
                onClick={toggleMobileMenu}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`xl:hidden fixed inset-y-0 left-0 w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40" 
                  alt="SmartHR Logo" 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <button onClick={toggleMobileMenu} className="text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-4">
              <a 
                href="#features" 
                className="block text-body hover:text-primary transition-colors py-2 font-medium"
                onClick={toggleMobileMenu}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="block text-body hover:text-primary transition-colors py-2 font-medium"
                onClick={toggleMobileMenu}
              >
                Pricing
              </a>
              <a 
                href="#reviews" 
                className="block text-body hover:text-primary transition-colors py-2 font-medium"
                onClick={toggleMobileMenu}
              >
                Reviews
              </a>
              <a 
                href="#contactus" 
                className="block text-body hover:text-primary transition-colors py-2 font-medium"
                onClick={toggleMobileMenu}
              >
                Contact us
              </a>
            </nav>
            
            <div className="mt-6">
              <a 
                href="#" 
                className="bg-primary text-white px-4 py-2 rounded text-sm font-medium flex items-center justify-center w-full"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Request Demo
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={toggleMobileMenu}
          />
        )}
      </header>
    </>
  );
}

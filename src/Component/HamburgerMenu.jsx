import { useState } from "react";
import  Logo  from "/public/logo-trinitas.png"

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute bg-[#2859C5] text-white px-10 py-4 w-full">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
            <img className="w-10" src={Logo} alt="Logo-trinitas" />
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#services" className="hover:text-red-500">Services</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li><a href="#home" className="block hover:text-red-500">Home</a></li>
          <li><a href="#about" className="block hover:text-red-500">About</a></li>
          <li><a href="#services" className="block hover:text-red-500">Services</a></li>
          <li><a href="#contact" className="block hover:text-red-500">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Tentang Kami",
    "Kontak",
    "Fasilitas",
    "Info Gudang",
    "Galeri",
  ];

  return (
    <div className="flex justify-center">
    <nav className="bg-white z-50 fixed w-full shadow-md py-4 px-6 rounded-full mx-auto max-w-6xl mt-4">
      {/* Desktop */}
      <div className="hidden px-11 md:flex justify-between items-center">
        {/* Left Nav */}
        <div className="flex space-x-6">
          {navItems.slice(0, 3).map((item, i) => (
            <NavItem key={i} item={item} active={item === "Tentang Kami"} />
          ))}
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/logo-trinitas.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xs font-semibold mt-1 text-gray-700">
            PT. Trinitas Prima Sejahtera
          </span>
        </div>

        {/* Right Nav */}
        <div className="flex space-x-6">
          {navItems.slice(3).map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          {navItems.map((item, i) => (
            <NavItem key={i} item={item} active={item === "Tentang Kami"} />
          ))}
        </div>
      )}
    </nav>
    </div>
  );
}

function NavItem({ item, active }) {
  return (
    <div className="relative group cursor-pointer">
      <span
        className={`text-sm font-semibold ${
          active ? "text-orange-600" : "text-black"
        }`}
      >
        {item}
      </span>
      {active && (
        <div className="h-[2px] w-5 mx-auto bg-orange-600 mt-1 rounded-full" />
      )}
    </div>
  );
}

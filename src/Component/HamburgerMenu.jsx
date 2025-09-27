import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tentang Kami", href: "#tentangkami" },
    { name: "Kontak", href: "#kontak" },
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Info Gudang", href: "#gudang" },
    { name: "Galeri", href: "#galeri" },
  ];

  return (
    <div className="md:flex md:justify-center">
      <nav className="bg-white z-50 absolute max-[864px]:px-10 min-[864px]:fixed w-full shadow-md py-4 px-6 min-[864px]:rounded-full max-w-6xl min-[864px]:mt-4">
        {/* Desktop */}
        <div className="hidden min-[864px]:flex justify-between items-center px-11">
          <div className="flex space-x-6 relative">
            {navItems.slice(0, 3).map((item, i) => (
              <NavItem
                key={i}
                item={item}
                active={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
              />
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

          <div className="flex space-x-6 relative">
            {navItems.slice(3).map((item, i) => (
              <NavItem
                key={i}
                item={item}
                active={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="min-[864px]:hidden flex justify-between items-center">
          <img src="/logo-trinitas.png" alt="Logo" className="w-8 h-8" />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="min-[864px]:hidden mt-4 text-center flex flex-col gap-4">
            {navItems.map((item, i) => (
              <NavItem
                className = "flex gap-4"
                key={i}
                item={item}
                active={activeItem === item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  setMenuOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

function NavItem({ item, active, onClick }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`relative group cursor-pointer text-sm font-semibold transition-colors duration-300 ${
        active ? "text-orange-600" : "text-black"
      }`}
    >
      {item.name}
      <span
        className={`absolute bottom-[-4px] left-1/2 h-[2px] bg-orange-600 rounded-full transition-all duration-300 ease-in-out ${
          active ? "w-5 -translate-x-1/2" : "w-0"
        }`}
      />
    </a>
  );
}

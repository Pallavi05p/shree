import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundImage: "url('/red-texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo or Site Name */}
        <Link to="/" className="text-2xl font-bold text-yellow-300">
          🚩||महाकाल प्रतिष्ठान|| 🚩

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-white text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/vadya" className="hover:text-yellow-300 transition">
            Vadya Pujan
          </Link>
          <Link to="/events" className="hover:text-yellow-300 transition">
            Events
          </Link>
          <Link to="/photo" className="hover:text-yellow-300 transition">
            Photos
          </Link>
          <Link to="/utsav" className="hover:text-yellow-300 transition">
            Utsav
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 bg-black/70 text-white text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/vadya"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Vadya Pujan
          </Link>
          <Link
            to="/events"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/photo"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Photos
          </Link>
          <Link
            to="/utsav"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Utsav
          </Link>
        </div>
      )}
    </nav>
  );
}

import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/tplogo.png" alt="Logo" className="h-8 w-8" />

          <h1 className="text-2xl font-bold text-gray-800">
            Tuty Portrait
          </h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-red-600">
            Home
          </Link>
          <Link to="gallery" smooth duration={500} className="cursor-pointer hover:text-red-600">
            Gallery
          </Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-red-600">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-gray-700">
          <Link to="home" smooth duration={500} onClick={handleClick} className="block cursor-pointer">
            Home
          </Link>
          <Link to="gallery" smooth duration={500} onClick={handleClick} className="block cursor-pointer">
            Gallery
          </Link>
          <Link to="contact" smooth duration={500} onClick={handleClick} className="block cursor-pointer">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
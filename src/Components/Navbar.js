import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import useTheme from '../Context/Theme'; 
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleMode } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className={`mb-16 fixed top-0 left-0 w-full z-50 h-16 bg-mylight dark:bg-mydark 
      flex justify-between items-center px-6 md:px-12 
      border-b border-black backdrop-blur-md shadow-md transition-colors duration-300`}>

      {/* Logo */}
      <div 
        className="text-3xl font-bold text-mydark dark:text-mylight cursor-pointer"
        onClick={() => navigate("/")}
      >
        W/E
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-xl font-bold">
        <li 
          className="hover:underline text-mydark dark:text-mylight cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li 
          className="hover:underline text-mydark dark:text-mylight cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li 
          className="hover:underline text-mydark dark:text-mylight cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>

        {/* Dark Mode Toggle (Desktop) */}
        <div className="form-check form-switch">
          <input 
            className="form-check-input cursor-pointer" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault"
            onClick={toggleMode} 
            checked={darkMode} 
            readOnly
          />
        </div>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-mydark dark:text-mylight focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-mylight dark:bg-mydark shadow-md md:hidden transition-colors duration-300">
          <ul className="flex flex-col space-y-4 text-center py-4 text-xl font-bold">
            {/* Dark Mode Toggle (Mobile) */}
            <div className="form-check form-switch flex justify-center">
              <input 
                className="form-check-input cursor-pointer" 
                type="checkbox" 
                role="switch" 
                id="flexSwitchCheckMobile"
                onClick={toggleMode} 
                checked={darkMode} 
                readOnly
              />
            </div>

            <li 
              className="block hover:underline text-mydark dark:text-mylight cursor-pointer"
              onClick={() => { navigate("/"); setIsOpen(false); }}
            >
              Home
            </li>
            <li 
              className="block hover:underline text-mydark dark:text-mylight cursor-pointer"
              onClick={() => { navigate("/about"); setIsOpen(false); }}
            >
              About
            </li>
            <li 
              className="block hover:underline text-mydark dark:text-mylight cursor-pointer"
              onClick={() => { navigate("/contact"); setIsOpen(false); }}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

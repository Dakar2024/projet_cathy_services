import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../images/LOGOmodifie.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo Cathy'B-Service" className="h-10 w-auto mr-2 rounded" />
            <span className={`text-2xl font-bold transition-all duration-300 ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
              Cathy'B-Service
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'font-semibold' : 'font-medium'} ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-500 transition-all duration-300`}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'font-semibold' : 'font-medium'} ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-500 transition-all duration-300`}
            >
              À propos
            </Link>
            <Link 
              to="/gallery" 
              className={`${isActive('/gallery') ? 'font-semibold' : 'font-medium'} ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-500 transition-all duration-300`}
            >
              Réalisations
            </Link>
            <Link 
              to="/booking" 
              className={`${isActive('/booking') ? 'font-semibold' : 'font-medium'} ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-500 transition-all duration-300`}
            >
              Rendez-vous
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'font-semibold' : 'font-medium'} ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-500 transition-all duration-300`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-blue-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-xl rounded-b-lg mt-2 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-blue-700 font-semibold' : 'text-slate-700'} hover:text-blue-500 transition-all duration-300`}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-blue-700 font-semibold' : 'text-slate-700'} hover:text-blue-500 transition-all duration-300`}
              >
                À propos
              </Link>
              <Link 
                to="/gallery" 
                className={`${isActive('/gallery') ? 'text-blue-700 font-semibold' : 'text-slate-700'} hover:text-blue-500 transition-all duration-300`}
              >
                Réalisations
              </Link>
              <Link 
                to="/booking" 
                className={`${isActive('/booking') ? 'text-blue-700 font-semibold' : 'text-slate-700'} hover:text-blue-500 transition-all duration-300`}
              >
                Rendez-vous
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-blue-700 font-semibold' : 'text-slate-700'} hover:text-blue-500 transition-all duration-300`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
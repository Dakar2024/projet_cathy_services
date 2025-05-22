import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cathy'B-Service</h3>
            <p className="mb-4">
              Toujours prêt à vous offrir des services sur mesure, adaptés à vos attentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery?filter=nettoyage" className="hover:text-blue-300 transition-colors duration-300">Nettoyage</Link>
              </li>
              <li>
                <Link to="/gallery?filter=immobilier" className="hover:text-blue-300 transition-colors duration-300">Immobilier</Link>
              </li>
              <li>
                <Link to="/gallery?filter=accueil" className="hover:text-blue-300 transition-colors duration-300">Accueil</Link>
              </li>
              <li>
                <Link to="/gallery?filter=decoration" className="hover:text-blue-300 transition-colors duration-300">Décoration Événementielle</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>22 Rue Bakoukouyas, poto-poto 2 <br /> Brazzaville, République du Congo</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+242 06 805 90 88</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>cathybabos15@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Lun-Ven: 9h-18h<br />Disponibilité 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cathy'B-Service. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
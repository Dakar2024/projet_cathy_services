import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, linkTo, delay = 0 }) => {
  return (
    <div 
      className="card group p-6 h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={linkTo} 
        className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300"
      >
        En savoir plus
        <ArrowRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
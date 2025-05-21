import React, { useState } from 'react';

interface GalleryItemProps {
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  delay?: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ 
  imageSrc, 
  title, 
  description, 
  category,
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card overflow-hidden animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={imageSrc} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
};

export default GalleryItem;
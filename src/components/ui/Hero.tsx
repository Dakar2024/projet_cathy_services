import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}) => {
  return (
    <div className="relative h-screen min-h-[500px] flex items-center text-white">
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
      
      <div className="container-custom relative z-20 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {ctaText && ctaLink && (
                <Link to={ctaLink} className="btn btn-primary">
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink} className="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:ring-white/50">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
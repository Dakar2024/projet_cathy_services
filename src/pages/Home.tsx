import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { services } from '../data/serviceData';
import { testimonials } from '../data/testimonialsData';
import accueilImage from '../images/ACCEUIL.jpg';

const Home: React.FC = () => {
  return (
    <>
      <Hero 
        title="Cathy'B-Service"
        subtitle="Toujours prêt à vous offrir des services sur mesure, adaptés à vos attentes."
        ctaText="Nos services"
        ctaLink="#services"
        secondaryCtaText="Prendre rendez-vous"
        secondaryCtaLink="/booking"
        backgroundImage={accueilImage}
      />

      <section id="services" className="section bg-slate-50">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Nos Services</h2>
            <p>
              Découvrez l'ensemble de nos services professionnels adaptés à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkTo={service.linkTo}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre satisfaction est notre priorité
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Chez Cathy'B-Service, nous mettons notre savoir-faire à votre service. Notre équipe de professionnels est disponible 7j/7 pour vous offrir des prestations sur mesure et de qualité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn bg-white text-blue-900 hover:bg-blue-50">
                  À propos de nous
                </Link>
                <Link to="/gallery" className="btn bg-blue-800 text-white hover:bg-blue-700">
                  Voir nos réalisations
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img
                src="https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Notre équipe"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 p-6">
                <p className="text-lg font-semibold">Une équipe à votre écoute</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Ce que disent nos clients</h2>
            <p>
              Découvrez les témoignages de clients satisfaits par nos services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-100">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à transformer votre projet ?
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/booking" className="btn bg-white text-blue-700 hover:bg-blue-50">
                  Prendre rendez-vous
                </Link>
                <Link to="/contact" className="btn bg-blue-700 text-white border border-white hover:bg-blue-600">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
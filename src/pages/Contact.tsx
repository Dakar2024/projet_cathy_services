import React from 'react';
import ContactForm from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <div className="pt-20 bg-blue-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-blue-100">
              Nous sommes à votre écoute pour répondre à toutes vos questions et demandes.
            </p>
          </div>
        </div>
      </div>

      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Nos coordonnées</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin size={24} className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-1">Adresse</h3>
                      <p className="text-slate-700">123 Rue de Paris<br />75000 Paris, France</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone size={24} className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-1">Téléphone</h3>
                      <p className="text-slate-700">+33 1 23 45 67 89</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={24} className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-1">Email</h3>
                      <p className="text-slate-700">contact@cathyb-service.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock size={24} className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-1">Horaires d'ouverture</h3>
                      <p className="text-slate-700">
                        Lundi - Vendredi: 9h - 18h<br />
                        Samedi: 10h - 15h<br />
                        <span className="text-blue-700 font-medium">Disponibilité 7j/7 sur rendez-vous</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Besoin d'un devis ?</h3>
                <p className="text-slate-700 mb-4">
                  Pour toute demande de devis, veuillez nous contacter directement ou utiliser notre formulaire de prise de rendez-vous.
                </p>
                <a href="/booking" className="inline-block btn btn-primary">
                  Demander un devis
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Où nous trouver</h2>
            <p>
              Rendez-nous visite dans nos locaux au cœur de Paris
            </p>
          </div>

          <div className="animate-fade-in rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.2922926767154714!3d48.85837007133452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1707215880184!5m2!1sfr!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de Cathy'B-Service"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
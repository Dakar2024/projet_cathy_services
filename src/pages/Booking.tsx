import React from 'react';
import BookingForm from '../components/ui/BookingForm';
import { CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const benefits = [
    "Réponse rapide sous 24h",
    "Personnel qualifié et expérimenté",
    "Services personnalisés selon vos besoins",
    "Disponibilité 7j/7",
    "Devis gratuit et sans engagement",
    "Suivi de qualité"
  ];

  return (
    <>
      <div className="pt-20 bg-blue-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prendre Rendez-vous</h1>
            <p className="text-xl text-blue-100">
              Réservez un rendez-vous avec notre équipe pour discuter de vos besoins et obtenir un service personnalisé.
            </p>
          </div>
        </div>
      </div>

      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Réservez nos services</h2>
              <p className="text-lg text-slate-600 mb-6">
                Remplissez le formulaire ci-contre pour prendre rendez-vous. Notre équipe vous contactera rapidement pour confirmer votre demande et discuter des détails.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Besoin d'aide ?</h3>
                <p className="text-slate-700 mb-4">
                  Si vous préférez nous contacter directement ou si vous avez des questions, n'hésitez pas à nous appeler ou à nous envoyer un email.
                </p>
                <div className="space-y-2 text-slate-800">
                  <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                  <p><strong>Email:</strong> contact@cathyb-service.com</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Comment ça marche ?</h2>
            <p>
              Notre processus simple en 4 étapes pour vous offrir un service adapté à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Prise de rendez-vous",
                description: "Remplissez notre formulaire en ligne pour nous faire part de vos besoins."
              },
              {
                step: "2",
                title: "Confirmation",
                description: "Nous vous contactons sous 24h pour confirmer le rendez-vous."
              },
              {
                step: "3",
                title: "Consultation",
                description: "Nous discutons de vos besoins spécifiques et établissons un devis."
              },
              {
                step: "4",
                title: "Réalisation",
                description: "Nous réalisons la prestation selon les modalités convenues."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative bg-white p-6 rounded-lg shadow-md text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-1 bg-blue-300 transform -translate-x-4">
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
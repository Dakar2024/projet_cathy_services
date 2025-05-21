import React from 'react';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle size={36} className="text-blue-600" />,
      title: "Qualité",
      description: "Nous nous engageons à fournir des services d'une qualité irréprochable, avec une attention particulière aux détails."
    },
    {
      icon: <Award size={36} className="text-blue-600" />,
      title: "Expérience",
      description: "Notre équipe dispose d'une solide expérience dans tous nos domaines d'expertise pour vous garantir un résultat optimal."
    },
    {
      icon: <Clock size={36} className="text-blue-600" />,
      title: "Disponibilité",
      description: "Nous sommes disponibles 7j/7 pour répondre à vos besoins urgents et nous adapter à votre emploi du temps."
    },
    {
      icon: <Users size={36} className="text-blue-600" />,
      title: "Personnalisation",
      description: "Chaque service est personnalisé selon vos attentes spécifiques et adapté à votre situation particulière."
    }
  ];

  const team = [
    {
      name: "Catherine Bertrand",
      role: "Fondatrice & Directrice",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Après 15 ans d'expérience dans différents secteurs de services, Catherine a fondé Cathy'B-Service avec la vision d'offrir des services personnalisés de haute qualité."
    },
    {
      name: "Antoine Martin",
      role: "Responsable Nettoyage",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Expert en techniques de nettoyage professionnelles, Antoine supervise toutes nos opérations de nettoyage avec rigueur et efficacité."
    },
    {
      name: "Sophie Dubois",
      role: "Conseillère Immobilier",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Avec sa connaissance approfondie du marché immobilier, Sophie accompagne nos clients dans tous leurs projets immobiliers."
    },
    {
      name: "Laurent Petit",
      role: "Décorateur Événementiel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Créatif et minutieux, Laurent transforme chaque espace pour créer des événements mémorables selon vos souhaits."
    }
  ];

  return (
    <>
      <div className="pt-20 bg-blue-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
            <p className="text-xl text-blue-100">
              Découvrez notre histoire, nos valeurs et l'équipe qui fait de Cathy'B-Service votre partenaire de confiance.
            </p>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-slate-600 mb-4">
                Fondée en 2015 par Catherine Bertrand, Cathy'B-Service est née d'une vision simple : offrir des services professionnels et personnalisés aux particuliers et aux entreprises.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Au fil des années, notre entreprise a développé une expertise dans plusieurs domaines complémentaires : le nettoyage, l'immobilier, l'accueil et la décoration événementielle.
              </p>
              <p className="text-lg text-slate-600">
                Aujourd'hui, nous sommes fiers d'être reconnus pour la qualité de nos services et notre capacité à nous adapter aux besoins spécifiques de chaque client.
              </p>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Notre équipe en action"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Nos Valeurs</h2>
            <p>
              Les principes qui guident chacune de nos actions au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md text-center h-full animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Notre Équipe</h2>
            <p>
              Rencontrez les professionnels passionnés qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="h-full animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-1 text-blue-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Engagement
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Chez Cathy'B-Service, nous nous engageons à vous fournir des services exceptionnels, adaptés à vos besoins spécifiques. Votre satisfaction est notre priorité absolue.
            </p>
            <div className="flex justify-center">
              <a href="/booking" className="btn bg-white text-blue-900 hover:bg-blue-50">
                Faites appel à nos services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
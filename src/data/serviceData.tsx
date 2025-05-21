import { Sparkles, Home, UserCheck, PartyPopper } from 'lucide-react';
import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Nettoyage",
    description: "Services de nettoyage professionnel pour particuliers et entreprises. Nous assurons un résultat impeccable pour tous vos espaces.",
    icon: <Sparkles size={40} />,
    linkTo: "/gallery?filter=nettoyage"
  },
  {
    id: 2,
    title: "Immobilier",
    description: "Services immobiliers complets : vente, location, gestion, conseil. Notre expertise du marché est à votre service.",
    icon: <Home size={40} />,
    linkTo: "/gallery?filter=immobilier"
  },
  {
    id: 3,
    title: "Accueil",
    description: "Personnel d'accueil qualifié pour vos événements professionnels ou privés. Une présence attentionnée et professionnelle.",
    icon: <UserCheck size={40} />,
    linkTo: "/gallery?filter=accueil"
  },
  {
    id: 4,
    title: "Décoration Événementielle",
    description: "Créations sur mesure pour tous vos événements. Nous donnons vie à vos idées avec créativité et savoir-faire.",
    icon: <PartyPopper size={40} />,
    linkTo: "/gallery?filter=decoration"
  }
];
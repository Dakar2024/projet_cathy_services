export interface GalleryItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Nettoyage de bureau",
    description: "Nettoyage complet d'espaces de travail pour une entreprise.",
    category: "nettoyage"
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Nettoyage résidentiel",
    description: "Service de nettoyage pour appartement de luxe.",
    category: "nettoyage"
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Nettoyage après chantier",
    description: "Remise en état d'un logement après travaux.",
    category: "nettoyage"
  },
  {
    id: 4,
    imageSrc: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Appartement parisien",
    description: "Mise en vente d'un appartement haussmannien rénové.",
    category: "immobilier"
  },
  {
    id: 5,
    imageSrc: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Maison contemporaine",
    description: "Vente d'une maison moderne avec jardin.",
    category: "immobilier"
  },
  {
    id: 6,
    imageSrc: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Local commercial",
    description: "Location d'un espace commercial en centre-ville.",
    category: "immobilier"
  },
  {
    id: 7,
    imageSrc: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Accueil salon professionnel",
    description: "Service d'accueil pour un salon de l'industrie.",
    category: "accueil"
  },
  {
    id: 8,
    imageSrc: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Accueil d'événement",
    description: "Équipe d'accueil pour conférence annuelle.",
    category: "accueil"
  },
  {
    id: 9,
    imageSrc: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Accueil VIP",
    description: "Service d'accueil personnalisé pour clients importants.",
    category: "accueil"
  },
  {
    id: 10,
    imageSrc: "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Décoration mariage",
    description: "Décoration complète pour un mariage en extérieur.",
    category: "decoration"
  },
  {
    id: 11,
    imageSrc: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Événement d'entreprise",
    description: "Décoration pour soirée annuelle d'une entreprise.",
    category: "decoration"
  },
  {
    id: 12,
    imageSrc: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Décoration vitrine",
    description: "Conception et réalisation de vitrine saisonnière.",
    category: "decoration"
  }
];
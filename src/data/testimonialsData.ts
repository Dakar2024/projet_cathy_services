export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "L'équipe de Cathy'B-Service a transformé notre bureau. Le nettoyage était impeccable et leur professionnalisme remarquable. Je les recommande vivement !",
    author: "Marie Dupont",
    role: "Directrice Marketing, Entreprise XYZ"
  },
  {
    id: 2,
    quote: "Grâce à leur expertise immobilière, nous avons vendu notre appartement en un temps record. Un service complet et attentionné du début à la fin.",
    author: "Pierre Martin",
    role: "Propriétaire"
  },
  {
    id: 3,
    quote: "La décoration pour notre mariage était tout simplement parfaite. Ils ont su capturer exactement ce que nous voulions et ont dépassé nos attentes.",
    author: "Sophie et Thomas",
    role: "Jeunes mariés"
  },
  {
    id: 4,
    quote: "L'équipe d'accueil fournie pour notre conférence annuelle était exceptionnelle. Professionnels, attentionnés et toujours souriants.",
    author: "Jean Lefèvre",
    role: "Directeur d'événements, Société ABC"
  }
];
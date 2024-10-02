import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img3.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.png";
import type { StaticImageData } from "next/image";
type MainContent = {
  id: number;
  title: string;
  source: StaticImageData;
  author: string;
  description: string;
  nbrecommentaire: number;
};

export const mainContent: MainContent[] = [
  {
    id: 1,
    title: "Introduction à React",
    source: img1,
    author: "Dan Abramov",
    description: "Un guide complet pour commencer avec React.",
    nbrecommentaire: 10,
  },
  {
    id: 2,
    title: "Comprendre TypeScript",
    source: img2,
    author: "Anders Hejlsberg",
    description: "Apprenez les bases de TypeScript et ses avantages.",
    nbrecommentaire: 5,
  },
  {
    id: 3,
    title: "Next.js pour les débutants",
    source: img3,
    author: "Vercel Team",
    description:
      "Un aperçu des fonctionnalités de Next.js pour les nouveaux utilisateurs.",
    nbrecommentaire: 8,
  },
  {
    id: 4,
    title: "Styling avec Tailwind CSS",
    source: img4,
    author: "Adam Wathan",
    description:
      "Comment utiliser Tailwind CSS pour styliser vos applications.",
    nbrecommentaire: 15,
  },
  {
    id: 5,
    title: "Les bases de JavaScript",
    source: img5,
    author: "MDN Contributors",
    description: "Introduction au langage de programmation JavaScript.",
    nbrecommentaire: 20,
  },
  {
    id: 6,
    title: "React Hooks: Une introduction",
    source: img6,
    author: "Dan Abramov",
    description: "Comprendre les Hooks React et leur utilisation.",
    nbrecommentaire: 12,
  },
  {
    id: 7,
    title: "GraphQL vs REST",
    source: img7,
    author: "Lee Byron",
    description: "Comparaison des API GraphQL et REST.",
    nbrecommentaire: 18,
  },
  {
    id: 8,
    title: "Utilisation de Redux avec React",
    source: img8,
    author: "Facebook Team",
    description: "Gérer l'état de votre application avec Redux.",
    nbrecommentaire: 7,
  },
  {
    id: 9,
    title: "Guide sur les Promises en JavaScript",
    source: img9,
    author: "Ilya Kantor",
    description: "Comprendre les Promises et leur utilisation en JavaScript.",
    nbrecommentaire: 25,
  },
  {
    id: 10,
    title: "Développer des applications React Native",
    source: img2,
    author: "Facebook Team",
    description: "Créer des applications mobiles avec React Native.",
    nbrecommentaire: 11,
  },
  {
    id: 11,
    title: "SEO pour les applications Next.js",
    source: img6,
    author: "Guillermo Rauch",
    description:
      "Techniques pour améliorer le SEO de votre application Next.js.",
    nbrecommentaire: 9,
  },
  {
    id: 12,
    title: "Débogage des applications React",
    source: img1,
    author: "Dan Abramov",
    description:
      "Techniques de débogage efficaces pour les applications React.",
    nbrecommentaire: 14,
  },
  {
    id: 13,
    title: "Construire des API avec Node.js",
    source: img9,
    author: "Ryan Dahl",
    description: "Introduction à la création d'API avec Node.js.",
    nbrecommentaire: 16,
  },
];

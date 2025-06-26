export interface Game {
  id: number;
  title: string;
  genre: string;
  rating: number;
  releaseYear: number;
  players: string;
  image: string;
  description: string;
  price: string;
  tags: string[];
}


 export const games: Game[] = [
    {
      id: 1,
      title: "Cyberpunk Nexus",
      genre: "RPG/Action",
      rating: 4.8,
      releaseYear: 2024,
      players: "Single Player",
      image: "/images/G3.jpg",
      description: "Immerse yourself in a dystopian future where technology and humanity collide in spectacular fashion.",
      price: "$59.99",
      tags: ["Open World", "Sci-Fi", "Story Rich"]
    },
    {
      id: 2,
      title: "Mystic Realms",
      genre: "Fantasy/Adventure",
      rating: 4.6,
      releaseYear: 2023,
      players: "1-4 Players",
      image: "/images/G1.jpg",
      description: "Explore magical kingdoms filled with ancient mysteries, powerful spells, and legendary creatures.",
      price: "$49.99",
      tags: ["Magic", "Co-op", "Fantasy"]
    },
    {
      id: 3,
      title: "Stellar Conquest",
      genre: "Strategy/Simulation",
      rating: 4.7,
      releaseYear: 2024,
      players: "1-8 Players",
      image: "/images/G2.jpg",
      description: "Command vast fleets across the galaxy in this epic space strategy game with real-time combat.",
      price: "$39.99",
      tags: ["Space", "Strategy", "Multiplayer"]
    }
  ];

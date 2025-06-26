import React from 'react';
import Cards from './card';
import { games } from '@/consts/games';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';


const GameCards: React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br  p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4 ">
            Featured Games
          </h1>
          <p className="text-xl text-black">
            Discover your next gaming adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Cards key={game.id} game={game} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button >
            Explore More Games <MoveUpRight size={5}/>
          </Button>
        
        </div>
      </div>
    </div>
  );
};

export default GameCards;
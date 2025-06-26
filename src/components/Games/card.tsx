   import { Card, CardContent } from '@/components/ui/card';
   import { Badge } from '@/components/ui/badge';
   import { Star, Calendar, Users, Gamepad2 } from 'lucide-react';
   import {type Game } from '@/consts/games';
 

   const Cards: React.FC<{ game: Game }> = ({ game }) => {

    return (
      <Card 
              key={game.id} 
              className=" py-0 group relative overflow-hidden bg-black border-none transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    loading='lazy'
                    src={game.image}
                    alt={game.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{game.rating}/5</span>
                        <Badge variant="secondary" className="ml-auto bg-green-600 hover:bg-green-700">
                          {game.price}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-slate-200 mb-3 line-clamp-2">
                        {game.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {game.tags.map((tag, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs border-green-400 text-green-300 hover:bg-green-400 hover:text-white"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{game.releaseYear}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{game.players}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Genre Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm">
                      {game.genre}
                    </Badge>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-5 h-5 text-green-400" />
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {game.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-slate-300 text-sm">{game.rating}</span>
                    </div>
                    <span className="text-green-400 font-semibold">{game.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

export default Cards;
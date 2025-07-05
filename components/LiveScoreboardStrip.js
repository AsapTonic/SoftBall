'use client';

import { useState, useEffect, useRef } from 'react';

const LiveScoreboardStrip = () => {
  const scrollContainerRef = useRef(null);
  
  const [games, setGames] = useState([
    { 
      id: 1, 
      team1: { name: 'HUR', score: 4 }, 
      team2: { name: 'SHK', score: 3 }, 
      status: 'LIVE', 
      inning: '7th' 
    },
    { 
      id: 2, 
      team1: { name: 'STX', score: 8 }, 
      team2: { name: 'STJ', score: 2 }, 
      status: 'FINAL', 
      inning: 'Final' 
    },
    { 
      id: 3, 
      team1: { name: 'CVB', score: 1 }, 
      team2: { name: 'WSB', score: 5 }, 
      status: 'LIVE', 
      inning: '4th' 
    },
    { 
      id: 4, 
      team1: { name: 'EAG', score: 7 }, 
      team2: { name: 'TIG', score: 6 }, 
      status: 'FINAL', 
      inning: 'Final' 
    },
    { 
      id: 5, 
      team1: { name: 'LIO', score: 0 }, 
      team2: { name: 'PAN', score: 2 }, 
      status: '7:00 PM', 
      inning: 'Upcoming' 
    }
  ]);

  // Live score simulation for games with status 'LIVE'
  useEffect(() => {
    const interval = setInterval(() => {
      setGames(prevGames => 
        prevGames.map(game => {
          if (game.status === 'LIVE' && Math.random() < 0.3) {
            const updateTeam = Math.random() < 0.5 ? 'team1' : 'team2';
            return {
              ...game,
              [updateTeam]: {
                ...game[updateTeam],
                score: game[updateTeam].score + 1
              }
            };
          }
          return game;
        })
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'LIVE':
        return 'bg-red-100 text-red-800';
      case 'FINAL':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white border-t border-b border-purple-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right scroll button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable games container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {games.map((game) => (
              <div
                key={game.id}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm p-4 min-w-[280px] hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-800">{game.team1.name}</div>
                      <div className="text-2xl font-bold text-gray-900">{game.team1.score}</div>
                    </div>
                    <div className="text-gray-400 text-sm">vs</div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-800">{game.team2.name}</div>
                      <div className="text-2xl font-bold text-gray-900">{game.team2.score}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(game.status)}`}>
                      {game.status}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{game.inning}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScoreboardStrip;
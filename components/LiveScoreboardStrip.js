'use client';

import { useState, useEffect, useRef } from 'react';

const LiveScoreboardStrip = () => {
  const scrollContainerRef = useRef(null);
  
  const [games, setGames] = useState([
    { 
      id: 1, 
      team1: { name: 'HUR', color: 'bg-red-600', score: 4 }, 
      team2: { name: 'SHK', color: 'bg-blue-600', score: 3 }, 
      status: 'LIVE', 
      time: '7th Inning'
    },
    { 
      id: 2, 
      team1: { name: 'STX', color: 'bg-green-600', score: 8 }, 
      team2: { name: 'STJ', color: 'bg-purple-600', score: 2 }, 
      status: 'FINAL', 
      time: 'Final'
    },
    { 
      id: 3, 
      team1: { name: 'CVB', color: 'bg-orange-600', score: 1 }, 
      team2: { name: 'WSB', color: 'bg-gray-600', score: 5 }, 
      status: 'LIVE', 
      time: '4th Inning'
    },
    { 
      id: 4, 
      team1: { name: 'EAG', color: 'bg-yellow-600', score: 7 }, 
      team2: { name: 'TIG', color: 'bg-orange-500', score: 6 }, 
      status: 'FINAL', 
      time: 'Final'
    },
    { 
      id: 5, 
      team1: { name: 'LIO', color: 'bg-green-500', score: 0 }, 
      team2: { name: 'PAN', color: 'bg-purple-500', score: 2 }, 
      status: '7:00 PM', 
      time: 'Starting Soon'
    },
    { 
      id: 6, 
      team1: { name: 'PHX', color: 'bg-red-500', score: 3 }, 
      team2: { name: 'DRA', color: 'bg-indigo-600', score: 3 }, 
      status: 'LIVE', 
      time: '5th Inning'
    },
    { 
      id: 7, 
      team1: { name: 'THU', color: 'bg-blue-500', score: 12 }, 
      team2: { name: 'LIG', color: 'bg-yellow-500', score: 4 }, 
      status: 'FINAL', 
      time: 'Final'
    },
    { 
      id: 8, 
      team1: { name: 'WAV', color: 'bg-teal-600', score: 0 }, 
      team2: { name: 'RIP', color: 'bg-cyan-600', score: 0 }, 
      status: '8:30 PM', 
      time: 'Starting Soon'
    },
    { 
      id: 9, 
      team1: { name: 'HAW', color: 'bg-pink-600', score: 9 }, 
      team2: { name: 'STO', color: 'bg-slate-600', score: 1 }, 
      status: 'FINAL', 
      time: 'Final'
    },
    { 
      id: 10, 
      team1: { name: 'BAT', color: 'bg-amber-600', score: 2 }, 
      team2: { name: 'SPD', color: 'bg-emerald-600', score: 4 }, 
      status: 'LIVE', 
      time: '6th Inning'
    },
    { 
      id: 11, 
      team1: { name: 'FIR', color: 'bg-rose-600', score: 6 }, 
      team2: { name: 'ICE', color: 'bg-sky-600', score: 6 }, 
      status: 'LIVE', 
      time: '9th Inning'
    },
    { 
      id: 12, 
      team1: { name: 'BUL', color: 'bg-stone-600', score: 0 }, 
      team2: { name: 'VIP', color: 'bg-violet-600', score: 0 }, 
      status: '9:00 PM', 
      time: 'Starting Soon'
    },
    { 
      id: 13, 
      team1: { name: 'RAY', color: 'bg-lime-600', score: 11 }, 
      team2: { name: 'SUN', color: 'bg-yellow-400', score: 3 }, 
      status: 'FINAL', 
      time: 'Final'
    },
    { 
      id: 14, 
      team1: { name: 'WIN', color: 'bg-cyan-500', score: 5 }, 
      team2: { name: 'GAL', color: 'bg-fuchsia-600', score: 2 }, 
      status: 'LIVE', 
      time: '3rd Inning'
    },
    { 
      id: 15, 
      team1: { name: 'BLA', color: 'bg-gray-800', score: 1 }, 
      team2: { name: 'WHI', color: 'bg-gray-300', score: 8 }, 
      status: 'FINAL', 
      time: 'Final'
    },
    { 
      id: 16, 
      team1: { name: 'JET', color: 'bg-zinc-600', score: 0 }, 
      team2: { name: 'ROC', color: 'bg-orange-700', score: 0 }, 
      status: '9:30 PM', 
      time: 'Starting Soon'
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
    <div className="bg-white border-t border-b border-purple-200 py-0.5">
      <div className="w-full px-2">
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
            className="flex space-x-3 overflow-x-auto scrollbar-hide scroll-smooth px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {games.map((game) => (
              <div
                key={game.id}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm p-2 min-w-[150px] hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-1">
                  {/* Header - Time and Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{game.time}</span>
                    <div className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                      game.status === 'LIVE' ? 'bg-red-500 text-white' : 
                      game.status === 'FINAL' ? 'bg-gray-500 text-white' : 
                      'bg-yellow-500 text-black'
                    }`}>
                      {game.status === 'LIVE' ? 'Live' : game.status === 'FINAL' ? 'Final' : 'Soon'}
                    </div>
                  </div>
                  
                  {/* Team 1 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className={`w-3 h-3 rounded-full ${game.team1.color}`}></div>
                      <span className="text-xs font-semibold text-gray-800">{game.team1.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{game.team1.score}</span>
                  </div>
                  
                  {/* Team 2 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className={`w-3 h-3 rounded-full ${game.team2.color}`}></div>
                      <span className="text-xs font-semibold text-gray-800">{game.team2.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{game.team2.score}</span>
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
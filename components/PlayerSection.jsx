import React from 'react';

const PlayerSection = () => {
  const players = [
    {
      name: "Shohei Ohtani",
      team: "LA",
      teamColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aaron Judge", 
      team: "NY",
      teamColor: "bg-slate-800",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Juan Soto",
      team: "NY", 
      teamColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Bobby Witt Jr.",
      team: "KC",
      teamColor: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Bryce Harper",
      team: "P",
      teamColor: "bg-red-500",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Paul Skenes",
      team: "P",
      teamColor: "bg-yellow-500",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">
        Follow Players
      </h2>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        Stay updated on your favorite MLB players' performances, highlights, and stats.
      </p>
      
      <div className="space-y-3">
        {players.map((player, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div 
                className={`w-10 h-10 ${player.teamColor} rounded-full flex items-center justify-center overflow-hidden flex-shrink-0`}
              >
                <img 
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gray-200 items-center justify-center text-white font-bold text-xs">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-900 text-sm truncate">
                  {player.name}
                </h3>
                <p className="text-xs text-gray-500">{player.team}</p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded-md text-xs transition-colors duration-200 flex-shrink-0">
              Follow
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm inline-flex items-center group">
          View All Players
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PlayerSection;
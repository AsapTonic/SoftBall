"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // Mock data for games - Section A
  const [games, setGames] = useState([
    {
      id: 1,
      team1: "Hurricanes",
      team2: "Sharks",
      team1Score: 5,
      team2Score: 3,
      status: "LIVE",
      inning: "Top 4th",
      isLive: true,
    },
    {
      id: 2,
      team1: "Lightning",
      team2: "Eagles",
      team1Score: 0,
      team2Score: 0,
      status: "Upcoming",
      time: "7:00 PM",
      isLive: false,
    },
    {
      id: 3,
      team1: "Thunder",
      team2: "Panthers",
      team1Score: 8,
      team2Score: 6,
      status: "Final",
      inning: "Final",
      isLive: false,
    },
    {
      id: 4,
      team1: "Cyclones",
      team2: "Wolves",
      team1Score: 2,
      team2Score: 4,
      status: "LIVE",
      inning: "Bot 6th",
      isLive: true,
    },
    {
      id: 5,
      team1: "Cobras",
      team2: "Titans",
      team1Score: 0,
      team2Score: 0,
      status: "Upcoming",
      time: "8:30 PM",
      isLive: false,
    },
    {
      id: 6,
      team1: "Storm",
      team2: "Blazers",
      team1Score: 7,
      team2Score: 9,
      status: "Final",
      inning: "Final",
      isLive: false,
    },
    {
      id: 7,
      team1: "Pirates",
      team2: "Knights",
      team1Score: 3,
      team2Score: 1,
      status: "LIVE",
      inning: "Top 7th",
      isLive: true,
    },
    {
      id: 8,
      team1: "Warriors",
      team2: "Rangers",
      team1Score: 0,
      team2Score: 0,
      status: "Upcoming",
      time: "9:15 PM",
      isLive: false,
    },
    {
      id: 9,
      team1: "Dolphins",
      team2: "Marlins",
      team1Score: 4,
      team2Score: 2,
      status: "Final",
      inning: "Final",
      isLive: false,
    },
    {
      id: 10,
      team1: "Vipers",
      team2: "Raptors",
      team1Score: 6,
      team2Score: 6,
      status: "LIVE",
      inning: "Bot 9th",
      isLive: true,
    },
    {
      id: 11,
      team1: "Bulls",
      team2: "Lions",
      team1Score: 0,
      team2Score: 0,
      status: "Upcoming",
      time: "10:00 PM",
      isLive: false,
    },
    {
      id: 12,
      team1: "Phoenix",
      team2: "Falcons",
      team1Score: 12,
      team2Score: 8,
      status: "Final",
      inning: "Final",
      isLive: false,
    }
  ]);

  // Mock data for news headlines - Section B
  const headlines = [
    {
      id: 1,
      title: "Hurricanes Win Championship!",
      summary: "Local team takes home the trophy after thrilling playoff run",
    },
    {
      id: 2,
      title: "Player Spotlight: Randi Foy Dominates",
      summary: "Star pitcher leads league in strikeouts this season",
    },
    {
      id: 3,
      title: "Season Kicks Off Next Week",
      summary: "New season brings exciting matchups and fresh talent",
    },
    {
      id: 4,
      title: "Field Renovations Complete",
      summary: "Upgraded facilities ready for the upcoming season",
    },
  ];

  // Mock data for stats - Section C
  const battingLeaders = [
    { name: "Marcus Rodriguez", avg: ".387" },
    { name: "Sarah Johnson", avg: ".362" },
    { name: "David Thompson", avg: ".341" },
    { name: "Lisa Martinez", avg: ".329" },
    { name: "Kevin Williams", avg: ".318" },
  ];

  const pitchingLeaders = [
    { name: "Randi Foy", era: "1.42" },
    { name: "Michael Chang", era: "1.89" },
    { name: "Amanda Davis", era: "2.15" },
    { name: "Carlos Rivera", era: "2.43" },
    { name: "Jennifer Lee", era: "2.67" },
  ];

  const standings = [
    { team: "Hurricanes", wins: 18, losses: 4 },
    { team: "Lightning", wins: 16, losses: 6 },
    { team: "Eagles", wins: 14, losses: 8 },
    { team: "Thunder", wins: 12, losses: 10 },
    { team: "Panthers", wins: 10, losses: 12 },
  ];

  // Newsletter signup state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Live score simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGames((prevGames) =>
        prevGames.map((game) => {
          if (game.isLive) {
            // Randomly update scores for live games
            const shouldUpdate = Math.random() < 0.3; // 30% chance to update each interval
            if (shouldUpdate) {
              const updateTeam1 = Math.random() < 0.5;
              return {
                ...game,
                team1Score: updateTeam1 ? game.team1Score + 1 : game.team1Score,
                team2Score: !updateTeam1
                  ? game.team2Score + 1
                  : game.team2Score,
              };
            }
          }
          return game;
        })
      );
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-8">
          <div className="flex items-center py-3">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 mr-auto">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-800 font-bold text-sm">🥎</span>
              </div>
              <span className="text-lg font-bold hidden sm:block">USVI SOFTBALL</span>
            </div>

            {/* Main Navigation and Right Actions */}
            <div className="flex items-center space-x-8">
              {/* Main Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  SCORES
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  SCHEDULE
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  TEAMS
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  STANDINGS
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  STATS
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  NEWS
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  PLAYERS
                </a>
              </nav>

              {/* Right Actions */}
              <div className="flex items-center space-x-6">
                <a href="#" className="hidden md:block text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  WATCH
                </a>
                <a href="#" className="hidden md:block text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  TICKETS
                </a>
                <a href="#" className="hidden md:block text-sm font-medium hover:text-blue-200 transition-colors uppercase tracking-wide">
                  SHOP
                </a>
                
                {/* Search Icon */}
                <button className="p-2 hover:bg-blue-700 rounded transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                {/* Login */}
                <div className="flex items-center space-x-2">
                  <span className="hidden sm:block text-sm font-medium uppercase tracking-wide">LOG IN</span>
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2 hover:bg-blue-700 rounded transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Live & Upcoming Games Scoreboard */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                Softball
              </div>
              <span className="text-sm font-medium text-gray-800">July 4</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-3 pb-2">
            {games.map((game) => (
              <div
                key={game.id}
                className="flex-shrink-0 border border-gray-200 rounded-lg bg-white min-w-[160px] hover:shadow-md transition-shadow"
              >
                {/* Time/Status Header */}
                <div className="px-3 py-1 border-b border-gray-100 text-center">
                  <span className="text-xs text-gray-600 font-medium">
                    {game.isLive ? game.inning : game.status === "Final" ? "FINAL" : game.time}
                  </span>
                </div>
                
                {/* Teams and Scores */}
                <div className="px-3 py-2">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {game.team1.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-800 truncate">
                        {game.team1.length > 8 ? game.team1.substring(0, 3).toUpperCase() : game.team1.substring(0, 8)}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-gray-900 ml-2">
                      {game.team1Score}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {game.team2.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-800 truncate">
                        {game.team2.length > 8 ? game.team2.substring(0, 3).toUpperCase() : game.team2.substring(0, 8)}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-gray-900 ml-2">
                      {game.team2Score}
                    </span>
                  </div>
                </div>
                
                {/* Live Indicator */}
                {game.isLive && (
                  <div className="px-3 pb-2">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                      <span className="text-xs text-red-600 font-medium">LIVE</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full opacity-15"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full opacity-25"></div>
          <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-white rounded-full opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-8 text-center relative z-10">
          {/* Tournament Logo */}
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-b from-teal-400 to-teal-600 rounded-full p-1">
              <div className="bg-blue-900 rounded-full px-8 py-6">
                <div className="text-white">
                  <div className="text-xs font-bold tracking-wider mb-1">USVI SOFTBALL</div>
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <span className="text-red-400">⭐</span>
                    <span className="text-lg font-bold">🥎</span>
                    <span className="text-red-400">⭐</span>
                  </div>
                  <div className="text-sm font-bold text-teal-400">CHAMPIONSHIP</div>
                  <div className="text-xl font-bold">2025</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            CHAMPIONSHIP GAMES SET FOR THE 2025
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
              USVI SOFTBALL LEAGUE
            </span>
          </h1>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg border-2 border-blue-700 transition-all duration-200 transform hover:scale-105">
              LEAGUE SCHEDULE →
            </button>
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg border-2 border-blue-700 transition-all duration-200 transform hover:scale-105">
              STANDINGS →
            </button>
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg border-2 border-blue-700 transition-all duration-200 transform hover:scale-105">
              ALL GAMES →
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Live Video Section */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Live Game Stream</h2>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-red-600 font-medium text-sm">LIVE</span>
                </div>
              </div>
              
              {/* Check if there are any live games */}
              {games.some(game => game.isLive) ? (
                <div className="space-y-4">
                  {/* Video Player */}
                  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg bg-gray-900">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0&modestbranding=1"
                      title="Live Game Stream"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Game Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {games.find(game => game.isLive)?.team1} vs {games.find(game => game.isLive)?.team2}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {games.find(game => game.isLive)?.inning}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex space-x-4">
                          <div className="text-center">
                            <div className="font-bold text-2xl text-blue-600">
                              {games.find(game => game.isLive)?.team1Score}
                            </div>
                            <div className="text-xs text-gray-600">
                              {games.find(game => game.isLive)?.team1}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-2xl text-blue-600">
                              {games.find(game => game.isLive)?.team2Score}
                            </div>
                            <div className="text-xs text-gray-600">
                              {games.find(game => game.isLive)?.team2}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stream Controls */}
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span>🎥 HD Quality</span>
                      <span>👥 2,847 viewers</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Full Screen
                      </button>
                      <button className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📺</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Live Games</h3>
                  <p className="text-gray-600">Check back later for live game streams!</p>
                </div>
              )}
            </section>

            {/* Player Stats Section */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Featured Players</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Players →
                </button>
              </div>
              
              <div className="flex overflow-x-auto space-x-4 pb-2">
                {[
                  { name: "Marcus Rodriguez", team: "Hurricanes", position: "P", avg: ".387", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=150&h=150&fit=crop&crop=face" },
                  { name: "Sarah Johnson", team: "Lightning", position: "C", avg: ".362", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
                  { name: "David Thompson", team: "Eagles", position: "1B", avg: ".341", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
                  { name: "Lisa Martinez", team: "Thunder", position: "SS", avg: ".329", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
                  { name: "Kevin Williams", team: "Panthers", position: "OF", avg: ".318", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
                  { name: "Randi Foy", team: "Hurricanes", position: "P", era: "1.42", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
                  { name: "Michael Chang", team: "Lightning", position: "P", era: "1.89", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
                  { name: "Amanda Davis", team: "Eagles", position: "P", era: "2.15", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
                  { name: "Carlos Rivera", team: "Thunder", position: "P", era: "2.43", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" }
                ].map((player, index) => (
                  <div key={index} className="flex-shrink-0 text-center bg-gray-50 rounded-lg p-4 min-w-[140px] hover:bg-gray-100 transition-colors">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 border-2 border-blue-200">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=3b82f6&color=fff&size=64`;
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1 leading-tight">
                      {player.name.split(' ')[0]}<br />{player.name.split(' ')[1]}
                    </h3>
                    <div className="text-xs text-gray-600 mb-2">
                      {player.team} • {player.position}
                    </div>
                    <div className="text-xs font-bold text-blue-600 mb-3">
                      {player.avg ? `AVG ${player.avg}` : `ERA ${player.era}`}
                    </div>
                    <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  See More Players
                </button>
              </div>
            </section>

            {/* Section B: Latest Headlines */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Latest Headlines
              </h2>
              <div className="space-y-4">
                {headlines.map((headline) => (
                  <article
                    key={headline.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      <a
                        href="#"
                        className="text-blue-800 hover:text-blue-600 transition-colors"
                      >
                        {headline.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm">{headline.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Section C: Key Stats */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold mb-6 text-gray-800">
                League Leaders
              </h2>

              {/* Batting Leaders */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  Batting Average
                </h3>
                <div className="space-y-2">
                  {battingLeaders.map((player, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="font-medium">{player.name}</span>
                      <span className="text-orange-600 font-bold">
                        {player.avg}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitching Leaders */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  Earned Run Average
                </h3>
                <div className="space-y-2">
                  {pitchingLeaders.map((player, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="font-medium">{player.name}</span>
                      <span className="text-orange-600 font-bold">
                        {player.era}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Standings */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  Quick Standings
                </h3>
                <div className="space-y-2">
                  {standings.map((team, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="font-medium">{team.team}</span>
                      <span className="text-gray-600">
                        {team.wins}-{team.losses}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section D: Newsletter Signup */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Stay Updated!
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Get the latest news, scores, and updates from the USVI Softball
                League delivered to your inbox.
              </p>

              {subscribed ? (
                <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
                  <p className="text-green-700 font-medium">
                    Thank you for subscribing!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 USVI Softball League. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

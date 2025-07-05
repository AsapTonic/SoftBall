"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import LiveScoreboardStrip from "../components/LiveScoreboardStrip";

export default function Home() {
  const [liveGames, setLiveGames] = useState([
    { id: 1, team1: { name: 'Hurricanes', score: 7 }, team2: { name: 'Sharks', score: 5 }, status: 'LIVE', inning: '8th' },
    { id: 2, team1: { name: 'Eagles', score: 3 }, team2: { name: 'Tigers', score: 9 }, status: 'LIVE', inning: '6th' },
    { id: 3, team1: { name: 'Lions', score: 2 }, team2: { name: 'Panthers', score: 1 }, status: 'FINAL', inning: 'Final' },
    { id: 4, team1: { name: 'Cobras', score: 0 }, team2: { name: 'Wolves', score: 0 }, status: '8:00 PM', inning: 'Tonight' }
  ]);

  const [currentTeamFilter, setCurrentTeamFilter] = useState('All');

  // Live score updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveGames(prevGames => 
        prevGames.map(game => {
          if (game.status === 'LIVE' && Math.random() < 0.4) {
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
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const mockTeams = [
    { name: 'Hurricanes', division: 'Men\'s', color: 'bg-red-500' },
    { name: 'Sharks', division: 'Men\'s', color: 'bg-blue-500' },
    { name: 'Eagles', division: 'Women\'s', color: 'bg-yellow-500' },
    { name: 'Tigers', division: 'Women\'s', color: 'bg-orange-500' },
    { name: 'Lions', division: 'Youth', color: 'bg-green-500' },
    { name: 'Panthers', division: 'Youth', color: 'bg-purple-500' }
  ];

  const mockNews = [
    { title: 'Championship Finals Set for August 15th', time: '2 hours ago', image: '📺' },
    { title: 'Player Spotlight: Maria Rodriguez', time: '5 hours ago', image: '⭐' },
    { title: 'New Season Registration Opens', time: '1 day ago', image: '📝' },
    { title: 'Hurricane Game Postponed Due to Weather', time: '2 days ago', image: '🌧️' },
    { title: 'Youth League Tournament Results', time: '3 days ago', image: '🏆' }
  ];

  const upcomingEvents = [
    { date: 'Aug 12', time: '6:00 PM', event: 'Hurricanes vs Sharks', venue: 'Central Field' },
    { date: 'Aug 13', time: '7:30 PM', event: 'Eagles vs Tigers', venue: 'North Park' },
    { date: 'Aug 14', time: '5:00 PM', event: 'Lions vs Panthers', venue: 'South Field' },
    { date: 'Aug 15', time: '8:00 PM', event: 'Championship Finals', venue: 'Main Stadium' }
  ];

  return (
    <div>
      <Navbar />
      <LiveScoreboardStrip />

      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('glove.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Built for the Game.
                <span className="block text-green-400">
                  Built for Our Islands.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                The official hub for scores, news, and league action across the
                Virgin Islands.
              </p>

              <Link
                href="/apply"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105"
              >
                Apply Now
              </Link>
            </div>

            <div className="hidden lg:flex justify-end items-center">
              <div className="text-right">
                <div className="text-6xl font-bold text-white/20 mb-4">🥎</div>
                <div className="text-3xl font-bold text-white/30 tracking-wider">USVI</div>
                <div className="text-2xl font-bold text-white/30 tracking-wider">SOFTBALL</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600"></div>
      </section>

      {/* Main Content Grid */}
      <main className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Live & Upcoming Games */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">⚾ Live & Upcoming Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {liveGames.map((game) => (
                    <div key={game.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-center">
                            <div className="text-sm font-bold text-gray-800">{game.team1.name}</div>
                            <div className="text-xl font-bold text-gray-900">{game.team1.score}</div>
                          </div>
                          <div className="text-gray-400 text-sm">vs</div>
                          <div className="text-center">
                            <div className="text-sm font-bold text-gray-800">{game.team2.name}</div>
                            <div className="text-xl font-bold text-gray-900">{game.team2.score}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            game.status === 'LIVE' ? 'bg-red-100 text-red-800' : 
                            game.status === 'FINAL' ? 'bg-gray-100 text-gray-800' : 
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {game.status}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{game.inning}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Upcoming Events */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🗓️ Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-bold text-green-600">{event.date}</div>
                          <div className="text-xs text-gray-500">{event.time}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{event.event}</div>
                          <div className="text-sm text-gray-600">{event.venue}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/schedule" className="text-green-600 hover:text-green-700 font-semibold">
                    View Full Schedule →
                  </Link>
                </div>
              </section>

              {/* Team Highlights */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🥎 Team Spotlight</h2>
                <div className="flex space-x-4 mb-6">
                  {['All', 'Men\'s', 'Women\'s', 'Youth'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setCurrentTeamFilter(filter)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentTeamFilter === filter 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mockTeams
                    .filter(team => currentTeamFilter === 'All' || team.division === currentTeamFilter)
                    .map((team, index) => (
                    <Link key={index} href={`/teams/${team.name.toLowerCase()}`} className="block">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center">
                        <div className={`w-12 h-12 ${team.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold`}>
                          {team.name.charAt(0)}
                        </div>
                        <div className="font-semibold text-gray-800">{team.name}</div>
                        <div className="text-sm text-gray-600">{team.division}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Social Media & Gallery */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">📸 Social & Media</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Latest Post</h3>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm text-gray-600">
                        "Amazing game tonight! Hurricanes pull ahead in the 9th inning! 🥎⚡"
                      </p>
                      <div className="text-xs text-gray-500 mt-2">@USVISoftball • 2 hours ago</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Recent Photos</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((photo) => (
                        <div key={photo} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors cursor-pointer">
                          📷
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              
              {/* Latest Headlines */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">📰 Latest Headlines</h2>
                <div className="space-y-4">
                  {mockNews.map((article, index) => (
                    <Link key={index} href={`/news/${index + 1}`} className="block">
                      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="text-2xl">{article.image}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-sm leading-tight">{article.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">{article.time}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Quick Stats */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">🏆 Quick Stats</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Teams Playing:</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Games This Week:</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Season Games:</span>
                    <span className="font-semibold">144</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Championship:</span>
                    <span className="font-semibold text-green-600">Aug 15</span>
                  </div>
                </div>
              </section>

              {/* National Team Applications */}
              <section className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
                <h2 className="text-xl font-bold mb-4">🚀 National Team Tryouts!</h2>
                <p className="text-sm mb-4">
                  Ready to represent the Virgin Islands? Apply now for national team tryouts!
                </p>
                <div className="text-sm mb-4">
                  <span className="font-semibold">Deadline: Aug 31st</span>
                </div>
                <Link 
                  href="/apply" 
                  className="inline-block bg-white text-green-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </Link>
              </section>

              {/* About the League */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">👋 About the League</h2>
                <p className="text-gray-600 text-sm mb-4">
                  The USVI Softball League brings together the best amateur talent across St. Thomas, St. John, and St. Croix. Founded in 1985, we're committed to promoting athletic excellence and island pride.
                </p>
                <Link href="/about" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Sponsors Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">🤝 Our Valued Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((sponsor) => (
              <div key={sponsor} className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl text-gray-400 mb-2">🏢</div>
                <div className="text-sm font-semibold text-gray-600">Partner {sponsor}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/sponsorship" className="text-green-600 hover:text-green-700 font-semibold">
              Become a Sponsor →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">🥎 USVI Softball</h3>
              <p className="text-gray-400 text-sm">
                Building champions and community across the Virgin Islands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/teams" className="text-gray-400 hover:text-white">Teams</Link></li>
                <li><Link href="/schedule" className="text-gray-400 hover:text-white">Schedule</Link></li>
                <li><Link href="/apply" className="text-gray-400 hover:text-white">Apply</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div>📧 info@usvisoftball.com</div>
                <div>📞 (340) 555-0123</div>
                <div>📍 Charlotte Amalie, USVI</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">📘</Link>
                <Link href="#" className="text-gray-400 hover:text-white">📸</Link>
                <Link href="#" className="text-gray-400 hover:text-white">🎥</Link>
              </div>
              <div className="mt-4">
                <input 
                  type="email" 
                  placeholder="Newsletter signup" 
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md text-sm"
                />
                <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 USVI Softball League. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

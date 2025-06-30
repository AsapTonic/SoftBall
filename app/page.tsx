"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  // Mock game data - includes live games that will update scores
  const [games, setGames] = useState([
    {
      id: 1,
      team1: "Hurricanes",
      team2: "Sharks",
      score1: 5,
      score2: 3,
      status: "LIVE",
      inning: "Top 4th",
      isLive: true,
    },
    {
      id: 2,
      team1: "Dolphins",
      team2: "Marlins",
      score1: 8,
      score2: 6,
      status: "Final",
      inning: "",
      isLive: false,
    },
    {
      id: 3,
      team1: "Pirates",
      team2: "Thunder",
      score1: 0,
      score2: 0,
      status: "Upcoming",
      inning: "7:00 PM",
      isLive: false,
    },
    {
      id: 4,
      team1: "Lightning",
      team2: "Storm",
      score1: 2,
      score2: 4,
      status: "LIVE",
      inning: "Bot 6th",
      isLive: true,
    },
    {
      id: 5,
      team1: "Eagles",
      team2: "Panthers",
      score1: 0,
      score2: 0,
      status: "Upcoming",
      inning: "8:30 PM",
      isLive: false,
    },
  ]);

  // Mock news headlines
  const headlines = [
    {
      id: 1,
      title: "Hurricanes Win Championship in Thrilling Extra Innings!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Player Spotlight: Randi Foy Dominates Season Stats",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "New Season Kicks Off Next Week - Teams Ready",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "Island Teams Prepare for Championship Playoffs",
      time: "2 days ago",
    },
    {
      id: 5,
      title: "Youth League Expansion Announced for 2025",
      time: "3 days ago",
    },
  ];

  // Mock video data for streams and highlights
  const videos = [
    {
      id: 1,
      title: "LIVE: Hurricanes vs. Sharks - Championship Game",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      isLive: true,
    },
    {
      id: 2,
      title: "Game Highlights - Lightning vs. Storm",
      videoId: "jNQXAC9IVRw", // Placeholder YouTube video ID
      isLive: false,
    },
    {
      id: 3,
      title: "Player Interview - MVP Season Recap",
      videoId: "kffacxfA7G4", // Placeholder YouTube video ID
      isLive: false,
    },
    {
      id: 4,
      title: "Best Plays of the Week - Top 5 Moments",
      videoId: "M7lc1UVf-VE", // Placeholder YouTube video ID
      isLive: false,
    },
    {
      id: 5,
      title: "Season Finale Preview - Championship Bound",
      videoId: "ZbZSe6N_BXs", // Placeholder YouTube video ID
      isLive: false,
    },
  ];

  // Carousel state for video section
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Live score simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGames((prevGames) =>
        prevGames.map((game) => {
          // Only update live games
          if (!game.isLive) return game;

          // Randomly decide if score should change (30% chance)
          if (Math.random() < 0.3) {
            const scoreIncrease = Math.random() < 0.5 ? "score1" : "score2";
            const innings = [
              "Top 1st",
              "Bot 1st",
              "Top 2nd",
              "Bot 2nd",
              "Top 3rd",
              "Bot 3rd",
              "Top 4th",
              "Bot 4th",
              "Top 5th",
              "Bot 5th",
              "Top 6th",
              "Bot 6th",
              "Top 7th",
              "Bot 7th",
            ];

            return {
              ...game,
              [scoreIncrease]: game[scoreIncrease] + 1,
              inning: innings[Math.floor(Math.random() * innings.length)],
            };
          }
          return game;
        })
      );
    }, 4000); // Update every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>USVI Softball League - Home</title>
        <meta
          name="description"
          content="Official homepage of the US Virgin Islands Softball League"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
                🥎 USVI Softball League
              </h1>
              <nav className="flex flex-wrap gap-6">
                <a
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Schedule
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Standings
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  News
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Teams
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Shop
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Live & Upcoming Games (Takes 2/3 width on desktop) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Live & Upcoming Games
                  </h2>
                </div>

                <div className="space-y-4">
                  {games.map((game) => (
                    <div
                      key={game.id}
                      className={`border rounded-lg p-4 transition-all duration-300 ${
                        game.isLive
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        {/* Teams and Scores */}
                        <div className="flex-1 mb-3 sm:mb-0">
                          <div className="flex items-center justify-between sm:justify-start sm:space-x-8">
                            <div className="text-right sm:text-left">
                              <div className="font-semibold text-gray-800">
                                {game.team1}
                              </div>
                              <div className="text-2xl font-bold text-blue-600">
                                {game.score1}
                              </div>
                            </div>
                            <div className="text-gray-500 font-medium mx-4">
                              VS
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-gray-800">
                                {game.team2}
                              </div>
                              <div className="text-2xl font-bold text-blue-600">
                                {game.score2}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Game Status */}
                        <div className="text-center sm:text-right">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              game.status === "LIVE"
                                ? "bg-red-100 text-red-800"
                                : game.status === "Final"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {game.status === "LIVE" && (
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            )}
                            {game.status}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {game.inning}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Game Streams & Highlights Section */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    🎥 Live Game Streams & Highlights
                  </h2>
                </div>

                {/* Video Carousel Container */}
                <div className="relative">
                  {/* Main Video Display */}
                  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg bg-gray-100 mb-4">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videos[currentVideoIndex].videoId}?rel=0&modestbranding=1`}
                      title={videos[currentVideoIndex].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Title and Live Indicator */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 text-lg leading-tight">
                      {videos[currentVideoIndex].title}
                    </h3>
                    {videos[currentVideoIndex].isLive && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 ml-2 flex-shrink-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </span>
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() =>
                        setCurrentVideoIndex((prev) =>
                          prev > 0 ? prev - 1 : videos.length - 1
                        )
                      }
                      className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-md"
                      aria-label="Previous video"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <div className="text-sm text-gray-600 font-medium">
                      {currentVideoIndex + 1} of {videos.length}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentVideoIndex((prev) =>
                          prev < videos.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-md"
                      aria-label="Next video"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentVideoIndex
                            ? "bg-blue-600"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to video ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Horizontal Scrollable Thumbnail Strip */}
                  <div className="overflow-x-auto scroll-smooth">
                    <div className="flex space-x-3 pb-2">
                      {videos.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => setCurrentVideoIndex(index)}
                          className={`flex-shrink-0 w-32 p-2 rounded-lg border-2 transition-all duration-200 ${
                            index === currentVideoIndex
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded bg-gray-100 mb-2">
                            <img
                              className="absolute top-0 left-0 w-full h-full object-cover"
                              src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                              alt={video.title}
                            />
                            {video.isLive && (
                              <div className="absolute top-1 right-1">
                                <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-red-600 text-white">
                                  <div className="w-1 h-1 bg-white rounded-full mr-1 animate-pulse"></div>
                                  LIVE
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-700 leading-tight line-clamp-2">
                            {video.title}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    View All Videos & Streams →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Latest Headlines (Takes 1/3 width on desktop) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  📰 Latest Headlines
                </h2>

                <div className="space-y-4">
                  {headlines.map((headline, index) => (
                    <article
                      key={headline.id}
                      className={`${
                        index !== headlines.length - 1
                          ? "border-b border-gray-200 pb-4"
                          : ""
                      }`}
                    >
                      <a
                        href="#"
                        className="block hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                      >
                        <h3 className="font-semibold text-gray-800 hover:text-blue-600 leading-tight mb-2">
                          {headline.title}
                        </h3>
                        <p className="text-sm text-gray-500">{headline.time}</p>
                      </a>
                    </article>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    View All News →
                  </a>
                </div>
              </div>

              {/* Additional Sidebar Content - Quick Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🏆 Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Teams Playing</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Games This Week</span>
                    <span className="font-bold text-blue-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Season Games</span>
                    <span className="font-bold text-blue-600">144</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Championship</span>
                    <span className="font-bold text-yellow-600">Aug 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-300">
                © 2025 USVI Softball League. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Bringing the best of softball to the beautiful US Virgin Islands
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

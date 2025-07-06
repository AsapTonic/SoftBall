"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import LiveScoreboardStrip from "../components/LiveScoreboardStrip";

export default function Home() {
  const [liveGames, setLiveGames] = useState([
    {
      id: 1,
      team1: { name: "Hurricanes", score: 7 },
      team2: { name: "Sharks", score: 5 },
      status: "LIVE",
      inning: "8th",
    },
    {
      id: 2,
      team1: { name: "Eagles", score: 3 },
      team2: { name: "Tigers", score: 9 },
      status: "LIVE",
      inning: "6th",
    },
    {
      id: 3,
      team1: { name: "Lions", score: 2 },
      team2: { name: "Panthers", score: 1 },
      status: "FINAL",
      inning: "Final",
    },
    {
      id: 4,
      team1: { name: "Cobras", score: 0 },
      team2: { name: "Wolves", score: 0 },
      status: "8:00 PM",
      inning: "Tonight",
    },
  ]);

  const [currentTeamFilter, setCurrentTeamFilter] = useState("All");
  const [currentVideo, setCurrentVideo] = useState(0);

  // Live score updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveGames((prevGames) =>
        prevGames.map((game) => {
          if (game.status === "LIVE" && Math.random() < 0.4) {
            const updateTeam = Math.random() < 0.5 ? "team1" : "team2";
            return {
              ...game,
              [updateTeam]: {
                ...game[updateTeam],
                score: game[updateTeam].score + 1,
              },
            };
          }
          return game;
        })
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const mockTeams = [
    { name: "Hurricanes", division: "Men's", color: "bg-red-500" },
    { name: "Sharks", division: "Men's", color: "bg-blue-500" },
    { name: "Eagles", division: "Women's", color: "bg-yellow-500" },
    { name: "Tigers", division: "Women's", color: "bg-orange-500" },
    { name: "Lions", division: "Youth", color: "bg-green-500" },
    { name: "Panthers", division: "Youth", color: "bg-purple-500" },
  ];

  const mockNews = [
    {
      title: "Championship Finals Set for August 15th",
      time: "2 hours ago",
      image: "News",
    },
    {
      title: "Player Spotlight: Maria Rodriguez",
      time: "5 hours ago",
      image: "News",
    },
    {
      title: "New Season Registration Opens",
      time: "1 day ago",
      image: "News",
    },
    {
      title: "Hurricane Game Postponed Due to Weather",
      time: "2 days ago",
      image: "News",
    },
    {
      title: "Youth League Tournament Results",
      time: "3 days ago",
      image: "News",
    },
  ];

  const upcomingEvents = [
    {
      date: "Aug 12",
      time: "6:00 PM",
      event: "Hurricanes vs Sharks",
      venue: "Central Field",
    },
    {
      date: "Aug 13",
      time: "7:30 PM",
      event: "Eagles vs Tigers",
      venue: "North Park",
    },
    {
      date: "Aug 14",
      time: "5:00 PM",
      event: "Lions vs Panthers",
      venue: "South Field",
    },
    {
      date: "Aug 15",
      time: "8:00 PM",
      event: "Championship Finals",
      venue: "Main Stadium",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Hurricanes vs Sharks - LIVE",
      isLive: true,
      duration: "Live Now",
    },
    {
      id: 2,
      title: "Best Catches of the Season",
      isLive: false,
      duration: "3:45",
    },
    {
      id: 3,
      title: "Championship Highlights",
      isLive: false,
      duration: "5:22",
    },
    { id: 4, title: "Player Interviews", isLive: false, duration: "8:15" },
    { id: 5, title: "Training Camp Footage", isLive: false, duration: "4:30" },
  ];

  return (
    <div>
      <Navbar />
      <LiveScoreboardStrip />

      {/* Hero Section - IMPROVEMENTS: Text hierarchy, button styling, responsiveness */}
      <section className="relative bg-gray-900 overflow-hidden h-screen flex items-center justify-center">
        {" "}
        {/* Added flex utilities for vertical centering */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('glove.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Increased overlay opacity for better text contrast */}
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          {" "}
          {/* Added py-12 for better vertical padding on smaller screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center lg:text-left">
              {" "}
              {/* Centered text for smaller screens */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up">
                {" "}
                {/* Increased font size, added font-extrabold, mb-4, and animation */}
                Built for the Game.
                <span className="block text-yellow-400">
                  Built for Our Islands.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
                {" "}
                {/* Adjusted font size, max-width for better readability, added animation */}
                The official hub for scores, news, and league action across the
                Virgin Islands. We connect players, fans, and teams, fostering
                passion and pride in every game.
              </p>
              <div className="flex justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
                {" "}
                {/* Added flex for multiple buttons, gap, and animation */}
                <Link
                  href="/apply"
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" // Changed to rounded-full, adjusted padding, added shadow-lg
                >
                  Apply Now
                </Link>
                <Link
                  href="/schedule"
                  className="inline-block border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" // Added a secondary button for schedule
                >
                  View Schedule
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end items-center">
              <div className="text-right mr-[-150px]">
                <img
                  src="/ChatGPT.png" // Consider replacing with a transparent PNG of a more relevant softball graphic
                  alt="USVI Softball League Logo"
                  className="w-[600px] h-[600px] object-contain opacity-90 animate-fade-in-up delay-300" // Added animation
                  style={{ background: "none", backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-600"></div>{" "}
        {/* Changed accent color to yellow */}
      </section>

      {/* Main Content Grid */}
      <main className="bg-gray-100 py-12">
        {" "}
        {/* Changed bg-gray-50 to bg-gray-100, increased vertical padding */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Live & Upcoming Games - IMPROVEMENTS: Card styling, visual clarity */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Changed rounded-lg to rounded-xl, shadow-md to shadow-lg */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-3 border-yellow-400">
                  {" "}
                  {/* Increased font size, added bottom border for separation */}
                  Live & Upcoming Games
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {" "}
                  {/* Increased gap */}
                  {liveGames.map((game) => (
                    <div
                      key={game.id}
                      className="border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 bg-white card-hover" // Enhanced border, increased padding, added flexbox, improved hover
                    >
                      <div className="flex items-center justify-between mb-4">
                        {" "}
                        {/* Increased mb */}
                        <div className="flex items-center space-x-4">
                          {" "}
                          {/* Increased space-x */}
                          <div className="text-center">
                            <div className="text-base font-bold text-gray-800">
                              {game.team1.name}
                            </div>
                            <div className="text-3xl font-extrabold text-slate-900">
                              {" "}
                              {/* Increased score font size and weight */}
                              {game.team1.score}
                            </div>
                          </div>
                          <div className="text-gray-400 text-base font-semibold">
                            vs
                          </div>{" "}
                          {/* Adjusted size and weight */}
                          <div className="text-center">
                            <div className="text-base font-bold text-gray-800">
                              {game.team2.name}
                            </div>
                            <div className="text-3xl font-extrabold text-slate-900">
                              {" "}
                              {/* Increased score font size and weight */}
                              {game.team2.score}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                              /* Adjusted padding, added uppercase and tracking */
                              game.status === "LIVE"
                                ? "bg-red-600 text-white animate-pulse" // Stronger red for LIVE, added pulse animation
                                : game.status === "FINAL"
                                ? "bg-gray-200 text-gray-700" // Subtle gray for FINAL
                                : "bg-blue-600 text-white" // Stronger blue for upcoming
                            }`}
                          >
                            {game.status}
                          </div>
                          <div className="text-sm text-gray-500 mt-2">
                            {" "}
                            {/* Increased mt */}
                            {game.inning}
                          </div>
                        </div>
                      </div>
                      {/* Optional: Add a "View Details" button for each game */}
                      <Link
                        href={`/game/${game.id}`}
                        className="mt-4 text-center text-yellow-600 hover:text-yellow-700 font-semibold text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* Live Game Streams & Highlights - IMPROVEMENTS: Video player visual, thumbnail interaction */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling with other sections */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-3 border-yellow-400">
                  Live Game Streams & Highlights
                </h2>
                <div className="space-y-6">
                  {" "}
                  {/* Increased space-y */}
                  {/* Main Video Player */}
                  <div className="relative bg-gray-900 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                    {/* Placeholder for video player - you'd replace this with an actual video embed */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                      <span className="text-gray-400 text-xl md:text-3xl font-semibold">
                        Video Player Placeholder
                      </span>
                    </div>

                    {videos[currentVideo]?.isLive && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse z-20">
                        LIVE
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-base font-medium z-20">
                      {videos[currentVideo]?.title}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs z-20">
                      {videos[currentVideo]?.duration}
                    </div>
                  </div>
                  {/* Video Thumbnails */}
                  <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    {" "}
                    {/* Added custom scrollbar classes (requires tailwind-scrollbar plugin or custom CSS) */}
                    {videos.map((video, index) => (
                      <div
                        key={video.id}
                        onClick={() => setCurrentVideo(index)}
                        className={`relative flex-shrink-0 w-32 h-20 bg-gray-200 rounded-lg cursor-pointer flex items-center justify-center text-lg border-2 transition-all duration-200 hover:scale-105 ${
                          currentVideo === index
                            ? "border-yellow-600 shadow-md" // Highlight active video with yellow
                            : "border-transparent hover:border-gray-300"
                        }`}
                      >
                        <div className="text-xs text-gray-500">Thumbnail</div>{" "}
                        {/* Changed "Video" to "Thumbnail" */}
                        {video.isLive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                        )}
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Video Navigation (Dots) */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          currentVideo === index
                            ? "bg-yellow-600" // Active dot color changed to yellow
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Upcoming Events - IMPROVEMENTS: Color scheme, clarity */}
              <section className="bg-slate-900 rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling */}
                <h2 className="text-3xl font-bold text-yellow-400 mb-6 border-b-2 pb-3 border-yellow-600">
                  {" "}
                  {/* Adjusted color, added border */}
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-slate-800 transition-colors" // Adjusted border and hover bg color
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-center flex-shrink-0">
                          <div className="text-sm font-bold text-yellow-400">
                            {" "}
                            {/* Adjusted color */}
                            {event.date}
                          </div>
                          <div className="text-xs text-gray-400">
                            {" "}
                            {/* Adjusted color */}
                            {event.time}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-white text-lg">
                            {" "}
                            {/* Increased text size and changed to white */}
                            {event.event}
                          </div>
                          <div className="text-sm text-gray-400">
                            {" "}
                            {/* Adjusted color */}
                            {event.venue}
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/schedule"
                        className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex-shrink-0"
                      >
                        {" "}
                        {/* Added a link per event */}
                        Details →
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  {" "}
                  {/* Increased mt */}
                  <Link
                    href="/schedule"
                    className="text-yellow-400 hover:text-yellow-300 font-bold text-lg inline-flex items-center group" // Adjusted color, added inline-flex and group for arrow animation
                  >
                    View Full Schedule
                    <svg
                      className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </section>

              {/* Social Media & Gallery - IMPROVEMENTS: Visuals, call to action */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-3 border-yellow-400">
                  Social & Media
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {" "}
                  {/* Increased gap */}
                  <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow card-hover">
                    {" "}
                    {/* Consistent border, padding, hover */}
                    <h3 className="font-semibold text-gray-800 mb-4 text-xl">
                      {" "}
                      {/* Increased font size */}
                      Latest Post
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
                      {" "}
                      {/* Subtle background and border */}
                      <div className="text-xs text-gray-500 mb-2 font-medium">
                        SOCIAL MEDIA UPDATE
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed italic">
                        {" "}
                        {/* Increased font size, added italic */}
                        &quot;Amazing game tonight! Hurricanes pull ahead in the
                        9th inning! 🥎⚡ Follow us for live updates!&quot;
                      </p>
                      <div className="text-xs text-gray-500 mt-3 font-semibold">
                        @USVISoftball • 2 hours ago
                      </div>
                      <Link
                        href="#"
                        className="mt-4 inline-block text-yellow-600 hover:text-yellow-700 font-semibold text-sm"
                      >
                        {" "}
                        {/* Added a link to full post */}
                        View Post →
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4 text-xl">
                      Recent Photos
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {" "}
                      {/* Increased gap */}
                      {[1, 2, 3, 4].map((photo) => (
                        <div
                          key={photo}
                          className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors cursor-pointer group relative overflow-hidden" // Added group and overflow-hidden for image hover
                        >
                          {/* Placeholder for images - ideally, use actual image tags here */}
                          <img
                            src={`/placeholder-softball-${photo}.jpg`}
                            alt={`Softball Photo ${photo}`}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="relative z-10 text-white text-sm bg-black/40 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Photo
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        href="/gallery"
                        className="text-yellow-600 hover:text-yellow-700 font-semibold"
                      >
                        View Full Gallery →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {" "}
              {/* Increased space-y for consistent spacing */}
              {/* Latest Headlines - IMPROVEMENTS: Visuals, call to action */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">
                  {" "}
                  {/* Added border */}
                  Latest Headlines
                </h2>
                <div className="space-y-4">
                  {mockNews.map((article, index) => (
                    <Link
                      key={index}
                      href={`/news/${index + 1}`}
                      className="block"
                    >
                      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors card-hover">
                        {" "}
                        {/* Added card-hover */}
                        {/* Placeholder for small image/icon */}
                        <div
                          classNameN
                          e="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-700 rounded-md flex items-center justify-center text-xs font-semibold"
                        >
                          <span className="text-center">
                            {article.image.slice(0, 4)}
                          </span>{" "}
                          {/* Display first 4 chars of image mock */}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-base leading-snug">
                            {" "}
                            {/* Adjusted font size and line height */}
                            {article.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {article.time}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/news"
                    className="text-yellow-600 hover:text-yellow-700 font-semibold"
                  >
                    View All News →
                  </Link>
                </div>
              </section>
              {/* Quick Stats - IMPROVEMENTS: Visual appeal */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">
                  Quick Stats
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    {" "}
                    {/* Added padding and border */}
                    <span className="text-gray-600 font-medium">
                      Teams Playing:
                    </span>
                    <span className="font-bold text-gray-800 text-lg">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600 font-medium">
                      Games This Week:
                    </span>
                    <span className="font-bold text-gray-800 text-lg">8</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600 font-medium">
                      Season Games:
                    </span>
                    <span className="font-bold text-gray-800 text-lg">144</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">
                      Championship:
                    </span>
                    <span className="font-bold text-yellow-600 text-lg">
                      Aug 15
                    </span>{" "}
                    {/* Changed color to yellow */}
                  </div>
                </div>
              </section>
              {/* Team Spotlight - IMPROVEMENTS: Visuals, filter styling */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">
                  Team Spotlight
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {" "}
                  {/* Added flex-wrap and gap for better small screen display */}
                  {["All", "Men's", "Women's", "Youth"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setCurrentTeamFilter(filter)}
                      className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                        /* Changed to rounded-full, adjusted padding and font size */
                        currentTeamFilter === filter
                          ? "bg-yellow-600 text-white shadow" // Stronger highlight
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {" "}
                  {/* Increased gap */}
                  {mockTeams
                    .filter(
                      (team) =>
                        currentTeamFilter === "All" ||
                        team.division === currentTeamFilter
                    )
                    .map((team, index) => (
                      <Link
                        key={index}
                        href={`/teams/${team.name.toLowerCase()}`}
                        className="block"
                      >
                        <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow text-center card-hover">
                          {" "}
                          {/* Consistent border, padding, hover */}
                          <div
                            className={`w-10 h-10 ${team.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-base shadow-md`} // Increased size, added shadow
                          >
                            {team.name.charAt(0)}
                          </div>
                          <div className="font-bold text-gray-800 text-sm">
                            {" "}
                            {/* Increased font weight and size */}
                            {team.name}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {team.division}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
              {/* National Team Applications - IMPROVEMENTS: Button styling */}
              <section className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-xl shadow-lg p-6 text-white">
                {" "}
                {/* Adjusted gradient, consistent styling */}
                <h2 className="text-xl font-bold mb-4">
                  National Team Tryouts!
                </h2>
                <p className="text-base mb-4 text-gray-200 leading-relaxed">
                  {" "}
                  {/* Increased text size, adjusted color */}
                  Ready to represent the Virgin Islands on the national stage?
                  Apply now for upcoming national team tryouts and showcase your
                  talent!
                </p>
                <div className="text-base mb-4">
                  {" "}
                  {/* Increased text size */}
                  <span className="font-bold text-yellow-400">
                    Deadline: Aug 31st
                  </span>{" "}
                  {/* Adjusted color */}
                </div>
                <Link
                  href="/apply"
                  className="inline-block bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-700 transition-colors transform hover:scale-105 shadow-md" // Changed background, increased padding, rounded-full, added shadow
                >
                  Apply Now
                </Link>
              </section>
              {/* About the League - IMPROVEMENTS: Text and link styling */}
              <section className="bg-white rounded-xl shadow-lg p-6">
                {" "}
                {/* Consistent styling */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">
                  About the League
                </h2>
                <p className="text-gray-700 text-base mb-5 leading-relaxed">
                  {" "}
                  {/* Increased text size, adjusted color, added mb */}
                  The USVI Softball League proudly unites the best amateur
                  talent across St. Thomas, St. John, and St. Croix. Founded in
                  1985, our league is deeply committed to promoting athletic
                  excellence, sportsmanship, and fostering island pride within
                  our vibrant community.
                </p>
                <Link
                  href="/about"
                  className="text-yellow-600 hover:text-yellow-700 font-bold text-base inline-flex items-center group" // Adjusted color, added inline-flex and group for arrow animation
                >
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Sponsors Section - IMPROVEMENTS: Visuals, call to action */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 border-b-2 pb-3 border-yellow-400 inline-block mx-auto">
            {" "}
            {/* Increased font size, added border and centering */}
            Our Valued Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-8">
            {" "}
            {/* Adjusted gap and margin-top */}
            {[1, 2, 3, 4, 5, 6].map((sponsor) => (
              <div
                key={sponsor}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow card-hover border border-gray-100" // Adjusted bg-color, shadow, added border
              >
                {/* Placeholder for actual sponsor logos */}
                <img
                  src={`/sponsor-logo-${sponsor}.png`}
                  alt={`Partner ${sponsor} Logo`}
                  className="mx-auto h-16 object-contain mb-3"
                />
                <div className="text-sm font-semibold text-gray-700">
                  {" "}
                  {/* Adjusted color */}
                  Partner {sponsor}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            {" "}
            {/* Increased mt */}
            <Link
              href="/sponsorship"
              className="text-yellow-600 hover:text-yellow-700 font-bold text-lg inline-flex items-center group" // Adjusted color, added inline-flex and group for arrow animation
            >
              Become a Sponsor
              <svg
                className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - IMPROVEMENTS: Readability, subscription styling */}
      <footer className="bg-gray-900 text-white py-16">
        {" "}
        {/* Darker background, increased padding */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {" "}
            {/* Increased gap */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                USVI Softball
              </h3>{" "}
              {/* Adjusted font size and color */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {" "}
                {/* Adjusted color and line height */}
                Building champions and community across the Virgin Islands.
                Dedicated to promoting athletic excellence and island pride.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>{" "}
              {/* Adjusted font size */}
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/teams"
                    className="text-gray-300 hover:text-yellow-400 transition-colors" // Adjusted hover color
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apply"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Apply
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <div className="text-sm text-gray-300 space-y-2">
                {" "}
                {/* Adjusted color and space-y */}
                <div>
                  Email:{" "}
                  <a
                    href="mailto:info@usvisoftball.com"
                    className="hover:text-yellow-400"
                  >
                    info@usvisoftball.com
                  </a>
                </div>
                <div>
                  Phone:{" "}
                  <a href="tel:+13405550123" className="hover:text-yellow-400">
                    (340) 555-0123
                  </a>
                </div>
                <div>Address: Charlotte Amalie, USVI</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 text-xl transition-colors" // Increased icon size placeholder
                >
                  <i className="fab fa-facebook">F</i>{" "}
                  {/* Placeholder for Facebook icon */}
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 text-xl transition-colors"
                >
                  <i className="fab fa-instagram">I</i>{" "}
                  {/* Placeholder for Instagram icon */}
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 text-xl transition-colors"
                >
                  <i className="fab fa-youtube">Y</i>{" "}
                  {/* Placeholder for YouTube icon */}
                </Link>
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Join our newsletter!"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" // Adjusted padding, rounded, placeholder color, focus styles
                />
                <button className="w-full mt-3 bg-yellow-600 hover:bg-yellow-700 text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors shadow">
                  {" "}
                  {/* Changed color, padding, rounded, added shadow */}
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
            {" "}
            {/* Increased mt and pt */}
            <p>&copy; 2024 USVI Softball League. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

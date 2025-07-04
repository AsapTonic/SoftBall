"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function About() {
  // Mock team member data
  const teamMembers = [
    {
      id: 1,
      name: "Elroy Hill",
      title: "League President",
      image: "https://via.placeholder.com/100/1E40AF/FFFFFF?text=EH",
    },
    {
      id: 2,
      name: "Jose Rosario",
      title: "Vice President",
      image: "https://via.placeholder.com/100/DC2626/FFFFFF?text=JR",
    },
    {
      id: 3,
      name: "Maria Santos",
      title: "Secretary",
      image: "https://via.placeholder.com/100/059669/FFFFFF?text=MS",
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Treasurer",
      image: "https://via.placeholder.com/100/7C2D12/FFFFFF?text=DT",
    },
    {
      id: 5,
      name: "Carmen Rodriguez",
      title: "Game Director",
      image: "https://via.placeholder.com/100/7C3AED/FFFFFF?text=CR",
    },
    {
      id: 6,
      name: "Michael Johnson",
      title: "Equipment Manager",
      image: "https://via.placeholder.com/100/EA580C/FFFFFF?text=MJ",
    },
    {
      id: 7,
      name: "Sofia Martinez",
      title: "Youth Coordinator",
      image: "https://via.placeholder.com/100/BE185D/FFFFFF?text=SM",
    },
    {
      id: 8,
      name: "Robert Williams",
      title: "Umpire Chief",
      image: "https://via.placeholder.com/100/0F766E/FFFFFF?text=RW",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - USVI Softball League</title>
        <meta
          name="description"
          content="Learn about the USVI Softball League leadership team and our mission to bring softball to the Virgin Islands"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header - Reused from homepage */}
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
                🥎 USVI Softball League
              </h1>
              <nav className="flex flex-wrap gap-6">
                <Link
                  href="/AboutUs"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/schedule"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Schedule
                </Link>
                <Link
                  href="/standings"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Standings
                </Link>
                <Link
                  href="/news"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  News
                </Link>
                <Link
                  href="/teams"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Teams
                </Link>
                <Link
                  href="/shop"
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Shop
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Hero/Introduction Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Our Passion: Bringing Softball to the USVI
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For over two decades, the USVI Softball League has been the
                  premier destination for softball enthusiasts across the Virgin
                  Islands. We believe in the power of sport to unite
                  communities, build lasting friendships, and create
                  unforgettable memories under the Caribbean sun.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From our humble beginnings with just four teams to becoming
                  the largest recreational softball league in the territory,
                  we've remained committed to fostering a welcoming environment
                  where players of all skill levels can come together to enjoy
                  America's favorite pastime in paradise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  ```
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">
                      Years of Excellence
                    </div>
                  </div>
                  {/* Add more content or close the parent divs as needed */}
                </div>
              </div>
              {/* Right Column or additional content can go here */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

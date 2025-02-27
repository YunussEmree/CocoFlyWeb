'use client';

import Image from 'next/image';
import Navigation from './components/Navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const teamMembers = [
    {
      name: 'Yunus Emre Şenyiğit',
      role: 'Lead Web Developer',
      description: 'Creative mind behind our innovative game concepts.',
      image: '/team/character1.png'
    },
    {
      name: 'Murat Yakut',
      role: 'Project Manager',
      description: 'Expert in bringing game ideas to life through code.',
      image: '/team/character2.png'
    },
    {
      name: 'Akın Arslan',
      role: 'Lead Game Developer',
      description: 'Creates the stunning visual elements in our games.',
      image: '/team/character3.png'
    },
    {
      name: 'Onur Otu',
      role: 'Designer, Game Developer',
      description: 'Crafts immersive audio experiences for our games.',
      image: '/team/character4.png'
    },
    {
      name: 'Ali Kemal Özçalkap',
      role: 'Designer, Game Developer',
      description: 'Ensures smooth sailing for all our projects.',
      image: '/team/character5.png'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-brown-900 to-brown-700">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/beach-hero.jpg"
          alt="Beautiful Beach Scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <Image
            src="/logo.png"
            alt="Cocofly Studio Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold text-white mb-4">Cocofly Studio</h1>
          <p className="text-xl text-white">Creating Unforgettable Gaming Experiences</p>
        </motion.div>
      </section>

      <section className="py-2 px-8 bg-brown-1000"></section>


      {/* Games Section */}
      <section className="py-20 px-8 bg-brown-800" id="games-section">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Game cards will be added here */}

          <div className="bg-brown-700 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-300">Our exciting new games is in development!</p>
            </div>
          </div>
          
          <div className="bg-brown-700 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-300">Our exciting new games is in development!</p>
            </div>
          </div>
          
          <div className="bg-brown-700 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-300">Our exciting new games is in development!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-brown-900"  id="about-section">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-brown-800 rounded-lg overflow-hidden shadow-lg text-center p-6"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full" />
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-brown-200 mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Studio Section */}
      <section className="py-20 px-8 bg-brown-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Cocofly Studio</h2>
          <p className="text-gray-300 mb-6">
            Founded with a passion for creating immersive gaming experiences, Cocofly Studio brings together talented individuals who share a vision for innovative game development. Our team combines creativity, technical expertise, and a deep understanding of what makes games truly enjoyable.
          </p>
          <p className="text-gray-300 mb-6">
            We specialize in developing games that transport players to beautiful, serene environments while providing engaging gameplay mechanics. Our commitment to quality and attention to detail ensures that each game we create offers a unique and memorable experience.
          </p>
          <p className="text-gray-300">
            At Cocofly Studio, we believe in the power of games to bring joy, inspiration, and connection to players around the world. We're dedicated to pushing the boundaries of what's possible in game development while staying true to our core values of innovation, quality, and player satisfaction.
          </p>
        </div>
      </section>
    </main>
  );
}

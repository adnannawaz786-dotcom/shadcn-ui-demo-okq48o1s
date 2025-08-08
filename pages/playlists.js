import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Play, Heart, MoreHorizontal, Music, Clock, Users } from 'lucide-react';

const mockPlaylists = [
  {
    id: 1,
    title: "Chill Vibes",
    description: "Perfect for relaxing after a long day",
    trackCount: 24,
    duration: "1h 32m",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    isLiked: true,
    genre: "Ambient"
  },
  {
    id: 2,
    title: "Workout Mix",
    description: "High energy tracks to keep you motivated",
    trackCount: 18,
    duration: "58m",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    isLiked: false,
    genre: "Electronic"
  },
  {
    id: 3,
    title: "Indie Discoveries",
    description: "Fresh indie tracks from emerging artists",
    trackCount: 31,
    duration: "2h 15m",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    isLiked: true,
    genre: "Indie"
  },
  {
    id: 4,
    title: "Jazz Classics",
    description: "Timeless jazz standards and modern interpretations",
    trackCount: 22,
    duration: "1h 45m",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop",
    isLiked: false,
    genre: "Jazz"
  },
  {
    id: 5,
    title: "Road Trip",
    description: "Songs for the open road",
    trackCount: 27,
    duration: "1h 58m",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    isLiked: true,
    genre: "Rock"
  },
  {
    id: 6,
    title: "Focus Flow",
    description: "Instrumental tracks for deep work",
    trackCount: 15,
    duration: "1h 12m",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop",
    isLiked: false,
    genre: "Lo-fi"
  }
];

export default function Playlists() {
  const [likedPlaylists, setLikedPlaylists] = useState(
    mockPlaylists.reduce((acc, playlist) => {
      acc[playlist.id] = playlist.isLiked;
      return acc;
    }, {})
  );

  const toggleLike = (playlistId) => {
    setLikedPlaylists(prev => ({
      ...prev,
      [playlistId]: !prev[playlistId]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Your Playlists</h1>
          <p className="text-gray-300 text-lg">Discover and manage your music collections</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Music className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mockPlaylists.length}</p>
                  <p className="text-gray-300">Total Playlists</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-2xl font-bold">9h 40m</p>
                  <p className="text-gray-300">Total Duration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Heart className="h-6 w-6 text-green-300" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{Object.values(likedPlaylists).filter(Boolean).length}</p>
                  <p className="text-gray-300">Liked Playlists</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Playlists Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockPlaylists.map((playlist) => (
            <motion.div key={playlist.id} variants={cardVariants}>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="rounded-full bg-green-500 hover:bg-green-600 text-white border-0"
                      >
                        <Play className="h-6 w-6 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-white text-xl font-semibold line-clamp-1">
                      {playlist.title}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-300 hover:text-white p-2"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  <CardDescription className="text-gray-300 mb-4 line-clamp-2">
                    {playlist.description}
                  </CardDescription>

                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      {playlist.genre}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Music className="h-4 w-4 mr-1" />
                        {playlist.trackCount}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {playlist.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleLike(playlist.id)}
                      className={`p-2 ${
                        likedPlaylists[playlist.id]
                          ? 'text-red-500 hover:text-red-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <Heart
                        className="h-5 w-5"
                        fill={likedPlaylists[playlist.id] ? 'currentColor' : 'none'}
                      />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Create New Playlist Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/20 border-dashed hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <CardContent className="p-12 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white/10 rounded-full">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Create New Playlist</h3>
                  <p className="text-gray-300 mb-4">Start building your next music collection</p>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
                    Create Playlist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
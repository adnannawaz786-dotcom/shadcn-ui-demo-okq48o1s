import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Search, Filter, Star, Heart, BookOpen, Clock, TrendingUp, Users } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', icon: BookOpen },
  { id: 'trending', name: 'Trending', icon: TrendingUp },
  { id: 'popular', name: 'Popular', icon: Users },
  { id: 'recent', name: 'Recent', icon: Clock },
];

const discoveryItems = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    description: 'Deep dive into advanced React patterns and best practices for scalable applications.',
    category: 'trending',
    rating: 4.8,
    likes: 234,
    duration: '2h 30m',
    tags: ['React', 'JavaScript', 'Patterns'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=center',
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    description: 'Master the fundamentals of user interface and user experience design.',
    category: 'popular',
    rating: 4.9,
    likes: 456,
    duration: '3h 15m',
    tags: ['Design', 'UI/UX', 'Figma'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&crop=center',
  },
  {
    id: 3,
    title: 'Modern CSS Techniques',
    description: 'Explore modern CSS features including Grid, Flexbox, and CSS-in-JS solutions.',
    category: 'recent',
    rating: 4.7,
    likes: 189,
    duration: '1h 45m',
    tags: ['CSS', 'Web Design', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center',
  },
  {
    id: 4,
    title: 'Node.js Best Practices',
    description: 'Build scalable backend applications with Node.js and Express.',
    category: 'trending',
    rating: 4.6,
    likes: 312,
    duration: '4h 20m',
    tags: ['Node.js', 'Backend', 'API'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&crop=center',
  },
  {
    id: 5,
    title: 'TypeScript Fundamentals',
    description: 'Learn TypeScript from basics to advanced concepts for better JavaScript development.',
    category: 'popular',
    rating: 4.8,
    likes: 278,
    duration: '2h 50m',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop&crop=center',
  },
  {
    id: 6,
    title: 'GraphQL & Apollo',
    description: 'Master GraphQL and Apollo Client for modern API development.',
    category: 'recent',
    rating: 4.5,
    likes: 156,
    duration: '3h 35m',
    tags: ['GraphQL', 'Apollo', 'API'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=center',
  },
];

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState(new Set());

  const filteredItems = discoveryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (itemId) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Discover
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore curated content, trending topics, and discover new learning opportunities
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-500">Filter by:</span>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </Button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className={`rounded-full w-10 h-10 p-0 backdrop-blur-sm ${
                        likedItems.has(item.id) 
                          ? 'bg-red-500/20 text-red-500' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                      onClick={() => toggleLike(item.id)}
                    >
                      <Heart className={`w-4 h-4 ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-yellow-500 shrink-0">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
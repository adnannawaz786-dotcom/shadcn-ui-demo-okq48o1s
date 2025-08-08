import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { BookOpen, Code, Palette, Zap, Star, Download, Eye, Heart } from 'lucide-react';

const Library = () => {
  const components = [
    {
      id: 1,
      name: "Button Component",
      description: "Versatile button component with multiple variants and sizes",
      category: "Interactive",
      downloads: "12.5k",
      stars: 4.9,
      preview: "button-preview.png",
      tags: ["React", "TypeScript", "Accessible"]
    },
    {
      id: 2,
      name: "Card Component",
      description: "Flexible card container for displaying content with headers and footers",
      category: "Layout",
      downloads: "8.2k",
      stars: 4.8,
      preview: "card-preview.png",
      tags: ["Layout", "Container", "Responsive"]
    },
    {
      id: 3,
      name: "Navigation Menu",
      description: "Responsive navigation component with dropdown support",
      category: "Navigation",
      downloads: "15.1k",
      stars: 4.9,
      preview: "nav-preview.png",
      tags: ["Navigation", "Dropdown", "Mobile"]
    },
    {
      id: 4,
      name: "Form Components",
      description: "Complete form component library with validation",
      category: "Forms",
      downloads: "9.7k",
      stars: 4.7,
      preview: "form-preview.png",
      tags: ["Forms", "Validation", "Input"]
    },
    {
      id: 5,
      name: "Data Table",
      description: "Advanced data table with sorting, filtering, and pagination",
      category: "Data Display",
      downloads: "11.3k",
      stars: 4.8,
      preview: "table-preview.png",
      tags: ["Table", "Data", "Sorting"]
    },
    {
      id: 6,
      name: "Modal Dialog",
      description: "Accessible modal dialog component with overlay",
      category: "Overlay",
      downloads: "7.9k",
      stars: 4.6,
      preview: "modal-preview.png",
      tags: ["Modal", "Dialog", "Overlay"]
    }
  ];

  const categories = ["All", "Interactive", "Layout", "Navigation", "Forms", "Data Display", "Overlay"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredComponents = components.filter(component => {
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Component Library
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover our collection of beautiful, accessible, and customizable UI components
              built with React and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-purple-600 hover:bg-purple-700 text-white" 
                  : "bg-white/10 hover:bg-white/20 text-white border-white/20"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Components</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <Download className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100k+</div>
              <div className="text-sm text-white/60">Downloads</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-sm text-white/60">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-sm text-white/60">Uptime</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Component Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredComponents.map((component) => (
            <motion.div key={component.id} variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                        {component.name}
                      </CardTitle>
                      <CardDescription className="text-white/70 mt-2">
                        {component.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-purple-600/50 text-white">
                      {component.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Preview placeholder */}
                  <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-white/10">
                    <Eye className="h-8 w-8 text-white/50" />
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {component.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-white/5 text-white/80 border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Separator className="bg-white/20" />
                  
                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{component.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span>{component.stars}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredComponents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-white/60 text-lg">No components found matching your criteria.</div>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 bg-purple-600 hover:bg-purple-700"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Start using our component library today and accelerate your development process
                with beautiful, accessible, and customizable components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Library;
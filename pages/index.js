import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Heart, Star, ShoppingCart, Eye, ArrowRight, Zap, Shield, Award } from 'lucide-react'

export default function Home() {
  const [likedCards, setLikedCards] = useState(new Set())
  const [cartItems, setCartItems] = useState(0)

  const toggleLike = (cardId) => {
    const newLiked = new Set(likedCards)
    if (newLiked.has(cardId)) {
      newLiked.delete(cardId)
    } else {
      newLiked.add(cardId)
    }
    setLikedCards(newLiked)
  }

  const addToCart = () => {
    setCartItems(prev => prev + 1)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      description: "High-quality audio with noise cancellation and 30-hour battery life.",
      price: "$299",
      originalPrice: "$399",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      image: "🎧",
      features: ["Noise Cancellation", "30h Battery", "Wireless"]
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      description: "Track your health and fitness goals with advanced monitoring features.",
      price: "$199",
      originalPrice: "$249",
      rating: 4.6,
      reviews: 89,
      badge: "New",
      image: "⌚",
      features: ["Heart Rate", "GPS", "Waterproof"]
    },
    {
      id: 3,
      title: "Portable Power Bank",
      description: "Fast charging power bank with 20,000mAh capacity and multiple ports.",
      price: "$49",
      originalPrice: "$69",
      rating: 4.7,
      reviews: 256,
      badge: "Sale",
      image: "🔋",
      features: ["20,000mAh", "Fast Charge", "Multiple Ports"]
    }
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Safe",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award Winning",
      description: "Recognized by industry leaders worldwide"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Glassmorphic Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-white">ShadcnUI Demo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Eye className="h-4 w-4 mr-2" />
                View Library
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cartItems})
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shadcn/UI Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore beautiful, accessible components built with Radix UI and Tailwind CSS. 
            This demo showcases cards, buttons, and interactive elements with glassmorphic design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Components
            </Button>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-300 text-lg">Discover our most popular items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} variants={cardVariants}>
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="relative">
                    <div className="absolute top-4 right-4 z-10">
                      <Badge 
                        variant={product.badge === "Sale" ? "destructive" : "secondary"}
                        className={product.badge === "New" ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    <CardTitle className="text-white text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="border-white/30 text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleLike(product.id)}
                      className="border-white/30 text-white hover:bg-white/20"
                    >
                      <Heart
                        className={`h-4 w-4 mr-2 ${
                          likedCards.has(product.id) ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                      {likedCards.has(product.id) ? "Liked" : "Like"}
                    </Button>
                    <Button
                      onClick={addToCart}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg border-white/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-4">
                Ready to Build Something Amazing?
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Start using Shadcn/UI components in your next project and create beautiful, 
                accessible interfaces with ease.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Browse Components
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Documentation
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/20 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Shadcn/UI Demo. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
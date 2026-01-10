import { motion } from 'framer-motion';
import { Lightbulb, Zap, RefreshCw, Quote } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { quotes, facts } from '@/data/content';

const HeroSection = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const dailyQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, [refreshKey]);

  const dailyFact = useMemo(() => {
    return facts[Math.floor(Math.random() * facts.length)];
  }, [refreshKey]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <section id="daily-spark" className="min-h-screen pt-32 pb-16 px-4 hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Daily Spark</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Fuel Your </span>
            <span className="gradient-text">Curiosity</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your daily dose of wisdom and wonder. Refresh your mind with handpicked quotes and fascinating facts.
          </p>
          
          <motion.button
            onClick={handleRefresh}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Daily Spark
          </motion.button>
        </motion.div>

        {/* Daily Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Quote of the Day */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            key={`quote-${refreshKey}`}
            className="glass-card-hover overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={dailyQuote.image} 
                alt="Quote background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary font-medium">Quote of the Day</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-4">
                "{dailyQuote.text}"
              </p>
              <p className="text-sm text-muted-foreground">— {dailyQuote.author}</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs capitalize">
                  {dailyQuote.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Fact of the Day */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={`fact-${refreshKey}`}
            className="glass-card-hover overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={dailyFact.image} 
                alt="Fact background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-purple-400 font-medium">Fact of the Day</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-4">
                {dailyFact.text}
              </p>
              {dailyFact.source && (
                <p className="text-sm text-muted-foreground mb-4">Source: {dailyFact.source}</p>
              )}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs capitalize">
                  {dailyFact.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <a href="#explore" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Explore More</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
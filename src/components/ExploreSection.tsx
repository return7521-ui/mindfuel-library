import { motion } from 'framer-motion';
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Lightbulb, Zap } from 'lucide-react';
import { quotes, facts, quoteCategories, factCategories } from '@/data/content';
import ContentCard from './ContentCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

const ITEMS_PER_PAGE = 8;

const ExploreSection = () => {
  const [activeTab, setActiveTab] = useState<'quotes' | 'facts'>('quotes');
  const [quoteCategory, setQuoteCategory] = useState('all');
  const [factCategory, setFactCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Filter content based on category and search
  const filteredQuotes = useMemo(() => {
    return quotes.filter(quote => {
      const matchesCategory = quoteCategory === 'all' || quote.category === quoteCategory;
      const matchesSearch = searchQuery === '' || 
        quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [quoteCategory, searchQuery]);

  const filteredFacts = useMemo(() => {
    return facts.filter(fact => {
      const matchesCategory = factCategory === 'all' || fact.category === factCategory;
      const matchesSearch = searchQuery === '' || 
        fact.text.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [factCategory, searchQuery]);

  const currentItems = activeTab === 'quotes' ? filteredQuotes : filteredFacts;
  const displayedItems = currentItems.slice(0, displayCount);
  const hasMore = displayCount < currentItems.length;

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [activeTab, quoteCategory, factCategory, searchQuery]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayCount(prev => prev + ITEMS_PER_PAGE);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <section id="explore" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Explore </span>
            <span className="gradient-text">Infinite Knowledge</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dive into our curated collection of wisdom and fascinating discoveries
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            placeholder={activeTab === 'quotes' ? 'Search quotes by text or author...' : 'Search facts...'}
          />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'quotes'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            Quotes
            <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">
              {filteredQuotes.length}
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('facts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'facts'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Zap className="w-5 h-5" />
            Facts
            <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">
              {filteredFacts.length}
            </span>
          </motion.button>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          {activeTab === 'quotes' ? (
            <CategoryFilter
              categories={quoteCategories}
              activeCategory={quoteCategory}
              onCategoryChange={setQuoteCategory}
              type="quote"
            />
          ) : (
            <CategoryFilter
              categories={factCategories}
              activeCategory={factCategory}
              onCategoryChange={setFactCategory}
              type="fact"
            />
          )}
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <ContentCard
              key={item.id}
              item={item}
              type={activeTab === 'quotes' ? 'quote' : 'fact'}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {displayedItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No {activeTab} found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                activeTab === 'quotes' ? setQuoteCategory('all') : setFactCategory('all');
              }}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Load More Trigger */}
        {hasMore && (
          <div ref={loadMoreRef} className="flex justify-center py-10">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">Loading more...</span>
            </motion.div>
          </div>
        )}

        {/* End of content indicator */}
        {!hasMore && displayedItems.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground text-sm mt-10"
          >
            You've reached the end! ({currentItems.length} {activeTab})
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ExploreSection;
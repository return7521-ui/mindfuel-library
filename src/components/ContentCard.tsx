import { motion } from 'framer-motion';
import { Copy, Share2, Check, Quote } from 'lucide-react';
import { useState, memo } from 'react';
import type { Quote as QuoteType, Fact } from '@/data/content';

interface ContentCardProps {
  item: QuoteType | Fact;
  type: 'quote' | 'fact';
  index: number;
}

const ContentCard = memo(({ item, type, index }: ContentCardProps) => {
  const [copied, setCopied] = useState(false);

  const isQuote = type === 'quote';
  const quoteItem = item as QuoteType;
  const factItem = item as Fact;

  const shareText = isQuote 
    ? `"${quoteItem.text}" — ${quoteItem.author}`
    : factItem.text;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + '\n\n— via MindFuel India')}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={item.image} 
          alt={isQuote ? 'Quote illustration' : 'Fact illustration'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
            isQuote 
              ? 'bg-primary/20 text-primary border-primary/30' 
              : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
          }`}>
            {item.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {isQuote && <Quote className="w-6 h-6 text-primary/30 mb-3" />}
        
        <p className="text-foreground font-medium leading-relaxed mb-3 line-clamp-4">
          {isQuote ? `"${quoteItem.text}"` : factItem.text}
        </p>

        {isQuote && (
          <p className="text-sm text-muted-foreground mb-4">— {quoteItem.author}</p>
        )}

        {!isQuote && factItem.source && (
          <p className="text-xs text-muted-foreground mb-4">Source: {factItem.source}</p>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-border/50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppShare}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-green-600/20 hover:bg-green-600/30 text-sm text-green-400 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
});

ContentCard.displayName = 'ContentCard';

export default ContentCard;
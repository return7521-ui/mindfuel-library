import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                MindFuel<span className="text-primary">India</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Sister project of StudyTools India
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#daily-spark" className="hover:text-foreground transition-colors">
              Daily Spark
            </a>
            <a href="#explore" className="hover:text-foreground transition-colors">
              Explore
            </a>
            <a href="#founders" className="hover:text-foreground transition-colors">
              Founders
            </a>
            <a 
              href="https://studytoolsindia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              StudyTools India
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in India
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MindFuel India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
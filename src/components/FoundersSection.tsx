import { motion } from 'framer-motion';
import { 
  Atom, 
  FlaskConical, 
  Calculator, 
  Code, 
  Brain, 
  Rocket, 
  MapPin, 
  GraduationCap,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const techStack = [
  { icon: Code, label: 'Full-Stack Dev', color: 'text-blue-400' },
  { icon: Brain, label: 'AI & ML', color: 'text-purple-400' },
  { icon: Atom, label: 'Physics', color: 'text-cyan-400' },
  { icon: FlaskConical, label: 'Chemistry', color: 'text-green-400' },
  { icon: Calculator, label: 'Mathematics', color: 'text-orange-400' },
  { icon: Rocket, label: 'EdTech', color: 'text-pink-400' },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Meet the Creator</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">The Architect Behind </span>
            <span className="gradient-text">the Tools</span>
          </h2>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Avatar & Info */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative inline-block mb-6"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-primary/30 to-purple-500/30 p-1 mx-auto md:mx-0">
                  <div className="w-full h-full rounded-3xl bg-secondary flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-display font-bold gradient-text">SK</div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
                >
                  <GraduationCap className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Shashank Kushwaha
              </h3>
              
              <p className="text-primary font-medium mb-4">ISC Scholar • PCM Specialist</p>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Unnao, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Right: Description & Stack */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                An <span className="text-foreground font-medium">ISC Scholar</span> with deep mastery across{' '}
                <span className="text-foreground font-medium">Physics, Chemistry, and Mathematics</span>.
                Based in the historic heart of Unnao, Shashank combines rigorous academic excellence 
                with cutting-edge <span className="text-foreground font-medium">Computer Science</span> expertise.
                His passion lies in creating digital tools that democratize education and inspire 
                the next generation of learners across India.
              </p>

              {/* Tech Stack Badges */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-4 font-medium">Current Tech Stack & Interests</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border/50"
                    >
                      <tech.icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-sm text-foreground">{tech.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://studytoolsindia.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-500 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
              >
                <Rocket className="w-5 h-5" />
                Explore StudyTools India
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          {[
            { label: 'Curated Quotes', value: '500+' },
            { label: 'Fascinating Facts', value: '300+' },
            { label: 'Categories', value: '8' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 text-center"
            >
              <p className="font-display text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersSection;
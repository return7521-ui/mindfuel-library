export interface Quote {
  id: string;
  text: string;
  author: string;
  category: 'academic' | 'stoicism' | 'technology' | 'indian-wisdom';
  image: string;
}

export interface Fact {
  id: string;
  text: string;
  category: 'science' | 'space' | 'ai-future' | 'history';
  image: string;
  source?: string;
}

export const quotes: Quote[] = [
  {
    id: 'q1',
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'
  },
  {
    id: 'q2',
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800'
  },
  {
    id: 'q3',
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    category: 'stoicism',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
  },
  {
    id: 'q4',
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
    category: 'stoicism',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=800'
  },
  {
    id: 'q5',
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800'
  },
  {
    id: 'q6',
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800'
  },
  {
    id: 'q7',
    text: "You have the right to work, but never to the fruit of work.",
    author: "Bhagavad Gita",
    category: 'indian-wisdom',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800'
  },
  {
    id: 'q8',
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    category: 'indian-wisdom',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
  },
  {
    id: 'q9',
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    category: 'indian-wisdom',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800'
  },
  {
    id: 'q10',
    text: "It is not that I'm so smart. But I stay with the questions much longer.",
    author: "Albert Einstein",
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800'
  },
  {
    id: 'q11',
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
    category: 'stoicism',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800'
  },
  {
    id: 'q12',
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800'
  },
  {
    id: 'q13',
    text: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'
  },
  {
    id: 'q14',
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    category: 'stoicism',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'
  },
  {
    id: 'q15',
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800'
  },
  {
    id: 'q16',
    text: "When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place.",
    author: "Bhagavad Gita",
    category: 'indian-wisdom',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  }
];

export const facts: Fact[] = [
  {
    id: 'f1',
    text: "A teaspoon of neutron star material would weigh about 6 billion tons on Earth.",
    category: 'space',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
    source: 'NASA'
  },
  {
    id: 'f2',
    text: "Honey never spoils. Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still edible.",
    category: 'science',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800',
    source: 'National Geographic'
  },
  {
    id: 'f3',
    text: "GPT-4 was trained on approximately 1 trillion parameters, making it one of the largest language models ever created.",
    category: 'ai-future',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    source: 'OpenAI'
  },
  {
    id: 'f4',
    text: "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
    category: 'history',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    source: 'NASA'
  },
  {
    id: 'f5',
    text: "There are more possible iterations of a game of chess than atoms in the known universe.",
    category: 'science',
    image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800'
  },
  {
    id: 'f6',
    text: "Voyager 1 is the farthest human-made object from Earth, over 14 billion miles away.",
    category: 'space',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
    source: 'NASA JPL'
  },
  {
    id: 'f7',
    text: "AI systems can now write code, compose music, and create art that's often indistinguishable from human work.",
    category: 'ai-future',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800'
  },
  {
    id: 'f8',
    text: "The Library of Alexandria, once the largest in the ancient world, held an estimated 400,000 scrolls.",
    category: 'history',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'
  },
  {
    id: 'f9',
    text: "Octopuses have three hearts and blue blood due to copper-based hemocyanin.",
    category: 'science',
    image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=800'
  },
  {
    id: 'f10',
    text: "One day on Venus is longer than one year on Venus—it takes 243 Earth days to rotate once.",
    category: 'space',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800',
    source: 'NASA'
  },
  {
    id: 'f11',
    text: "By 2030, AI is predicted to contribute $15.7 trillion to the global economy.",
    category: 'ai-future',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    source: 'PwC'
  },
  {
    id: 'f12',
    text: "The Indus Valley Civilization had advanced urban planning with drainage systems 4,500 years ago.",
    category: 'history',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800'
  },
  {
    id: 'f13',
    text: "Human DNA is 99.9% identical between any two people on Earth.",
    category: 'science',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800'
  },
  {
    id: 'f14',
    text: "A black hole's gravitational pull is so strong that not even light can escape from it.",
    category: 'space',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800'
  },
  {
    id: 'f15',
    text: "Self-driving cars use over 40 sensors including cameras, radar, and LiDAR to navigate.",
    category: 'ai-future',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
  },
  {
    id: 'f16',
    text: "The first known use of zero as a number was in ancient India around 458 AD.",
    category: 'history',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800'
  }
];

export const quoteCategories = [
  { id: 'academic', label: 'Academic', icon: 'GraduationCap' },
  { id: 'stoicism', label: 'Stoicism', icon: 'Mountain' },
  { id: 'technology', label: 'Technology', icon: 'Cpu' },
  { id: 'indian-wisdom', label: 'Indian Wisdom', icon: 'Sparkles' },
] as const;

export const factCategories = [
  { id: 'science', label: 'Science', icon: 'FlaskConical' },
  { id: 'space', label: 'Space', icon: 'Rocket' },
  { id: 'ai-future', label: 'AI & Future', icon: 'Brain' },
  { id: 'history', label: 'History', icon: 'Scroll' },
] as const;
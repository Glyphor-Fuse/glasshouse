
import { motion } from 'framer-motion';

export const StructuralHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden">
      
      {/* Background Image with Bauhaus treatment */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://raw.githubusercontent.com/Glyphor-Fuse/glasshouse/main/public/images/bauhaus-hero.png" 
            alt="Abstract glass architecture" 
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full border-l border-foreground/10 pl-8 md:pl-16 py-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-2 mb-8"
        >
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Figure 01 — The New Standard
            </span>
            <div className="w-12 h-[1px] bg-foreground/30" />
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9] text-foreground mix-blend-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Productivity<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">Is Not A</span><br />
          Factory Floor
        </motion.h1>

        <motion.p 
          className="mt-12 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We fuse the rigid, geometric precision of Walter Gropius with the moody, 
          high-contrast whitespace of a vintage Peter Lindbergh photoshoot.
        </motion.p>
        
        <motion.div 
            className="mt-12 flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
        >
            <button className="px-8 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase hover:bg-mercury hover:text-foreground transition-colors duration-300">
                Enter Gallery
            </button>
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
                [ EST. 2024 ]
            </span>
        </motion.div>
      </div>

      {/* Decorative Structural Elements */}
      <div className="absolute top-0 right-12 w-[1px] h-full bg-foreground/5 hidden lg:block" />
      <div className="absolute bottom-24 left-0 w-full h-[1px] bg-foreground/5" />
    </section>
  );
};

export default StructuralHero;

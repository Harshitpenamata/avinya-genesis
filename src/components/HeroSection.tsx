import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-4">
            <span className="text-foreground">AVINYA</span>{" "}
            <span className="text-gradient italic">Interactive</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body mb-8"
        >
          Where Vision Meets Technology
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body"
        >
          Crafting immersive digital experiences through 3D, VFX, AI, and cutting-edge software development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="#services"
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            Our Services
          </a>
          <a
            href="#team"
            className="px-8 py-3 border border-primary/40 text-primary font-body text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-primary/10 transition-all duration-300"
          >
            Meet the Team
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">
          Scroll to Explore
        </span>
        <ChevronDown className="text-primary animate-float w-5 h-5" />
      </motion.div>
    </section>
  );
}

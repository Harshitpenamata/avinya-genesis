import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import ParticleField from "./ParticleField";
import logoLandscape from "@/assets/logo-landscape-light.png";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.05, 0]);


  return (
    <section ref={sectionRef} aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Parallax radial glow */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: glowScale }}>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"
          style={{ opacity: glowOpacity }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, scale }}
      >
        <motion.div style={{ y: titleY }}>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-6"
          >
            <h1 className="sr-only">Avinya Interactive — Where Vision Meets Technology</h1>
            <img
              src={logoLandscape}
              alt="Avinya Interactive logo"
              className="w-[320px] md:w-[480px] lg:w-[600px] mx-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body mb-8"
          >
            Where Vision Meets Technology
          </motion.p>
        </motion.div>

        <motion.div style={{ y: descY }}>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body"
          >
            Crafting immersive digital experiences through 3D, VFX, AI, and cutting-edge software development.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: ctaY }}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(155 70% 45% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase rounded-sm transition-colors duration-300"
          >
            Our Services
          </motion.a>
          <motion.a
            href="#team"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(155 70% 45% / 0.1)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 border border-primary/40 text-primary font-body text-sm tracking-[0.15em] uppercase rounded-sm transition-colors duration-300"
          >
            Meet the Team
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Box, Sparkles, Film, Code, Palette, Brain } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "3D & CG",
    description: "High-fidelity 3D modeling, environments, character creation, and real-time rendering using Unreal Engine, Maya, and Blender.",
  },
  {
    icon: Film,
    title: "VFX & Virtual Production",
    description: "Cinematic visual effects, compositing, LED volume workflows, and in-camera VFX for film, ads, and immersive experiences.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI integrations, generative AI pipelines, intelligent automation, and AI-assisted creative workflows.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack web and application development, custom tools, pipeline automation, and scalable cloud solutions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered interface design, user research, prototyping, design systems, and seamless digital experiences.",
  },
  {
    icon: Sparkles,
    title: "Product Design",
    description: "End-to-end product strategy, from concept and research through design, development, and market-ready delivery.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  // Alternate entrance directions for visual interest
  const isLeft = index % 3 === 0;
  const isRight = index % 3 === 2;
  const xOffset = isLeft ? -60 : isRight ? 60 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, x: xOffset, scale: 0.9, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group relative p-8 rounded-sm glass hover:glow-border transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
          whileHover={{ rotate: 90, scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
        <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>

        {/* Animated underline */}
        <motion.div
          className="h-px bg-gradient-to-r from-primary/60 to-transparent mt-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.12 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Split heading for word-by-word reveal
  const headingWords = ["End-to-end", "creative", "and", "technical", "solutions", "for", "the", "next", "generation", "of", "digital", "experiences."];

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax background accent */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]"
        style={{ y: bgY }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={headingRef} className="text-center mb-20">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, skewY: 3 }}
              animate={isInView ? { y: 0, skewY: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Our <span className="text-gradient italic">Services</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-x-2 max-w-xl mx-auto">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className="text-muted-foreground font-body inline-block"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.05,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

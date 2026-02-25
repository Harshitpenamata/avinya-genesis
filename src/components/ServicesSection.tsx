import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-sm glass hover:glow-border transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient italic">Services</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            End-to-end creative and technical solutions for the next generation of digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section id="contact" ref={sectionRef} aria-label="Contact Us" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-32" />

      <motion.div className="container mx-auto max-w-4xl" style={{ scale, opacity }}>
        <div ref={ref} className="text-center">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, skewY: 3 }}
              animate={isInView ? { y: 0, skewY: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4"
            >
              Let's <span className="text-gradient italic">Create</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground font-body max-w-xl mx-auto mb-12"
          >
            Have a project in mind? We'd love to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href="mailto:hello@avinyainteractive.com"
              className="flex items-center gap-3 px-8 py-4 glass rounded-sm hover:glow-border transition-all duration-300 group"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground font-body text-sm">hello@avinyainteractive.com</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-body text-sm">India • Global</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

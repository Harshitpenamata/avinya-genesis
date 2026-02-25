import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's <span className="text-gradient italic">Create</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-12">
            Have a project in mind? We'd love to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:hello@avinyainteractive.com"
              className="flex items-center gap-3 px-8 py-4 glass rounded-sm hover:glow-border transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground font-body text-sm">hello@avinyainteractive.com</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-body text-sm">India • Global</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

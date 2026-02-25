import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Harshit Penamata",
    role: "Creative Technologist",
    slug: "harshit",
    description: "Bridging cinematic storytelling with real-time technology.",
  },
  {
    name: "Partner Two",
    role: "Creative Director",
    slug: "partner-2",
    description: "Bringing bold visions to life through design and strategy.",
  },
  {
    name: "Partner Three",
    role: "Technical Lead",
    slug: "partner-3",
    description: "Engineering robust solutions for complex creative challenges.",
  },
  {
    name: "Partner Four",
    role: "Design Lead",
    slug: "partner-4",
    description: "Crafting intuitive experiences at the intersection of art and technology.",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            The <span className="text-gradient italic">Team</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Four partners, one shared vision — pushing the boundaries of interactive storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        to={`/team/${member.slug}`}
        className="group block p-8 glass rounded-sm hover:glow-border transition-all duration-500"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-all">
              {member.name}
            </h3>
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-body mt-1">
              {member.role}
            </p>
            <p className="text-muted-foreground font-body text-sm mt-4 max-w-sm">
              {member.description}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-all">
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import partner2Photo from "@/assets/partner2-portrait.jpg";
import partner3Photo from "@/assets/partner3-portrait.jpg";

const team = [
  {
    name: "Harshit Penamata",
    role: "Creative Technologist",
    slug: "harshit",
    description: "Bridging cinematic storytelling with real-time technology.",
    photo: "https://murarishettybhanu.github.io/avinyainteractive/harshit-portrait-t.png",
  },
  {
    name: "Partner Two",
    role: "Creative Director",
    slug: "partner-2",
    description: "Bringing bold visions to life through design and strategy.",
    photo: partner2Photo,
  },
  {
    name: "Partner Three",
    role: "Technical Lead",
    slug: "partner-3",
    description: "Engineering robust solutions for complex creative challenges.",
    photo: partner3Photo,
  },
  {
    name: "Partner Four",
    role: "Design Lead",
    slug: "partner-4",
    description: "Crafting intuitive experiences at the intersection of art and technology.",
    photo: undefined as string | undefined,
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section id="team" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax glow */}
      <motion.div
        className="absolute top-1/3 left-0 w-[350px] h-[350px] rounded-full bg-primary/3 blur-[130px]"
        style={{ x: bgX }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={headingRef} className="text-center mb-20">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, skewY: 3 }}
              animate={isInView ? { y: 0, skewY: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              The <span className="text-gradient italic">Team</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground font-body max-w-xl mx-auto"
          >
            Four partners, one shared vision — pushing the boundaries of interactive storytelling.
          </motion.p>
        </div>

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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Alternate: slide from left/right
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
        rotateY: isLeft ? -8 : 8,
        filter: "blur(6px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/team/${member.slug}`}
        className="group block p-8 glass rounded-sm hover:glow-border transition-all duration-500"
      >
        <motion.div
          className="flex items-start justify-between gap-4"
          whileHover={{ x: 6 }}
          transition={{ duration: 0.3 }}
        >
          {member.photo && (
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-all">
              {member.name}
            </h3>
            <motion.p
              className="text-primary text-sm tracking-[0.2em] uppercase font-body mt-1"
              initial={{ width: 0 }}
              animate={isInView ? { width: "auto" } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              {member.role}
            </motion.p>
            <p className="text-muted-foreground font-body text-sm mt-4 max-w-sm">
              {member.description}
            </p>
          </div>
          <motion.div
            className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0"
            whileHover={{
              scale: 1.2,
              backgroundColor: "hsl(155 70% 45% / 0.15)",
              borderColor: "hsl(155 70% 45% / 0.6)",
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

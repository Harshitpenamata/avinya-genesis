import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const marqueeItems = [
  "3D & CG",
  "•",
  "Virtual Production",
  "•",
  "VFX",
  "•",
  "AI Solutions",
  "•",
  "Software Development",
  "•",
  "UI/UX Design",
  "•",
  "Product Design",
  "•",
  "Real-Time Engines",
  "•",
  "Motion Capture",
  "•",
  "XR Experiences",
  "•",
];

export default function MarqueeBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={ref} className="py-10 overflow-hidden border-y border-border/20">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{ x }}
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className={`font-body text-sm tracking-[0.2em] uppercase flex-shrink-0 ${
              item === "•" ? "text-primary" : "text-muted-foreground/60"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

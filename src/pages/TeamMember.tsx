import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import partner2Portrait from "@/assets/partner2-portrait.jpg";
import partner3Portrait from "@/assets/partner3-portrait.jpg";

const teamData: Record<string, {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string[];
  portrait?: string;
  services: { title: string; description: string }[];
  capabilities: { category: string; items: string[] }[];
  experience: { company: string; period: string; title: string; bullets: string[] }[];
  work?: { title: string; tag: string; url: string; thumbnail: string }[];
}> = {
  harshit: {
    name: "Harshit Penamata",
    firstName: "HARSHIT",
    lastName: "PENAMATA",
    role: "Creative Technologist",
    tagline: "Bridging cinematic storytelling with real-time technology.",
    portrait: "https://murarishettybhanu.github.io/avinyainteractive/harshit-portrait-t.png",
    bio: [
      "I'm a Creative Technologist working at the intersection of cinematic storytelling and real-time technology. With a hybrid background spanning traditional filmmaking and cutting-edge virtual production, I bring a unique perspective to every project.",
      "My expertise lies in building real-time pipelines, LED volume workflows, and creative tooling that empowers storytellers. From feature films to immersive experiences, I specialize in translating creative vision into technical reality.",
      "I believe the best technology is invisible—it should amplify creativity, not constrain it.",
    ],
    services: [
      { title: "Virtual Production", description: "LED volume workflows, In-Camera VFX, and real-time on-set supervision." },
      { title: "Real-Time Visualization", description: "Previs, techvis, and final pixel rendering using Unreal Engine." },
      { title: "Motion Capture", description: "Full body and facial performance capture integration and cleanup." },
      { title: "CG & VFX", description: "High-end visual effects for commercials, features, and immersive experiences." },
      { title: "Pipeline Tools", description: "Check automation, custom Python tools, and workflow optimization." },
      { title: "XR Experiences", description: "Building immersive AR/VR applications for enterprise and education." },
    ],
    capabilities: [
      { category: "Real-Time Engines", items: ["Unreal Engine 5", "Unity", "TouchDesigner"] },
      { category: "3D & Animation", items: ["Maya", "Houdini", "Blender", "3ds Max", "MotionBuilder"] },
      { category: "Virtual Production", items: ["Disguise", "Brompton", "RedSpy", "Vicon", "OptiTrack"] },
      { category: "Development", items: ["Python", "C++", "Blueprints", "HLSL/GLSL", "React"] },
      { category: "Compositing & Edit", items: ["Nuke", "DaVinci Resolve", "Premiere Pro", "After Effects"] },
      { category: "GenAI & Emerging", items: ["Stable Diffusion", "Midjourney", "ChatGPT/Claude API", "NeRF/Gaussian Splats"] },
    ],
    experience: [
      {
        company: "Deloitte",
        period: "May 2025 - Present",
        title: "Creative Technologist",
        bullets: [
          "Lead cinematic real-time content creation using Unreal Engine, Disguise, and LED wall systems.",
          "Define tool selection and workflow strategy in collaboration with XR, design, and production teams.",
          "Execute LED volume setups with ROE panels, Brompton processors, and RedSpy tracking.",
        ],
      },
      {
        company: "Double Negative",
        period: "Jan 2023 - May 2025",
        title: "Unreal Technical Director",
        bullets: [
          "Directed end-to-end real-time pipelines for virtual production on films like 'Those About to Die' and 'Here'.",
          "Architected environments, lighting, sequencer workflows, and Python automation tools.",
          "Served as the primary technical bridge between on-set teams and London production units.",
        ],
      },
      {
        company: "The Mill",
        period: "March 2022 - Dec 2022",
        title: "Unreal Technical Artist",
        bullets: [
          "Delivered cinematic content for major brands including Disney, Amazon, and NHL.",
          "Developed custom Unreal Engine pipelines, tools, and documentation for studio-wide adoption.",
        ],
      },
      {
        company: "Retrophiles Pvt Ltd",
        period: "Nov 2020 - March 2022",
        title: "Unreal Technical Artist",
        bullets: [
          "Contributed to feature film virtual production and previs for 'Adipurush'.",
          "Managed on-set motion capture (Xsens, Faceware) for over 100 shooting days.",
        ],
      },
    ],
    work: [
      { title: "Virtual Production Environments", tag: "Virtual Production / Unreal Engine", url: "https://youtu.be/Q0-G3h27wFA", thumbnail: "https://img.youtube.com/vi/Q0-G3h27wFA/maxresdefault.jpg" },
      { title: "Vera AI Trailer Rough", tag: "AI Visualization / Trailer", url: "https://youtu.be/JHSpk4rtfDk", thumbnail: "https://img.youtube.com/vi/JHSpk4rtfDk/maxresdefault.jpg" },
      { title: "Unreal Showreel", tag: "Unreal Engine / Showreel", url: "https://youtu.be/oB8yZfsfExI", thumbnail: "https://img.youtube.com/vi/oB8yZfsfExI/maxresdefault.jpg" },
      { title: "Nill BLR Realtime Team Reel", tag: "Real-Time / Team Reel", url: "https://youtu.be/icBBq_GJWcE", thumbnail: "https://img.youtube.com/vi/icBBq_GJWcE/maxresdefault.jpg" },
    ],
  },
  "partner-2": {
    name: "Partner Two",
    firstName: "PARTNER",
    lastName: "TWO",
    role: "Creative Director",
    tagline: "Bringing bold visions to life through design and strategy.",
    portrait: partner2Portrait,
    bio: [
      "A Creative Director with a passion for pushing boundaries in visual storytelling and brand experiences.",
      "Expertise spans across creative direction, brand strategy, and art direction for global clients.",
    ],
    services: [
      { title: "Creative Direction", description: "Vision-driven leadership for campaigns and experiences." },
      { title: "Brand Strategy", description: "Building compelling brand narratives and visual identities." },
      { title: "Art Direction", description: "Crafting visual stories that captivate and inspire." },
      { title: "Motion Design", description: "Dynamic animated content for digital and broadcast media." },
      { title: "Concept Development", description: "From initial spark to fully realized creative concepts." },
      { title: "Production Oversight", description: "Managing creative workflows from ideation to delivery." },
    ],
    capabilities: [
      { category: "Design", items: ["Figma", "Photoshop", "Illustrator", "InDesign"] },
      { category: "Motion", items: ["After Effects", "Cinema 4D", "DaVinci Resolve"] },
      { category: "3D", items: ["Blender", "Unreal Engine", "Substance Painter"] },
      { category: "Strategy", items: ["Brand Development", "Creative Strategy", "User Research"] },
    ],
    experience: [
      { company: "Studio Name", period: "2023 - Present", title: "Creative Director", bullets: ["Led creative direction for major brand campaigns.", "Developed visual strategies for digital-first experiences."] },
      { company: "Agency Name", period: "2020 - 2023", title: "Senior Art Director", bullets: ["Directed visual storytelling for global brands.", "Managed cross-functional creative teams."] },
    ],
  },
  "partner-3": {
    name: "Partner Three",
    firstName: "PARTNER",
    lastName: "THREE",
    role: "Technical Lead",
    tagline: "Engineering robust solutions for complex creative challenges.",
    portrait: partner3Portrait,
    bio: [
      "A Technical Lead specializing in scalable architectures and creative engineering solutions.",
      "Deep expertise in full-stack development, cloud infrastructure, and creative tooling.",
    ],
    services: [
      { title: "Full-Stack Development", description: "End-to-end web and application development." },
      { title: "Cloud Architecture", description: "Scalable infrastructure design and deployment." },
      { title: "API Development", description: "Robust API design and integration services." },
      { title: "DevOps & CI/CD", description: "Automated deployment pipelines and infrastructure." },
      { title: "Technical Consulting", description: "Architecture review and technology strategy." },
      { title: "Performance Optimization", description: "Speed and efficiency improvements across the stack." },
    ],
    capabilities: [
      { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Three.js"] },
      { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL"] },
      { category: "Cloud", items: ["AWS", "GCP", "Docker", "Kubernetes"] },
      { category: "Tools", items: ["Git", "CI/CD", "Terraform", "Monitoring"] },
    ],
    experience: [
      { company: "Tech Company", period: "2022 - Present", title: "Technical Lead", bullets: ["Architected scalable cloud-native applications.", "Led engineering teams on high-impact projects."] },
      { company: "Startup Name", period: "2019 - 2022", title: "Senior Engineer", bullets: ["Built real-time data processing pipelines.", "Developed custom creative tools and integrations."] },
    ],
  },
  "partner-4": {
    name: "Partner Four",
    firstName: "PARTNER",
    lastName: "FOUR",
    role: "Design Lead",
    tagline: "Crafting intuitive experiences at the intersection of art and technology.",
    bio: [
      "A Design Lead focused on creating meaningful user experiences and beautiful interfaces.",
      "Combines deep UX research with visual design expertise to build products people love.",
    ],
    services: [
      { title: "UX Research", description: "Deep user research to inform design decisions." },
      { title: "UI Design", description: "Beautiful, functional interface design." },
      { title: "Design Systems", description: "Scalable component libraries and design tokens." },
      { title: "Prototyping", description: "Interactive prototypes for testing and validation." },
      { title: "Product Strategy", description: "Data-driven product design and iteration." },
      { title: "Accessibility", description: "Inclusive design practices for all users." },
    ],
    capabilities: [
      { category: "Design", items: ["Figma", "Sketch", "Adobe Creative Suite"] },
      { category: "Prototyping", items: ["Framer", "Principle", "ProtoPie"] },
      { category: "Research", items: ["User Interviews", "Usability Testing", "Analytics"] },
      { category: "Development", items: ["HTML/CSS", "React", "Tailwind CSS"] },
    ],
    experience: [
      { company: "Design Studio", period: "2023 - Present", title: "Design Lead", bullets: ["Leading design for consumer and enterprise products.", "Established design system used across multiple products."] },
      { company: "Product Company", period: "2020 - 2023", title: "Senior UX Designer", bullets: ["Redesigned core user flows improving conversion by 40%.", "Conducted extensive user research and testing programs."] },
    ],
  },
};

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TeamMemberPage() {
  const { slug } = useParams<{ slug: string }>();
  const member = teamData[slug || ""];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Member not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-4">
              <span className="text-foreground">{member.firstName}</span>{" "}
              <span className="text-gradient italic">{member.lastName}</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-body mb-6">
            {member.role}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-muted-foreground text-lg font-body max-w-xl mx-auto">
            {member.tagline}
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Where Art Meets <span className="text-gradient italic">Engineering</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
            <div className="space-y-6">
              {member.bio.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <p className="text-muted-foreground font-body leading-relaxed">{p}</p>
                </AnimatedSection>
              ))}
            </div>
            {member.portrait && (
              <AnimatedSection delay={0.3} className="hidden md:block">
                <img src={member.portrait} alt={member.name} className="w-64 rounded-sm glow-border" />
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Work */}
      {member.work && member.work.length > 0 && (
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Selected <span className="text-gradient italic">Work</span>
              </h2>
              <p className="text-muted-foreground font-body mb-12">Highlighting recent projects.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.work.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="group block rounded-sm overflow-hidden glass hover:glow-border transition-all duration-500">
                    <div className="aspect-video overflow-hidden">
                      <img src={item.thumbnail} alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-foreground flex items-center gap-2">
                        {item.title}
                        <ExternalLink className="w-3 h-3 text-muted-foreground" />
                      </h3>
                      <p className="text-primary text-xs tracking-[0.15em] uppercase font-body mt-1">{item.tag}</p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
              <span className="text-gradient italic">Services</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 glass rounded-sm hover:glow-border transition-all duration-300">
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{s.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
              <span className="text-gradient italic">Capabilities</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.capabilities.map((cap, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 glass rounded-sm">
                  <h3 className="font-display font-bold text-foreground text-sm mb-4">{cap.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cap.items.map((item) => (
                      <span key={item} className="px-3 py-1 text-xs font-body text-primary bg-primary/10 rounded-sm border border-primary/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
              Professional <span className="text-gradient italic">Experience</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {member.experience.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 glass rounded-sm hover:glow-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary text-sm font-body">{exp.title}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-body whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-muted-foreground text-sm font-body pl-4 border-l-2 border-primary/20">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

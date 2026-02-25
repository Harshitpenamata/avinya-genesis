import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import partner2Portrait from "@/assets/partner2-portrait.jpg";
import partner3Portrait from "@/assets/partner3-portrait.jpg";
import laxminarayanPortrait from "@/assets/laxminarayan-portrait.jpg";
import collageHarshit from "@/assets/collage-harshit.jpg";
import collageAbhishek from "@/assets/collage-abhishek.jpg";
import collageBhanuteja from "@/assets/collage-bhanuteja.jpg";
import collageLaxminarayan from "@/assets/collage-laxminarayan.jpg";

const teamData: Record<string, {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bioHeading: [string, string];
  bio: string[];
  heroCollage?: string;
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
    heroCollage: collageHarshit,
    portrait: "https://murarishettybhanu.github.io/avinyainteractive/harshit-portrait-t.png",
    bioHeading: ["Where Art Meets", "Engineering"],
    bio: [
      "I live at the crossroads of cinema and code. Trained in traditional filmmaking yet fluent in real-time engines, I've spent my career building the invisible bridges between a director's vision and the pixels on an LED wall.",
      "From supervising virtual production stages on feature films like 'Those About to Die' and 'Here' at DNEG, to crafting immersive experiences with Unreal Engine at The Mill for Disney and Amazon — I've always been drawn to the impossible shot, the one that needs technology to bend just a little further.",
      "As an Epic Games Authorized Instructor and mentor at CG Spectrum, I also pay it forward — training the next wave of artists and technologists to push boundaries I haven't even imagined yet.",
      "I believe the best technology is invisible — it should amplify creativity, not constrain it.",
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
  abhishek: {
    name: "Abhishek Sonnakula",
    firstName: "ABHISHEK",
    lastName: "SONNAKULA",
    role: "Software Engineer",
    tagline: "Building scalable software from front-end to back-end.",
    heroCollage: collageAbhishek,
    portrait: partner2Portrait,
    bioHeading: ["Code is My", "Canvas"],
    bio: [
      "I'm the kind of engineer who gets excited about a clean API contract and an elegant database schema in equal measure. Full-stack isn't just a title for me — it's how I think. Every feature I build, I see the whole picture: from the pixel the user touches to the query that hits the database.",
      "My path took me from shipping enterprise applications at HTC Global Services to co-founding the engineering core at MultiSet AI, where I architected an AI platform from a blank repository to a production system serving real users.",
      "I move between React frontends, Node backends, mobile apps, and cloud infrastructure with the same fluency — because the best products don't care where the stack boundaries are, and neither do I.",
      "Great software isn't just functional — it's craft. Clean code, thoughtful architecture, and an obsession with the details that users feel but never see.",
    ],
    services: [
      { title: "Full-Stack Development", description: "End-to-end web application development with modern frameworks and scalable architecture." },
      { title: "Mobile App Development", description: "Cross-platform mobile applications built for performance and usability." },
      { title: "Backend & API Engineering", description: "Robust server-side systems, RESTful APIs, and microservices architecture." },
      { title: "Database Architecture", description: "Schema design, optimization, and management for SQL and NoSQL databases." },
      { title: "AI & Software Integration", description: "Integrating AI/ML capabilities into production software products." },
      { title: "DevOps & Deployment", description: "CI/CD pipelines, cloud infrastructure, and production deployment strategies." },
    ],
    capabilities: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
      { category: "Backend", items: ["Node.js", "Python", "Express", "Django", "FastAPI"] },
      { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
      { category: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
      { category: "AI & Tools", items: ["OpenAI API", "LangChain", "Git", "Figma", "Jira"] },
    ],
    experience: [
      {
        company: "MultiSet AI",
        period: "2024 - Present",
        title: "Founding Engineer (Full Stack)",
        bullets: [
          "Leading full-stack development for an AI-powered platform from zero to launch.",
          "Architecting scalable systems handling complex AI workflows and data pipelines.",
        ],
      },
      {
        company: "HTC Global Services",
        period: "2020 - 2024",
        title: "Senior Software Engineer",
        bullets: [
          "Built and maintained enterprise-scale web applications for global clients.",
          "Led development of front-end and back-end modules across multiple product lines.",
          "Mentored junior developers and established coding standards for the team.",
        ],
      },
    ],
  },
  bhanuteja: {
    name: "Murarishetty Bhanuteja",
    firstName: "MURARISHETTY",
    lastName: "BHANUTEJA",
    role: "Software Engineer",
    tagline: "Engineering robust solutions and leading teams to deliver at scale.",
    heroCollage: collageBhanuteja,
    portrait: partner3Portrait,
    bioHeading: ["Systems That", "Scale"],
    bio: [
      "I don't just write code — I build the systems that other engineers build on top of. As a Tech Lead, my job is to see three steps ahead: the architecture that won't buckle under scale, the pattern that saves the team weeks of refactoring, the decision that keeps shipping velocity high without sacrificing quality.",
      "At HTC Global Services, I lead cross-functional engineering teams delivering enterprise solutions for clients across the globe. From designing microservices architectures to establishing coding standards and mentoring junior developers, I operate at the intersection of technical depth and team leadership.",
      "I studied Computer Science at Guru Nanak Institutions, but the real education happened in production — debugging systems at 2 AM, learning that the best architecture is the one your team can actually maintain, and discovering that clear communication is a tech lead's most powerful tool.",
      "The best technology teams are built on trust, relentless standards, and the shared belief that 'good enough' never is.",
    ],
    services: [
      { title: "Technical Leadership", description: "Leading engineering teams with clear vision, architecture, and execution strategy." },
      { title: "Software Architecture", description: "Designing scalable, maintainable system architectures for enterprise applications." },
      { title: "Web Application Development", description: "Building modern web applications with cutting-edge frameworks and tools." },
      { title: "Cloud Solutions", description: "Cloud-native application development and infrastructure management." },
      { title: "Team Mentorship", description: "Growing engineering talent through code reviews, pair programming, and knowledge sharing." },
      { title: "Technical Consulting", description: "Architecture reviews, technology strategy, and process optimization." },
    ],
    capabilities: [
      { category: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "HTML/CSS"] },
      { category: "Backend", items: ["Java", "Spring Boot", "Node.js", "Python", "REST APIs"] },
      { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"] },
      { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Jenkins", "CI/CD"] },
      { category: "Architecture", items: ["Microservices", "System Design", "Design Patterns", "Agile/Scrum"] },
      { category: "Tools", items: ["Git", "Jira", "Confluence", "SonarQube", "Postman"] },
    ],
    experience: [
      {
        company: "HTC Global Services",
        period: "2020 - Present",
        title: "Tech Lead",
        bullets: [
          "Leading cross-functional engineering teams on enterprise-scale projects for global clients.",
          "Architecting scalable microservices-based solutions and establishing technical standards.",
          "Driving code quality initiatives, mentoring developers, and conducting architecture reviews.",
        ],
      },
      {
        company: "Guru Nanak Institutions Technical Campus",
        period: "2016 - 2020",
        title: "B.Tech in Computer Science & Engineering",
        bullets: [
          "Completed Bachelor of Technology with focus on Computer Science and Engineering.",
          "Built foundational skills in algorithms, data structures, and software engineering.",
        ],
      },
    ],
  },
  laxminarayan: {
    name: "Laxminarayan Muralidharan",
    firstName: "LAXMINARAYAN",
    lastName: "MURALIDHARAN",
    role: "Product Designer",
    tagline: "Crafting impactful digital products through design thinking and user empathy.",
    heroCollage: collageLaxminarayan,
    portrait: laxminarayanPortrait,
    bioHeading: ["Pixels With", "Purpose"],
    bio: [
      "Design, for me, has never been about making things pretty — it's about making things make sense. I started as a graphic designer, fell in love with the 'why' behind every interface, and evolved into a product designer who obsesses over the invisible moments: the micro-interaction that builds trust, the flow that feels effortless, the system that scales without losing its soul.",
      "At Publicis Sapient, I lead experience design for large-scale digital transformation projects — the kind where a single design decision ripples across millions of users. I blend deep user research with interaction design and visual storytelling to create products that don't just work, but resonate.",
      "As a Design Mentor at Designerrs Academy, I also invest in the next generation — reviewing portfolios, running critiques, and reminding aspiring designers that empathy is their most powerful tool.",
      "My startup roots taught me to move fast, prototype fearlessly, and always keep the user at the center. Five years in, that hasn't changed — if anything, it's only gotten sharper.",
    ],
    services: [
      { title: "UX/UI Design", description: "End-to-end user experience and interface design for web and mobile products." },
      { title: "Product Design", description: "Strategic product design from research and ideation to final delivery." },
      { title: "Design Systems", description: "Scalable component libraries, design tokens, and brand consistency frameworks." },
      { title: "User Research", description: "Deep user research, personas, journey mapping, and usability testing." },
      { title: "Design Mentorship", description: "Coaching aspiring designers through structured programs and portfolio reviews." },
      { title: "Brand & Visual Design", description: "Brand identity, visual storytelling, and graphic design for digital platforms." },
    ],
    capabilities: [
      { category: "Design Tools", items: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator"] },
      { category: "Prototyping", items: ["Framer", "Principle", "ProtoPie", "InVision"] },
      { category: "Research", items: ["User Interviews", "Usability Testing", "A/B Testing", "Analytics"] },
      { category: "Development", items: ["HTML/CSS", "React", "Tailwind CSS", "Webflow"] },
      { category: "Strategy", items: ["Design Thinking", "Product Strategy", "Information Architecture", "Accessibility"] },
      { category: "Motion & 3D", items: ["After Effects", "Lottie", "Blender", "Cinema 4D"] },
    ],
    experience: [
      {
        company: "Publicis Sapient",
        period: "2022 - Present",
        title: "Senior Experience Designer",
        bullets: [
          "Leading UX/UI design for large-scale digital transformation projects for global enterprise clients.",
          "Establishing design systems and component libraries for consistent cross-platform experiences.",
          "Collaborating with engineering, product, and strategy teams to deliver user-centered solutions.",
        ],
      },
      {
        company: "Designerrs Academy",
        period: "2023 - Present",
        title: "Design Mentor",
        bullets: [
          "Mentoring aspiring designers through structured product design programs.",
          "Conducting portfolio reviews, design critiques, and industry readiness workshops.",
        ],
      },
      {
        company: "Startup Experience",
        period: "2019 - 2022",
        title: "Product Designer",
        bullets: [
          "Designed end-to-end product experiences for multiple early-stage startups.",
          "Built design processes from scratch, including research workflows and design systems.",
        ],
      },
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
        {/* Collage background */}
        {member.heroCollage && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={member.heroCollage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </motion.div>
        )}
        <div className="absolute inset-0 z-[1]">
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
              {member.bioHeading[0]} <span className="text-gradient italic">{member.bioHeading[1]}</span>
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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import partner2Portrait from "@/assets/partner2-portrait.jpg";
import partner3Portrait from "@/assets/partner3-portrait.jpg";
import laxminarayanPortrait from "@/assets/laxminarayan-portrait.jpg";
import bgVideoHarshit from "@/assets/bg-video-harshit.mp4";
import bgVideoAbhishek from "@/assets/bg-video-abhishek.mp4";
import bgVideoBhanuteja from "@/assets/bg-video-bhanuteja.mp4";
import bgVideoLaxminarayan from "@/assets/bg-video-laxminarayan.mp4";

const teamData: Record<string, {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bioHeading: [string, string];
  bio: string[];
  heroVideo?: string;
  portrait?: string;
  services: { title: string; description: string }[];
  capabilities: { category: string; items: string[] }[];
  experience: { company: string; period: string; title: string; bullets: string[] }[];
  work?: { title: string; tag: string; url: string; thumbnail: string }[];
  projects?: { title: string; role: string; description: string; value: string; features: string[]; techStack: string[] }[];
}> = {
  harshit: {
    name: "Harshit Penamata",
    firstName: "HARSHIT",
    lastName: "PENAMATA",
    role: "Creative Technologist",
    tagline: "Bridging cinematic storytelling with real-time technology.",
    heroVideo: bgVideoHarshit,
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
    heroVideo: bgVideoAbhishek,
    portrait: partner2Portrait,
    bioHeading: ["Full Stack", "Developer"],
    bio: [
      "I am a full stack web developer with hands-on experience in software development, mobile app creation, front-end and back-end websites, and database/server management. I am passionate about building excellent websites and software that improve the lives of those around me.",
      "My journey has taken me from building enterprise-scale applications at HTC Global Services to taking on the role of Founding Engineer at MultiSet AI, where I lead full-stack development for an AI-powered platform from the ground up.",
      "I thrive on solving complex problems across the entire stack — from crafting responsive user interfaces with React and Next.js to architecting robust backend systems with Node.js and Python, managing cloud infrastructure on AWS, and designing scalable database solutions.",
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
    name: "Bhanu Teja Murarishetty",
    firstName: "BHANU TEJA",
    lastName: "MURARISHETTY",
    role: "Senior Software Engineer",
    tagline: "Result-oriented engineer designing scalable, high-performance full-stack solutions.",
    heroVideo: bgVideoBhanuteja,
    portrait: partner3Portrait,
    bioHeading: ["Systems That", "Scale"],
    bio: [
      "Result-oriented Senior Software Engineer with more than 5 years of experience in designing and implementing scalable, high-performance software solutions. Specialized in full-stack development using the MERN stack, with strong proficiency in Node.js for backend development and React Native for building cross-platform mobile applications.",
      "Proven ability to lead technical teams, streamline workflows, and deliver impactful products in dynamic, fast-paced environments. From building doorstep car care platforms to COVID-19 contact tracing systems for government authorities, I thrive on building products that make a real difference.",
      "I studied Computer Science at Guru Nanak Institutions, but the real education happened in production — debugging systems at 2 AM, learning that the best architecture is the one your team can actually maintain, and discovering that clear communication is a tech lead's most powerful tool.",
    ],
    services: [
      { title: "Technical Leadership", description: "Leading engineering teams with clear vision, architecture, and execution strategy." },
      { title: "Full-Stack Development", description: "End-to-end web and mobile application development with the MERN stack." },
      { title: "Mobile App Development", description: "Cross-platform mobile applications with React Native for iOS and Android." },
      { title: "Backend & API Engineering", description: "Robust server-side systems, RESTful APIs, and microservices architecture with Node.js." },
      { title: "Cloud & DevOps", description: "AWS infrastructure, Docker containerization, and production deployment." },
      { title: "Team Mentorship", description: "Growing engineering talent through code reviews, pair programming, and knowledge sharing." },
    ],
    capabilities: [
      { category: "Frontend", items: ["React.js", "React Native", "Material-UI", "TypeScript", "JavaScript", "HTML/CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "Python", "C#", "RESTful APIs"] },
      { category: "Database & Cloud", items: ["MongoDB", "Redis", "AWS", "SQS", "Cloudflare", "Docker"] },
      { category: "Tools & Testing", items: ["Git", "Jest", "Selenium", "Redux Thunk"] },
    ],
    experience: [
      {
        company: "HTC Global Services",
        period: "May 2025 - Present",
        title: "Senior Software Engineer",
        bullets: [
          "Developing and maintaining robust backend microservices using NestJS and Node.js for American Family Insurance (AmFam).",
          "Designing and implementing RESTful APIs to handle insurance data processing, policy management, and business logic.",
          "Collaborating with cross-functional teams across global delivery centers to deliver production-ready software.",
        ],
      },
      {
        company: "Ravini Technologies Pvt Ltd (HONC)",
        period: "May 2023 - May 2025",
        title: "Tech Lead",
        bullets: [
          "Led and mentored a cross-functional team of 8 developers, guiding both frontend and backend development.",
          "Took end-to-end ownership of the Honc product, a platform providing doorstep car care services.",
          "Established and enforced best practices for manual testing, ensuring consistent, bug-free releases.",
          "Acted as a bridge between technical teams and stakeholders to align product goals with technical feasibility.",
        ],
      },
      {
        company: "Ravini Technologies Pvt Ltd (HONC)",
        period: "Jul 2022 - May 2023",
        title: "Senior Software Development Engineer",
        bullets: [
          "Enhanced the user experience for the Honc app by developing responsive, feature-rich frontend components.",
          "Built and integrated backend and frontend features for the partner app, enabling job availability views and workflows.",
          "Designed and implemented an admin dashboard using React.js for managing users, tracking jobs, and monitoring system performance.",
        ],
      },
      {
        company: "Ravini Technologies Pvt Ltd (HONC)",
        period: "Aug 2020 - Jul 2022",
        title: "Software Development Engineer",
        bullets: [
          "Contributed to both frontend and backend development of customer-facing app, partner app and dashboard.",
          "Built and maintained backend services including APIs, data processing, and business logic.",
          "Worked closely with senior developers, QA, and product teams to deliver timely and high-quality software releases.",
        ],
      },
      {
        company: "XLenz Inc",
        period: "Dec 2019 - Aug 2020",
        title: "Software Development Engineer",
        bullets: [
          "Developed and maintained RESTful APIs using Node.js and MongoDB for backend infrastructure.",
          "Performed light development in C# within Unity for interactive AR elements.",
          "Collaborated with cross-functional teams to implement and deploy AR functionalities.",
        ],
      },
    ],
    projects: [
      {
        title: "HONC – Doorstep Car Care Platform",
        role: "Tech Lead / Full Stack Developer",
        description: "Led development of HONC, a doorstep car care service platform, managing a cross-functional team of 8 developers. Built scalable backend services and responsive frontend features.",
        value: "Delivered a production-ready platform serving thousands of users, improving operational efficiency and enabling smooth communication between customers, partners, and admins.",
        features: [
          "Partner app with job availability, acceptance, and tracking workflows",
          "Customer-facing app with booking, service tracking, and payment integration",
          "Admin dashboard for user management, job monitoring, and performance analytics",
        ],
        techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "Docker", "Redis"],
      },
      {
        title: "DoorPe – The Neighborhood App",
        role: "Full Stack Developer",
        description: "Developed DoorPe, a social networking app designed to foster community engagement and local business discovery. The app allows neighbors to connect, share updates, and explore exclusive offers.",
        value: "Strengthened community engagement while giving local businesses a digital presence to reach nearby customers.",
        features: [
          "Community newsfeed for posts, images, and discussions",
          "Business discovery and promotions",
          "Simple, user-friendly mobile experience",
        ],
        techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
      },
      {
        title: "COVID-19 Contact Tracing Web Application",
        role: "Backend & Full Stack Developer",
        description: "Built a contact tracing platform for the Telangana Police Department during the pandemic. The system enabled efficient case tracking, monitoring of exposure chains, and quick intervention.",
        value: "Helped government authorities manage COVID-19 risks more effectively, improving response time and reducing manual workloads.",
        features: [
          "Real-time case tracking and management",
          "Integration with official health data for accuracy",
          "Secure storage of sensitive data with role-based access controls",
        ],
        techStack: ["Node.js", "Express.js", "MongoDB", "React.js"],
      },
      {
        title: "Doctor Duty Roster Application",
        role: "Full Stack Developer",
        description: "Developed a duty roster management system for doctors at ESIC Hyderabad. The platform automated scheduling, reducing manual errors and ensuring balanced shift distribution.",
        value: "Improved hospital efficiency by streamlining doctor scheduling, ensuring optimal staff coverage across departments.",
        features: [
          "Roster generation with conflict detection",
          "Department-wise scheduling and shift coverage tracking",
          "Admin interface for monitoring and adjustments",
        ],
        techStack: ["Node.js", "React.js", "MongoDB", "Express.js"],
      },
      {
        title: "XLenz – AR Application Platform",
        role: "Software Development Engineer",
        description: "Contributed to the development of immersive AR applications by designing and maintaining backend APIs to support seamless integration between a React Native mobile app and Unity-based AR interfaces.",
        value: "Enabled cross-platform AR experiences by bridging mobile and Unity environments, ensuring scalability and performance.",
        features: [
          "Designed RESTful APIs using Node.js & MongoDB",
          "Integrated backend services with Unity scripts for real-time interactions",
          "Optimized performance for AR-ready applications",
        ],
        techStack: ["Node.js", "Express.js", "MongoDB", "React Native", "Unity (C#)"],
      },
      {
        title: "eKruPay – Digital Payments & Transaction Platform",
        role: "Full Stack / Backend Developer",
        description: "Worked on eKruPay, a digital payments platform focused on enabling secure and reliable online transactions. Contributed to backend development and API design to support payment workflows, user management, and system integrations.",
        value: "Helped build a scalable and integration-ready payment backend, ensuring secure data handling and smooth transaction flows suitable for real-world fintech use cases.",
        features: [
          "Secure REST APIs for transaction processing and user operations",
          "Authentication and authorization for protected payment flows",
          "Backend services to support wallet/payment-related operations",
          "Integration-ready APIs for frontend and third-party services",
          "Emphasis on performance, reliability, and data consistency",
        ],
        techStack: ["Node.js", "Express.js", "NestJS", "TypeScript", "MongoDB", "REST APIs"],
      },
    ],
  },
  laxminarayan: {
    name: "Laxminarayan Muralidharan",
    firstName: "LAXMINARAYAN",
    lastName: "MURALIDHARAN",
    role: "Product Designer",
    tagline: "Crafting impactful digital products through design thinking and user empathy.",
    heroVideo: bgVideoLaxminarayan,
    portrait: laxminarayanPortrait,
    bioHeading: ["Pixels With", "Purpose"],
    bio: [
      "Passionate about creating impactful digital products, I bring 5 years of experience in product design and development, having started my journey as a graphic designer. My background in the fast-paced startup world has given me a unique skill set — blending creativity with strategic thinking to deliver user-centered solutions.",
      "At Publicis Sapient, I lead experience design for large-scale digital transformation projects, establishing design systems and component libraries for consistent cross-platform experiences. I collaborate with engineering, product, and strategy teams to deliver solutions that resonate with users.",
      "As a Design Mentor at Designerrs Academy, I invest in the next generation — conducting portfolio reviews, design critiques, and industry readiness workshops to help aspiring designers build their craft.",
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
        {member.heroVideo && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <video
              src={member.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
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

      {/* Best Projects (video work for Harshit) */}
      {member.work && member.work.length > 0 && (
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Best <span className="text-gradient italic">Projects</span>
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

      {/* Projects Section */}
      {member.projects && member.projects.length > 0 && (
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Best <span className="text-gradient italic">Projects</span>
              </h2>
              <p className="text-muted-foreground font-body mb-12">Key projects and contributions.</p>
            </AnimatedSection>
            <div className="space-y-6">
              {member.projects.map((project, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-8 glass rounded-sm hover:glow-border transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">{project.title}</h3>
                        <p className="text-primary text-sm font-body">{project.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm font-body mb-4">{project.description}</p>
                    <p className="text-muted-foreground text-sm font-body mb-4 italic border-l-2 border-primary/30 pl-4">{project.value}</p>
                    <div className="mb-4">
                      <h4 className="text-foreground text-xs font-display font-bold uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((f, j) => (
                          <li key={j} className="text-muted-foreground text-sm font-body pl-4 border-l-2 border-primary/20">{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-body text-primary bg-primary/10 rounded-sm border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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

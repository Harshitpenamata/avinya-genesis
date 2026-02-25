import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, ArrowUpRight, Send, User, MessageSquare } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission — connect backend later
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent! We'll get back to you soon.");
  };

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
            className="flex items-center justify-center gap-2 text-muted-foreground mb-20"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-body text-sm">India • Global</span>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={isFormInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-sm p-8 md:p-12 space-y-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-display font-bold text-foreground">Send us a message</h3>
              <p className="text-muted-foreground font-body text-sm mt-1">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <User className="w-4 h-4 text-primary" />
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your name"
                  maxLength={100}
                  className={`w-full bg-background/50 border ${errors.name ? "border-destructive" : "border-border/40 focus:border-primary"} rounded-sm px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/50 outline-none transition-colors duration-300`}
                />
                {errors.name && <p className="text-destructive text-xs font-body">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  maxLength={255}
                  className={`w-full bg-background/50 border ${errors.email ? "border-destructive" : "border-border/40 focus:border-primary"} rounded-sm px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/50 outline-none transition-colors duration-300`}
                />
                {errors.email && <p className="text-destructive text-xs font-body">{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="contact-message" className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <MessageSquare className="w-4 h-4 text-primary" />
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your project..."
                maxLength={2000}
                rows={5}
                className={`w-full bg-background/50 border ${errors.message ? "border-destructive" : "border-border/40 focus:border-primary"} rounded-sm px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 resize-none`}
              />
              <div className="flex items-center justify-between">
                {errors.message && <p className="text-destructive text-xs font-body">{errors.message}</p>}
                <p className="text-muted-foreground/40 text-xs font-body ml-auto">{form.message.length}/2000</p>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(155 70% 45% / 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <motion.div
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

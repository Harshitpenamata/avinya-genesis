import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, ArrowUpRight, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

function FloatingInput({
  id, label, type = "text", value, error, maxLength, onChange,
}: {
  id: string; label: string; type?: string; value: string; error?: string; maxLength: number;
  onChange: (v: string) => void;
}) {
  const hasValue = value.length > 0;
  return (
    <div className="relative group">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        placeholder=" "
        className="peer w-full bg-transparent border-none outline-none pt-6 pb-2 text-foreground font-body text-base"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-body ${
          hasValue
            ? "top-0 text-xs text-primary"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground/60 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary"
        }`}
      >
        {label}
      </label>
      <div className="h-px w-full bg-border/30 relative">
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-primary"
          initial={{ scaleX: 0 }}
          whileInView={hasValue ? { scaleX: 1 } : {}}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute bottom-0 left-0 h-px w-0 bg-primary peer-focus:w-full transition-all duration-500" />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive text-xs font-body mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function FloatingTextarea({
  id, label, value, error, maxLength, onChange,
}: {
  id: string; label: string; value: string; error?: string; maxLength: number;
  onChange: (v: string) => void;
}) {
  const hasValue = value.length > 0;
  return (
    <div className="relative group">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        rows={4}
        placeholder=" "
        className="peer w-full bg-transparent border-none outline-none pt-6 pb-2 text-foreground font-body text-base resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-body ${
          hasValue
            ? "top-0 text-xs text-primary"
            : "top-3 text-sm text-muted-foreground/60 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary"
        }`}
      >
        {label}
      </label>
      <div className="h-px w-full bg-border/30 relative">
        <div className="absolute bottom-0 left-0 h-px w-0 bg-primary peer-focus:w-full transition-all duration-500" />
      </div>
      <div className="flex items-center justify-between mt-1.5">
        {error ? (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-destructive text-xs font-body"
          >
            {error}
          </motion.p>
        ) : <span />}
        <span className="text-muted-foreground/30 text-xs font-body">{value.length}/{maxLength}</span>
      </div>
    </div>
  );
}

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
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <section id="contact" ref={sectionRef} aria-label="Contact Us" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-32" />

      <motion.div className="container mx-auto max-w-3xl" style={{ scale, opacity }}>
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
            className="text-muted-foreground font-body max-w-xl mx-auto mb-16"
          >
            Have a project in mind? We'd love to bring your vision to life.
          </motion.p>
        </div>

        {/* Minimal Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <FloatingInput
                id="contact-name"
                label="Your name"
                value={form.name}
                error={errors.name}
                maxLength={100}
                onChange={(v) => handleChange("name", v)}
              />
              <FloatingInput
                id="contact-email"
                label="Email address"
                type="email"
                value={form.email}
                error={errors.email}
                maxLength={255}
                onChange={(v) => handleChange("email", v)}
              />
            </div>

            <FloatingTextarea
              id="contact-message"
              label="Tell us about your project..."
              value={form.message}
              error={errors.message}
              maxLength={2000}
              onChange={(v) => handleChange("message", v)}
            />

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 text-primary font-body text-sm tracking-[0.2em] uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                )}
                Send Message
                <div className="h-px flex-1 min-w-[40px] bg-primary/30 group-hover:bg-primary transition-colors" />
              </motion.button>

              <div className="hidden sm:block h-px flex-1 bg-border/20" />

              <motion.a
                href="mailto:hello@avinyainteractive.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors group"
                whileHover={{ x: 2 }}
              >
                <Mail className="w-4 h-4" />
                hello@avinyainteractive.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mt-20"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-body text-sm">India • Global</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

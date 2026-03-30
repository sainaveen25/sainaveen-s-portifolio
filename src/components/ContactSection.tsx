import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Send, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import TiltCard from "./TiltCard";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("mailto:sainaveen7691@gmail.com", "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setSending(true);
    const { error } = await supabase.from("contact_messages" as any).insert([
      { name: name.trim().slice(0, 100), email: email.trim().slice(0, 255), message: message.trim().slice(0, 1000) },
    ] as any);

    setSending(false);
    if (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } else {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3 text-foreground mb-5">
            Let's work<br />
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-14 text-lg">
            I'm open to new opportunities — whether it's a full-time role, a contract, or just a conversation. Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">Send me a message</h3>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-60"
            >
              {sending ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle size={16} /> Sent!</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
          </motion.form>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <TiltCard as="a" href="mailto:sainaveen7691@gmail.com" onClick={handleMailClick} className="bento-card group flex items-center gap-4">
              <Mail className="text-primary group-hover:scale-110 transition-transform duration-300 shrink-0" size={22} />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">sainaveen7691@gmail.com</p>
              </div>
            </TiltCard>
            <TiltCard as="a" href="tel:+13528427691" className="bento-card group flex items-center gap-4">
              <Phone className="text-primary group-hover:scale-110 transition-transform duration-300 shrink-0" size={22} />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="text-xs text-muted-foreground">+1 (352) 842-7691</p>
              </div>
            </TiltCard>
            <TiltCard className="bento-card flex items-center gap-4">
              <MapPin className="text-primary shrink-0" size={22} />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-xs text-muted-foreground">Tampa, FL</p>
              </div>
            </TiltCard>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleMailClick}
                className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300"
              >
                <Mail size={16} /> Say Hello
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a href="https://github.com/sainaveen25" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground font-semibold text-sm px-5 py-3 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/s-sainaveen" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground font-semibold text-sm px-5 py-3 rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-300">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

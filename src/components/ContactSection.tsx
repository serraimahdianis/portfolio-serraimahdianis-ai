import { useState, FormEvent } from 'react';
import { Translation } from '@/lib/types';
import { MessageCircle, Send, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

interface Props {
  t: Translation;
}

const ContactSection = ({ t }: Props) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@serraimahdianis.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer id="contact" className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Big CTA with background text like reference */}
        <div className="relative rounded-[4rem] overflow-hidden bg-card border border-border mb-24">
          {/* Large background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[12rem] md:text-[20rem] font-display font-extrabold uppercase tracking-tighter text-foreground/[0.03] leading-none whitespace-nowrap select-none">
              LET'S WORK
            </span>
          </div>

          <div className="relative z-10 p-12 md:p-20">
            <h2 className="text-5xl md:text-8xl font-display font-extrabold mb-6 leading-tight uppercase tracking-tighter text-center">
              {t.contact_title}
            </h2>

            {/* Centered primary CTA button */}
            <div className="flex justify-center mb-16">
              <a
                href="https://wa.me/213000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground w-40 h-40 rounded-full font-bold text-sm hover:scale-110 transition-all flex items-center justify-center glow-gold"
              >
                <span className="font-display font-extrabold text-center leading-tight">
                  Hire Me<br />Now
                </span>
              </a>
            </div>

            {/* Social links bar */}
            <div className="flex flex-wrap justify-center gap-10 text-muted-foreground font-bold uppercase tracking-[0.3em] text-[10px]">
              <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
              <a href="#" className="hover:text-foreground transition-colors">TikTok</a>
              <a href="#" className="hover:text-foreground transition-colors">Pinterest</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-3xl font-display font-extrabold mb-4 uppercase tracking-tight">
              {t.contact_title}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.footer_quote}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/213000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> {t.contact_whatsapp}
              </a>
              <a
                href="mailto:contact@serraimahdianis.com"
                className="bg-secondary border border-border text-foreground px-8 py-4 rounded-2xl font-bold text-sm hover:border-primary transition-all flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Email
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder={t.contact_name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              required
              placeholder={t.contact_email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              required
              rows={4}
              placeholder={t.contact_message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all active:scale-95 glow-gold flex items-center justify-center gap-3"
            >
              {sent ? '✓ Sent!' : <><Send size={20} /> {t.contact_send}</>}
            </button>
          </form>
        </div>

        {/* Footer bottom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start border-t border-border pt-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={profileImage}
                alt="Serrai Mahdi Anis" 
                className="w-12 h-12 rounded-xl object-cover border-2 border-primary"
              />
              <span className="font-display font-extrabold text-xl uppercase tracking-tighter">Serrai Mahdi Anis</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed italic">
              "{t.footer_quote}"
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-6">Links</h4>
            <div className="flex flex-col gap-4 text-muted-foreground font-medium text-sm">
              <a href="#" className="hover:text-primary transition-colors">{t.nav_home}</a>
              <a href="#services" className="hover:text-primary transition-colors">{t.nav_services}</a>
              <a href="#about" className="hover:text-primary transition-colors">{t.nav_about}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t.nav_contact}</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end gap-6">
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 card-dark-hover rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 card-dark-hover rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 card-dark-hover rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground">
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 card-dark-hover rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground">
                <Instagram size={20} />
              </a>
            </div>
             <div className="md:text-right">
               <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Location</p>
               <p className="text-foreground font-display font-bold">Setif, Algeria</p>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Phone</p>
              <a href="tel:+213663466364" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                +213 663 466 364
              </a>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Email</p>
              <a href="mailto:contact@serraimahdianis.com" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                contact@serraimahdianis.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
          <p>{t.footer_rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;

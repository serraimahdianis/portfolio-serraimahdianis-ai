import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import MarqueeBanner from '@/components/MarqueeBanner';
import ExpertiseSection from '@/components/ExpertiseSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';

import ContactSection from '@/components/ContactSection';
import profileImage from '@/assets/profile.jpg';
import facebookLogo from '@/assets/facebook-logo.webp';
import pinterestLogo from '@/assets/pinterest-logo.webp';
import { ArrowRight, Download, ShoppingCart, Menu, X, TrendingUp } from 'lucide-react';

const Index = () => {
  const { lang, setLang, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-all duration-500 ${isRtl ? 'text-lg lg:text-xl' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'}`
        }>

        <div className="max-w-7xl mx-auto px-6 items-center justify-between flex flex-col gap-[30px]">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.nav_home}</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{t.nav_services}</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t.nav_about}</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.nav_contact}</a>
            {/* Yellow Micro Importation Button */}
            <a 
              href="#services" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-yellow-500/50"
            >
              <ShoppingCart className="h-4 w-4" />
              {lang === 'en' ? 'Micro Import' : lang === 'fr' ? 'Micro Import' : lang === 'ar' ? 'الاستيراد المصغر' : 'Mikroimport'}
            </a>
          </div>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest py-2"
              >
                {t.nav_home}
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest py-2"
              >
                {t.nav_services}
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest py-2"
              >
                {t.nav_about}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest py-2"
              >
                {t.nav_contact}
              </a>
              {/* Yellow Micro Importation Button */}
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg w-fit"
              >
                <ShoppingCart className="h-4 w-4" />
                {lang === 'en' ? 'Micro Import' : lang === 'fr' ? 'Micro Import' : lang === 'ar' ? 'الاستيراد المصغر' : 'Mikroimport'}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Profile image with floating badges and platform logos */}
          <div className="inline-block mb-8 relative group">
            {/* Facebook Logo - Left Side */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-[-140px] md:right-[-180px]' : 'left-[-140px] md:left-[-180px]'} w-20 h-20 md:w-28 md:h-28 bg-card border-2 border-border rounded-2xl shadow-2xl flex items-center justify-center z-10 animate-bounce`} style={{ animationDuration: '3s' }}>
              <img src={facebookLogo} alt="Facebook" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              {/* Rising Traffic Animation */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full text-[10px] font-bold animate-pulse">
                  <TrendingUp size={12} />
                  <span className="animate-pulse">+247%</span>
                </div>
                <div className="w-0.5 h-4 bg-gradient-to-t from-green-500 to-transparent mt-1"></div>
              </div>
            </div>

            {/* Pinterest Logo - Right Side */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-[-140px] md:left-[-180px]' : 'right-[-140px] md:right-[-180px]'} w-20 h-20 md:w-28 md:h-28 bg-card border-2 border-border rounded-2xl shadow-2xl flex items-center justify-center z-10 animate-bounce`} style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
              <img src={pinterestLogo} alt="Pinterest" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              {/* Rising Traffic Animation */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-[10px] font-bold animate-pulse">
                  <TrendingUp size={12} />
                  <span className="animate-pulse">+189%</span>
                </div>
                <div className="w-0.5 h-4 bg-gradient-to-t from-red-500 to-transparent mt-1"></div>
              </div>
            </div>

            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] overflow-hidden border-2 border-border shadow-2xl relative transition-transform duration-500 group-hover:scale-[1.02] bg-card">
              <img
                src={profileImage}
                alt="Serrai Mahdi Anis"
                className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110" />

              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-[2.5rem]" />
            </div>

            {/* Floating badges */}
            <div className={`absolute -bottom-4 ${isRtl ? '-right-8' : '-left-8'} bg-primary text-primary-foreground px-5 py-1.5 rounded-xl font-extrabold text-[10px] uppercase tracking-widest shadow-2xl z-20 animate-float`}>
              ⚡ IT Engineer
            </div>
            <div className={`absolute top-8 ${isRtl ? '-left-10' : '-right-10'} bg-card border border-border text-foreground px-5 py-1.5 rounded-xl font-extrabold text-[10px] uppercase tracking-widest shadow-2xl z-20`} style={{ animationDelay: '2s' }}>
              🚀 Auto Entrepreneur
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 leading-[0.9] tracking-tighter uppercase">
            {t.hero_greeting} <span className="text-primary">{t.hero_name}</span> 👋
          </h1>

          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            {t.hero_desc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all active:scale-95 glow-gold flex items-center gap-2">

              {t.nav_contact} <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="bg-card border border-border text-foreground px-8 py-4 rounded-2xl font-bold hover:border-primary transition-all flex items-center gap-2">

              <Download size={18} /> {t.hero_cv}
            </a>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <MarqueeBanner />

      {/* All sections */}
      <ExpertiseSection t={t} />
      <AboutSection t={t} isRtl={isRtl} />
      <ExperienceSection t={t} />
      
      
      <ContactSection t={t} />
    </div>);

};

export default Index;
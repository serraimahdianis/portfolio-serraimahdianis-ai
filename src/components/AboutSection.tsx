import { Translation } from '@/lib/types';
import profileImage from '@/assets/profile.jpg';

interface Props {
  t: Translation;
  isRtl: boolean;
}

const AboutSection = ({ t, isRtl }: Props) => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-16">
          {t.about_title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-3/5">
            <p className="text-muted-foreground text-xl leading-relaxed font-medium mb-10">
              <span className="text-primary font-bold">⚡ Serrai Mahdi Anis</span> {t.about_desc}
            </p>

            {/* Avatar badge */}
            <div className="flex items-center gap-4 mb-10">
              <img
                src={profileImage}
                alt="Serrai Mahdi Anis"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary" />

              <div>
                <p className="font-display font-bold text-sm">Serrai Mahdi Anis</p>
                <p className="text-muted-foreground text-xs">IT Engineer & Digital Marketer</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="grid grid-cols-2 gap-6">
              <div className="card-dark p-8 text-center">
                <h4 className="text-foreground font-display font-extrabold text-4xl mb-2">3+</h4>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">{t.about_years}</p>
              </div>
              <div className="card-dark p-8 text-center">
                <h4 className="text-foreground font-display font-extrabold text-4xl mb-2">100K+</h4>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">{t.about_traffic}</p>
              </div>
              <div className="card-dark p-8 text-center">
                <h4 className="text-foreground font-display font-extrabold text-4xl mb-2">8+</h4>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">Projects</p>
              </div>
              <div className="card-dark p-8 text-center">
                <h4 className="text-foreground font-display font-extrabold text-4xl mb-2">15+</h4>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;
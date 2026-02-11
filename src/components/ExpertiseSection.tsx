import { Translation } from '@/lib/types';
import { Globe, TrendingUp, Share2, Monitor, Workflow, ShoppingCart, Lightbulb } from 'lucide-react';

interface Props {
  t: Translation;
}

const icons = [Globe, TrendingUp, Share2, Monitor, Workflow, ShoppingCart, Lightbulb];

const ExpertiseSection = ({ t }: Props) => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-16 text-center">
          {t.expertise_title}
        </h2>

        {/* Mixed grid like the reference: 2 small + 1 image on first row, then 3 on second */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.expertises.map((item, idx) => {
            const Icon = icons[idx];
            const isLast = idx === t.expertises.length - 1;
            const isOddTotal = t.expertises.length % 3 === 1;
            return (
              <div
                key={idx}
                className={`p-8 md:p-10 rounded-[2rem] group card-dark-hover flex flex-col gap-6 relative overflow-hidden ${
                  isLast && isOddTotal ? 'md:col-start-2' : ''
                }`}
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 glow-gold-sm">
                  <Icon className="text-primary-foreground" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-display font-extrabold mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>);

};

export default ExpertiseSection;
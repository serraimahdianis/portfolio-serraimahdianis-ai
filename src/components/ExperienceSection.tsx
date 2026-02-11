import { Translation } from '@/lib/types';
import { Briefcase } from 'lucide-react';

interface Props {
  t: Translation;
}

const experiences = [
  {
    role: 'IT Engineer & SEO Specialist',
    company: 'Freelance / Auto Entrepreneur',
    period: '2023 - Present',
    desc: 'Building scalable traffic systems using Google Discover SEO, managing multi-platform ad campaigns, and developing automation tools for content distribution.',
  },
  {
    role: 'Digital Marketing Consultant',
    company: 'Various Clients',
    period: '2021 - 2023',
    desc: 'Managed Facebook & Instagram ad campaigns with optimized conversion tracking. Developed Pinterest growth strategies generating millions of impressions.',
  },
  {
    role: 'IT Solutions Developer',
    company: 'Tech Projects',
    period: '2020 - 2021',
    desc: 'Developed web applications and automation scripts using Python and Next.js. Created content management systems for high-traffic websites.',
  },
];

const ExperienceSection = ({ t }: Props) => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left */}
          <div className="lg:w-2/5">
            <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-6 sticky top-32">
              EXPERIENCE
            </h2>
          </div>

          {/* Right - Timeline */}
          <div className="lg:w-3/5 space-y-0">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative border-b border-border pb-12 mb-12 last:border-0 last:pb-0 last:mb-0 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-extrabold group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground font-medium">{exp.role}</p>
                  </div>
                  <span className="text-sm font-bold text-muted-foreground tracking-wider shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

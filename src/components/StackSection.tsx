import { Translation } from '@/lib/types';
import googleDiscover from '@/assets/google-discover.jpg';
import facebookLogo from '@/assets/facebook-logo.png';
import pinterestLogo from '@/assets/pinterest-logo.png';

interface Props {
  t: Translation;
}

const stackItems = [
{ src: googleDiscover, label: 'Google Discover' },
{ src: facebookLogo, label: 'Facebook' },
{ src: pinterestLogo, label: 'Pinterest' },
{ src: 'https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg', label: 'TikTok' },
{ src: 'https://cdn.worldvectorlogo.com/logos/google-ads-1.svg', label: 'Google Ads' },
{ src: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg', label: 'Meta' },
{ src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', label: 'Next.js' },
{ src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', label: 'Python' }];


const StackSection = ({ t }: Props) => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-12 uppercase tracking-tighter text-center">
          {t.stack_title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stackItems.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-primary transition-all">
              <img src={item.src} alt={item.label} className="w-10 h-10 object-contain" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

























};

export default StackSection;
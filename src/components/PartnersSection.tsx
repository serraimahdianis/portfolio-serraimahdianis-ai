import { Translation } from '@/lib/types';
import n8nLogo from '@/assets/n8n-logo.png';
import googleAdsenseLogo from '@/assets/google-adsense-logo.png';
import ezoicLogo from '@/assets/ezoic-logo.png';
import facebookPartnerLogo from '@/assets/facebook-partner-logo.png';
import pinterestPartnerLogo from '@/assets/pinterest-partner-logo.png';
import tiktokPartnerLogo from '@/assets/tiktok-partner-logo.png';

interface Props {
  t: Translation;
}

const partners = [
  { src: n8nLogo, label: 'n8n' },
  { src: googleAdsenseLogo, label: 'Google AdSense' },
  { src: ezoicLogo, label: 'Ezoic' },
  { src: facebookPartnerLogo, label: 'Facebook' },
  { src: pinterestPartnerLogo, label: 'Pinterest' },
  { src: tiktokPartnerLogo, label: 'TikTok' },
];

const PartnersSection = ({ t }: Props) => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-20 uppercase tracking-tighter text-center">
          Partners
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="aspect-square card-dark-hover flex items-center justify-center p-8 group rounded-[2rem]"
            >
              <img
                src={partner.src}
                alt={partner.label}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

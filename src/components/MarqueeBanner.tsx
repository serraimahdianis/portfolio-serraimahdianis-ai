import facebookLogo from '@/assets/facebook-logo.png';
import pinterestLogo from '@/assets/pinterest-logo.png';
import tiktokLogo from '@/assets/tiktok-logo.png';
import googleDiscoverLogo from '@/assets/google-discover-logo.png';
import adsenseLogo from '@/assets/adsense-logo.png';
import ezoicLogo from '@/assets/ezoic-logo.png';
import wiseLogo from '@/assets/wise-logo.png';

const logos = [
  { src: facebookLogo, alt: 'Facebook' },
  { src: pinterestLogo, alt: 'Pinterest' },
  { src: tiktokLogo, alt: 'TikTok' },
  { src: googleDiscoverLogo, alt: 'Google Discover' },
  { src: adsenseLogo, alt: 'Google AdSense' },
  { src: ezoicLogo, alt: 'Ezoic' },
  { src: wiseLogo, alt: 'Wise' },
];

const MarqueeBanner = () => {
  return (
    <div className="py-8 overflow-hidden">
      <div className="flex animate-marquee items-center whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="mx-10 shrink-0 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;

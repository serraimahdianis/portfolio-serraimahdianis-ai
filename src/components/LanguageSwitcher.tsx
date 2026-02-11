import { Language } from '@/lib/types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: Props) => {
  const langs = [
    { code: Language.EN, label: 'EN' },
    { code: Language.FR, label: 'FR' },
    { code: Language.AR, label: 'عربي' },
    { code: Language.DE, label: 'DE' },
  ];

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-2xl p-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => onLanguageChange(l.code)}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            currentLang === l.code
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

import { Language, Translation } from './types';

export const translations: Record<Language, Translation> = {
  [Language.EN]: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_greeting: 'Hi, Meet',
    hero_name: 'Serrai Mahdi Anis',
    hero_desc: 'IT Engineer & Auto Entrepreneur specializing in Google Discover SEO, Social Media Marketing, and Traffic Engineering systems that scale.',
    hero_cv: 'Download CV',
    expertise_title: 'My Expertise',
    expertise_subtitle: 'Scaling digital presence through technical engineering and advanced search algorithms.',
    about_title: 'About Me',
    about_desc: 'I am an IT engineer and digital marketing specialist from Algeria, focused on building scalable traffic systems through Google Discover SEO, Facebook & Instagram Ads, Pinterest growth strategies, and TikTok viral content engineering. I combine technical skills with creative marketing to deliver measurable results.',
    about_years: 'Years Experience',
    about_traffic: 'Traffic Generated',
    stack_title: 'My Stack',
    contact_title: "Let's Work Together",
    contact_name: 'Your Name',
    contact_email: 'Your Email',
    contact_message: 'Your Message',
    contact_send: 'Send Message',
    contact_whatsapp: 'Chat on WhatsApp',
    footer_rights: '© 2025 Serrai Mahdi Anis • All Rights Reserved',
    footer_quote: "Let's bring your ideas to life with stunning visuals, intuitive user experiences & growth solutions.",
    chatbot_title: "Serrai Assistant",
    chatbot_subtitle_online: "Online",
    chatbot_subtitle_typing: "Typing...",
    chatbot_placeholder: "Type a message...",
    chatbot_welcome: "Hello! How can I help you today?",
    chatbot_error: "Sorry, I'm having trouble connecting. Please try again later.",
    chatbot_send: "Send",
    chatbot_close: "Close chat",
    chatbot_open: "Open chat",
    expertises: [
      { title: 'Google Discover SEO', desc: 'Technical content optimization designed to trigger Google Discover feeds for massive organic reach.' },
      { title: 'Facebook & IG Ads', desc: 'Precision-targeted paid social campaigns with optimized conversion tracking and creative scaling.' },
      { title: 'Pinterest Growth', desc: 'Algorithmic pinning strategies to build long-term sustainable traffic through visual search.' },
      { title: 'TikTok Marketing', desc: 'Developing viral short-form content structures that resonate with trends and platform algorithms.' },
      { title: 'n8n Automation', desc: 'Building powerful no-code automation workflows with n8n to streamline operations, data pipelines, and marketing processes at scale.' },
      { title: 'Micro Importation & E-com', desc: 'End-to-end micro importation services from China with full e-commerce setup, product sourcing, and logistics management.' },
      { title: 'Creative Strategies', desc: 'Crafting data-driven creative strategies that blend compelling storytelling, brand identity design, content calendars, A/B testing frameworks, and audience psychology to maximize engagement and conversions across all digital channels.' },
      { title: 'AI Creative with Nano Banane Veo3 Kling', desc: 'Leveraging cutting-edge AI tools including Nano Banane, Veo3, and Kling to create innovative visual content, video generation, and creative automation that pushes the boundaries of digital marketing.' },
      { title: 'Stores & Sites Landing Pages & CMS AI', desc: 'Building high-converting e-commerce stores, professional websites, and landing pages using AI-powered CMS platforms with intelligent content management, automated optimization, and seamless user experiences.' },
    ],
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Got questions? I have answers.',
    faq_questions: [
      {
        question: 'What services do you offer?',
        answer: 'I offer comprehensive digital marketing services including Google Discover SEO, Facebook & Instagram Ads, Pinterest Growth strategies, TikTok Marketing, n8n Automation workflows, Micro Importation & E-commerce solutions, AI Creative content generation, and professional website/CMS development with AI integration.'
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Results vary by service. Google Discover SEO typically shows results within 2-4 weeks. Paid advertising (Facebook/Instagram Ads) can generate immediate traffic. Pinterest and organic strategies usually take 1-3 months to build sustainable traffic. I provide detailed timelines during our initial consultation.'
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Yes! I work with clients worldwide. With modern communication tools and my experience in global markets, distance is never a barrier. I have successfully helped clients from Europe, North America, Middle East, and Africa achieve their digital marketing goals.'
      },
      {
        question: 'What is your pricing structure?',
        answer: 'Pricing depends on the scope and complexity of your project. I offer both project-based pricing and monthly retainer packages. Contact me for a free consultation and customized quote based on your specific needs and goals.'
      },
      {
        question: 'Can you help with product sourcing from China?',
        answer: 'Absolutely! I provide end-to-end micro importation services from China including supplier verification, product sourcing, quality control, logistics management, and e-commerce store setup. I handle the entire process so you can focus on growing your business.'
      },
      {
        question: 'Do you offer ongoing support and maintenance?',
        answer: 'Yes, I offer ongoing support packages for all services. This includes performance monitoring, strategy adjustments, technical support, and regular optimization to ensure your digital presence continues to grow and perform at its best.'
      }
    ],
  },
  [Language.FR]: {
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_about: 'À Propos',
    nav_contact: 'Contact',
    hero_greeting: 'Salut, Découvrez',
    hero_name: 'Serrai Mahdi Anis',
    hero_desc: "Ingénieur IT & Auto Entrepreneur spécialisé en SEO Google Discover, Marketing Réseaux Sociaux et systèmes d'ingénierie de trafic à grande échelle.",
    hero_cv: 'Télécharger CV',
    expertise_title: 'Mon Expertise',
    expertise_subtitle: "Développer la présence digitale grâce à l'ingénierie technique et aux algorithmes de recherche avancés.",
    about_title: 'À Propos',
    about_desc: "Je suis ingénieur IT et spécialiste en marketing digital d'Algérie, concentré sur la création de systèmes de trafic évolutifs via Google Discover SEO, Facebook & Instagram Ads, stratégies de croissance Pinterest et ingénierie de contenu viral TikTok. Je combine compétences techniques et marketing créatif pour des résultats mesurables.",
    about_years: "Années d'Expérience",
    about_traffic: 'Trafic Généré',
    stack_title: 'Ma Stack',
    contact_title: 'Travaillons Ensemble',
    contact_name: 'Votre Nom',
    contact_email: 'Votre Email',
    contact_message: 'Votre Message',
    contact_send: 'Envoyer',
    contact_whatsapp: 'Discuter sur WhatsApp',
    footer_rights: '© 2025 Serrai Mahdi Anis • Tous Droits Réservés',
    footer_quote: 'Donnons vie à vos idées avec des visuels époustouflants et des solutions de croissance.',
    chatbot_title: "Assistant Serrai",
    chatbot_subtitle_online: "En ligne",
    chatbot_subtitle_typing: "En train d'écrire...",
    chatbot_placeholder: "Tapez un message...",
    chatbot_welcome: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    chatbot_error: "Désolé, j'ai des problèmes de connexion. Veuillez réessayer plus tard.",
    chatbot_send: "Envoyer",
    chatbot_close: "Fermer le chat",
    chatbot_open: "Ouvrir le chat",
    expertises: [
      { title: 'SEO Google Discover', desc: "Optimisation technique du contenu conçue pour déclencher les flux Google Discover pour une portée organique massive." },
      { title: 'Facebook & IG Ads', desc: "Campagnes sociales payantes ciblées avec suivi de conversion optimisé et mise à l'échelle créative." },
      { title: 'Croissance Pinterest', desc: "Stratégies d'épinglage algorithmique pour générer un trafic durable via la recherche visuelle." },
      { title: 'Marketing TikTok', desc: "Développement de structures de contenu court viral en phase avec les tendances et les algorithmes." },
      { title: 'Automatisation n8n', desc: "Création de workflows d'automatisation puissants avec n8n pour optimiser les opérations, les pipelines de données et les processus marketing." },
      { title: 'Micro Importation & E-com', desc: "Services complets de micro importation depuis la Chine avec configuration e-commerce, sourcing produits et gestion logistique." },
      { title: 'Stratégies Créatives', desc: "Élaboration de stratégies créatives basées sur les données combinant storytelling, identité de marque, calendriers de contenu, tests A/B et psychologie d'audience pour maximiser l'engagement et les conversions sur tous les canaux digitaux." },
      { title: 'Créatif IA avec Nano Banane Veo3 Kling', desc: "Exploitation d'outils IA de pointe dont Nano Banane, Veo3 et Kling pour créer du contenu visuel innovant, de la génération vidéo et une automatisation créative qui repousse les limites du marketing digital." },
      { title: 'Boutiques & Sites Pages de Vente & CMS IA', desc: "Construction de boutiques e-commerce à fort taux de conversion, sites professionnels et pages de destination utilisant des plateformes CMS alimentées par l'IA avec gestion de contenu intelligente, optimisation automatisée et expériences utilisateur fluides." },
    ],
    faq_title: 'Questions Fréquemment Posées',
    faq_subtitle: 'Vous avez des questions ? J\'ai les réponses.',
    faq_questions: [
      {
        question: 'Quels services proposez-vous ?',
        answer: 'Je propose des services complets de marketing digital incluant le SEO Google Discover, les publicités Facebook & Instagram, les stratégies de croissance Pinterest, le marketing TikTok, les workflows d\'automatisation n8n, les solutions de micro importation et e-commerce, la génération de contenu créatif IA, et le développement de sites web/CMS professionnels avec intégration IA.'
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats ?',
        answer: 'Les résultats varient selon les services. Le SEO Google Discover montre généralement des résultats en 2-4 semaines. La publicité payante (Facebook/Instagram Ads) peut générer du trafic immédiat. Pinterest et les stratégies organiques prennent généralement 1-3 mois pour construire un trafic durable. Je fournis des délais détaillés lors de notre consultation initiale.'
      },
      {
        question: 'Travaillez-vous avec des clients internationaux ?',
        answer: 'Oui ! Je travaille avec des clients du monde entier. Grâce aux outils de communication modernes et à mon expérience sur les marchés internationaux, la distance n\'est jamais un obstacle. J\'ai aidé avec succès des clients d\'Europe, d\'Amérique du Nord, du Moyen-Orient et d\'Afrique à atteindre leurs objectifs de marketing digital.'
      },
      {
        question: 'Quelle est votre structure tarifaire ?',
        answer: 'Les tarifs dépendent de la portée et de la complexité de votre projet. Je propose des tarifs basés sur des projets et des forfaits mensuels. Contactez-moi pour une consultation gratuite et un devis personnalisé selon vos besoins et objectifs spécifiques.'
      },
      {
        question: 'Pouvez-vous aider avec le sourcing de produits en Chine ?',
        answer: 'Absolument ! Je fournis des services complets de micro importation depuis la Chine incluant la vérification des fournisseurs, le sourcing de produits, le contrôle qualité, la gestion logistique et la configuration de boutiques e-commerce. Je gère tout le processus pour que vous puissiez vous concentrer sur le développement de votre entreprise.'
      },
      {
        question: 'Proposez-vous un support et une maintenance continus ?',
        answer: 'Oui, je propose des forfaits de support continus pour tous les services. Cela inclut le monitoring des performances, les ajustements de stratégie, le support technique et l\'optimisation régulière pour garantir que votre présence digitale continue de croître et de performer au mieux.'
      }
    ],
  },
  [Language.AR]: {
    nav_home: 'الرئيسية',
    nav_services: 'الخدمات',
    nav_about: 'حول',
    nav_contact: 'اتصل',
    hero_greeting: 'مرحبًا، تعرف على',
    hero_name: 'سراي مهدي أنيس',
    hero_desc: 'مهندس تكنولوجيا المعلومات ومقاول ذاتي متخصص في تحسين محركات البحث لـ Google Discover والتسويق عبر وسائل التواصل الاجتماعي وأنظمة هندسة المرور القابلة للتوسع.',
    hero_cv: 'تحميل السيرة الذاتية',
    expertise_title: 'خبرتي',
    expertise_subtitle: 'توسيع الحضور الرقمي من خلال الهندسة التقنية وخوارزميات البحث المتقدمة.',
    about_title: 'عني',
    about_desc: 'أنا مهندس تكنولوجيا المعلومات ومتخصص في التسويق الرقمي من الجزائر، أركز على بناء أنظمة مرور قابلة للتوسع من خلال Google Discover SEO وإعلانات Facebook و Instagram واستراتيجيات نمو Pinterest وهندسة المحتوى الفيروسي على TikTok. أجمع بين المهارات التقنية والتسويق الإبداعي لتحقيق نتائج قابلة للقياس.',
    about_years: 'سنوات الخبرة',
    about_traffic: 'حركة المرور المولدة',
    stack_title: 'أدواتي',
    contact_title: 'لنعمل معًا',
    contact_name: 'اسمك',
    contact_email: 'بريدك الإلكتروني',
    contact_message: 'رسالتك',
    contact_send: 'إرسال',
    contact_whatsapp: 'تواصل عبر واتساب',
    footer_rights: '© 2025 سراي مهدي أنيس • جميع الحقوق محفوظة',
    footer_quote: 'لنحول أفكارك إلى واقع مع تصاميم مذهلة وحلول نمو رقمية.',
    chatbot_title: "مساعد سراي",
    chatbot_subtitle_online: "متصل",
    chatbot_subtitle_typing: "يكتب...",
    chatbot_placeholder: "اكتب رسالة...",
    chatbot_welcome: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
    chatbot_error: "عذراً، أواجه مشكلة في الاتصال. يرجى المحاولة مرة أخرى لاحقاً.",
    chatbot_send: "إرسال",
    chatbot_close: "إغلاق الدردشة",
    chatbot_open: "فتح الدردشة",
    expertises: [
      { title: 'تحسين Google Discover', desc: 'تحسين تقني للمحتوى مصمم لتفعيل تدفقات Google Discover لوصول عضوي هائل.' },
      { title: 'إعلانات فيسبوك وإنستغرام', desc: 'حملات اجتماعية مدفوعة مستهدفة بدقة مع تتبع تحويل محسّن.' },
      { title: 'نمو بنترست', desc: 'استراتيجيات تثبيت خوارزمية لبناء حركة مرور مستدامة طويلة الأمد.' },
      { title: 'تسويق تيك توك', desc: 'تطوير هياكل محتوى قصير فيروسي يتوافق مع الاتجاهات وخوارزميات المنصة.' },
      { title: 'أتمتة n8n', desc: 'بناء سير عمل أتمتة قوية باستخدام n8n لتبسيط العمليات وخطوط البيانات وعمليات التسويق.' },
      { title: 'استيراد مصغر وتجارة إلكترونية', desc: 'خدمات استيراد مصغر شاملة من الصين مع إعداد التجارة الإلكترونية وإدارة اللوجستيات.' },
      { title: 'استراتيجيات إبداعية', desc: 'صياغة استراتيجيات إبداعية قائمة على البيانات تجمع بين السرد القصصي وتصميم هوية العلامة التجارية وتقويمات المحتوى واختبارات A/B وعلم نفس الجمهور لتعظيم التفاعل والتحويلات عبر جميع القنوات الرقمية.' },
      { title: 'الإبداع بالذكاء الاصطناعي مع Nano Banane Veo3 Kling', desc: 'الاستفادة من أدوات الذكاء الاصطناعي المتطورة بما في ذلك Nano Banane وVeo3 وKling لإنشاء محتوى بصري مبتكر وتوليد فيديوهات وأتمتة إبداعية تدفع حدود التسويق الرقمي.' },
      { title: 'المتاجر والمواقع وصفحات الهبوط ونظم إدارة المحتوى بالذكاء الاصطناعي', desc: 'بناء متاجر تجارة إلكترونية عالية التحويل ومواقع احترافية وصفحات هبوط باستخدام منصات إدارة المحتوى المدعومة بالذكاء الاصطناعي مع إدارة محتوى ذكية وتحسين آلي وتجارب مستخدم سلسة.' },
    ],
    faq_title: 'الأسئلة الشائعة',
    faq_subtitle: 'هل لديك أسئلة؟ لدي الإجابات.',
    faq_questions: [
      {
        question: 'ما الخدمات التي تقدمها؟',
        answer: 'أقدم خدمات شاملة للتسويق الرقمي تشمل تحسين محركات البحث Google Discover، إعلانات فيسبوك وإنستغرام، استراتيجيات نمو بنترست، تسويق تيك توك، سير عمل الأتمتة n8n، حلول الاستيراد المصغر والتجارة الإلكترونية، إنشاء محتوى إبداعي بالذكاء الاصطناعي، وتطوير مواقع الويب/CMS الاحترافية مع دمج الذكاء الاصطناعي.'
      },
      {
        question: 'كم يستغرق لرؤية النتائج؟',
        answer: 'تختلف النتائج حسب الخدمة. عادةً ما يظهر SEO Google Discover نتائج في غضون 2-4 أسابيع. يمكن للإعلانات المدفوعة (فيسبوك/إنستغرام) توليد حركة مرور فورية. بينما تستغرق استراتيجيات بنترست والتسويق العضوي عادةً 1-3 أشهر لبناء حركة مرور مستدامة. أقدم جداول زمنية مفصلة خلال الاستشارة الأولى.'
      },
      {
        question: 'هل تعمل مع العملاء الدوليين؟',
        answer: 'نعم! أعمل مع عملاء من جميع أنحاء العالم. بفضل أدوات التواصل الحديثة وخبرتي في الأسواق العالمية، المسافة ليست عائقاً أبداً. لقد ساعدت بنجاح عملاء من أوروبا وأمريكا الشمالية والشرق الأوسط وأفريقيا في تحقيق أهدافهم في التسويق الرقمي.'
      },
      {
        question: 'ما هي هيكلية التسعير لديك؟',
        answer: 'تعتمد الأسعار على نطاق ومدى تعقيد مشروعك. أقدم كل من التسعير القائم على المشاريع وباقات الاستبقاء الشهرية. اتصل بي للحصول على استشارة مجانية وعرض سعر مخصص حسب احتياجاتك وأهدافك المحددة.'
      },
      {
        question: 'هل يمكنك المساعدة في توفير المنتجات من الصين؟',
        answer: 'بالطبع! أقدم خدمات شاملة للاستيراد المصغر من الصين تشمل التحقق من الموردين، توفير المنتجات، مراقبة الجودة، إدارة اللوجستيات، وإعداد المتاجر الإلكترونية. أتولى إدارة العملية بأكملها حتى تتمكن من التركيز على تطوير عملك.'
      },
      {
        question: 'هل تقدم دعم وصيانة مستمرة؟',
        answer: 'نعم، أقدم باقات دعم مستمرة لجميع الخدمات. يشمل ذلك مراقبة الأداء، تعديلات الاستراتيجية، الدعم الفني، والتحسين المستمر لضمان استمرار نمو حضورك الرقمي وأدائه على أفضل وجه.'
      }
    ],
  },
  [Language.DE]: {
    nav_home: 'Startseite',
    nav_services: 'Leistungen',
    nav_about: 'Über Mich',
    nav_contact: 'Kontakt',
    hero_greeting: 'Hallo, Lernen Sie kennen',
    hero_name: 'Serrai Mahdi Anis',
    hero_desc: 'IT-Ingenieur & Auto-Unternehmer, spezialisiert auf Google Discover SEO, Social Media Marketing und skalierbare Traffic-Engineering-Systeme.',
    hero_cv: 'Lebenslauf herunterladen',
    expertise_title: 'Meine Expertise',
    expertise_subtitle: 'Digitale Präsenz skalieren durch technisches Engineering und fortschrittliche Suchalgorithmen.',
    about_title: 'Über Mich',
    about_desc: 'Ich bin IT-Ingenieur und Spezialist für digitales Marketing aus Algerien. Ich konzentriere mich auf den Aufbau skalierbarer Traffic-Systeme durch Google Discover SEO, Facebook- & Instagram-Ads, Pinterest-Wachstumsstrategien und TikTok-Viral-Content-Engineering. Ich verbinde technische Fähigkeiten mit kreativem Marketing für messbare Ergebnisse.',
    about_years: 'Jahre Erfahrung',
    about_traffic: 'Generierter Traffic',
    stack_title: 'Mein Stack',
    contact_title: 'Lassen Sie uns zusammenarbeiten',
    contact_name: 'Ihr Name',
    contact_email: 'Ihre E-Mail',
    contact_message: 'Ihre Nachricht',
    contact_send: 'Nachricht senden',
    contact_whatsapp: 'Auf WhatsApp chatten',
    footer_rights: '© 2025 Serrai Mahdi Anis • Alle Rechte vorbehalten',
    footer_quote: 'Lassen Sie uns Ihre Ideen mit beeindruckenden Designs und Wachstumslösungen zum Leben erwecken.',
    chatbot_title: "Serrai Assistent",
    chatbot_subtitle_online: "Online",
    chatbot_subtitle_typing: "Schreibt...",
    chatbot_placeholder: "Nachricht eingeben...",
    chatbot_welcome: "Hallo! Wie kann ich Ihnen heute helfen?",
    chatbot_error: "Entschuldigung, ich habe Verbindungsprobleme. Bitte versuchen Sie es später erneut.",
    chatbot_send: "Senden",
    chatbot_close: "Chat schließen",
    chatbot_open: "Chat öffnen",
    expertises: [
      { title: 'Google Discover SEO', desc: 'Technische Content-Optimierung für massive organische Reichweite über Google Discover Feeds.' },
      { title: 'Facebook & IG Ads', desc: 'Präzise ausgerichtete bezahlte Social-Kampagnen mit optimiertem Conversion-Tracking und kreativer Skalierung.' },
      { title: 'Pinterest Wachstum', desc: 'Algorithmische Pinning-Strategien für nachhaltigen langfristigen Traffic über visuelle Suche.' },
      { title: 'TikTok Marketing', desc: 'Entwicklung viraler Kurzform-Content-Strukturen, die mit Trends und Plattformalgorithmen resonieren.' },
      { title: 'n8n Automatisierung', desc: 'Aufbau leistungsstarker No-Code-Automatisierungs-Workflows mit n8n zur Optimierung von Betrieb, Datenpipelines und Marketingprozessen.' },
      { title: 'Mikroimport & E-Commerce', desc: 'Komplette Mikroimport-Services aus China mit E-Commerce-Setup, Produktbeschaffung und Logistikmanagement.' },
      { title: 'Kreative Strategien', desc: 'Datengetriebene kreative Strategien, die Storytelling, Markenidentität, Content-Kalender, A/B-Tests und Zielgruppenpsychologie kombinieren, um Engagement und Conversions über alle digitalen Kanäle zu maximieren.' },
      { title: 'KI Kreativ mit Nano Banane Veo3 Kling', desc: 'Nutzung modernster KI-Tools einschließlich Nano Banane, Veo3 und Kling zur Erstellung innovativer visueller Inhalte, Videogenerierung und kreativer Automatisierung, die die Grenzen des digitalen Marketings erweitert.' },
      { title: 'Shops & Websites Landing Pages & CMS KI', desc: 'Aufbau hochkonvertierender E-Commerce-Shops, professioneller Websites und Landing Pages mit KI-gestützten CMS-Plattformen mit intelligentem Content-Management, automatisierter Optimierung und nahtlosen Benutzererlebnissen.' },
    ],
    faq_title: 'Häufig Gestellte Fragen',
    faq_subtitle: 'Haben Sie Fragen? Ich habe Antworten.',
    faq_questions: [
      {
        question: 'Welche Dienstleistungen bieten Sie an?',
        answer: 'Ich biete umfassende digitale Marketing-Dienstleistungen an, einschließlich Google Discover SEO, Facebook & Instagram Ads, Pinterest Wachstumsstrategien, TikTok Marketing, n8n Automatisierungs-Workflows, Mikroimport & E-Commerce-Lösungen, KI-gestützte Content-Erstellung und professionelle Website/CMS-Entwicklung mit KI-Integration.'
      },
      {
        question: 'Wie lange dauert es, bis Ergebnisse sichtbar sind?',
        answer: 'Die Ergebnisse variieren je nach Dienstleistung. Google Discover SEO zeigt typischerweise innerhalb von 2-4 Wochen Ergebnisse. Bezahlte Werbung (Facebook/Instagram Ads) kann sofortigen Traffic generieren. Pinterest und organische Strategien dauern in der Regel 1-3 Monate, um nachhaltigen Traffic aufzubauen. Ich gebe während der ersten Beratung detaillierte Zeitpläne an.'
      },
      {
        question: 'Arbeiten Sie mit internationalen Kunden zusammen?',
        answer: 'Ja! Ich arbeite mit Kunden aus der ganzen Welt zusammen. Mit modernen Kommunikationstools und meiner Erfahrung auf internationalen Märkten ist Entfernung nie ein Hindernis. Ich habe erfolgreich Kunden aus Europa, Nordamerika, dem Nahen Osten und Afrika dabei geholfen, ihre digitalen Marketingziele zu erreichen.'
      },
      {
        question: 'Wie ist Ihre Preisstruktur?',
        answer: 'Die Preise hängen vom Umfang und der Komplexität Ihres Projekts ab. Ich biete sowohl projektbasierte Preise als auch monatliche Betreuungspakete an. Kontaktieren Sie mich für eine kostenlose Beratung und ein individuelles Angebot basierend auf Ihren spezifischen Bedürfnissen und Zielen.'
      },
      {
        question: 'Können Sie bei der Produktbeschaffung aus China helfen?',
        answer: 'Absolut! Ich biete komplette Mikroimport-Dienstleistungen aus China an, einschließlich Lieferantenverifizierung, Produktbeschaffung, Qualitätskontrolle, Logistikmanagement und E-Commerce-Shop-Setup. Ich kümmere mich um den gesamten Prozess, damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können.'
      },
      {
        question: 'Bieten Sie laufenden Support und Wartung an?',
        answer: 'Ja, ich biete laufende Support-Pakete für alle Dienstleistungen an. Dies umfasst Leistungsmonitoring, Strategieanpassungen, technischen Support und regelmäßige Optimierung, um sicherzustellen, dass Ihre digitale Präsenz weiterhin wächst und optimal performt.'
      }
    ],
  },
};

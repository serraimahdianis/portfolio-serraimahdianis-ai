export enum Language {
  EN = 'en',
  FR = 'fr',
  AR = 'ar',
  DE = 'de',
}

export interface Translation {
  nav_home: string;
  nav_services: string;
  nav_about: string;
  nav_contact: string;
  hero_greeting: string;
  hero_name: string;
  hero_desc: string;
  hero_cv: string;
  expertise_title: string;
  expertise_subtitle: string;
  about_title: string;
  about_desc: string;
  about_years: string;
  about_traffic: string;
  stack_title: string;
  contact_title: string;
  contact_name: string;
  contact_email: string;
  contact_message: string;
  contact_send: string;
  contact_whatsapp: string;
  footer_rights: string;
  footer_quote: string;
  expertises: { title: string; desc: string }[];
  chatbot_title: string;
  chatbot_subtitle_online: string;
  chatbot_subtitle_typing: string;
  chatbot_placeholder: string;
  chatbot_welcome: string;
  chatbot_error: string;
  chatbot_send: string;
  chatbot_close: string;
  chatbot_open: string;
}

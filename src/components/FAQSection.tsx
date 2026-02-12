import { useState } from 'react';
import { Translation } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

interface Props {
  t: Translation;
}

const FAQSection = ({ t }: Props) => {
  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={16} />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tighter mb-4">
            {t.faq_title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.faq_subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card border border-border rounded-[2rem] p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {t.faq_questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left font-display font-bold text-lg md:text-xl hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

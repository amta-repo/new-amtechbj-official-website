import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const FAQ = () => {
  const { t } = useLanguage();

  const generalFaqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
  ];

  const businessFaqs = [
    { question: t('faq.biz.q1'), answer: t('faq.biz.a1') },
    { question: t('faq.biz.q2'), answer: t('faq.biz.a2') },
    { question: t('faq.biz.q3'), answer: t('faq.biz.a3') },
    { question: t('faq.biz.q4'), answer: t('faq.biz.a4') },
    { question: t('faq.biz.q5'), answer: t('faq.biz.a5') },
    { question: t('faq.biz.q6'), answer: t('faq.biz.a6') },
    { question: t('faq.biz.q7'), answer: t('faq.biz.a7') },
    { question: t('faq.biz.q8'), answer: t('faq.biz.a8') },
    { question: t('faq.biz.q9'), answer: t('faq.biz.a9') },
    { question: t('faq.biz.q10'), answer: t('faq.biz.a10') },
  ];

  const automationFaqs = [
    { question: t('faq.auto.q1'), answer: t('faq.auto.a1') },
    { question: t('faq.auto.q2'), answer: t('faq.auto.a2') },
    { question: t('faq.auto.q3'), answer: t('faq.auto.a3') },
    { question: t('faq.auto.q4'), answer: t('faq.auto.a4') },
    { question: t('faq.auto.q5'), answer: t('faq.auto.a5') },
    { question: t('faq.auto.q6'), answer: t('faq.auto.a6') },
    { question: t('faq.auto.q7'), answer: t('faq.auto.a7') },
    { question: t('faq.auto.q8'), answer: t('faq.auto.a8') },
    { question: t('faq.auto.q9'), answer: t('faq.auto.a9') },
    { question: t('faq.auto.q10'), answer: t('faq.auto.a10') },
    { question: t('faq.auto.q11'), answer: t('faq.auto.a11') },
    { question: t('faq.auto.q12'), answer: t('faq.auto.a12') },
    { question: t('faq.auto.q13'), answer: t('faq.auto.a13') },
    { question: t('faq.auto.q14'), answer: t('faq.auto.a14') },
    { question: t('faq.auto.q15'), answer: t('faq.auto.a15') },
    { question: t('faq.auto.q16'), answer: t('faq.auto.a16') },
    { question: t('faq.auto.q17'), answer: t('faq.auto.a17') },
    { question: t('faq.auto.q18'), answer: t('faq.auto.a18') },
    { question: t('faq.auto.q19'), answer: t('faq.auto.a19') },
    { question: t('faq.auto.q20'), answer: t('faq.auto.a20') },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('faq.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* General FAQs */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">{t('faq.general.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={`general-${index}`} value={`general-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Business Planning FAQs */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">{t('faq.business.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {businessFaqs.map((faq, index) => (
              <AccordionItem key={`business-${index}`} value={`business-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Automation FAQs */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">{t('faq.automation.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {automationFaqs.map((faq, index) => (
              <AccordionItem key={`automation-${index}`} value={`automation-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;

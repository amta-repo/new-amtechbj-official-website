import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.title': 'Solutions Technologiques Intelligentes pour Votre Entreprise',
    'hero.subtitle': 'AMTECH-BJ transforme votre entreprise avec l\'IA, l\'automatisation, la science des données et des solutions technologiques innovantes. De Benin vers l\'Afrique et le monde.',
    'hero.tagline': 'Innover, Éclairer, Exceller',
    'hero.cta.quote': 'Demandez un devis',
    'hero.cta.call': 'Appelez maintenant',
    'hero.cta.contact': 'Nous contacter',

    // Services
    'services.title': 'Nos Services Technologiques',
    'services.subtitle': 'Solutions complètes pour la transformation numérique de votre entreprise',
    'services.automation.title': 'Automatisation & Optimisation des Processus',
    'services.automation.desc': 'Rationalisez les flux de travail répétitifs en RH, finance et opérations pour évoluer sans augmenter les coûts',
    'services.datascience.title': 'Science des Données & Conseil en Analytique',
    'services.datascience.desc': 'Transformez les données brutes en tableaux de bord, prévisions et insights exploitables',
    'services.ai.title': 'Intelligence Artificielle & Robotique',
    'services.ai.desc': 'Développement d\'agents IA intelligents, vision par ordinateur, bots RPA et modèles prédictifs',
    'services.geospatial.title': 'Cartographie Géospatiale & Télédétection',
    'services.geospatial.desc': 'Imagerie satellite, SIG et analyse spatiale pour agriculture, urbanisme et environnement',
    'services.business.title': 'Planification d\'Affaires & Modélisation Financière',
    'services.business.desc': 'Plans d\'affaires professionnels, modélisation financière et pitch decks pour investisseurs',
    'services.web.title': 'Conception & Développement Web',
    'services.web.desc': 'Sites web responsive, optimisés SEO et sécurisés pour entreprises locales et internationales',

    // About
    'about.title': 'Excellence en Solutions Technologiques',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Permettre aux entreprises béninoises et africaines de prospérer grâce à des solutions technologiques intelligentes, accessibles et de classe mondiale.',
    'about.vision': 'Notre Vision',
    'about.vision.text': 'Être le leader de l\'innovation technologique en Afrique de l\'Ouest, reconnu pour notre expertise en IA, automatisation et transformation numérique.',
    'about.values': 'Nos Valeurs',
    'about.values.text': 'Innovation, Excellence, Intégrité et Impact sont au cœur de notre approche technologique.',

    // Projects
    'projects.title': 'Nos Réalisations',
    'projects.subtitle': 'Découvrez nos projets technologiques innovants',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à transformer votre entreprise ? Discutons-en !',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.company': 'Entreprise (optionnel)',
    'contact.form.service': 'Service souhaité',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le message',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Heures d\'ouverture',
    'contact.whatsapp': 'WhatsApp',

    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Trouvez rapidement les réponses à vos questions',
    'faq.q1': 'Construisez-vous des sites e-commerce ?',
    'faq.a1': 'Oui. AMTECH-BJ construit des sites e-commerce sécurisés, optimisés SEO avec intégration de paiement et gestion d\'inventaire.',
    'faq.q2': 'Pouvez-vous travailler avec des clients internationaux ?',
    'faq.a2': 'Oui. Nous concevons et livrons des solutions technologiques pour clients locaux et internationaux avec des standards mondiaux.',
    'faq.q3': 'Quelles industries servez-vous ?',
    'faq.a3': 'Nous accompagnons entreprises, ONGs et agences gouvernementales dans l\'agriculture, finance, commerce et urbanisme.',

    // Common
    'common.learn_more': 'En savoir plus',
    'common.get_quote': 'Obtenir un devis',
    'common.call_now': 'Appeler maintenant',
    'common.contact_expert': 'Contacter un expert',
    'common.view_projects': 'Voir nos projets',
    'common.our_expertise': 'Notre Expertise',
    'common.why_choose_us': 'Pourquoi nous choisir ?',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.title': 'Intelligent Technology Solutions for Your Business',
    'hero.subtitle': 'AMTECH-BJ transforms your business with AI, automation, data science, and innovative technology solutions. From Benin to Africa and the world.',
    'hero.tagline': 'Innovate, Illuminate, Excel',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.call': 'Call Now',
    'hero.cta.contact': 'Contact Us',

    // Services
    'services.title': 'Our Technology Services',
    'services.subtitle': 'Complete solutions for your business digital transformation',
    'services.automation.title': 'Business Automation & Process Optimization',
    'services.automation.desc': 'Streamline repetitive workflows like HR, finance, and operations to scale without scaling costs',
    'services.datascience.title': 'Data Science & Analytics Consulting',
    'services.datascience.desc': 'Transform raw data into dashboards, forecasts, segmentation, and actionable insights',
    'services.ai.title': 'Artificial Intelligence & Robotics Development',
    'services.ai.desc': 'Develop intelligent AI agents, computer vision solutions, RPA bots, and predictive models',
    'services.geospatial.title': 'Geospatial Mapping & Remote Sensing',
    'services.geospatial.desc': 'Satellite imagery, GIS, and spatial analysis for agriculture, urban planning, and environmental monitoring',
    'services.business.title': 'Business Planning, Financial Modeling & Pitch Decks',
    'services.business.desc': 'Professional business plans, financial modeling, and investor-ready pitch decks for entrepreneurs',
    'services.web.title': 'Website Design & Development',
    'services.web.desc': 'Responsive, SEO-friendly, secure websites for local and international businesses',

    // About
    'about.title': 'Excellence in Technology Solutions',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To empower Beninese and African businesses to thrive through intelligent, accessible, and world-class technology solutions.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'To be the leading technology innovation hub in West Africa, recognized for our expertise in AI, automation, and digital transformation.',
    'about.values': 'Our Values',
    'about.values.text': 'Innovation, Excellence, Integrity, and Impact are at the heart of our technological approach.',

    // Projects
    'projects.title': 'Our Achievements',
    'projects.subtitle': 'Discover our innovative technology projects',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your business? Let\'s discuss!',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company (optional)',
    'contact.form.service': 'Desired Service',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.whatsapp': 'WhatsApp',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find quick answers to your questions',
    'faq.q1': 'Do you build e-commerce websites?',
    'faq.a1': 'Yes. AMTECH-BJ builds secure, SEO-optimized e-commerce websites with payment integration and inventory management.',
    'faq.q2': 'Can you work with international clients?',
    'faq.a2': 'Yes. We design and deliver technology solutions for both local and international clients with global standards.',
    'faq.q3': 'What industries do you serve?',
    'faq.a3': 'We support businesses, NGOs, and government agencies in industries such as agriculture, finance, retail, and urban planning.',

    // Common
    'common.learn_more': 'Learn More',
    'common.get_quote': 'Get a Quote',
    'common.call_now': 'Call Now',
    'common.contact_expert': 'Contact an Expert',
    'common.view_projects': 'View Our Projects',
    'common.our_expertise': 'Our Expertise',
    'common.why_choose_us': 'Why Choose Us?',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
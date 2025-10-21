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
    'faq.general.title': 'Questions Générales',
    'faq.automation.title': 'Questions sur l\'Automatisation',
    'faq.q1': 'Construisez-vous des sites e-commerce ?',
    'faq.a1': 'Oui. AMTECH-BJ construit des sites e-commerce sécurisés, optimisés SEO avec intégration de paiement et gestion d\'inventaire.',
    'faq.q2': 'Pouvez-vous travailler avec des clients internationaux ?',
    'faq.a2': 'Oui. Nous concevons et livrons des solutions technologiques pour clients locaux et internationaux avec des standards mondiaux.',
    'faq.q3': 'Quelles industries servez-vous ?',
    'faq.a3': 'Nous accompagnons entreprises, ONGs et agences gouvernementales dans l\'agriculture, finance, commerce et urbanisme.',
    
    // Automation FAQs
    'faq.auto.q1': 'Qu\'est-ce que l\'automatisation et comment ça marche ?',
    'faq.auto.a1': 'L\'automatisation est le processus d\'utilisation de la technologie pour effectuer des tâches répétitives ou basées sur des règles avec peu ou pas d\'intervention humaine. Elle fonctionne grâce à une combinaison de logiciels, de capteurs et de systèmes logiques qui suivent des instructions prédéfinies — ou, dans les cas plus avancés, apprennent des données.',
    'faq.auto.q2': 'Quelle est la différence entre l\'automatisation et l\'intelligence artificielle (IA) ?',
    'faq.auto.a2': 'L\'automatisation suit des règles ; l\'IA apprend des modèles.\nL\'automatisation exécute des actions prédéfinies de manière cohérente, tandis que l\'IA interprète les données, fait des prévisions et adapte son comportement au fil du temps. Elles travaillent souvent ensemble — l\'automatisation gère l\'efficacité, l\'IA gère l\'intelligence.',
    'faq.auto.q3': 'Pourquoi l\'automatisation est-elle importante dans les industries d\'aujourd\'hui ?',
    'faq.auto.a3': 'L\'automatisation améliore la précision, la vitesse et la cohérence. Elle permet aux équipes de se concentrer sur un travail créatif ou stratégique plutôt que sur des tâches répétitives — rendant les organisations plus légères, plus productives et évolutives sur des marchés concurrentiels.',
    'faq.auto.q4': 'Quels sont les principaux types de technologies d\'automatisation ?',
    'faq.auto.a4': 'Les principaux types incluent :\n\nAutomatisation industrielle (robots, capteurs, automates)\nAutomatisation logicielle (scripts, bots, RPA)\nAutomatisation des processus métier (BPA)\nAutomatisation informatique (infrastructure, DevOps)\nAutomatisation pilotée par l\'IA (apprentissage automatique, NLP)\n\nChacune sert différentes couches de productivité humaine.',
    'faq.auto.q5': 'Que sont les outils d\'automatisation et comment sont-ils utilisés ?',
    'faq.auto.a5': 'Les outils d\'automatisation sont des logiciels ou des plateformes qui effectuent des tâches automatiquement. Les exemples incluent Zapier (automatisation de flux de travail), UiPath (RPA), Make, Jenkins et Power Automate. Ils connectent les applications, déclenchent des actions et éliminent l\'effort manuel.',
    'faq.auto.q6': 'Comment l\'automatisation aide-t-elle les entreprises à devenir plus efficaces ?',
    'faq.auto.a6': 'L\'automatisation réduit les erreurs humaines, accélère les processus et libère le temps des employés. Une stratégie d\'automatisation bien mise en œuvre transforme les opérations de réactives à proactives — améliorant à la fois la production et la qualité des décisions.',
    'faq.auto.q7': 'Comment l\'automatisation peut-elle être mise en œuvre dans les petites entreprises ?',
    'faq.auto.a7': 'Commencez petit : automatisez ce qui se répète quotidiennement — e-mails, facturation, gestion des prospects et suivi client. Utilisez des outils comme Zapier, Make ou Notion Automations. Intégrez progressivement l\'IA pour des tâches comme l\'écriture, l\'analyse et le support client.',
    'faq.auto.q8': 'Puis-je automatiser les e-mails, les messages WhatsApp et les publications sur les réseaux sociaux ?',
    'faq.auto.a8': 'Oui. L\'automatisation des e-mails peut être faite avec Mailchimp ou HubSpot.\nLes messages WhatsApp peuvent être automatisés via l\'API WhatsApp Business ou Twilio.\nLes publications sur les réseaux sociaux peuvent être programmées avec Buffer, Later ou Metricool — économisant des heures chaque semaine tout en maintenant la cohérence.',
    'faq.auto.q9': 'Quels sont des exemples de solutions d\'automatisation dans le monde réel ?',
    'faq.auto.a9': 'Fabrication : lignes d\'assemblage robotisées\nFinance : rapports et réconciliations auto-générés\nMarketing : campagnes goutte-à-goutte et déclencheurs CRM\nDomotique : lumières intelligentes, thermostats et routines\nLogiciel : pipelines CI/CD et automatisation des tests\n\nL\'automatisation est déjà intégrée dans la plupart des flux de travail modernes.',
    'faq.auto.q10': 'Comment l\'automatisation peut-elle économiser du temps et réduire les coûts pour les entrepreneurs ?',
    'faq.auto.a10': 'En éliminant les tâches manuelles répétitives, l\'automatisation permet aux fondateurs de se concentrer sur la croissance, la stratégie et la créativité. Elle réduit les coûts opérationnels, minimise l\'épuisement professionnel et augmente la cohérence de l\'expérience client — multipliant l\'efficacité au fil du temps.',
    'faq.auto.q11': 'Les ingénieurs en automatisation sont-ils demandés ?',
    'faq.auto.a11': 'Absolument. Alors que les industries évoluent vers la transformation numérique, les ingénieurs en automatisation sont essentiels. Leur expertise en programmation, systèmes de contrôle et intégration de l\'IA en fait des acteurs clés dans les secteurs de la fabrication, de la technologie et même de la finance.',
    'faq.auto.q12': 'Comment l\'automatisation affecte-t-elle les emplois et l\'emploi futur ?',
    'faq.auto.a12': 'L\'automatisation remplace le travail routinier mais crée de nouvelles opportunités en conception, gestion et innovation. Elle déplace la valeur humaine de la répétition vers la créativité et le jugement — changeant la nature du travail, sans l\'éliminer entièrement.',
    'faq.auto.q13': 'L\'automatisation et l\'IA remplaceront-elles les travailleurs humains ?',
    'faq.auto.a13': 'Dans certains cas, oui — mais principalement dans les rôles prévisibles et répétitifs. À long terme, l\'automatisation augmente le potentiel humain, nous permettant de nous concentrer sur la résolution de problèmes, l\'empathie et la créativité — les choses que les machines ne peuvent toujours pas bien reproduire.',
    'faq.auto.q14': 'Les ingénieurs en automatisation peuvent-ils travailler à distance ?',
    'faq.auto.a14': 'Oui. La plupart des tâches d\'automatisation — des scripts logiciels à la conception de processus — peuvent être gérées à distance. Les outils basés sur le cloud et les environnements de collaboration virtuelle ont rendu l\'ingénierie d\'automatisation à distance de plus en plus viable.',
    'faq.auto.q15': 'Quelles compétences sont nécessaires pour commencer une carrière dans l\'automatisation ?',
    'faq.auto.a15': 'Les compétences clés incluent :\n\nProgrammation : Python, Java ou C#\nCompréhension des systèmes : logique de contrôle, API\nConnaissance des outils : UiPath, Selenium, Zapier\nPensée analytique et curiosité — pour améliorer continuellement les flux de travail.',
    'faq.auto.q16': 'Comment l\'automatisation et l\'IA changeront-elles l\'avenir du travail ?',
    'faq.auto.a16': 'Le travail deviendra plus interdisciplinaire et créatif. Les gens collaboreront avec des systèmes intelligents plutôt que de rivaliser contre eux. Les gagnants seront ceux qui savent comment tirer parti de l\'automatisation — pas ceux qui la résistent.',
    'faq.auto.q17': 'Pourquoi l\'automatisation peut-elle être à la fois bonne et mauvaise pour les industries ?',
    'faq.auto.a17': 'L\'automatisation stimule la productivité mais peut déplacer des emplois si elle est mal gérée. Le défi n\'est pas la technologie — c\'est le leadership. Une mise en œuvre éthique et réfléchie garantit que les gens grandissent avec les systèmes, pas contre eux.',
    'faq.auto.q18': 'L\'automatisation créera-t-elle plus d\'emplois qu\'elle n\'en détruit ?',
    'faq.auto.a18': 'Oui — historiquement, chaque saut technologique majeur a créé plus d\'emplois qu\'il n\'en a remplacé. Le changement peut être inconfortable, mais il conduit à un travail de plus grande valeur à long terme. La clé est la reconversion et l\'adaptabilité.',
    'faq.auto.q19': 'Comment l\'automatisation devrait-elle être mise en œuvre de manière responsable ?',
    'faq.auto.a19': 'Commencez par une approche centrée sur l\'humain. Automatisez pour augmenter, pas pour remplacer. Communiquez ouvertement avec vos équipes, assurez la confidentialité des données et surveillez les impacts éthiques. L\'automatisation responsable équilibre l\'efficacité avec l\'empathie.',
    'faq.auto.q20': 'Comment les individus peuvent-ils se préparer à un monde de plus en plus automatisé ?',
    'faq.auto.a20': 'Continuez à apprendre. Développez la maîtrise numérique, la créativité et la pensée systémique. Apprenez comment fonctionnent les outils d\'automatisation — même à un niveau de base. L\'avenir appartient aux personnes qui comprennent comment travailler avec la technologie, pas rivaliser contre elle.',

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
    'faq.general.title': 'General Questions',
    'faq.automation.title': 'Automation FAQs',
    'faq.q1': 'Do you build e-commerce websites?',
    'faq.a1': 'Yes. AMTECH-BJ builds secure, SEO-optimized e-commerce websites with payment integration and inventory management.',
    'faq.q2': 'Can you work with international clients?',
    'faq.a2': 'Yes. We design and deliver technology solutions for both local and international clients with global standards.',
    'faq.q3': 'What industries do you serve?',
    'faq.a3': 'We support businesses, NGOs, and government agencies in industries such as agriculture, finance, retail, and urban planning.',
    
    // Automation FAQs
    'faq.auto.q1': 'What is automation and how does it work?',
    'faq.auto.a1': 'Automation is the process of using technology to perform repetitive or rule-based tasks with little or no human intervention. It works through a combination of software, sensors, and logic systems that follow predefined instructions — or, in more advanced cases, learn from data.',
    'faq.auto.q2': 'What\'s the difference between automation and artificial intelligence (AI)?',
    'faq.auto.a2': 'Automation follows rules; AI learns from patterns.\nAutomation executes predefined actions consistently, while AI interprets data, makes predictions, and adapts its behavior over time. They often work together — automation handles efficiency, AI handles intelligence.',
    'faq.auto.q3': 'Why is automation important in today\'s industries?',
    'faq.auto.a3': 'Automation improves accuracy, speed, and consistency. It allows teams to focus on creative or strategic work rather than repetitive tasks — making organizations leaner, more productive, and scalable in competitive markets.',
    'faq.auto.q4': 'What are the main types of automation technologies?',
    'faq.auto.a4': 'The major types include:\n\nIndustrial automation (robots, sensors, PLCs)\nSoftware automation (scripts, bots, RPA)\nBusiness process automation (BPA)\nIT automation (infrastructure, DevOps)\nAI-driven automation (machine learning, NLP)\n\nEach serves different layers of human productivity.',
    'faq.auto.q5': 'What are automation tools and how are they used?',
    'faq.auto.a5': 'Automation tools are software or platforms that perform tasks automatically. Examples include Zapier (workflow automation), UiPath (RPA), Make, Jenkins, and Power Automate. They connect apps, trigger actions, and remove manual effort.',
    'faq.auto.q6': 'How does automation help businesses become more efficient?',
    'faq.auto.a6': 'Automation reduces human error, accelerates processes, and frees up employee time. A well-implemented automation strategy transforms operations from reactive to proactive — improving both output and decision quality.',
    'faq.auto.q7': 'How can automation be implemented in small businesses?',
    'faq.auto.a7': 'Start small: automate what repeats daily — emails, invoicing, lead management, and customer follow-ups. Use tools like Zapier, Make, or Notion Automations. Gradually integrate AI for tasks like writing, analytics, and customer support.',
    'faq.auto.q8': 'Can I automate emails, WhatsApp messages, and social media posts?',
    'faq.auto.a8': 'Yes. Email automation can be done with Mailchimp or HubSpot.\nWhatsApp messages can be automated via WhatsApp Business API or Twilio.\nSocial media posts can be scheduled with Buffer, Later, or Metricool — saving hours weekly while maintaining consistency.',
    'faq.auto.q9': 'What are examples of real-world automation solutions?',
    'faq.auto.a9': 'Manufacturing: robotic assembly lines\nFinance: auto-generated reports and reconciliations\nMarketing: drip campaigns and CRM triggers\nHome automation: smart lights, thermostats, and routines\nSoftware: CI/CD pipelines and testing automation\n\nAutomation is already embedded in most modern workflows.',
    'faq.auto.q10': 'How can automation save time and reduce costs for entrepreneurs?',
    'faq.auto.a10': 'By eliminating repetitive manual tasks, automation allows founders to focus on growth, strategy, and creativity. It reduces operational costs, minimizes burnout, and increases consistency in customer experience — compounding efficiency over time.',
    'faq.auto.q11': 'Are automation engineers in demand?',
    'faq.auto.a11': 'Absolutely. As industries move toward digital transformation, automation engineers are essential. Their expertise in programming, control systems, and AI integration makes them key players in manufacturing, tech, and even finance sectors.',
    'faq.auto.q12': 'How does automation affect jobs and future employment?',
    'faq.auto.a12': 'Automation replaces routine work but creates new opportunities in design, management, and innovation. It shifts human value from repetition to creativity and judgment — changing the nature of work, not eliminating it entirely.',
    'faq.auto.q13': 'Will automation and AI replace human workers?',
    'faq.auto.a13': 'In some cases, yes — but mostly in predictable, repetitive roles. In the long run, automation augments human potential, enabling us to focus on problem-solving, empathy, and creativity — the things machines still can\'t replicate well.',
    'faq.auto.q14': 'Can automation engineers work remotely?',
    'faq.auto.a14': 'Yes. Most automation tasks — from software scripts to process design — can be managed remotely. Cloud-based tools and virtual collaboration environments have made remote automation engineering increasingly viable.',
    'faq.auto.q15': 'What skills are needed to start a career in automation?',
    'faq.auto.a15': 'Key skills include:\n\nProgramming: Python, Java, or C#\nUnderstanding of systems: control logic, APIs\nKnowledge of tools: UiPath, Selenium, Zapier\nAnalytical thinking and curiosity — to continuously improve workflows.',
    'faq.auto.q16': 'How will automation and AI change the future of work?',
    'faq.auto.a16': 'Work will become more interdisciplinary and creative. People will collaborate with intelligent systems rather than compete against them. The winners will be those who know how to leverage automation — not those who resist it.',
    'faq.auto.q17': 'Why automation can be both good and bad for industries?',
    'faq.auto.a17': 'Automation drives productivity but can displace jobs if poorly managed. The challenge isn\'t the technology — it\'s leadership. Ethical and thoughtful implementation ensures people grow with the systems, not against them.',
    'faq.auto.q18': 'Will automation create more jobs than it destroys?',
    'faq.auto.a18': 'Yes — historically, every major technological leap has created more jobs than it replaced. The shift may be uncomfortable, but it leads to higher-value work in the long term. The key is reskilling and adaptability.',
    'faq.auto.q19': 'How should automation be implemented responsibly?',
    'faq.auto.a19': 'Start with a human-first approach. Automate to augment, not replace. Communicate openly with your teams, ensure data privacy, and monitor ethical impacts. Responsible automation balances efficiency with empathy.',
    'faq.auto.q20': 'How can individuals prepare for an increasingly automated world?',
    'faq.auto.a20': 'Keep learning. Build digital fluency, creativity, and systems thinking. Learn how automation tools work — even at a basic level. The future belongs to people who understand how to work with technology, not compete against it.',

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
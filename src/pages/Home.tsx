import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle, 
  Bot, 
  LineChart, 
  Brain, 
  MapPin as Map, 
  FileText,
  Globe,
  TrendingUp,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceDetailModal from '@/components/ServiceDetailModal';

// Import images
import founderCeo from '@/assets/founder-ceo.jpg';
import teamMemberSite from '@/assets/team-member-site.jpg';
import professionalSafety from '@/assets/professional-safety.jpg';
import buildingStructure from '@/assets/building-structure.jpg';
import constructionFrame from '@/assets/construction-frame.jpg';

const Home = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Bot,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      color: 'from-primary to-primary-dark',
      features: [
        'Process automation & workflow optimization',
        'HR & finance system integration',
        'Operations efficiency improvement',
        'Cost reduction through automation',
        'Scalable business solutions'
      ],
      benefits: ['Efficiency', 'Cost Savings', 'Scalability'],
      process: [
        'Business process analysis',
        'Automation strategy development',
        'System implementation',
        'Performance monitoring'
      ]
    },
    {
      icon: LineChart,
      title: t('services.datascience.title'),
      description: t('services.datascience.desc'),
      color: 'from-gold to-gold-dark',
      features: [
        'Advanced analytics dashboards',
        'Predictive forecasting models',
        'Customer segmentation analysis',
        'Business intelligence consulting',
        'Data-driven decision support'
      ],
      benefits: ['Insights', 'Forecasting', 'Growth'],
      process: [
        'Data collection & cleaning',
        'Analytical model development',
        'Dashboard creation',
        'Insights delivery'
      ]
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      color: 'from-construction-blue to-construction-orange',
      features: [
        'AI agent development',
        'Computer vision solutions',
        'RPA bot implementation',
        'Predictive model creation',
        'Machine learning applications'
      ],
      benefits: ['Automation', 'Intelligence', 'Innovation'],
      process: [
        'AI requirements analysis',
        'Model development & training',
        'System integration',
        'Continuous improvement'
      ]
    },
    {
      icon: Map,
      title: t('services.geospatial.title'),
      description: t('services.geospatial.desc'),
      color: 'from-primary to-gold',
      features: [
        'Satellite imagery analysis',
        'GIS mapping solutions',
        'Agricultural monitoring',
        'Urban planning support',
        'Environmental analysis'
      ],
      benefits: ['Accuracy', 'Planning', 'Monitoring'],
      process: [
        'Data acquisition',
        'Geospatial analysis',
        'Map creation',
        'Insights reporting'
      ]
    },
    {
      icon: FileText,
      title: t('services.business.title'),
      description: t('services.business.desc'),
      color: 'from-construction-orange to-gold',
      features: [
        'Comprehensive business plans',
        'Financial modeling & projections',
        'Investor-ready pitch decks',
        'Market analysis',
        'Strategic planning support'
      ],
      benefits: ['Funding', 'Strategy', 'Growth'],
      process: [
        'Business assessment',
        'Plan development',
        'Financial modeling',
        'Pitch deck creation'
      ]
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      color: 'from-gold-dark to-primary',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'SEO optimization',
        'Multilingual websites',
        'Secure & scalable architecture'
      ],
      benefits: ['Visibility', 'Security', 'Growth'],
      process: [
        'Requirements gathering',
        'Design & development',
        'Testing & optimization',
        'Launch & maintenance'
      ]
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const projects = [
    {
      image: teamMemberSite,
      title: 'AI-Powered Automation Platform',
      category: 'Automation',
      description: 'Complete business process automation for enterprise client'
    },
    {
      image: buildingStructure,
      title: 'Geospatial Agriculture Monitoring',
      category: 'GIS & Remote Sensing',
      description: 'Satellite-based crop monitoring system'
    },
    {
      image: constructionFrame,
      title: 'E-Commerce Website Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const whyChooseUs = [
    'Cutting-edge AI & automation expertise',
    'Local knowledge, global standards',
    'Data-driven decision making',
    'Certified technology professionals',
    'Personalized client support',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Technology Innovation Leader
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                <p className="text-2xl font-semibold text-gold">
                  {t('hero.tagline')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group" asChild>
                  <Link to="/contact">
                    {t('hero.cta.quote')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline-gold" size="xl" className="group" asChild>
                  <a href="tel:+2290191134672">
                    <Phone className="mr-2 h-5 w-5" />
                    {t('hero.cta.call')}
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Global Standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src={professionalSafety} 
                alt="Technology Solutions" 
                className="rounded-lg shadow-2xl hover-lift w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Transforming Businesses Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              {t('common.our_expertise')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="mt-4 p-0 h-auto text-primary hover:text-gold group"
                    onClick={() => handleServiceClick(service)}
                  >
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-primary">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                {t('common.view_projects')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge variant="outline" className="mb-4">
                  {t('common.why_choose_us')}
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>

              <div className="grid gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{reason}</span>
                  </div>
                ))}
              </div>

              <Button variant="construction" size="lg" asChild>
                <Link to="/about">
                  {t('common.learn_more')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src={founderCeo} 
                alt="AMTECH-BJ Founder & CEO" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-8 w-8 text-gold" />
                  <div>
                    <div className="font-semibold text-lg">Innovation</div>
                    <div className="text-sm text-muted-foreground">Our Commitment</div>
                  </div>
                </div>
                <p className="text-sm">
                  Leading technology transformation across Africa with AI and automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 construction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('contact.subtitle')}
            </h2>
            <p className="text-lg text-white/90">
              Contact us today to discuss how we can transform your business with intelligent technology solutions. 
              Our team of experts is ready to help you innovate, illuminate, and excel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  {t('hero.cta.contact')}
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-gold" size="xl" asChild>
                <a href="tel:+2290191134672">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('hero.cta.call')}
                </a>
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};

export default Home;
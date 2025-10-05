import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cog, 
  BarChart3, 
  Brain, 
  Globe, 
  FileText, 
  Monitor,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceDetailModal from '@/components/ServiceDetailModal';

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Cog,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      features: [
        'HR workflow automation',
        'Finance process optimization',
        'Operations streamlining',
        'Cost reduction strategies',
        'Real-time monitoring dashboards'
      ],
      color: 'from-primary to-primary-dark',
      benefits: [
        'Reduce operational costs by up to 40%',
        'Eliminate repetitive manual tasks',
        'Improve accuracy and consistency',
        'Scale operations without headcount growth'
      ],
      process: [
        { step: 'Analysis', desc: 'Audit current workflows and identify automation opportunities' },
        { step: 'Design', desc: 'Create custom automation solutions tailored to your needs' },
        { step: 'Implementation', desc: 'Deploy and integrate automation systems' },
        { step: 'Training & Support', desc: 'Train your team and provide ongoing support' }
      ]
    },
    {
      icon: BarChart3,
      title: t('services.datascience.title'),
      description: t('services.datascience.desc'),
      features: [
        'Interactive dashboards',
        'Predictive analytics & forecasting',
        'Customer segmentation',
        'Business intelligence reports',
        'Data-driven decision support'
      ],
      color: 'from-gold to-gold-dark',
      benefits: [
        'Make informed decisions with real-time insights',
        'Identify trends and patterns in your data',
        'Predict future outcomes with confidence',
        'Optimize business strategies based on data'
      ],
      process: [
        { step: 'Data Collection', desc: 'Gather and consolidate data from all sources' },
        { step: 'Analysis', desc: 'Apply statistical methods and ML algorithms' },
        { step: 'Visualization', desc: 'Create intuitive dashboards and reports' },
        { step: 'Implementation', desc: 'Deploy insights into your decision-making process' }
      ]
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      features: [
        'Intelligent AI agents',
        'Computer vision solutions',
        'Robotic Process Automation (RPA)',
        'Predictive modeling',
        'Natural language processing'
      ],
      color: 'from-construction-blue to-construction-orange',
      benefits: [
        'Automate complex cognitive tasks',
        'Extract insights from images and video',
        'Reduce errors with intelligent automation',
        'Enhance customer experiences with AI'
      ],
      process: [
        { step: 'Problem Definition', desc: 'Define the AI use case and objectives' },
        { step: 'Model Development', desc: 'Train and validate AI models' },
        { step: 'Integration', desc: 'Deploy AI solutions into existing systems' },
        { step: 'Optimization', desc: 'Continuously improve model performance' }
      ]
    },
    {
      icon: Globe,
      title: t('services.geospatial.title'),
      description: t('services.geospatial.desc'),
      features: [
        'Satellite imagery analysis',
        'GIS mapping & spatial analysis',
        'Agricultural monitoring',
        'Urban planning solutions',
        'Environmental impact assessment'
      ],
      color: 'from-primary to-gold',
      benefits: [
        'Make location-based decisions with precision',
        'Monitor land use and environmental changes',
        'Optimize agricultural yields',
        'Plan urban development effectively'
      ],
      process: [
        { step: 'Data Acquisition', desc: 'Acquire satellite and geospatial data' },
        { step: 'Processing', desc: 'Process and analyze spatial information' },
        { step: 'Mapping', desc: 'Create detailed GIS maps and visualizations' },
        { step: 'Insights', desc: 'Deliver actionable geospatial insights' }
      ]
    },
    {
      icon: FileText,
      title: t('services.business.title'),
      description: t('services.business.desc'),
      features: [
        'Professional business plans',
        'Financial modeling & forecasting',
        'Investor-ready pitch decks',
        'Market research & analysis',
        'Strategic planning support'
      ],
      color: 'from-construction-orange to-gold',
      benefits: [
        'Secure funding with compelling pitch decks',
        'Plan growth with accurate financial models',
        'Make strategic decisions with confidence',
        'Attract investors and partners'
      ],
      process: [
        { step: 'Discovery', desc: 'Understand your business vision and goals' },
        { step: 'Research', desc: 'Conduct market and competitive analysis' },
        { step: 'Development', desc: 'Create comprehensive plans and models' },
        { step: 'Refinement', desc: 'Polish and prepare investor-ready materials' }
      ]
    },
    {
      icon: Monitor,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: [
        'Responsive web design',
        'E-commerce development',
        'SEO optimization',
        'Multilingual websites',
        'Secure & scalable solutions'
      ],
      color: 'from-gold-dark to-primary',
      benefits: [
        'Reach customers worldwide 24/7',
        'Boost visibility with SEO-optimized sites',
        'Sell online with secure e-commerce',
        'Scale as your business grows'
      ],
      process: [
        { step: 'Planning', desc: 'Define requirements and site architecture' },
        { step: 'Design', desc: 'Create beautiful, user-friendly designs' },
        { step: 'Development', desc: 'Build responsive, high-performance websites' },
        { step: 'Launch & Support', desc: 'Deploy and provide ongoing maintenance' }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Analysis of your needs and project objectives'
    },
    {
      step: '02',
      title: 'Preliminary Study',
      description: 'Technical evaluation and project feasibility assessment'
    },
    {
      step: '03',
      title: 'Detailed Proposal',
      description: 'Complete action plan with timeline and budget'
    },
    {
      step: '04',
      title: 'Execution & Monitoring',
      description: 'Implementation with continuous monitoring and support'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {t('nav.services')}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-gold group w-full justify-start"
                    onClick={() => setSelectedService(service)}
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

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to guarantee the success of your projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4 animate-slide-up">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-gold transform -translate-y-px"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 construction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90">
              Contact our experts for a free consultation and personalized quote tailored to your specific needs.
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
                  Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
};

export default Services;

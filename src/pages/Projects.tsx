import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  ArrowRight,
  Brain,
  Link as LinkIcon,
  Bug,
  Store,
  TrendingUp,
  Lightbulb,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Schistosoma Detection System (SODaC)',
      category: 'AI & Machine Learning',
      categoryIcon: Brain,
      tech: ['Python', 'Deep Learning', 'Computer Vision'],
      status: 'Completed',
      description: 'Deep Learning model to screen urine and stool samples collected from schistosomiasis endemic communities to determine prevalence and intensity of Schistosoma species.',
      services: ['AI Development', 'Computer Vision', 'Medical Imaging'],
      results: [
        'Automated disease detection',
        'High accuracy screening',
        'Improved public health outcomes',
        'Scalable solution for endemic regions'
      ],
      github: 'https://github.com/oladimejiala/Schistosoma-Ova-Detect-and-Count-SODaC-',
      type: 'Open Source'
    },
    {
      id: 2,
      title: 'URL Shortener Platform',
      category: 'Web Application',
      categoryIcon: LinkIcon,
      tech: ['TypeScript', 'React', 'Node.js'],
      status: 'Active',
      description: 'Full-featured URL shortening service with both free and premium tiers, analytics dashboard, and custom domain support.',
      services: ['Web Development', 'Backend API', 'Analytics'],
      results: [
        'Multi-tier subscription model',
        'Real-time analytics tracking',
        'Custom branded short links',
        'High-performance URL routing'
      ],
      github: 'https://github.com/oladimejiala/urlshortener',
      type: 'SaaS Platform'
    },
    {
      id: 3,
      title: 'LnkZip QR Pro',
      category: 'Business Tools',
      categoryIcon: LinkIcon,
      tech: ['TypeScript', 'QR Generation', 'API'],
      status: 'Active',
      description: 'Professional QR code generation and management platform with link shortening capabilities and analytics.',
      services: ['Web Development', 'QR Technology', 'Data Analytics'],
      results: [
        'Dynamic QR code generation',
        'Link management system',
        'Scan analytics and tracking',
        'White-label solutions'
      ],
      github: 'https://github.com/oladimejiala/lnkzip-qr-pro',
      type: 'Business Tool'
    },
    {
      id: 4,
      title: 'Black Soldier Flies Farm Website',
      category: 'Agriculture Tech',
      categoryIcon: Bug,
      tech: ['HTML', 'JavaScript', 'Responsive Design'],
      status: 'Completed',
      description: 'Website for a Black Soldier Flies farm in Benin Republic, showcasing sustainable agriculture and protein production.',
      services: ['Web Design', 'Content Management', 'SEO'],
      results: [
        'Professional online presence',
        'Educational content delivery',
        'Lead generation system',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/oladimejiala/blacksodierfliesbenin',
      type: 'Business Website'
    },
    {
      id: 5,
      title: 'IdeaForge Platform',
      category: 'Business Intelligence',
      categoryIcon: Lightbulb,
      tech: ['TypeScript', 'React', 'Analytics'],
      status: 'Active',
      description: 'Platform that helps subscription businesses reduce churn through intelligent purse management and customer activation strategies.',
      services: ['Web Application', 'Data Analytics', 'Business Intelligence'],
      results: [
        'Churn reduction tools',
        'Customer retention analytics',
        'Automated activation workflows',
        'Revenue optimization'
      ],
      github: 'https://github.com/oladimejiala/IdeaForge',
      type: 'SaaS Platform'
    },
    {
      id: 6,
      title: 'E-Commerce Store Platform',
      category: 'E-Commerce',
      categoryIcon: Store,
      tech: ['TypeScript', 'React', 'Payment Integration'],
      status: 'Active',
      description: 'Modern e-commerce platform for shoes and clothing with inventory management, payment processing, and responsive design.',
      services: ['E-Commerce Development', 'Payment Integration', 'UX Design'],
      results: [
        'Secure payment processing',
        'Inventory management system',
        'Mobile-first design',
        'SEO-optimized product pages'
      ],
      github: 'https://github.com/oladimejiala/shoes-and-clothes-store',
      type: 'E-Commerce'
    },
    {
      id: 7,
      title: 'AI Trading Platform',
      category: 'Financial Tech',
      categoryIcon: TrendingUp,
      tech: ['JavaScript', 'AI/ML', 'Trading APIs'],
      status: 'Active',
      description: 'AI-powered trading platform with automated strategies, market analysis, and risk management features.',
      services: ['AI Development', 'Financial Modeling', 'API Integration'],
      results: [
        'Automated trading strategies',
        'Real-time market analysis',
        'Risk management tools',
        'Performance tracking'
      ],
      github: 'https://github.com/oladimejiala/aitrade',
      type: 'FinTech'
    },
    {
      id: 8,
      title: 'NDCC Consulting Website',
      category: 'Professional Services',
      categoryIcon: Code,
      tech: ['TypeScript', 'React', 'Modern Design'],
      status: 'Completed',
      description: 'Professional consulting firm website with service showcase, contact forms, and multilingual support.',
      services: ['Web Development', 'Branding', 'SEO'],
      results: [
        'Professional brand presence',
        'Lead generation forms',
        'Multilingual support',
        'Fast loading performance'
      ],
      github: 'https://github.com/oladimejiala/ndcconseils',
      type: 'Business Website'
    }
  ];

  const categories = [
    { name: 'All', count: projects.length },
    { name: 'AI & Machine Learning', count: projects.filter(p => p.category === 'AI & Machine Learning').length },
    { name: 'Web Application', count: projects.filter(p => p.category === 'Web Application').length },
    { name: 'E-Commerce', count: projects.filter(p => p.category === 'E-Commerce').length },
    { name: 'Business Tools', count: projects.filter(p => p.category === 'Business Tools').length }
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Active':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:text-foreground hover:bg-background/80'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-gold/10 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gold text-primary">
                      {project.category}
                    </Badge>
                    <Badge className={`border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center py-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-gold rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <project.categoryIcon className="h-12 w-12" />
                    </div>
                  </div>
                  <Badge variant="outline" className="absolute top-4 right-4">
                    {project.type}
                  </Badge>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Services Provided
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-xs flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="flex-1 group" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="ghost" className="flex-1 group" asChild>
                      <Link to="/contact">
                        Similar Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 construction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Your Next Project?
            </h2>
            <p className="text-lg text-white/90">
              Join our satisfied clients and benefit from our expertise to make your technology project a success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-gold" size="xl" asChild>
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

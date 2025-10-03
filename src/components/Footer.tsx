import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Rss } from 'lucide-react';
import amtechLogo from '@/assets/amtech-logo.jpg';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.faq'), href: '/faq' },
  ];

  const services = [
    t('services.automation.title'),
    t('services.datascience.title'),
    t('services.ai.title'),
    t('services.geospatial.title'),
    t('services.business.title'),
    t('services.web.title'),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={amtechLogo} 
                alt="AMTECH-BJ Technology Solutions" 
                className="h-12 w-auto rounded"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">AMTECH-BJ</span>
                <span className="text-xs opacity-90 uppercase tracking-wide text-gold">Innovate, Illuminate, Excel</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              {t('about.mission.text')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover-gold">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover-gold">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="hover-gold" title="RSS Feed">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('nav.services')}</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <span className="text-sm opacity-90">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('contact.info.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gold" />
                <div className="text-sm opacity-90">
                  <p>Cotonou, Benin</p>
                  <p className="text-xs mt-1">Serving Africa & Global Markets</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+2290191134672" className="text-sm opacity-90 hover:text-gold transition-colors">
                  +229 01 91 13 46 72
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:info@amtech-bj.com" className="text-sm opacity-90 hover:text-gold transition-colors">
                  info@amtech-bj.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              © 2025 AMTECH-BJ Technology Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm opacity-90 hover:text-gold transition-colors">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-sm opacity-90 hover:text-gold transition-colors">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
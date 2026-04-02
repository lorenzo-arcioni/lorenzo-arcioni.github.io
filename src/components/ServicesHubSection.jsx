import React from 'react';
import { GraduationCap, Building2, Lightbulb } from 'lucide-react';

const ServicesHubSection = ({ onNavigate }) => {
  const services = [
    {
      id: 'corsi',
      title: 'Corsi Online',
      icon: GraduationCap,
      description: 'Corsi completi su Machine Learning e Data Science disponibili online',
      features: ['Video on-demand', 'Esercizi pratici', 'Certificato finale']
    },
    {
      id: 'formazione-aziendale',
      title: 'Formazione Aziendale',
      icon: Building2,
      description: 'Workshop e percorsi formativi personalizzati per aziende e team',
      features: ['Corsi su misura', 'In presenza o online', 'Materiale incluso']
    },
    {
      id: 'consulenze',
      title: 'Consulenze',
      icon: Lightbulb,
      description: 'Supporto tecnico e strategico per progetti di Machine Learning e Data Science',
      features: ['1-on-1 personalizzato', 'Code review', 'Architettura ML']
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Miei Servizi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluzioni formative e consulenziali personalizzate per ogni esigenza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => onNavigate(service.id)}
                className="bg-gray-50 rounded-lg p-8 text-left border-2 border-gray-200 hover:border-gray-900 transition-colors"
              >
                <div className="mb-6">
                  <div className="p-4 bg-white rounded-lg border border-gray-200 inline-block">
                    <Icon className="text-gray-900 w-10 h-10" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-gray-900 font-medium">
                  <span>Scopri di più</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesHubSection;
import React from 'react';
import { Rocket, FileText, Award, Share2 } from 'lucide-react';

const PortfolioHubSection = ({ onNavigate }) => {
  const sections = [
    {
      id: 'progetti',
      title: 'Progetti',
      icon: Rocket,
      description: 'Esplora i miei progetti di Machine Learning e Data Science',
      count: '5+'
    },
    {
      id: 'pubblicazioni',
      title: 'Pubblicazioni',
      icon: FileText,
      description: 'Scopri le mie ricerche pubblicate in ambito scientifico',
      count: '1'
    },
    {
      id: 'certificazioni',
      title: 'Certificazioni',
      icon: Award,
      description: 'Visualizza le mie certificazioni professionali',
      count: '5'
    },
    {
      id: 'social',
      title: 'Social & Community',
      icon: Share2,
      description: 'Le mie attività sui social e nella community tech',
      count: '40+ ⭐'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Il Mio Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Progetti, ricerche, certificazioni e attività nella community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="bg-gray-50 rounded-lg p-8 text-left border-2 border-gray-200 hover:border-gray-900 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-white rounded-lg border border-gray-200 inline-block">
                    <Icon className="text-gray-900 w-10 h-10" />
                  </div>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 border border-gray-200">
                    {section.count}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {section.description}
                </p>
                
                <div className="flex items-center text-gray-900 font-medium">
                  <span>Esplora</span>
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

export default PortfolioHubSection;
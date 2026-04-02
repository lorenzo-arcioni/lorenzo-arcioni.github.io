import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      logo: '/images/machine-learn.png',
      title: 'Machine Learn',
      role: 'Founder and CEO',
      period: '2024 - Presente',
      description: 'Piattaforma di apprendimento per Machine Learning che unisce teoria accademica e pratica applicata. Gestisco progettazione contenuti, sviluppo esercizi interattivi in Python e implementazione full-stack della piattaforma.'
    },
    {
      logo: '/images/logo.png',
      title: 'Docente e Formatore',
      role: 'Freelance - Python & Machine Learning',
      period: '2023 - Presente',
      description: 'Formazione specialistica in Python, Machine Learning e Data Science per studenti universitari, ricercatori e professionisti. Progettazione e conduzione di percorsi formativi personalizzati con focus su comprensione profonda e problem solving algoritmico.'
    },
    {
      logo: '/images/medium.png',
      title: 'Machine LEarning Technical Writer',
      role: 'Freelance - Python & Machine Learning',
      period: '2023 - Presente',
      description: 'Scrittore di articoli Medium su Python, Machine Learning e Data Science. Contributo a una community professionisti con contenuti di qualità e utili per la formazione e la ricerca professionale.'
    },
    {
      logo: 'https://mistertesi.it/wp-content/uploads/2019/06/La-Sapienza.png',
      title: 'Università La Sapienza',
      role: 'Software Engineer - Stage',
      period: '2022 - 2023',
      description: 'Sviluppo di algoritmo parallelo per annotazione genomica su sistemi HPC. Implementazione di pipeline distribuite per Diamond e BLAST, ottimizzando l\'efficienza dei processi di annotazione del trascrittoma con script di automazione.'
    }
  ];

  return (
    <section className="section-container" id="esperienze">
      <h2 className="section-title">
        <div className="icon-wrapper">
          <Briefcase className="text-gray-900" size={36} />
        </div>
        Esperienze
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => {
          return (
            <div key={index} className="p-6 bg-gray-50 rounded-lg flex gap-4">
              <div className="flex-shrink-0">
                <img 
                  src={exp.logo} 
                  alt={exp.title}
                  className="w-20 h-20 object-contain rounded"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-3">
                  {exp.role}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
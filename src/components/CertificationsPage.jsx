import React from 'react';
import { Award, ExternalLink, ArrowLeft, Calendar, CheckCircle } from 'lucide-react';

const CertificationsPage = ({ onBack }) => {
  const certifications = [
    {
      title: 'Introduzione al Machine Learning',
      issuer: 'Kaggle',
      date: 'Feb 2023',
      link: 'https://drive.google.com/file/d/1_KthHpXzeT6ec5f_kKwvx20SOzrhyjc1/view',
      icon: '🤖',
      skills: ['Supervised Learning', 'Model Evaluation', 'Python']
    },
    {
      title: 'Pandas',
      issuer: 'Kaggle',
      date: 'Feb 2023',
      link: 'https://drive.google.com/file/d/13nl3T5cwl8_T8bcaqGSq5d11TTN6MVUv/view',
      icon: '🐼',
      skills: ['Data Manipulation', 'Data Analysis', 'Python']
    },
    {
      title: 'Data Science for Bioinformatics',
      issuer: 'Deep Learning Italia',
      date: 'Gen 2023',
      link: '/images/lorenzo-arcioni-bio-certification.jpeg',
      icon: '🧬',
      skills: ['Bioinformatics', 'Data Science', 'Genomics']
    },
    {
      title: 'Fondamenti di Python',
      issuer: 'HackerRank',
      date: 'Set 2020',
      link: 'https://www.hackerrank.com/certificates/aa03010a7d90',
      icon: '🐍',
      skills: ['Python', 'Programming', 'Data Structures']
    },
    {
      title: 'CISCO CCNA',
      issuer: 'Cisco Networking Academy',
      date: 'Set 2019',
      icon: '🌐',
      skills: ['Networking', 'TCP/IP', 'Routing']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Torna alla home
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-4 bg-gray-900 rounded-lg">
              <Award className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Certificazioni
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-20">
            Le mie certificazioni professionali e riconoscimenti nel campo tech
          </p>
        </div>

        {/* Hero Statement */}
        <div className="mb-8 sm:mb-12 text-center space-y-4">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Formazione continua: investire in competenze verificate
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Certificazioni che attestano competenze concrete in programmazione, data science e networking
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="relative h-24 sm:h-32 bg-gray-900 overflow-hidden">
                <div className="relative h-full flex items-center justify-center">
                  <span className="text-4xl sm:text-6xl">
                    {cert.icon}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-700 mb-3 sm:mb-4">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span className="font-medium text-sm sm:text-base">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3 sm:mb-4">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Emesso {cert.date}</span>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                {cert.link && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Mostra credenziale
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">5</div>
            <div className="text-sm sm:text-base text-gray-700 font-medium">Certificazioni Ottenute</div>
          </div>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">4</div>
            <div className="text-sm sm:text-base text-gray-700 font-medium">Organizzazioni Riconosciute</div>
          </div>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">2023</div>
            <div className="text-sm sm:text-base text-gray-700 font-medium">Anno Ultima Certificazione</div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="p-8 bg-gray-900 text-white rounded-lg">
          <p className="text-lg leading-relaxed">
            Le certificazioni rappresentano tappe concrete nel mio percorso di formazione continua. 
            Ogni credenziale non è solo un riconoscimento formale, ma testimonia ore di studio, pratica 
            e impegno per padroneggiare competenze specifiche. Dall'analisi dati con Pandas al networking 
            con CCNA, ogni certificazione aggiunge strumenti concreti al mio toolkit professionale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
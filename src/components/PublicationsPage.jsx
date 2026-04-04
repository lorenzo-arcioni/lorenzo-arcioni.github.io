import React from 'react';
import { FileText, ExternalLink, ArrowLeft } from 'lucide-react';

const publications = [
  {
    journal: 'BMC Bioinformatics',
    year: '2024',
    title: 'HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation',
    description:
      'Un tool innovativo per l\'annotazione parallela di trascrittomi che sfrutta architetture HPC per ridurre i tempi di elaborazione da giorni a ore, mantenendo alta accuratezza nei risultati.',
    keyPoints: [
      'Riduzione drastica dei tempi di elaborazione grazie al parallelismo HPC',
      'Sistema a code per gestione ottimizzata delle risorse computazionali',
      'Integrazione con strumenti di annotazione standard (Diamond, BLAST)',
      'Testato su supercomputer Leonardo e Galileo100 del CINECA',
    ],
    tags: ['Bioinformatica', 'HPC', 'Transcriptomics', 'Parallel Computing'],
    citation:
      'Lorenzo Arcioni, Manuel Arcieri, Jessica Di Martino, Franco Liberati, Paolo Bottoni & Tiziana Castrignanò. HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation. BMC Bioinformatics 25, 267 (2024).',
    links: [
      {
        label: 'Leggi la pubblicazione',
        href: 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05887-3',
        style: 'dark',
      },
      {
        label: 'Codice su GitHub',
        href: 'https://github.com/lorenzo-arcioni/HPC-T-Annotator',
        style: 'green',
      },
    ],
  },
  {
    journal: 'Scientific Reports',
    year: '2026',
    title: 'Real-world road damage dataset with potholes, cracks, and maintenance holes',
    description:
      'Un dataset ad alta risoluzione per il rilevamento di danni stradali in ambienti urbani e rurali, acquisito con dispositivi consumer e contenente 2009 immagini etichettate manualmente con buche, crepe e tombini.',
    keyPoints: [
      '2009 immagini etichettate con 1261 buche, 2519 crepe e 957 tombini',
      'Acquisito con dispositivi consumer per simulare scenari di deployment reali',
      'Copre diversi quartieri di Roma e comuni semi-urbani e rurali',
      'Dataset open access su Zenodo e Kaggle, licenza CC BY 4.0',
    ],
    tags: ['Computer Vision', 'Object Detection', 'Dataset', 'Road Damage', 'YOLO'],
    citation:
      'Enrico Giordani, Lorenzo Arcioni, Manuel Gil-Martín, Gian Luca Foresti & Marco Raoul Marini. Real-world road damage dataset with potholes, cracks, and maintenance holes. Scientific Reports (2026).',
    links: [
      {
        label: 'Leggi la pubblicazione',
        href: 'https://www.nature.com/articles/s41598-026-46679-4',
        style: 'dark',
      },
      {
        label: 'Codice su GitHub',
        href: 'https://github.com/lorenzo-arcioni/Road-Damage-Detection-Dataset-Analysis',
        style: 'green',
      },
      {
        label: 'Dataset su Kaggle',
        href: 'https://www.kaggle.com/datasets/lorenzoarcioni/road-damage-dataset-potholes-cracks-and-manholes',
        style: 'blue',
      },
    ],
  },
  {
    journal: 'BMC Genomics',
    year: '2026',
    title: 'Comparative genomics of microalgae: molecular mechanisms underlying efficient CO₂ assimilation',
    description:
      'Un\'analisi di genomica comparativa su 29 specie di microalghe per identificare i meccanismi molecolari alla base dell\'efficiente assimilazione di CO₂, con potenziali applicazioni nella cattura del carbonio.',
    keyPoints: [
      'Analisi comparativa su 29 specie di microalghe con genomi ad alta qualità (BUSCO > 80%)',
      'Identificazione di ortogruppi conservati tramite OrthoFinder',
      'Albero filogenetico completo basato su ortologi a copia singola',
      'Studio delle espansioni e contrazioni di famiglie geniche con CAFÉ',
    ],
    tags: ['Genomica Comparativa', 'Microalghe', 'CO₂ Fixation', 'Phylogenomics', 'Bioinformatica'],
    citation:
      'Jessica Di Martino, Franco Liberati, Meryam Carrus, Manuel Arcieri, Lorenzo Arcioni, Paolo Bottoni, Claudia Cafaro, Loretta De Giorgi, Antonio Fardelli, Paolo Franchini, Daniele Canestrelli & Tiziana Castrignanò. Comparative genomics of microalgae: molecular mechanisms underlying efficient CO₂ assimilation. BMC Genomics (2026).',
    links: [
      {
        label: 'Leggi la pubblicazione',
        href: 'https://link.springer.com/article/10.1186/s12864-026-12714-x',
        style: 'dark',
      },
      {
        label: 'Dati su Figshare',
        href: 'https://figshare.com/projects/Comparative_genomics_of_microalgae/206506',
        style: 'blue',
      },
    ],
  },
];

const buttonStyles = {
  dark: 'bg-gray-900 hover:bg-gray-800 text-white',
  green: 'bg-green-600 hover:bg-green-700 text-white',
  blue: 'bg-blue-600 hover:bg-blue-700 text-white',
};

const PublicationsPage = ({ onBack }) => {
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
              <FileText className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Pubblicazioni
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-20">
            I miei contributi alla ricerca scientifica in bioinformatica e HPC
          </p>
        </div>

        {/* Hero Statement */}
        <div className="mb-8 sm:mb-12 text-center space-y-4">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Ricerca che unisce rigore scientifico e innovazione tecnologica
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dal supercomputing alla bioinformatica: soluzioni per accelerare la ricerca genomica
          </p>
        </div>

        {/* Publication Cards */}
        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Card image area */}
              <div className="relative h-40 sm:h-56 md:h-64 bg-gray-900 overflow-hidden">
                <div className="relative h-full flex items-center justify-center p-4 sm:p-8">
                  <div className="text-center text-white">
                    <FileText className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4" />
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">{pub.journal}</p>
                    <p className="text-sm sm:text-base md:text-lg opacity-90">{pub.year}</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 sm:p-6 md:p-10 bg-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {pub.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-700 font-semibold text-xs sm:text-sm">Peer-Reviewed</span>
                  </div>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 border border-green-200 text-green-700 rounded-full font-semibold text-xs sm:text-sm">
                    Open Access
                  </span>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  {pub.description}
                </p>

                {/* Key Points */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Punti chiave della ricerca
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {pub.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {pub.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {pub.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-colors text-sm sm:text-base md:text-lg ${buttonStyles[link.style]}`}
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>

                {/* Citation */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                    <span className="font-semibold">Citazione:</span> {pub.citation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-6 sm:mt-8 p-8 bg-gray-900 text-white rounded-lg">
          <p className="text-lg leading-relaxed">
            Le pubblicazioni scientifiche rappresentano per me un mezzo per dare valore e concretezza al mio lavoro di ricerca, condividere conoscenza in modo rigoroso e contribuire attivamente al progresso della comunità scientifica.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PublicationsPage;
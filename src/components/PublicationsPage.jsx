import React from 'react';
import { FileText, ExternalLink, ArrowLeft } from 'lucide-react';

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

        {/* Publication Card */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
          <div className="relative h-40 sm:h-56 md:h-64 bg-gray-900 overflow-hidden">
            <div className="relative h-full flex items-center justify-center p-4 sm:p-8">
              <div className="text-center text-white">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold">BMC Bioinformatics</p>
                <p className="text-sm sm:text-base md:text-lg opacity-90">2024</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 md:p-10 bg-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
              HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation
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
              Un tool innovativo per l'annotazione parallela di trascrittomi che sfrutta architetture 
              HPC per ridurre i tempi di elaborazione da giorni a ore, mantenendo alta accuratezza nei risultati.
            </p>
            
            {/* Key Points */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Punti chiave della ricerca</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Riduzione drastica dei tempi di elaborazione grazie al parallelismo HPC</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Sistema a code per gestione ottimizzata delle risorse computazionali</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Integrazione con strumenti di annotazione standard (Diamond, BLAST)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Testato su supercomputer Leonardo e Galileo100 del CINECA</span>
                </li>
              </ul>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium text-xs sm:text-sm">
                Bioinformatica
              </span>
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium text-xs sm:text-sm">
                HPC
              </span>
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium text-xs sm:text-sm">
                Transcriptomics
              </span>
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium text-xs sm:text-sm">
                Parallel Computing
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a 
                href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05887-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base md:text-lg"
              >
                Leggi la pubblicazione
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a 
                href="https://github.com/lorenzo-arcioni/HPC-T-Annotator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base md:text-lg"
              >
                Codice su GitHub
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center leading-relaxed">
            <span className="font-semibold">Citazione:</span> Arcioni, L., Barghini, E., Giordani, T. et al. 
            HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation. 
            BMC Bioinformatics 25, 267 (2024).
          </p>
        </div>

        {/* Philosophy */}
        <div className="mt-6 sm:mt-8 p-8 bg-gray-900 text-white rounded-lg">
          <p className="text-lg leading-relaxed">
            Questa pubblicazione rappresenta l'intersezione tra competenza informatica avanzata e 
            applicazione pratica alla ricerca biologica. Ogni aspetto del tool è stato progettato 
            per massimizzare l'efficienza computazionale mantenendo la precisione scientifica 
            richiesta dalla comunità di ricerca genomica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
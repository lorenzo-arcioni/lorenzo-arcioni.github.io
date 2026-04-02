import React from 'react';
import { User, Code, Lightbulb, Cpu, Dna } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section className="section-container" id="profilo">
      <h2 className="section-title">
        <div className="icon-wrapper">
          <User className="text-gray-900" size={36} />
        </div>
        Chi Sono
      </h2>
      
      <div className="space-y-12">
        {/* Hero statement */}
        <div className="text-center space-y-4">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Trasformo dati complessi in soluzioni intelligenti
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Computer Scientist specializzato in Machine Learning, Data Science e High Performance Computing
          </p>
        </div>

        {/* Key areas */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-gray-900" />
              <h3 className="text-lg font-semibold text-gray-900">Sviluppo & Ricerca</h3>
            </div>
            <p className="text-gray-700">
              Progetto e implemento sistemi di intelligenza artificiale scalabili, dall'ideazione 
              alla produzione, con focus su performance e affidabilità.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-gray-900" />
              <h3 className="text-lg font-semibold text-gray-900">Formazione</h3>
            </div>
            <p className="text-gray-700">
              Insegno Python, Machine Learning e Data Science con un approccio che privilegia 
              la comprensione profonda rispetto alla semplice esecuzione.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-6 h-6 text-gray-900" />
              <h3 className="text-lg font-semibold text-gray-900">High Performance Computing</h3>
            </div>
            <p className="text-gray-700">
              Esperienza su supercomputer CINECA (Leonardo, Galileo100) per calcolo parallelo 
              e ottimizzazione di algoritmi su larga scala.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Dna className="w-6 h-6 text-gray-900" />
              <h3 className="text-lg font-semibold text-gray-900">Bioinformatica</h3>
            </div>
            <p className="text-gray-700">
              Analisi e modellazione di dati biologici complessi, integrando competenze 
              informatiche, statistiche e domain knowledge.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="p-8 bg-gray-900 text-white rounded-lg">
          <p className="text-lg leading-relaxed">
            Il mio approccio unisce rigore scientifico e pragmatismo: ogni soluzione è fondata 
            su solide basi teoriche ma orientata a risolvere problemi reali. Credo nella 
            comprensione profonda dei meccanismi, non nelle scorciatoie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
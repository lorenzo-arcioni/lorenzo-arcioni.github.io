import React from 'react';
import { Building2, ArrowLeft, Users, MapPin, Clock, Target, CheckCircle, Briefcase, Zap } from 'lucide-react';

const CorporateTrainingPage = ({ onBack, onCourseSelect }) => {
  const trainingOptions = [
    {
      id: 'workshop-python-avanzato',
      title: 'Workshop Python Avanzato',
      description: 'Approfondimento su Python per Data Science: pandas, numpy, gestione dati complessi e best practices.',
      duration: '1-2 giorni',
      audience: 'Developer, Data Analyst',
      topics: ['Pandas avanzato', 'NumPy', 'Data Cleaning', 'Performance optimization'],
      icon: '🐍'
    },
    {
      id: 'workshop-ml-fundamentals',
      title: 'Machine Learning Fundamentals',
      description: 'Introduzione pratica al Machine Learning: algoritmi supervisionati, unsupervised, valutazione modelli.',
      duration: '2-3 giorni',
      audience: 'Team tecnici, Manager',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Scikit-learn'],
      icon: '🤖'
    },
    {
      id: 'workshop-deep-learning',
      title: 'Deep Learning & Neural Networks',
      description: 'Corso avanzato su reti neurali, CNN, RNN e applicazioni pratiche con TensorFlow/PyTorch.',
      duration: '3-5 giorni',
      audience: 'Data Scientists, ML Engineers',
      topics: ['Neural Networks', 'CNN', 'RNN', 'Transfer Learning'],
      icon: '🧠'
    },
    {
      id: 'workshop-data-science-business',
      title: 'Data Science per il Business',
      description: 'Come tradurre dati in decisioni strategiche: analisi, visualizzazione e comunicazione efficace.',
      duration: '1 giorno',
      audience: 'Manager, Business Analyst',
      topics: ['Business Analytics', 'Data Visualization', 'KPI', 'Storytelling con i dati'],
      icon: '📊'
    },
    {
      id: 'workshop-mlops',
      title: 'MLOps & Production ML',
      description: 'Best practices per portare modelli ML in produzione: deployment, monitoring, versioning.',
      duration: '2 giorni',
      audience: 'ML Engineers, DevOps',
      topics: ['Model Deployment', 'CI/CD per ML', 'Monitoring', 'MLflow'],
      icon: '⚙️'
    },
    {
      id: 'workshop-bioinformatics-hpc',
      title: 'Bioinformatics & HPC',
      description: 'Analisi di dati biologici su larga scala con tecniche di High Performance Computing.',
      duration: '2-3 giorni',
      audience: 'Ricercatori, Bioinformatici',
      topics: ['Transcriptomics', 'HPC', 'Parallel Computing', 'Data Analysis'],
      icon: '🧬'
    }
  ];

  const modalities = [
    {
      title: 'In Presenza',
      icon: MapPin,
      description: 'Formazione presso la vostra sede con massima interazione',
      features: ['Ambiente familiare', 'Team building', 'Hands-on immediato']
    },
    {
      title: 'Online Live',
      icon: Zap,
      description: 'Sessioni sincrone via videocall con interazione real-time',
      features: ['Flessibilità geografica', 'Recording inclusi', 'Q&A in tempo reale']
    },
    {
      title: 'Ibrido',
      icon: Briefcase,
      description: 'Mix di sessioni in presenza e online per massima flessibilità',
      features: ['Best of both', 'Adattabile', 'Follow-up online']
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
              <Building2 className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Formazione Aziendale
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-20">
            Workshop e percorsi formativi su misura per la tua organizzazione
          </p>
        </div>

        {/* Value Proposition */}
        <div className="mb-8 sm:mb-12 space-y-6">
          <div className="text-center space-y-4">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Formazione che genera competenze concrete, non solo certificati
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ogni corso è personalizzato sulle esigenze della tua azienda, con un approccio 
              pratico che bilancia teoria solida e hands-on intensivo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">Contenuti su misura</h3>
              </div>
              <p className="text-gray-700">
                Workshop progettati sulle specifiche esigenze del tuo team e del tuo settore
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">Piccoli gruppi</h3>
              </div>
              <p className="text-gray-700">
                Sessioni con numeri ridotti per garantire attenzione individuale e interazione
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">Risultati rapidi</h3>
              </div>
              <p className="text-gray-700">
                Competenze immediatamente applicabili al termine di ogni sessione formativa
              </p>
            </div>
          </div>
        </div>

        {/* Modalities */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Modalità di Erogazione
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalities.map((modality, index) => {
              const Icon = modality.icon;
              return (
                <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-gray-900" />
                    <h3 className="text-lg font-semibold text-gray-900">{modality.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{modality.description}</p>
                  <ul className="space-y-2">
                    {modality.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Options */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Workshop e Percorsi Disponibili
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingOptions.map((training, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-6 bg-white border-b border-gray-200">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{training.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{training.title}</h3>
                  </div>
                  <p className="text-gray-700">{training.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-900" />
                      <span className="text-sm font-medium text-gray-700">{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-900" />
                      <span className="text-sm font-medium text-gray-700">{training.audience}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-900 mb-2">Argomenti principali:</p>
                    <div className="flex flex-wrap gap-2">
                      {training.topics.map((topic, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onCourseSelect(training.id)}
                    className="w-full px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Scopri di più
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="p-8 bg-gray-900 text-white rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            Il mio approccio formativo unisce rigore scientifico e pragmatismo: ogni sessione è 
            fondata su solide basi teoriche ma orientata a risolvere problemi reali. Non offro 
            scorciatoie o formule magiche, ma competenze autentiche che il tuo team potrà 
            applicare immediatamente.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border-2 border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Interessato? Parliamone!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Ogni azienda ha esigenze uniche. Contattami per discutere un programma formativo 
            personalizzato per il tuo team. Fissiamo una call conoscitiva gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lorenzo.arcioni2000@gmail.com?subject=Richiesta Formazione Aziendale"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Richiedi Preventivo
            </a>
            <a
              href="#contatti"
              onClick={(e) => {
                e.preventDefault();
                onBack();
                setTimeout(() => {
                  document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Prenota Consulenza Gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingPage;
import React, { useState } from 'react';
import { BookOpen, ArrowLeft, Users, Clock, Star, CheckCircle, Sparkles, Video, Podcast, GraduationCap, Briefcase, School } from 'lucide-react';

const CoursesPage = ({ onBack, onCourseSelect }) => {
  const [activeSection, setActiveSection] = useState('all');

  const courses = [
    {
        id: 'ml-introduction',
        title: 'Machine Learning: Introduzione',
        description: 'Questo corso offre un\'introduzione ai concetti fondamentali e alle applicazioni del Machine Learning, partendo dalle basi fino ai concetti più avanzati.',
        image: '/images/immagine-corso-machine-learning-introduzione.jpg',
        available: false,
        level: 'Principiante',
        duration: '8 ore',
        students: 'Prossimamente',
        rating: null,
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Python Basics'],
        type: 'asincrono',
        platform: 'Udemy',
        buttonText: 'Coming Soon',
        targetAudience: ['universitari', 'superiori']
    },
    {
        id: 'ml-knn',
        title: 'Machine Learning: Algoritmo K-Nearest Neighbors (KNN)',
        description: 'Guida completa all\'algoritmo K-Nearest Neighbors (KNN), con approfondimenti teorici e implementazioni pratiche in Python usando Scikit-learn.',
        image: '/images/immagine-corso-machine-learning-knn.jpg',
        available: true,
        link: 'https://www.udemy.com/course/machine-learning-algoritmo-k-nearest-neighbors-knn/?referralCode=44B387AEE00C4F8E0166',
        level: 'Intermedio',
        duration: '6 ore',
        students: '150+',
        rating: 4.8,
        topics: ['KNN Algorithm', 'Distance Metrics', 'Scikit-learn', 'Hands-on Projects'],
        type: 'asincrono',
        platform: 'Udemy',
        buttonText: 'Iscriviti Ora',
        targetAudience: ['universitari', 'professionisti']
    },
    {
        id: 'python-data-science',
        title: 'Python per Data Science',
        description: 'Corso pratico e intensivo su Python applicato alla Data Science, con focus su pandas, numpy, matplotlib e analisi esplorativa dei dati.',
        image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
        available: true,
        link: '#',
        level: 'Principiante/Intermedio',
        duration: '10 settimane',
        students: '200+',
        rating: 4.9,
        topics: ['Manipolazione dati con Pandas', 'Calcolo numerico con NumPy', 'Visualizzazione dati', 'Analisi Esplorativa (EDA)'],
        type: 'sincrono',
        platform: 'Online Live',
        buttonText: 'Scopri di più',
        targetAudience: ['universitari', 'professionisti']
    },
    {
        id: 'python-base',
        title: 'Programmazione in Python - Base',
        description: 'Corso completo di introduzione alla programmazione con Python',
        image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png',
        available: true,
        link: '#',
        level: 'Principiante',
        duration: '13 settimane',
        students: '5000+',
        rating: 4.7,
        topics: [
            'Variabili e tipi di dati',
            'Strutture di controllo',
            'Funzioni',
            'Programmazione orientata agli oggetti',
            'Gestione file',
            'Algoritmi di ricerca e ordinamento',
            'Creazione di applicazioni pratiche',
            'Progetti di portfolio'
        ],
        type: 'asincrono',
        platform: 'Online Live',
        buttonText: 'Scopri di più',
        targetAudience: ['superiori', 'universitari']
    },
    {
        "id": "python-intermedio",
        "title": "Programmazione in Python - Intermedio",
        "description": "Corso avanzato di Python: dal programmatore base all'esperto del linguaggio",
        "image": "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
        "available": true,
        "link": "#",
        "level": "Intermedio",
        "duration": "13 settimane",
        "students": "2800+",
        "rating": 4.9,
        "topics": [
          "Programmazione funzionale e decoratori",
          "Ricorsione avanzata e trampolining",
          "Iteratori e generatori",
          "OOP avanzato e magic methods",
          "Metaprogrammazione e metaclassi",
          "Memory management e performance",
          "Concorrenza: threading, multiprocessing, asyncio",
          "Type system avanzato"
        ],
        "type": "asincrono",
        "platform": "Online Live",
        "buttonText": "Scopri di più",
        "targetAudience": [
          "universitari",
          "professionisti"
        ]
    },
    {
        id: 'deep-learning',
        title: 'Deep Learning',
        description: 'Corso completo su Deep Learning: teoria, implementazione e applicazioni avanzate',
        image: 'https://miro.medium.com/v2/resize:fit:1200/1*ZB6H4HuF58VcMOWbdpcRxQ.png',
        available: true,
        link: '#',
        level: 'Avanzato',
        duration: '12 settimane',
        students: 'Nuovo',
        rating: null,
        topics: ['Neural Networks Theory', 'CNN Mastery', 'RNN e Transformers', 'Advanced Training'],
        type: 'asincrono',
        platform: 'Online',
        buttonText: 'Scopri di più',
        targetAudience: ['universitari', 'professionisti']
    },
    {
        id: 'computer-vision',
        title: 'Computer Vision',
        description: 'Corso completo su Computer Vision: da image processing a deep learning per visione artificiale',
        image: 'https://images.prismic.io/deepomatic/39df04f3-6712-4d1a-a840-bbfd4f5152d0_computer+vision.jpg?auto=compress,format',
        available: true,
        link: '#',
        level: 'Intermedio/Avanzato',
        duration: '10 settimane',
        students: 'Nuovo',
        rating: null,
        topics: ['Image Processing', 'CNN', 'Object Detection', 'Image Segmentation'],
        type: 'asincrono',
        platform: 'Online',
        buttonText: 'Scopri di più',
        targetAudience: ['universitari', 'professionisti']
    },
    {
        id: 'natural-language-processing',
        title: 'Natural Language Processing (NLP)',
        description: 'Corso completo su NLP: da text processing classico a Transformers e Large Language Models',
        image: 'https://www.freelancinggig.com/blog/wp-content/uploads/2019/10/NLP-in-Artificial-Intelligence.jpg',
        available: true,
        link: '#',
        level: 'Intermedio/Avanzato',
        duration: '10 settimane',
        students: 'Nuovo',
        rating: null,
        topics: ['Text preprocessing', 'Word Embeddings', 'Transformers', 'Hugging Face'],
        type: 'asincrono',
        platform: 'Online',
        buttonText: 'Scopri di più',
        targetAudience: ['universitari', 'professionisti']
    },
    {
        id: 'math-for-ml',
        title: 'Mathematics for Machine Learning',
        description: 'Fondamenti matematici essenziali per comprendere e applicare Machine Learning e Deep Learning',
        image: 'https://www.techslang.com/wp-content/uploads/2021/10/thinking-ai-humanoid-robot-analyzing-screen-mathematics-formula-science-e1634742458866.jpg',
        available: true,
        link: '#',
        level: 'Intermedio',
        duration: '8 settimane',
        students: 'Nuovo',
        rating: null,
        topics: ['Algebra Lineare', 'Calcolo Differenziale', 'Probabilità e Statistica', 'Optimization'],
        type: 'asincrono',
        platform: 'Online',
        buttonText: 'Scopri di più',
        targetAudience: ['universitari', 'professionisti']
    },
    {
        id: 'probabilita-e-statistica',
        title: 'Probabilità e Statistica',
        description: 'Corso completo di Probabilità e Statistica: fondamenti per superare gli esami universitari e basi per Data Science e Machine Learning',
        image: 'https://blog.smaga.ch/wp-content/uploads/2016/11/file-GdMpm8alUFxk3T8RViFZmLOQ.jpg',
        available: true,
        link: '#',
        level: 'Intermedio',
        duration: '10 settimane',
        students: 'Nuovo',
        rating: null,
        topics: ['Probabilità', 'Variabili casuali', 'Distribuzioni', 'Inferenza statistica'],
        type: 'sincrono',
        platform: 'Online',
        buttonText: 'Scopri di più',
        targetAudience: ['universitari', 'superiori']
    },
    {
        id: "algorithms-and-data-structures",
        title: "Algorithms and Data Structures",
        description: "Corso completo su algoritmi e strutture dati: fondamentali per ogni programmatore",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230807133054/Data-structure-algorithm.png",
        available: true,
        link: "#",
        level: "Intermedio",
        duration: "12 settimane",
        students: "Nuovo",
        rating: null,
        topics: [
            "Strutture dati",
            "Sorting & Searching",
            "Big O notation",
            "Dynamic Programming"
        ],
        type: "asincrono",
        platform: "Online",
        buttonText: "Scopri di più",
        targetAudience: [
            "universitari",
            "superiori"
        ]
    }
  ];

  const sections = [
    {
      id: 'all',
      title: 'Tutti i Corsi',
      icon: BookOpen,
      description: 'Visualizza l\'intera offerta formativa'
    },
    {
      id: 'superiori',
      title: 'Studenti Superiori',
      icon: School,
      description: 'Corsi introduttivi per iniziare il tuo percorso in programmazione e tecnologia'
    },
    {
      id: 'universitari',
      title: 'Studenti Universitari',
      icon: GraduationCap,
      description: 'Percorsi completi per approfondire Machine Learning, AI e Data Science'
    },
    {
      id: 'professionisti',
      title: 'Professionisti',
      icon: Briefcase,
      description: 'Corsi avanzati per sviluppare competenze specialistiche e rimanere aggiornati'
    }
  ];

  const filteredCourses = activeSection === 'all' 
    ? courses 
    : courses.filter(course => course.targetAudience.includes(activeSection));

  const CourseCard = ({ course }) => (
    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/images/default-course.jpg';
          }}
        />
        {course.available && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-full flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Disponibile
          </div>
        )}
        {!course.available && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-white text-xs sm:text-sm font-semibold rounded-full flex items-center gap-1.5 sm:gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Prossimamente
          </div>
        )}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center">
          <span className="inline-block px-2.5 sm:px-3 py-1 bg-white text-gray-900 text-xs sm:text-sm font-semibold rounded-full">
            {course.level}
          </span>
          {course.platform && (
            <span className="inline-block px-2.5 sm:px-3 py-1 bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-full">
              {course.platform}
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 bg-white">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
          {course.title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          {course.description}
        </p>
        
        {/* Course Info */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-gray-700" />
            <div className="text-xs sm:text-sm text-gray-700 font-medium">{course.duration}</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-gray-700" />
            <div className="text-xs sm:text-sm text-gray-700 font-medium">{course.students}</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-gray-700" />
            <div className="text-xs sm:text-sm text-gray-700 font-medium">
              {course.rating ? `${course.rating} ★` : 'N/A'}
            </div>
          </div>
        </div>
        
        {/* Topics */}
        {course.topics && course.topics.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
              <span className="text-xs sm:text-sm font-semibold text-gray-900">Argomenti trattati:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {course.topics.slice(0, 4).map((topic, i) => (
                <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                  {topic}
                </span>
              ))}
              {course.topics.length > 4 && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                  +{course.topics.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Course Type */}
        <div className="mb-4 sm:mb-5">
          <div className="flex items-center gap-2 mb-2">
            {course.type === 'sincrono' ? (
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
            ) : (
              <Podcast className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
            )}
            <span className="text-xs sm:text-sm font-semibold text-gray-900">Modalità:</span>
          </div>
          <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 ${
            course.type === 'sincrono' 
              ? 'bg-purple-100 text-purple-800 border-purple-200' 
              : 'bg-blue-100 text-blue-800 border-blue-200'
          } border rounded-full text-xs sm:text-sm font-semibold`}>
            {course.type === 'sincrono' ? '🔴 Live - Sincrono' : '📼 On-Demand - Asincrono'}
          </span>
        </div>
        
        {/* CTA Button */}
        <div className="mt-4 sm:mt-6">
          {course.available ? (
            course.link && course.link !== '#' ? (
              <a 
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                {course.buttonText}
              </a>
            ) : (
              <button
                onClick={() => onCourseSelect(course.id)}
                className="block w-full text-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                {course.buttonText}
              </button>
            )
          ) : (
            <button 
              disabled
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-semibold rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
            >
              {course.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );

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
            <div className="p-2.5 sm:p-4 bg-gray-900 rounded-lg sm:rounded-xl">
              <BookOpen className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Corsi Online
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-20">
            Corsi completi su Machine Learning e Data Science, organizzati per il tuo livello e obiettivi
          </p>
        </div>

        {/* Section Tabs */}
        <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 sm:p-6 rounded-lg border-2 transition-all ${
                    isActive
                      ? 'bg-gray-900 border-gray-900 text-white'
                      : 'bg-white border-gray-200 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 mx-auto ${isActive ? 'text-white' : 'text-gray-900'}`} />
                  <h3 className={`text-sm sm:text-base font-semibold mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {section.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>
                    {section.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Count */}
        <div className="mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'corso disponibile' : 'corsi disponibili'}
            {activeSection !== 'all' && ` per ${sections.find(s => s.id === activeSection)?.title.toLowerCase()}`}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Nessun corso disponibile per questa categoria al momento.</p>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-8 sm:mt-12 bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 border-2 border-gray-200">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-white rounded-lg border border-gray-200">
              <Sparkles className="text-gray-900 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Approccio didattico unico
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                I miei corsi non si limitano a insegnare "come si fa": ti porto a capire davvero 
                <span className="font-semibold text-gray-900"> "perché funziona"</span>. Con un metodo 
                chiaro, rigoroso e completo, frutto di anni di studio teorico e pratica avanzata, 
                ti aiuto a sviluppare una comprensione autentica e duratura del Machine Learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
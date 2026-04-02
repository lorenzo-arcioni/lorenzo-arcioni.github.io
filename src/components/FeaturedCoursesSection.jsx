import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const FeaturedCoursesSection = ({ onCourseSelect }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Qui puoi facilmente scegliere quali corsi mostrare cambiando gli ID
  const featuredCourseIds = [
    'ml-knn',
    'python-data-science', 
    'deep-learning'
  ];

  // Database completo dei corsi (stesso dei file JSON)
  const allCourses = [
    {
      id: 'ml-introduction',
      title: 'Machine Learning: Introduzione',
      description: 'Corso introduttivo ai concetti fondamentali del Machine Learning',
      image: '/images/immagine-corso-machine-learning-introduzione.jpg',
      available: false,
      level: 'Principiante',
      duration: '8 ore',
      students: 'Prossimamente',
      rating: null,
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
      type: 'asincrono',
      platform: 'Udemy'
    },
    {
      id: 'ml-knn',
      title: 'Machine Learning: K-Nearest Neighbors',
      description: 'Guida completa all\'algoritmo KNN con implementazioni pratiche',
      image: '/images/immagine-corso-machine-learning-knn.jpg',
      available: true,
      link: 'https://www.udemy.com/course/machine-learning-algoritmo-k-nearest-neighbors-knn/?referralCode=44B387AEE00C4F8E0166',
      level: 'Intermedio',
      duration: '6 ore',
      students: '150+',
      rating: 4.8,
      topics: ['KNN Algorithm', 'Distance Metrics', 'Scikit-learn'],
      type: 'asincrono',
      platform: 'Udemy',
      featured: true
    },
    {
      id: 'python-data-science',
      title: 'Python per Data Science',
      description: 'Corso pratico su Python applicato alla Data Science',
      image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
      available: true,
      link: '#',
      level: 'Principiante/Intermedio',
      duration: '10 settimane',
      students: '200+',
      rating: 4.9,
      topics: ['Pandas', 'NumPy', 'Visualizzazione', 'EDA'],
      type: 'sincrono',
      platform: 'Online Live',
      featured: true
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      description: 'Corso completo su Deep Learning: teoria e applicazioni avanzate',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*ZB6H4HuF58VcMOWbdpcRxQ.png',
      available: true,
      link: '#',
      level: 'Avanzato',
      duration: '12 settimane',
      students: 'Nuovo',
      rating: null,
      topics: ['Neural Networks', 'CNN', 'RNN', 'Transformers'],
      type: 'asincrono',
      platform: 'Online',
      featured: true
    }
  ];

  // Filtra solo i corsi featured
  const featuredCourses = allCourses.filter(course => 
    featuredCourseIds.includes(course.id)
  );

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles className="w-32 h-32 text-emerald-600 animate-pulse" />
          </div>
          
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-sm font-bold rounded-full animate-bounce shadow-lg">
            🔥 I PIÙ RICHIESTI 🔥
          </div>
          
          <div className="relative flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Corsi in Evidenza
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
          </div>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
            ⭐ Oltre 500 studenti hanno già trasformato la loro carriera
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative cursor-pointer"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Glow effect background */}
              <div className="absolute -inset-1 bg-emerald-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-2xl border-4 border-emerald-300 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-emerald-500 hover:-translate-y-2">
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>

                {/* Floating particles effect */}
                {hoveredCard === index && (
                  <>
                    <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                    <div className="absolute top-20 right-10 w-2 h-2 bg-emerald-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute bottom-10 left-20 w-2 h-2 bg-emerald-600 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                  </>
                )}

                {/* Ribbon "BESTSELLER" */}
                <div className="absolute top-4 -right-12 rotate-45 z-20 w-40 bg-gradient-to-r from-yellow-400 to-yellow-500 text-center py-1 shadow-lg">
                  <span className="text-xs font-black text-gray-900">⭐ BESTSELLER ⭐</span>
                </div>
                
                {/* Image with overlay effects */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/30 to-transparent z-10" />
                  
                  {/* Animated gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-600/0 z-10 transition-all duration-700 ${
                    hoveredCard === index ? 'from-emerald-400/40 to-emerald-600/40' : ''
                  }`} />
                  
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    onError={(e) => {
                      e.target.src = '/images/default-course.jpg';
                    }}
                  />
                  
                  {/* Floating badges with animation */}
                  <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-black rounded-full shadow-xl animate-pulse border-2 border-white">
                      🚀 POPOLARE
                    </span>
                    <span className="px-3 py-1 bg-white text-gray-900 text-xs font-bold rounded-full shadow-lg border-2 border-emerald-400">
                      {course.level}
                    </span>
                  </div>

                  {/* Platform badge with glow */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="relative inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-xs font-bold rounded-full shadow-xl border-2 border-white">
                      <span className="relative z-10 text-white">{course.platform}</span>
                      <span className="absolute inset-0 rounded-full bg-blue-400 blur-md opacity-50 animate-pulse" />
                    </span>
                  </div>
                </div>
                
                {/* Content with enhanced styling */}
                <div className="relative p-6 bg-white">
                  <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-tight">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2 font-medium">
                    {course.description}
                  </p>
                  
                  {/* Stats with glowing effect */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="relative text-center p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border-2 border-emerald-200 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <Clock className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                      <div className="text-xs text-gray-900 font-bold relative z-10">{course.duration}</div>
                    </div>
                    <div className="relative text-center p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border-2 border-emerald-200 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" style={{ transitionDelay: '0.1s' }} />
                      <Users className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                      <div className="text-xs text-gray-900 font-bold relative z-10">{course.students}</div>
                    </div>
                    <div className="relative text-center p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border-2 border-emerald-200 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" style={{ transitionDelay: '0.2s' }} />
                      <Star className="w-5 h-5 mx-auto mb-1 text-yellow-500 fill-yellow-500" />
                      <div className="text-xs text-gray-900 font-bold relative z-10">
                        {course.rating ? `${course.rating} ★` : 'Nuovo'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Topics with animation */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {course.topics.slice(0, 3).map((topic, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 rounded-full text-xs font-bold border-2 border-emerald-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ animation: `fadeInScale 0.5s ease-out ${0.8 + i * 0.1}s both` }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button with extreme effects */}
                  <button
                    onClick={() => {
                      if (course.link && course.link !== '#') {
                        window.open(course.link, '_blank');
                      } else {
                        onCourseSelect(course.id);
                      }
                    }}
                    className="relative w-full px-6 py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-base font-black rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden group/btn"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                    
                    <span className="relative z-10 flex items-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      INIZIA SUBITO
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to all courses - Ultra appealing */}
        <div className="text-center relative">
          <button
            onClick={() => onCourseSelect('all')}
            className="relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-xl font-black rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-2xl hover:scale-105 transform overflow-hidden group border-4 border-emerald-400"
          >
            {/* Animated background shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <BookOpen className="w-8 h-8 relative z-10" />
            <span className="relative z-10 flex items-center gap-2">
              Scopri TUTTI i Corsi
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </span>
            <ArrowRight className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:translate-x-3" />
          </button>
          
          {/* Social proof text */}
          <p className="mt-6 text-lg font-bold text-gray-700">
            🎓 Unisciti a <span className="text-emerald-600 text-2xl">500+</span> studenti soddisfatti
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .bg-size-200 {
          background-size: 200% 100%;
        }
        
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        
        .bg-pos-100 {
          background-position: 100% 0%;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCoursesSection;
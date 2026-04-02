import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  PlayCircle, 
  Lock,
  Target,
  AlertCircle,
  Laptop,
  Loader2,
  Download,
  X,
  Star
} from 'lucide-react';

const CourseDetailPage = ({ courseId, onBack }) => {
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [email, setEmail] = useState('');
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const loadCourseData = async () => {
      if (!courseId) {
        setError('ID del corso non specificato');
        setIsLoading(false);
        return;
      }
      
      try {
        setIsLoading(true);
        const response = await fetch(`/data/courses/${courseId}.json`);
        
        if (!response.ok) {
          throw new Error('Corso non trovato');
        }
        
        const data = await response.json();
        setCourseData(data);
      } catch (err) {
        console.error('Error loading course:', err);
        setError('Impossibile caricare il contenuto del corso.');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCourseData();
  }, [courseId]);

  const calculateTotalLessons = (modules) => 
    modules?.reduce((total, m) => total + m.lessons.length, 0) || 0;

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    
    if (!acceptPrivacy) {
      alert('Devi accettare i termini per il trattamento dei dati');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email);
      console.log('Newsletter consent:', acceptNewsletter);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Close modal after 2 seconds and reset
      setTimeout(() => {
        setShowBrochureModal(false);
        setSubmitSuccess(false);
        setEmail('');
        setAcceptPrivacy(false);
        setAcceptNewsletter(false);
      }, 2000);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-gray-700" />
          <span className="text-lg text-gray-600">Caricamento corso...</span>
        </div>
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 text-red-800 p-6 rounded-lg flex items-center gap-3 mb-6 border border-red-200">
            <AlertCircle className="w-6 h-6" />
            <span className="font-semibold">{error || 'Corso non trovato'}</span>
          </div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna indietro
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => !isSubmitting && setShowBrochureModal(false)}
          ></div>
          
          <div className="relative bg-white rounded-lg p-6 sm:p-8 max-w-md w-full">
            <button
              onClick={() => !isSubmitting && setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              disabled={isSubmitting}
            >
              <X className="w-5 h-5" />
            </button>
            
            {!submitSuccess ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Download className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Ottieni il programma
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Inserisci il tuo indirizzo email per ricevere il programma completo del corso.
                </p>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="tua@email.com"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={acceptPrivacy}
                      onChange={(e) => setAcceptPrivacy(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      Accetto i <span className="text-gray-900 underline font-medium cursor-pointer">termini per il trattamento dei dati</span> *
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={acceptNewsletter}
                      onChange={(e) => setAcceptNewsletter(e.target.checked)}
                      className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      Voglio iscrivermi alla mailing list per ricevere aggiornamenti e contenuti esclusivi
                    </label>
                  </div>
                </div>
                
                <button
                  onClick={handleBrochureSubmit}
                  disabled={isSubmitting || !acceptPrivacy}
                  className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Scarica Brochure
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Brochure Inviata!
                </h3>
                <p className="text-gray-600">
                  Controlla la tua email per scaricare il programma.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-6xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-6 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Torna ai corsi
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200">
                {courseData.category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {courseData.title}
              </h1>
              <p className="text-gray-700 text-lg sm:text-xl">
                {courseData.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {courseData.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {courseData.level}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {courseData.modules?.length || 0} moduli
                </div>
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  {calculateTotalLessons(courseData.modules)} lezioni
                </div>
                {courseData.certification && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Certificato
                  </div>
                )}
              </div>
            </div>

            {courseData.instructor && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-gray-700" />
                  Il tuo istruttore
                </h2>
                <div className="flex gap-4 items-start">
                  {courseData.instructor_image && (
                    <img 
                      src={courseData.instructor_image} 
                      alt={courseData.instructor}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {courseData.instructor}
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      {courseData.instructor_bio}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {courseData.full_description && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  Descrizione completa
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {courseData.full_description}
                </p>
              </div>
            )}

            {courseData.learning_objectives && courseData.learning_objectives.length > 0 && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-gray-700" />
                  Cosa imparerai
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseData.learning_objectives.map((obj, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">
                          {obj.objective}
                        </span>
                        {obj.description && (
                          <p className="text-sm text-gray-600 mt-1">
                            {obj.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {courseData.modules && courseData.modules.length > 0 && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-gray-700" />
                  Programma del corso
                </h2>
                <p className="text-gray-600 mb-6">
                  {courseData.modules.length} moduli • {calculateTotalLessons(courseData.modules)} lezioni
                </p>
                <div className="space-y-4">
                  {courseData.modules.map((module, moduleIndex) => (
                    <div key={module.id || moduleIndex} className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        Modulo {moduleIndex + 1}: {module.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {module.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.estimated_hours}
                        </span>
                        <span className="flex items-center gap-1">
                          <PlayCircle className="w-4 h-4" />
                          {module.lessons.length} lezioni
                        </span>
                      </div>

                      <div className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div 
                            key={lesson.id || lessonIndex}
                            className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200"
                          >
                            {lesson.is_free ? (
                              <PlayCircle className="w-4 h-4 text-green-700 flex-shrink-0 mt-1" />
                            ) : (
                              <Lock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                            )}
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <span className="font-medium text-sm text-gray-900">
                                  {lessonIndex + 1}. {lesson.title}
                                </span>
                                <span className="text-xs text-gray-600 ml-2">
                                  {lesson.duration}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">
                                {lesson.description}
                              </p>
                              {lesson.is_free && (
                                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold border border-green-200">
                                  Anteprima gratuita
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - sticky solo su lg+ */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden lg:sticky lg:top-6">
              {courseData.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={courseData.image_url}
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {courseData.price}
                </div>
                <button className="w-full px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors mb-3">
                  Iscriviti al corso
                </button>
                <button 
                  onClick={() => setShowBrochureModal(true)}
                  className="w-full px-6 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <Download className="w-5 h-5" />
                  Ottieni il programma
                </button>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                    Accesso a vita
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                    Materiali scaricabili
                  </div>
                  {courseData.certification && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                      Certificato incluso
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                    Supporto Q&A
                  </div>
                </div>
              </div>
            </div>

            {courseData.prerequisites && courseData.prerequisites.length > 0 && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-700" />
                  Prerequisiti
                </h3>
                <div className="space-y-3">
                  {courseData.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        prereq.is_required ? 'bg-red-600' : 'bg-yellow-600'
                      }`} />
                      <div>
                        <span className="font-medium text-sm text-gray-900">
                          {prereq.title}
                        </span>
                        <p className="text-xs text-gray-600 mt-1">
                          {prereq.description}
                        </p>
                        {prereq.is_required && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-semibold border border-red-200">
                            Obbligatorio
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {courseData.target_audience && courseData.target_audience.length > 0 && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-700" />
                  A chi è rivolto
                </h3>
                <div className="space-y-2">
                  {courseData.target_audience.map((audience, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-700" />
                      <span className="text-sm text-gray-700">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {courseData.tools_required && courseData.tools_required.length > 0 && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-purple-700" />
                  Strumenti necessari
                </h3>
                <div className="space-y-2">
                  {courseData.tools_required.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                      <span className="text-sm text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {courseData.certification && (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-700" />
                  Certificazione
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-700" />
                  <span className="text-sm font-medium text-gray-900">
                    Certificato di completamento
                  </span>
                </div>
                {courseData.certificate_description && (
                  <p className="text-sm text-gray-600">
                    {courseData.certificate_description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        {courseData.reviews && courseData.reviews.length > 0 && (
          <div className="mt-12 bg-gray-50 rounded-lg border border-gray-200 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Recensioni degli studenti
              </h2>
              
              {courseData.average_rating && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {courseData.average_rating.toFixed(1)}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.round(courseData.average_rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      {courseData.reviews.length} recensioni
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = courseData.reviews.filter(r => r.rating === rating).length;
                      const percentage = (count / courseData.reviews.length) * 100;
                      return (
                        <div key={rating} className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-12">
                            {rating} stelle
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {courseData.reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg flex-shrink-0">
                      {review.student_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {review.student_name}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {review.comment}
                      </p>
                      {review.verified && (
                        <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold border border-green-200">
                          <CheckCircle className="w-3 h-3" />
                          Acquisto verificato
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesHubSection from './components/ServicesHubSection';
import PortfolioHubSection from './components/PortfolioHubSection';
import CoursesPage from './components/CoursesPage';
import CourseDetailPage from './components/CourseDetailPage';
import CorporateTrainingPage from './components/CorporateTrainingPage';
import ConsultingPage from './components/ConsultingPage';
import ProjectsPage from './components/ProjectsPage';
import PublicationsPage from './components/PublicationsPage';
import CertificationsPage from './components/CertificationsPage';
import SocialCommunityPage from './components/SocialCommunityPage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FeaturedCoursesSection from './components/FeaturedCoursesSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);

  // Gestione cronologia browser
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentPage(event.state.page);
        setSelectedCourseId(event.state.courseId || null);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }, 0);
      } else {
        // Se non c'è stato salvato (es. primo caricamento), vai alla home
        setCurrentPage('home');
        setSelectedCourseId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Imposta stato iniziale
    window.history.replaceState({ page: 'home' }, '', window.location.pathname);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedCourseId(null);
    window.history.pushState({ page }, '', `#${page}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  const handleCourseNavigate = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-detail');
    window.history.pushState({ page: 'course-detail', courseId }, '', `#course/${courseId}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  const handleBackToServices = () => {
    setCurrentPage('home');
    setSelectedCourseId(null);
    window.history.pushState({ page: 'home' }, '', window.location.pathname);
    setTimeout(() => {
      if (servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleBackToPortfolio = () => {
    setCurrentPage('home');
    setSelectedCourseId(null);
    window.history.pushState({ page: 'home' }, '', window.location.pathname);
    setTimeout(() => {
      if (portfolioRef.current) {
        portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Funzione generica per tornare indietro
  const handleBack = () => {
    window.history.back();
  };

  // Funzione specifica per tornare alla pagina corsi
  const handleBackToCourses = () => {
    setCurrentPage('corsi');
    setSelectedCourseId(null);
    window.history.pushState({ page: 'corsi' }, '', '#corsi');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  // Services pages
  if (currentPage === 'corsi') {
    return (
      <div className="min-h-screen bg-gray-50">
        <CoursesPage onBack={handleBackToServices} onCourseSelect={handleCourseNavigate} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'course-detail') {
    return (
      <div className="min-h-screen bg-gray-50">
        <CourseDetailPage 
          courseId={selectedCourseId} 
          onBack={handleBackToCourses}
        />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'formazione-aziendale') {
    return (
      <div className="min-h-screen bg-gray-50">
        <CorporateTrainingPage onBack={handleBack} onCourseSelect={handleCourseNavigate} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'consulenze') {
    return (
      <div className="min-h-screen bg-gray-50">
        <ConsultingPage onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  // Portfolio pages
  if (currentPage === 'progetti') {
    return (
      <div className="min-h-screen bg-gray-50">
        <ProjectsPage onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'pubblicazioni') {
    return (
      <div className="min-h-screen bg-gray-50">
        <PublicationsPage onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'certificazioni') {
    return (
      <div className="min-h-screen bg-gray-50">
        <CertificationsPage onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'social') {
    return (
      <div className="min-h-screen bg-gray-50">
        <SocialCommunityPage onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        
        {/* Services Hub */}
        {/*
        <div ref={servicesRef}>
          <ServicesHubSection onNavigate={handleNavigate} />
        </div>
        */}

        {/* Featured Courses */}
        {/*
        <FeaturedCoursesSection 
          onCourseSelect={(courseId) => {
            if (courseId === 'all') {
              handleNavigate('corsi');
            } else {
              handleCourseNavigate(courseId);
            }
          }} 
        />
        */}
        
        {/* Portfolio Hub */}
        <div ref={portfolioRef}>
          <PortfolioHubSection onNavigate={handleNavigate} />
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Share2, ArrowLeft, BookOpen, Github, Linkedin, Award, TrendingUp, ExternalLink } from 'lucide-react';

const SocialCommunityPage = ({ onBack }) => {
  const mediumArticles = [
    {
      title: 'Deep Learning per la Classificazione sul Dataset RealWaste',
      excerpt: 'Approccio innovativo usando transfer learning e CNN personalizzate per la classificazione dei rifiuti.',
      link: 'https://medium.com/@lorenzo.arcioni2000/deep-learning-per-la-classificazione-sul-dataset-realwaste-db6367f5ab19',
      date: '2024',
      views: '1.2k',
      image: 'https://cdn-images-1.medium.com/max/800/1*iAOh8xMffpG_9Rzl2ZsYXw.png'
    },
    {
      title: 'HPC e Machine Learning: Accelerare l\'Annotazione del Trascrittoma',
      excerpt: 'Come utilizzare supercomputer per ridurre i tempi di elaborazione da giorni a ore.',
      link: '#',
      date: '2024',
      views: '850',
      image: '/images/project-hpc-t-annotator.jpeg'
    }
  ];

  const githubProjects = [
    {
      name: 'HPC-T-Annotator',
      description: 'Tool HPC per annotazione parallela del trascrittoma',
      stars: 15,
      language: 'Python',
      link: 'https://github.com/lorenzo-arcioni/HPC-T-Annotator'
    },
    {
      name: 'ICR Age-Related Conditions',
      description: 'Top 2% Kaggle - Medaglia d\'Argento',
      stars: 8,
      language: 'Python',
      link: 'https://github.com/lorenzo-arcioni/icr-identify-age-related-conditions'
    },
    {
      name: 'Water Potability Analysis',
      description: 'ML per predire la potabilità dell\'acqua',
      stars: 5,
      language: 'Python',
      link: 'https://github.com/lorenzo-arcioni/water-potability-analysis'
    },
    {
      name: 'BioSwiftAnalytics',
      description: 'Suite di notebook per analisi dati biologici',
      stars: 12,
      language: 'Jupyter Notebook',
      link: 'https://github.com/lorenzo-arcioni/BioSwiftAnalytics'
    }
  ];

  const kaggleAchievements = [
    {
      title: 'ICR - Identifying Age-Related Conditions',
      achievement: 'Silver Medal - Top 2%',
      rank: '85th / 6,436',
      icon: '🥈'
    },
    {
      title: 'Competitions Participated',
      achievement: '5+ Competizioni',
      rank: 'Expert Tier',
      icon: '🏆'
    }
  ];

  const stats = [
    { label: 'GitHub Stars', value: '40+', icon: Github },
    { label: 'Medium Followers', value: '500+', icon: BookOpen },
    { label: 'Kaggle Rank', value: 'Top 2%', icon: Award },
    { label: 'LinkedIn Connections', value: '1k+', icon: Linkedin }
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
              <Share2 className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Social & Community
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 sm:ml-20">
            Le mie attività nella community tech: articoli, progetti open-source e competizioni
          </p>
        </div>

        {/* Hero Statement */}
        <div className="mb-8 sm:mb-12 text-center space-y-4">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Condividere conoscenza per far crescere la community
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Open-source, articoli tecnici e competizioni: ogni contributo è un'opportunità per imparare insieme
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-gray-900" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Medium Articles */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-gray-900" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Articoli su Medium
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumArticles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white text-gray-900 text-xs font-semibold rounded-full border border-gray-200">
                      {article.date} • {article.views} views
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-gray-900 font-semibold">
                    <span>Leggi l'articolo</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://medium.com/@lorenzo.arcioni2000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Vedi tutti gli articoli su Medium
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* GitHub Projects */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-8 h-8 text-gray-900" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Progetti Open-Source
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">{project.stars}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
                    {project.language}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-900" />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://github.com/lorenzo-arcioni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Vedi tutti i progetti su GitHub
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Kaggle Achievements */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-gray-900" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Competizioni Kaggle
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kaggleAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-lg font-medium text-gray-700 mb-1">{achievement.achievement}</p>
                <p className="text-sm text-gray-600">{achievement.rank}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.kaggle.com/lorenzoarcioni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Vedi profilo Kaggle
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Philosophy */}
        <div className="p-8 bg-gray-900 text-white rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            Credo fortemente nel valore della condivisione della conoscenza. Ogni progetto open-source, 
            articolo o competizione rappresenta un'opportunità per contribuire alla community tech e 
            crescere insieme. La collaborazione e il confronto sono fondamentali per l'innovazione.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Seguimi sui Social
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Condivido regolarmente contenuti su ML, Data Science e le mie esperienze in progetti reali. 
            Connetti con me per rimanere aggiornato!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/lorenzo-arcioni-216b921b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/lorenzo-arcioni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://medium.com/@lorenzo.arcioni2000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCommunityPage;
import React from 'react';
import { GraduationCap, Building2, Award, School } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      icon: Building2,
      institution: 'Università La Sapienza',
      degree: 'Laurea Magistrale in Computer Science',
      status: 'In corso',
      period: '2023 - Presente'
    },
    {
      icon: Award,
      institution: 'Neural Academy',
      degree: 'Master Professionale in Data Science',
      period: '2023'
    },
    {
      icon: Building2,
      institution: 'Università La Sapienza',
      degree: 'Laurea Triennale in Informatica',
      grade: '110/110L',
      period: '2020 - 2023'
    },
    {
      icon: School,
      institution: 'ITT LS B. Pascal - Roma',
      degree: 'Diploma in Informatica e Telecomunicazioni',
      grade: '100/100',
      period: '2014 - 2019'
    }
  ];

  return (
    <section className="section-container" id="formazione">
      <h2 className="section-title">
        <div className="icon-wrapper">
          <GraduationCap className="text-gray-900" size={36} />
        </div>
        Formazione
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-lg flex gap-4"
            >
              <div className="flex-shrink-0">
                <Icon className="w-12 h-12 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-1">
                  {edu.degree}
                </p>
                {edu.grade && (
                  <p className="text-sm font-semibold text-gray-900">
                    {edu.grade}
                  </p>
                )}
                {edu.status && (
                  <p className="text-sm text-gray-600">
                    {edu.status}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
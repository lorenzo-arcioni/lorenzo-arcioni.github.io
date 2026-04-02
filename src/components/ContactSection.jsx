import React, { useEffect } from 'react';
import { Mail, MessageCircle, Calendar } from 'lucide-react';

const ContactSection = () => {
  useEffect(() => {
    // Carica lo script di Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section-container" id="contatti">
      <h2 className="section-title">
        <Mail className="text-gray-900" size={32} />
        Contatti
      </h2>
      
      <div className="space-y-6">
        {/* Email */}
        <a 
          href="mailto:lorenzo.arcioni2000@gmail.com"
          className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-600 transition-colors"
        >
          <Mail className="text-blue-600" size={24} />
          <span className="font-medium text-blue-900">lorenzo.arcioni2000@gmail.com</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/393296986474?text=Ciao%2C%20vorrei%20prenotare%20una%20consulenza."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-600 transition-colors"
        >
          <MessageCircle className="text-green-600" size={24} />
          <span className="font-medium text-green-900">Apri la chat su WhatsApp</span>
        </a>

        {/* Calendly intro */}
        <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Calendar className="text-gray-900 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Prenota una consulenza gratuita
              </h3>
              <p className="text-gray-700">
                Puoi prenotare una <span className="font-semibold">consulenza gratuita</span> di 30 minuti direttamente 
                dal calendario qui sotto. Scegli il giorno e l'orario che preferisci tra quelli disponibili!
              </p>
            </div>
          </div>
        </div>

        {/* Calendly Widget */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/lorenzo-arcioni2000/30min?hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
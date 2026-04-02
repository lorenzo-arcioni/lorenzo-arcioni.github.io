import React, { useEffect, useRef } from 'react';
import { Heart, Linkedin, Github, Mail, Instagram, BookOpen } from 'lucide-react';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const rect = canvas.getBoundingClientRect();
      const particleCount = Math.floor((rect.width * rect.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 2
        });
      }
    };

    const drawParticles = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Disegna le connessioni
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.4;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Disegna i nodi
      particles.forEach(particle => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Aggiorna posizione
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Rimbalzo sui bordi
        if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1;
        
        // Mantieni le particelle nei confini
        particle.x = Math.max(0, Math.min(rect.width, particle.x));
        particle.y = Math.max(0, Math.min(rect.height, particle.y));
      });
    };

    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

const Footer = () => {
  return (
    <footer className="relative text-white py-8 sm:py-12 mt-12 sm:mt-16 overflow-hidden" style={{ backgroundColor: '#383838' }}>
      <NeuralNetwork />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Main content */}
          <div className="space-y-3">
            <p className="text-base sm:text-lg font-semibold">
              © {new Date().getFullYear()} Lorenzo Arcioni
            </p>
            <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto px-4">
              Machine Learning Engineer, Data Scientist & Formatore
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://www.linkedin.com/in/lorenzo-arcioni-216b921b5/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://github.com/lorenzo-arcioni" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.kaggle.com/lorenzoarcioni" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 font-bold text-xl sm:text-2xl hover:bg-white/20 transition-colors"
              aria-label="Kaggle"
            >
              K
            </a>
            <a 
              href="https://www.instagram.com/lorenzo_arcioni/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://medium.com/@lorenzo.arcioni2000/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Medium"
            >
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:lorenzo.arcioni2000@gmail.com"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-white/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-red-400 text-red-400" />
            <span>in Italy</span>
          </div>
          
          {/* Bottom text */}
          <p className="text-xs sm:text-sm text-white/70 px-4">
            Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const createParticles = () => {
      const count = 50;
      const newParticles = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.05 + 0.01,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  const handleScroll = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Параллакс фон */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: 'rgba(0, 255, 136, 0.3)',
              borderRadius: '50%',
              opacity: p.opacity,
            }}
            animate={{ y: [p.y * 100, (p.y * 100 + 100) % 200] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="text-6xl font-bold mb-4 text-center z-10"
      >
        SVIROXK
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-[var(--light)]/80 mb-8 text-center max-w-2xl z-10"
      >
        Независимая студия веб-дизайна и разработки цифровых продуктов
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 z-10"
      >
        <motion.button
          onClick={handleScroll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-[var(--primary)] text-[var(--dark)] font-semibold hover:bg-[var(--primary)]/90 transition-colors"
        >
          Посмотреть работы
        </motion.button>
        <motion.button
          onClick={() => navigate('/order')}
          className="px-8 py-3 rounded-full border border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-[var(--dark)] transition-all"
        >
          Обсудить проект
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-[var(--light)]/50"
        >
          Прокрутите вниз
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
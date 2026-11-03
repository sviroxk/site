import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styles } from '../data';

const Styles: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Стили
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-[var(--light)]/70 mb-12 text-center max-w-2xl mx-auto"
        >
          Выберите визуальную систему для вашего проекта. Каждая палитра включает в себя цвета, типографику и рекомендации по использованию.
        </motion.p>

        {/* Галерея стилей */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {styles.map((style, index) => (
            <motion.article
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedStyle(style.id)}
              className={`group cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedStyle === style.id
                ? 'border-[var(--primary)] shadow-2xl'
                : 'border-transparent hover:border-[var(--primary)]/30'}`
              }
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={`/images/${style.image}`}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/80 to-transparent pointer-events-none"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {style.title}
                </h3>
                <p className="text-[var(--light)]/60 text-sm line-clamp-2 mb-3">
                  {style.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: style.primary.includes('linear')
                      ? 'rgba(255,255,255,0.1)'
                      : style.primary,
                      color: style.primary.includes('linear') ? 'var(--light)' : 'var(--primary)'
                    }}
                  >
                    {style.primary}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(255,255,255,0.1)] text-[var(--light)]"
                  >
                    {style.mood}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Детальная информация */}
        <AnimatePresence>
          {selectedStyle && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 z-50 bg-[var(--dark)]/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedStyle(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[rgba(255,255,255,0.03)] rounded-2xl border border-[var(--primary)] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {styles.filter(s => s.id === selectedStyle).map(style => (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold">{style.title}</h2>
                      <button
                        onClick={() => setSelectedStyle(null)}
                        className="text-[var(--secondary)] hover:text-white"
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-[var(--light)]/70 mb-6 text-lg">{style.description}</p>

                    {/* Цвета */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">Палитра</h4>
                      <div className="flex gap-4 flex-wrap">
                        <div
                          className="w-20 h-20 rounded-lg shadow-lg"
                          style={{ background: style.primary.includes('linear')
                            ? style.primary
                            : `linear-gradient(45deg, ${style.primary} 0%, ${style.secondary} 100%)` }}
                        />
                        <div
                          className="w-20 h-20 rounded-lg shadow-lg"
                          style={{ backgroundColor: style.secondary, opacity: 0.8 }}
                        />
                      </div>
                    </div>

                    {/* Типографика */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">Типографика</h4>
                      <p className="text-[var(--light)]/60" style={{ fontFamily: style.typography.includes('Синтез')
                        ? "'Playfair Display', serif"
                        : "'Inter', system-ui, sans-serif" }}>{style.typography}</p>
                    </div>

                    {/* Применение */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">Где использовать</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {style.useCases.map((useCase, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[var(--light)]/60"
                          >
                            <span className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={() => navigate('/order')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-[var(--primary)] text-[var(--dark)] font-semibold text-lg hover:bg-[var(--primary)]/90 transition-all shadow-lg hover:shadow-[var(--primary)]/25"
          >
            Применить стиль
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Styles;
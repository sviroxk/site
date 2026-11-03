import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-[var(--secondary)]">Проект не найден</h1>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Навигация */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/work')}
          className="mb-6 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Назад к работам
        </motion.button>

        {/* Герой */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="aspect-video mb-4 rounded-xl overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)]">
            <img
              src={`/images/${project.screens[0]}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-3xl font-bold mb-2 text-[var(--primary)]"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--light)]/70 mb-4"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 text-sm text-[var(--light)]/50"
          >
            <span>Год: {project.year}</span>
            <span>•</span>
            <span>Технологии: {project.technologies.join(', ')}</span>
          </motion.div>
        </motion.div>

        {/* Галерея экранов */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-6 mt-12 text-[var(--primary)]"
        >
          Экраны проекта
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {project.screens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)] hover:border-[var(--primary)] transition-all"
            >
              <img
                src={`/images/${screen}`}
                alt={`${project.title} экран ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Ссылки */}
        {project.url && (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full py-3 rounded-full bg-[var(--primary)] text-[var(--dark)] font-semibold text-center hover:bg-[var(--primary)]/90 transition-all shadow-lg"
          >
            Посмотреть проект
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data';

const Work: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [filter, search]);

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'web', label: 'Веб' },
    { id: 'app', label: 'Приложения' },
    { id: 'branding', label: 'Брендинг' },
    { id: 'illustration', label: 'Иллюстрации' },
  ];

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
          Работы
        </motion.h1>

        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all border border-[var(--primary)] ${filter === cat.id ? 'bg-[var(--primary)] text-[var(--dark)]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Поиск */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 max-w-md mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск проектов..."
              className="w-full px-6 py-3 rounded-full border border-[var(--light)]/30 bg-[rgba(255,255,255,0.05)] text-[var(--light)] focus:outline-none focus:border-[var(--primary)] transition-all"
            />
          </div>
        </motion.div>

        {/* Галерея */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/work/${project.id}`)}
                className="group cursor-pointer overflow-hidden rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:border-[var(--primary)] transition-all hover:transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/images/${project.screens[0]}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--light)]/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[rgba(0,255,136,0.1)] text-[var(--primary)] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
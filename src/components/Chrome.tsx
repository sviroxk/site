import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Chrome: React.FC = () => {
  const location = useLocation();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15,23,42,0.95)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[var(--primary)] tracking-wider">SVIROXK</Link>
          <div className="flex gap-6">
            <Link
              to="/work"
              className={`px-4 py-2 rounded-full transition-all ${isActive('/work') ? 'bg-[var(--primary)] text-[var(--dark)]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`
            >
              Работы
            </Link>
            <Link
              to="/styles"
              className={`px-4 py-2 rounded-full transition-all ${isActive('/styles') ? 'bg-[var(--primary)] text-[var(--dark)]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`
            >
              Стили
            </Link>
            <Link
              to="/order"
              className={`px-4 py-2 rounded-full bg-[var(--secondary)] text-white font-medium hover:bg-[rgba(255,255,255,0.2)] transition-all`
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </motion.nav>

      <div ref={cursorRef} className="cursor"></div>
    </>
  );
};

export default Chrome;
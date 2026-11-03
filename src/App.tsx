import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Данные
import { projects, styles } from './data';

// Компоненты
import Chrome from './components/Chrome';
import Home from './pages/Home';
import Work from './pages/Work';
import Styles from './pages/Styles';
import Order from './pages/Order';
import Visual from './components/Visual';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Имитация загрузки
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <HashRouter>
      <Chrome />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Visual />
    </HashRouter>
  );
};

export default App;
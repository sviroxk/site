import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { GameProvider } from "./context/GameContext";

// Компоненты
import Chrome from "./components/Chrome";
import GameLevel from "./pages/GameLevel";
import Visual from "./components/Visual";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <GameProvider>
      <HashRouter>
        <Chrome />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<GameLevel />} />
          </Routes>
        </AnimatePresence>
        <Visual />
      </HashRouter>
    </GameProvider>
  );
};

export default App;
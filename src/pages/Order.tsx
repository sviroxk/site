import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styles } from '../data';

const Order: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    styleId: '',
    budget: '',
    message: ''

  });
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const styleOptions = styles.map(s => ({ id: s.id, title: s.title }));

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email) return;
      setStep(2);
    } else if (step === 2) {
      if (!formData.projectType || !formData.styleId) return;
      setStep(3);
    }
  };

  const handleSubmit = () => {
    // Сохраняем в localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('orders', JSON.stringify(orders));

    // Имитация отправки
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    navigate('/');
  };

  useEffect(() => {
    if (selectedStyle) {
      setFormData(prev => ({ ...prev, styleId: selectedStyle }));
    }
  }, [selectedStyle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/')}
          className="mb-6 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Назад на главную
        </motion.button>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-2 text-center"
        >
          Обсудить проект
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[var(--light)]/70 mb-8 text-center"
        >
          Заполните бриф и мы создадим идеальный проект для вас
        </motion.p>

        {/* Шаги */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {['Контакты', 'Проект', 'Детали'].map((stepName, i) => (
            <motion.div
              key={i}
              className={`flex items-center gap-2 ${i + 1 === step ? 'text-[var(--primary)]' : 'text-[var(--light)]/50'}`
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${i + 1 === step
                ? 'bg-[var(--primary)] text-[var(--dark)] border-[var(--primary)]'
                : 'border-[var(--light)]/30 text-[var(--light)]/50'}`
              >
                {i + 1}
              </div>
              <span className="text-sm font-medium">{stepName}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Форма */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-sm text-[var(--light)]/70 font-medium">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-6 py-3 rounded-xl border border-[var(--light)]/30 bg-[rgba(255,255,255,0.05)] text-[var(--light)] focus:outline-none focus:border-[var(--primary)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-[var(--light)]/70 font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-6 py-3 rounded-xl border border-[var(--light)]/30 bg-[rgba(255,255,255,0.05)] text-[var(--light)] focus:outline-none focus:border-[var(--primary)] transition-all"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-sm text-[var(--light)]/70 font-medium">Тип проекта</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  className="w-full px-6 py-3 rounded-xl border border-[var(--light)]/30 bg-[rgba(255,255,255,0.05)] text-[var(--light)] focus:outline-none focus:border-[var(--primary)] transition-all"
                >
                  <option value="" disabled>Выберите тип проекта</option>
                  <option value="web">Веб-сайт</option>
                  <option value="app">Мобильное приложение</option>
                  <option value="branding">Брендинг</option>
                  <option value="design">Дизайн-система</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-[var(--light)]/70 font-medium">Визуальный стиль</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {styleOptions.map(style => (
                    <motion.button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      whileHover={{ scale: 1.05 }}
                      className={`p-3 rounded-lg border-2 transition-all ${selectedStyle === style.id
                        ? 'border-[var(--primary)] bg-[var(--primary)]/10'
                        : 'border-transparent hover:border-[var(--primary)]/30'}`
                      }
                    >
                      <div className="text-xs font-medium text-[var(--light)]">{style.title}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-sm text-[var(--light)]/70 font-medium">Бюджет (необязательно)</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  placeholder="Пример: 50 000 ₽"
                  className="w-full px-6 py-3 rounded-xl border border-[var(--light)]/30 bg-[rgba(255,255,255,0.05)] text-[var(--light)] focus:outline-none focus:border-[var(--primary)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-[var(--light)]/70 font-medium">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-6 py-3 rounded-xl border border-[var(--light)]/30 bg-[rgba(255,255,255,0.05)] text-[var(--light)] focus:outline-none focus:border-[var(--primary)] transition-all resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Кнопки навигации */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between mt-8"
        >
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            className="px-8 py-3 rounded-full border border-[var(--light)]/30 text-[var(--light)]/70 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
          >
            Назад
          </button>
          <button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="px-10 py-3 rounded-full bg-[var(--primary)] text-[var(--dark)] font-semibold hover:bg-[var(--primary)]/90 transition-all shadow-lg hover:shadow-[var(--primary)]/25"
          >
            {step === 3 ? 'Отправить заявку' : 'Далее'}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Order;
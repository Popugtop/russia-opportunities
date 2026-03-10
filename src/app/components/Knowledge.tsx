import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, BookOpen } from 'lucide-react';
import { terms } from '../data/terms';
import { GradientBackground, NoiseTexture } from './BackgroundEffects';

export function Knowledge() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = terms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[calc(100vh-64px)] overflow-hidden"
    >
      <GradientBackground />
      <NoiseTexture />

      <div className="relative z-10 container mx-auto px-4 py-4 md:py-6 max-w-5xl">
        {/* Заголовок и поиск */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-card rounded-2xl border border-border p-4 md:p-6 mb-4 md:mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #2D5BFF22 0%, #8B5CF622 100%)', border: '1px solid #2D5BFF33' }}>
              <BookOpen size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-foreground text-lg md:text-xl font-bold">База знаний</h2>
              <p className="text-xs text-muted-foreground">Полезные термины и понятия для молодёжи</p>
            </div>
          </div>

          <div className="mb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по терминам..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-input-background border border-input rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Найдено терминов: <span className="text-primary font-semibold">{filteredTerms.length}</span>
          </p>
        </motion.div>

        {filteredTerms.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 text-center"
          >
            <p className="text-muted-foreground">
              По вашему запросу ничего не найдено. Попробуйте изменить поисковый запрос.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {filteredTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #2D5BFF 0%, #8B5CF6 100%)' }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-foreground text-base md:text-lg font-bold">{term.term}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{term.definition}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

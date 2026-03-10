import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: 'home' | 'opportunities' | 'knowledge' | 'links' | 'about') => void;
}

export function Header({ currentSection, onSectionChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home' as const, label: 'Главная' },
    { id: 'opportunities' as const, label: 'Каталог возможностей' },
    { id: 'knowledge' as const, label: 'База знаний' },
    { id: 'links' as const, label: 'Полезные ссылки' },
    { id: 'about' as const, label: 'О платформе' }
  ];

  const handleSectionChange = (section: typeof sections[number]['id']) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => handleSectionChange('home')}
          >
            <Logo />
          </motion.div>

          {/* Десктопная навигация */}
          <nav className="hidden md:block">
            <ul className="flex gap-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange(section.id)}
                    className={`relative px-4 py-2 rounded-lg transition-colors text-sm ${
                      currentSection === section.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {currentSection === section.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{section.label}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Мобильная кнопка меню */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Открыть меню"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleSectionChange(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        currentSection === section.id
                          ? 'bg-primary/10 text-primary border border-primary/30'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {section.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

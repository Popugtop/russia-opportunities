import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Opportunities } from './components/Opportunities';
import { Knowledge } from './components/Knowledge';
import { Links } from './components/Links';
import { About } from './components/About';
import type { AudienceType, SphereType } from './data/opportunities';

type Section = 'home' | 'opportunities' | 'knowledge' | 'links' | 'about';

/** Параметры, которые можно передать при переходе в каталог */
export interface GoToOpportunitiesOptions {
  audience?: AudienceType;
  sphere?: SphereType;
  /** При передаче id каталог сразу откроет модалку этой карточки */
  openId?: string;
}

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [pendingAudience, setPendingAudience] = useState<AudienceType | null>(null);
  const [pendingSphere, setPendingSphere] = useState<SphereType | null>(null);
  const [pendingOpenId, setPendingOpenId] = useState<string | null>(null);

  const handleGoToOpportunities = (opts?: GoToOpportunitiesOptions) => {
    setPendingAudience(opts?.audience ?? null);
    setPendingSphere(opts?.sphere ?? null);
    setPendingOpenId(opts?.openId ?? null);
    setCurrentSection('opportunities');
  };

  const handleSectionChange = (section: Section) => {
    // Сбрасываем pending-фильтры при ручной навигации через Header/Footer
    setPendingAudience(null);
    setPendingSphere(null);
    setPendingOpenId(null);
    setCurrentSection(section);
  };

  const navSections: { id: Section; label: string }[] = [
    { id: 'home', label: 'Главная' },
    { id: 'opportunities', label: 'Каталог возможностей' },
    { id: 'knowledge', label: 'База знаний' },
    { id: 'links', label: 'Полезные ссылки' },
    { id: 'about', label: 'О платформе' }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header currentSection={currentSection} onSectionChange={handleSectionChange} />

      <main className="relative">
        <AnimatePresence mode="wait">
          {currentSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Home onGoToOpportunities={handleGoToOpportunities} />
            </motion.div>
          )}
          {currentSection === 'opportunities' && (
            <motion.div
              key="opportunities"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Opportunities
                initialAudience={pendingAudience}
                initialSphere={pendingSphere}
                initialOpenId={pendingOpenId}
              />
            </motion.div>
          )}
          {currentSection === 'knowledge' && (
            <motion.div
              key="knowledge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Knowledge />
            </motion.div>
          )}
          {currentSection === 'links' && (
            <motion.div
              key="links"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Links />
            </motion.div>
          )}
          {currentSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-t border-border py-6 md:py-8 mt-8 md:mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <h3 className="text-white font-bold mb-2 md:mb-3 text-base md:text-lg">О платформе</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Образовательный лендинг-каталог «Россия — страна возможностей» для студентов и молодых специалистов
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 md:mb-3 text-base md:text-lg">Разделы</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  {navSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleSectionChange(section.id)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 md:mb-3 text-base md:text-lg">Статистика</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>26+ проектов платформы</li>
                  <li>20 млн+ участников</li>
                  <li>89 регионов России</li>
                  <li>13 возможностей в каталоге</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-4 md:pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
                  © 2025 Россия — страна возможностей. Образовательный проект
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground text-center md:text-right">
                  Учебный проект по предмету «Основы российской государственности»
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

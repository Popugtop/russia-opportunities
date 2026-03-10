import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { opportunities, type Opportunity, type AudienceType, type SphereType } from '../data/opportunities';
import { OpportunityCard } from './OpportunityCard';
import { OpportunityModal } from './OpportunityModal';
import { GradientBackground, NoiseTexture } from './BackgroundEffects';

type OpportunityType = Opportunity['type'];

interface OpportunitiesProps {
  initialAudience?: AudienceType | null;
  initialSphere?: SphereType | null;
  /** Если передан — сбрасывает все фильтры и сразу открывает модалку этой карточки */
  initialOpenId?: string | null;
}

export function Opportunities({ initialAudience, initialSphere, initialOpenId }: OpportunitiesProps) {
  const [selectedAudiences, setSelectedAudiences] = useState<AudienceType[]>([]);
  const [selectedSpheres, setSelectedSpheres] = useState<SphereType[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<OpportunityType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  // Применяем параметры, переданные с главной страницы
  useEffect(() => {
    if (initialOpenId) {
      // Сбрасываем все фильтры и открываем конкретную карточку
      setSelectedAudiences([]);
      setSelectedSpheres([]);
      setSelectedTypes([]);
      setSearchQuery('');
      const opp = opportunities.find((o) => o.id === initialOpenId);
      if (opp) setSelectedOpportunity(opp);
    } else {
      setSelectedAudiences(initialAudience ? [initialAudience] : []);
      setSelectedSpheres(initialSphere ? [initialSphere] : []);
      setSelectedTypes([]);
      setSearchQuery('');
    }
  }, [initialAudience, initialSphere, initialOpenId]);

  const audienceOptions: AudienceType[] = [
    'Для школьников',
    'Для студентов',
    'Для специалистов',
    'Для всех'
  ];

  const sphereOptions: SphereType[] = [
    'Наука и IT',
    'Волонтёрство',
    'Бизнес и управление',
    'Творчество'
  ];

  const typeOptions: OpportunityType[] = [
    'Гранты',
    'Конкурсы',
    'Обучение',
    'Стажировки',
    'Форумы'
  ];

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      if (selectedAudiences.length > 0 && !selectedAudiences.includes(opp.audience)) {
        return false;
      }
      if (selectedSpheres.length > 0 && !selectedSpheres.includes(opp.sphere)) {
        return false;
      }
      if (selectedTypes.length > 0 && !selectedTypes.includes(opp.type)) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          opp.title.toLowerCase().includes(q) ||
          opp.description.toLowerCase().includes(q) ||
          opp.organizer.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedAudiences, selectedSpheres, selectedTypes, searchQuery]);

  const handleAudienceToggle = (audience: AudienceType) => {
    setSelectedAudiences((prev) =>
      prev.includes(audience) ? prev.filter((a) => a !== audience) : [...prev, audience]
    );
  };

  const handleSphereToggle = (sphere: SphereType) => {
    setSelectedSpheres((prev) =>
      prev.includes(sphere) ? prev.filter((s) => s !== sphere) : [...prev, sphere]
    );
  };

  const handleTypeToggle = (type: OpportunityType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setSelectedAudiences([]);
    setSelectedSpheres([]);
    setSelectedTypes([]);
    setSearchQuery('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // overflow-hidden предотвращает выход фоновых градиентов за пределы контейнера
      className="relative min-h-[calc(100vh-64px)] overflow-hidden"
    >
      <GradientBackground />
      <NoiseTexture />

      <div className="relative z-10 container mx-auto px-4 py-4 md:py-6">
        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-card rounded-2xl border border-border p-4 md:p-6 mb-4 md:mb-6"
        >
          <h2 className="mb-4 text-foreground text-lg md:text-xl font-bold">Найти возможность</h2>

          {/* Поиск */}
          <div className="mb-4">
            <label className="block text-xs md:text-sm mb-2 text-muted-foreground font-medium">
              Поиск по названию, описанию или организатору
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Введите текст для поиска..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-input-background border border-input rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Аудитория */}
          <div className="mb-4">
            <label className="block text-xs md:text-sm mb-2 text-muted-foreground font-medium">
              Целевая аудитория
            </label>
            <div className="flex flex-wrap gap-2">
              {audienceOptions.map((audience) => (
                <motion.button
                  key={audience}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAudienceToggle(audience)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-sm rounded-xl transition-colors font-medium ${
                    selectedAudiences.includes(audience)
                      ? 'text-white shadow-md'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                  style={
                    selectedAudiences.includes(audience)
                      ? { background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }
                      : {}
                  }
                >
                  {audience}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Сфера */}
          <div className="mb-4">
            <label className="block text-xs md:text-sm mb-2 text-muted-foreground font-medium">
              Сфера деятельности
            </label>
            <div className="flex flex-wrap gap-2">
              {sphereOptions.map((sphere) => (
                <motion.button
                  key={sphere}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSphereToggle(sphere)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-sm rounded-xl transition-colors font-medium ${
                    selectedSpheres.includes(sphere)
                      ? 'text-white shadow-md'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                  style={
                    selectedSpheres.includes(sphere)
                      ? { background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }
                      : {}
                  }
                >
                  {sphere}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Тип */}
          <div className="mb-4">
            <label className="block text-xs md:text-sm mb-2 text-muted-foreground font-medium">
              Тип возможности
            </label>
            <div className="flex flex-wrap gap-2">
              {typeOptions.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTypeToggle(type)}
                  className={`px-3 py-1.5 rounded-xl transition-colors text-sm font-medium ${
                    selectedTypes.includes(type)
                      ? 'text-white shadow-md'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                  style={
                    selectedTypes.includes(type)
                      ? { background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }
                      : {}
                  }
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Управление */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetFilters}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 transition-colors border border-red-500/20"
            >
              <X size={14} />
              Сбросить фильтры
            </motion.button>
            <div className="flex-1" />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-xl border border-primary/20 text-center font-medium"
            >
              Найдено: {filteredOpportunities.length}
            </motion.div>
          </div>
        </motion.div>

        {/* Список карточек */}
        <AnimatePresence mode="wait">
          {filteredOpportunities.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card rounded-2xl border border-border p-8 text-center"
            >
              <p className="text-muted-foreground">
                По выбранным фильтрам возможностей не найдено. Попробуйте изменить параметры поиска.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr items-stretch"
            >
              {filteredOpportunities.map((opp, index) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  // scroll-mt-20 компенсирует высоту sticky-хедера при программном скролле
                  className="h-full scroll-mt-20"
                >
                  <OpportunityCard
                    opportunity={opp}
                    onShowDetails={setSelectedOpportunity}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Модальное окно */}
        <AnimatePresence>
          {selectedOpportunity && (
            <OpportunityModal
              opportunity={selectedOpportunity}
              onClose={() => setSelectedOpportunity(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

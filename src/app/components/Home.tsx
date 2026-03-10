import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Rocket,
  Users,
  MapPin,
  ArrowRight,
  Lightbulb,
  Heart,
  Briefcase,
  Palette,
  GraduationCap,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';
import { opportunities, type AudienceType, type SphereType } from '../data/opportunities';
import { GradientBackground, NoiseTexture } from './BackgroundEffects';
import type { GoToOpportunitiesOptions } from '../App';

interface HomeProps {
  onGoToOpportunities: (opts?: GoToOpportunitiesOptions) => void;
}

const directions: {
  icon: React.ElementType;
  title: string;
  sphere: SphereType;
  description: string;
  gradient: string;
  iconColor: string;
  border: string;
}[] = [
  {
    icon: Lightbulb,
    title: 'Наука и IT',
    sphere: 'Наука и IT',
    description: 'Олимпиады, хакатоны и гранты для будущих учёных и разработчиков',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    border: 'hover:border-blue-500/50'
  },
  {
    icon: Heart,
    title: 'Волонтёрство',
    sphere: 'Волонтёрство',
    description: 'Проекты добровольческой деятельности и социального служения',
    gradient: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
    border: 'hover:border-rose-500/50'
  },
  {
    icon: Briefcase,
    title: 'Бизнес и управление',
    sphere: 'Бизнес и управление',
    description: 'Конкурсы для предпринимателей и будущих руководителей',
    gradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
    border: 'hover:border-violet-500/50'
  },
  {
    icon: Palette,
    title: 'Творчество',
    sphere: 'Творчество',
    description: 'Конкурсы в области искусства, дизайна, медиа и культуры',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    border: 'hover:border-amber-500/50'
  }
];

const routes: {
  label: string;
  icon: React.ElementType;
  description: string;
  audience: AudienceType;
}[] = [
  { label: 'Школьники', icon: GraduationCap, description: 'Олимпиады и первые конкурсы', audience: 'Для школьников' },
  { label: 'Студенты', icon: Star, description: 'Гранты, форумы и стажировки', audience: 'Для студентов' },
  { label: 'Молодые специалисты', icon: TrendingUp, description: 'Карьерные программы и нетворкинг', audience: 'Для специалистов' },
  { label: 'Профессионалы', icon: Award, description: 'Лидерские конкурсы и кадровый резерв', audience: 'Для специалистов' }
];

export function Home({ onGoToOpportunities }: HomeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [activeRoute, setActiveRoute] = useState(0);

  // Показываем первые 8 карточек в карусели
  const featuredOpportunities = opportunities.slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeftState(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      <GradientBackground />
      <NoiseTexture />

      <div className="relative z-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12 md:py-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold"
            style={{ background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }}
          >
            <span className="text-white">Основы российской государственности</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight px-2"
          >
            Россия —
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }}
            >
              страна возможностей
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            Открой для себя экосистему проектов, грантов и стажировок, которые помогут тебе реализовать свой потенциал уже сегодня.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(45, 91, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onGoToOpportunities()}
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold transition-all shadow-lg text-base"
            style={{ background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }}
          >
            <Rocket size={20} />
            Найти свой путь
            <ArrowRight size={20} />
          </motion.button>
        </motion.section>

        {/* Счётчики */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="container mx-auto px-4 py-8 md:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Briefcase,
                value: '26+',
                title: 'Проектов платформы',
                description: 'РСВ объединяет более 26 проектов для развития каждого',
                gradient: 'from-blue-500/20 to-indigo-500/20',
                iconColor: 'text-blue-400'
              },
              {
                icon: Users,
                value: '20 млн+',
                title: 'Участников по стране',
                description: 'Миллионы россиян уже воспользовались возможностями платформы',
                gradient: 'from-violet-500/20 to-purple-500/20',
                iconColor: 'text-violet-400'
              },
              {
                icon: MapPin,
                value: '89',
                title: 'Регионов России',
                description: 'Программы доступны в каждом субъекте Российской Федерации',
                gradient: 'from-emerald-500/20 to-teal-500/20',
                iconColor: 'text-emerald-400'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${stat.gradient} backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all`}
              >
                <div className="absolute inset-0 bg-card/60 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-card/80 ${stat.iconColor} mb-4`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{stat.title}</h3>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Популярные направления (сферы) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="container mx-auto px-4 py-8 md:py-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Популярные направления</h2>
                <p className="text-sm md:text-base text-muted-foreground">Выбери сферу — каталог сразу отфильтрует нужные программы</p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scroll('left')}
                  className="p-3 bg-card hover:bg-card/80 border border-border rounded-xl transition-all"
                >
                  <ChevronLeft className="text-foreground" size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scroll('right')}
                  className="p-3 bg-card hover:bg-card/80 border border-border rounded-xl transition-all"
                >
                  <ChevronRight className="text-foreground" size={18} />
                </motion.button>
              </div>
            </div>

            {/* Карточки-сферы — каждая передаёт свою sphere в каталог */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {directions.map((dir, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => onGoToOpportunities({ sphere: dir.sphere })}
                  className={`relative bg-gradient-to-br ${dir.gradient} backdrop-blur-xl rounded-2xl p-5 border border-border/50 ${dir.border} transition-all cursor-pointer group`}
                >
                  <div className="absolute inset-0 bg-card/50 rounded-2xl" />
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-card/80 ${dir.iconColor} mb-3`}>
                      <dir.icon size={20} />
                    </div>
                    <h3 className="text-white font-bold mb-2 text-sm">{dir.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{dir.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Смотреть в каталоге <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Карусель превью-карточек */}
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-card/50 cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'thin' }}
            >
              <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                {featuredOpportunities.map((opp, index) => (
                  <motion.div
                    key={opp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -6 }}
                    className="relative w-[280px] md:w-[320px] bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border hover:border-primary/50 rounded-2xl p-5 transition-all"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-70 rounded-t-2xl" />

                    <div className="flex items-start justify-between mb-3 gap-2">
                      <span className="px-2.5 py-1 bg-primary/20 text-primary text-[10px] font-semibold rounded-full border border-primary/30">
                        {opp.type}
                      </span>
                      <span className="px-2.5 py-1 bg-accent/20 text-accent text-[10px] font-semibold rounded-full border border-accent/30 shrink-0">
                        {opp.audience}
                      </span>
                    </div>

                    <h3 className="text-white font-bold mb-2 line-clamp-2 text-sm">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
                      {opp.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground line-clamp-1 flex-1 mr-2">
                        {opp.organizer}
                      </span>
                      {/* Передаём openId: каталог откроет модальное окно этой карточки */}
                      <motion.button
                        whileHover={{ x: 4 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onGoToOpportunities({ openId: opp.id });
                        }}
                        className="text-primary text-[10px] font-medium flex items-center gap-1 flex-shrink-0"
                      >
                        Подробнее <ArrowRight size={11} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Маршрут развития */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="container mx-auto px-4 py-8 md:py-12 mb-8 md:mb-12"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Маршрут развития</h2>
            <p className="text-muted-foreground text-center mb-8 text-sm">Выбери подходящий путь для своего уровня</p>

            {/* Вкладки */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {routes.map((route, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveRoute(index)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    activeRoute === index
                      ? 'text-white shadow-lg'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                  }`}
                  style={
                    activeRoute === index
                      ? { background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }
                      : {}
                  }
                >
                  <route.icon size={16} />
                  {route.label}
                </motion.button>
              ))}
            </div>

            {/* Описание выбранного маршрута */}
            <motion.div
              key={activeRoute}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border hover:border-primary/30 rounded-2xl p-6 md:p-8 text-center transition-all"
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                style={{ background: 'linear-gradient(90deg, #2D5BFF22 0%, #8B5CF622 100%)', border: '1px solid #2D5BFF33' }}
              >
                {React.createElement(routes[activeRoute].icon, { size: 28, className: 'text-primary' })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{routes[activeRoute].label}</h3>
              <p className="text-muted-foreground mb-4">{routes[activeRoute].description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onGoToOpportunities({ audience: routes[activeRoute].audience })}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold text-sm transition-all"
                style={{ background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }}
              >
                Смотреть возможности <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

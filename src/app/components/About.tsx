import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, MapPin, Briefcase, Star, Code2, Zap } from 'lucide-react';
import { GradientBackground, NoiseTexture } from './BackgroundEffects';

export function About() {
  const platformStats = [
    { icon: Briefcase, label: 'Проектов РСВ', value: '26+', description: 'Для всех возрастов и сфер' },
    { icon: Users, label: 'Участников', value: '20 млн+', description: 'По всей стране' },
    { icon: MapPin, label: 'Регионов', value: '89', description: 'Охвачено программами' },
    { icon: Star, label: 'Побед', value: '500+', description: 'Грантовых проектов реализовано' }
  ];

  const techStack = [
    { name: 'React', description: 'UI-библиотека' },
    { name: 'TypeScript', description: 'Типизация' },
    { name: 'Tailwind CSS', description: 'Стилизация' },
    { name: 'Framer Motion', description: 'Анимации' },
    { name: 'Vite', description: 'Сборщик' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[calc(100vh-64px)] overflow-hidden"
    >
      <GradientBackground />
      <NoiseTexture />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, #2D5BFF 0%, #8B5CF6 100%)' }}
          >
            <Rocket size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">О платформе</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">
            Интерактивный образовательный лендинг-каталог экосистемы возможностей для самореализации в современной России
          </p>
        </motion.div>

        {/* Миссия */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-6 md:p-8 border"
              style={{
                background: 'linear-gradient(135deg, #2D5BFF0D 0%, #8B5CF60D 100%)',
                borderColor: '#2D5BFF33'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap size={24} className="text-primary" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Миссия проекта</h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Наша цель — наглядно показать студентам и молодым специалистам, что в современной России существует огромное количество открытых и понятных инструментов для самореализации, карьерного роста и воплощения своих идей в жизнь.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Статистика платформы РСВ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Платформа «Россия — страна возможностей»</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {platformStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border hover:border-primary/50 rounded-2xl p-4 md:p-6 text-center transition-all"
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl mb-2 md:mb-3"
                  style={{ background: 'linear-gradient(135deg, #2D5BFF22 0%, #8B5CF622 100%)', border: '1px solid #2D5BFF33' }}
                >
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Стек технологий */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 size={22} className="text-accent" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Технологии</h3>
            </div>

            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="text-white font-bold text-sm md:text-base">{tech.name}</span>
                    <span className="text-[10px] text-muted-foreground">{tech.description}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Создано с использованием современных веб-технологий для обеспечения быстрой работы и приятного пользовательского опыта
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

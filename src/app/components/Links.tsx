import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, Rocket, Info } from 'lucide-react';
import { links, disclaimer } from '../data/links';
import { GradientBackground, NoiseTexture } from './BackgroundEffects';

export function Links() {
  const categories = Array.from(new Set(links.map((l) => l.category)));

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
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-card rounded-2xl border border-border p-4 md:p-6 mb-4 md:mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #2D5BFF22 0%, #8B5CF622 100%)', border: '1px solid #2D5BFF33' }}>
              <Globe size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-foreground text-lg md:text-xl font-bold">Полезные ссылки</h2>
              <p className="text-xs text-muted-foreground">Ключевые порталы экосистемы возможностей</p>
            </div>
          </div>
        </motion.div>

        {/* Мотивирующее уведомление */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl p-4 md:p-6 mb-4 md:mb-6 border"
          style={{
            background: 'linear-gradient(135deg, #2D5BFF11 0%, #8B5CF611 100%)',
            borderColor: '#2D5BFF33'
          }}
        >
          <div className="flex items-start gap-3">
            <Rocket size={20} className="text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="mb-1 text-primary text-base md:text-lg font-bold">Важное примечание</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{disclaimer}</p>
            </div>
          </div>
        </motion.div>

        {/* Ссылки по категориям */}
        {categories.map((category, catIndex) => (
          <div key={category} className="mb-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.4 }}
              className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1"
            >
              {category}
            </motion.h3>
            <div className="space-y-2 md:space-y-3">
              {links
                .filter((l) => l.category === category)
                .map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="block bg-card rounded-2xl border border-border p-4 md:p-5 hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #2D5BFF22 0%, #8B5CF622 100%)', border: '1px solid #2D5BFF33' }}
                      >
                        <Globe size={16} className="text-primary" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-foreground font-bold text-sm md:text-base group-hover:text-primary transition-colors">{link.title}</h4>
                          <ExternalLink
                            size={14}
                            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          />
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{link.description}</p>
                        <p className="text-[10px] md:text-xs text-primary/70 mt-1.5 font-mono">{link.url}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
            </div>
          </div>
        ))}

        {/* Нижний блок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + links.length * 0.05, duration: 0.5 }}
          className="rounded-2xl p-4 md:p-6 border"
          style={{
            background: 'linear-gradient(135deg, #8B5CF611 0%, #2D5BFF11 100%)',
            borderColor: '#8B5CF633'
          }}
        >
          <div className="flex items-start gap-3">
            <Info size={20} className="text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="text-accent text-base md:text-lg font-bold mb-2">Советы по поиску возможностей</h3>
              <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span><span>Следите за обновлениями на rsv.ru — там регулярно появляются новые конкурсы</span></li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span><span>Подписывайтесь на официальные Telegram-каналы РСВ и Росмолодёжи</span></li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span><span>Не бойтесь подавать заявки — первая попытка всегда учит больше всего</span></li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span><span>Участвуйте в региональных отборочных этапах — конкуренция там ниже</span></li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span><span>Консультируйтесь в молодёжном центре вашего университета или региона</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

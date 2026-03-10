import React from 'react';
import { motion } from 'motion/react';
import { X, Building2, Tag, Users } from 'lucide-react';
import type { Opportunity } from '../data/opportunities';

interface OpportunityModalProps {
  opportunity: Opportunity;
  onClose: () => void;
}

const typeColors: Record<Opportunity['type'], string> = {
  'Гранты': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Конкурсы': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Обучение': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Стажировки': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'Форумы': 'bg-pink-500/20 text-pink-400 border-pink-500/30'
};

const audienceColors: Record<Opportunity['audience'], string> = {
  'Для школьников': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Для студентов': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  'Для специалистов': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Для всех': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
};

export function OpportunityModal({ opportunity, onClose }: OpportunityModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/75 z-[100] flex items-start md:items-center justify-center p-2 md:p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card rounded-2xl max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto border border-border my-4 md:my-0"
      >
        {/* Шапка */}
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex justify-between items-start z-10 rounded-t-2xl">
          <div className="flex-1 pr-2">
            <h2 className="text-foreground text-lg md:text-xl font-bold mb-3">{opportunity.title}</h2>
            <div className="flex flex-wrap gap-1.5">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={`text-[10px] md:text-xs px-2.5 py-1 rounded-full border font-semibold flex items-center gap-1 ${typeColors[opportunity.type]}`}
              >
                <Tag size={10} />
                {opportunity.type}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className={`text-[10px] md:text-xs px-2.5 py-1 rounded-full border font-semibold flex items-center gap-1 ${audienceColors[opportunity.audience]}`}
              >
                <Users size={10} />
                {opportunity.audience}
              </motion.span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="ml-2 p-1.5 md:p-2 hover:bg-secondary rounded-full transition-colors flex-shrink-0"
            aria-label="Закрыть"
          >
            <X size={20} className="text-foreground" />
          </motion.button>
        </div>

        {/* Тело */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 md:p-6 space-y-4"
        >
          <div>
            <h3 className="text-foreground text-base md:text-lg font-semibold mb-2">Описание</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{opportunity.description}</p>
          </div>

          <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
            <h3 className="text-foreground text-base md:text-lg font-semibold mb-2">Почему это важно</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{opportunity.whyImportant}</p>
          </div>

          {opportunity.details && (
            <div>
              <h3 className="text-foreground text-base md:text-lg font-semibold mb-2">Подробнее</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{opportunity.details}</p>
            </div>
          )}

          <div className="flex items-start gap-2 p-4 bg-secondary/30 rounded-xl border border-border">
            <Building2 size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground mb-0.5 font-medium">Организатор</p>
              <p className="text-sm text-foreground font-semibold">{opportunity.organizer}</p>
            </div>
          </div>
        </motion.div>

        {/* Нижняя кнопка */}
        <div className="sticky bottom-0 bg-card border-t border-border p-4 md:p-6 rounded-b-2xl">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full text-white py-3 rounded-xl font-semibold transition-all text-sm"
            style={{ background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }}
          >
            Закрыть
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

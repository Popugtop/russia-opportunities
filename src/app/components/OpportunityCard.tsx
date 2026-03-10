import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2 } from 'lucide-react';
import type { Opportunity } from '../data/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onShowDetails: (opportunity: Opportunity) => void;
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

export function OpportunityCard({ opportunity, onShowDetails }: OpportunityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl border border-border p-5 md:p-6 hover:border-primary/50 transition-all overflow-hidden group h-full flex flex-col"
    >
      {/* Градиентная полоска */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-60 rounded-t-2xl" />

      <div className="flex flex-wrap gap-1.5 mb-3">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className={`px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-full border ${typeColors[opportunity.type]}`}
        >
          {opportunity.type}
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className={`px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-full border ${audienceColors[opportunity.audience]}`}
        >
          {opportunity.audience}
        </motion.span>
      </div>

      <h3 className="mb-2 text-white font-bold text-base md:text-lg">{opportunity.title}</h3>

      <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-3 flex-1">
        {opportunity.description}
      </p>

      <div className="bg-secondary/30 backdrop-blur-sm p-3 rounded-xl border border-border/50 mb-3">
        <p className="text-[10px] md:text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Почему это важно: </span>
          {opportunity.whyImportant}
        </p>
      </div>

      <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground mb-3">
        <Building2 size={12} className="shrink-0 text-primary" />
        <span className="line-clamp-1">{opportunity.organizer}</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onShowDetails(opportunity)}
        className="w-full text-white py-2.5 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 group text-sm"
        style={{ background: 'linear-gradient(90deg, #2D5BFF 0%, #8B5CF6 100%)' }}
      >
        Подробнее
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
}

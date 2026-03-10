import React from 'react';
import { motion } from 'motion/react';

function AnimatedDots() {
  return (
    <div className="absolute inset-[8.75%_7.5%_11.25%_12.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g>
          <motion.circle 
            cx="3.29412" 
            cy="3.29412" 
            fill="#2D5BFF" 
            r="3.29412"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.ellipse 
            cx="3.29412" 
            cy="11.2" 
            fill="#2D5BFF" 
            fillOpacity="0.6" 
            rx="3.29412" 
            ry="3.29412"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.ellipse 
            cx="3.29412" 
            cy="19.1059" 
            fill="#2D5BFF" 
            fillOpacity="0.3" 
            rx="3.29412" 
            ry="3.29412"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <motion.ellipse 
            cx="11.2" 
            cy="3.29412" 
            fill="#2D5BFF" 
            fillOpacity="0.01" 
            rx="3.29412" 
            ry="3.29412"
            initial={{ opacity: 0.01 }}
            animate={{ opacity: [0.01, 0.3, 0.01] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          <motion.ellipse 
            cx="11.2" 
            cy="11.2" 
            fill="#2D5BFF" 
            fillOpacity="0.9" 
            rx="3.29412" 
            ry="3.29412"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          />
          <motion.ellipse 
            cx="11.2" 
            cy="19.1059" 
            fill="#2D5BFF" 
            fillOpacity="0.6" 
            rx="3.29412" 
            ry="3.29412"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.circle 
            cx="19.1059" 
            cy="3.29412" 
            fill="#2D5BFF" 
            fillOpacity="0.01" 
            r="3.29412"
            initial={{ opacity: 0.01 }}
            animate={{ opacity: [0.01, 0.2, 0.01] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          />
          <motion.circle 
            cx="19.1059" 
            cy="11.2" 
            fill="#2D5BFF" 
            fillOpacity="0.01" 
            r="3.29412"
            initial={{ opacity: 0.01 }}
            animate={{ opacity: [0.01, 0.4, 0.01] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
          />
          <motion.ellipse 
            cx="19.1059" 
            cy="19.1059" 
            fill="#2D5BFF" 
            rx="3.29412" 
            ry="3.29412"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
          />
        </g>
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <div className="overflow-clip relative size-[24px] md:size-[28px]">
        <AnimatedDots />
      </div>
      <p className="font-semibold text-[16px] md:text-[20px] text-white tracking-[-0.6px] md:tracking-[-0.8px]">
        РСВ Платформа
      </p>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Standard Upward Fade Reveal
 */
export function RevealUp({ children, delay = 0, duration = 0.65, y = 35, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Smooth Horizontal Reveal
 */
export function RevealSide({ children, delay = 0, direction = "left", distance = 40, className = "" }) {
  const x = direction === "left" ? -distance : distance;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scale and Opacity Reveal
 */
export function ScaleReveal({ children, delay = 0, scaleStart = 0.94, duration = 0.75, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleStart }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container for Children
 */
export function StaggerContainer({ children, staggerDelay = 0.12, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item inside StaggerContainer
 */
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

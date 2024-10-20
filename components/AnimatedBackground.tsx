import React from 'react';
import styles from '@/styles/AnimatedBackground.module.css';

const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.animatedBackground}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;

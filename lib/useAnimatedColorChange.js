"use client"
import { useEffect } from 'react';

// Custom hook for animated color change
export default function useAnimatedColorChange(className = 'color-change', duration = 2000) {
  useEffect(() => {
    const colors = [
      '#a78bfa', // purple-400
      '#f472b6', // pink-400
      '#38bdf8', // sky-400
      '#facc15', // yellow-400
      '#34d399', // emerald-400
      '#f87171', // red-400
      '#60a5fa', // blue-400
      '#fbbf24', // amber-400
    ];
    let i = 0;
    // Set initial transition for all elements
    const setTransition = () => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach(el => {
        el.style.transition = 'color 2s cubic-bezier(0.4,0,0.2,1)';
      });
    };
    setTransition();
    const interval = setInterval(() => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach(el => {
        el.style.transition = 'color 2s cubic-bezier(0.4,0,0.2,1)';
        el.style.color = colors[i % colors.length];
      });
      i++;
    }, duration);
    return () => clearInterval(interval);
  }, [className, duration]);
}

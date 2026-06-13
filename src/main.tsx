import React from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import App from './App';
import './index.css';

const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reduceMotionQuery.matches) {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    smoothWheel: true,
  });

  let frame = 0;

  const raf = (time: number) => {
    lenis.raf(time);
    frame = window.requestAnimationFrame(raf);
  };

  frame = window.requestAnimationFrame(raf);

  window.addEventListener('beforeunload', () => {
    window.cancelAnimationFrame(frame);
    lenis.destroy();
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

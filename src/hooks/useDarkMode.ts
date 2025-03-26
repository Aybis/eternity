// import { useState, useEffect } from 'react';

// export default function useDarkMode() {
//   const getInitialMode = () => {
//     if (typeof window !== 'undefined') {
//       const cookieValue = document.cookie
//         .split('; ')
//         .find((row) => row.startsWith('darkMode='));
//       if (cookieValue) {
//         return cookieValue.split('=')[1] === 'true';
//       }
//       return (
//         window.matchMedia &&
//         window.matchMedia('(prefers-color-scheme: dark)').matches
//       );
//     }
//     return false;
//   };

//   const [darkMode, setDarkMode] = useState(getInitialMode);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       document.cookie = 'darkMode=true; path=/';
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.cookie = 'darkMode=false; path=/';
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return { darkMode, toggleDarkMode };
// }

// src/hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { darkMode, toggleDarkMode };
}

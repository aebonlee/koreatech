import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const getTimeBasedTheme = () => {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'light' : 'dark';
};

const COLOR_THEMES = ['blue', 'red', 'green', 'purple', 'orange'];

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('themeMode');
    if (saved === 'light' || saved === 'dark' || saved === 'auto') return saved;
    const legacy = localStorage.getItem('theme');
    if (legacy === 'light' || legacy === 'dark') return legacy;
    return 'auto';
  });

  const [theme, setTheme] = useState(() => {
    return mode === 'auto' ? getTimeBasedTheme() : mode;
  });

  const [colorTheme, setColorTheme] = useState(() => {
    const saved = localStorage.getItem('colorTheme');
    return COLOR_THEMES.includes(saved) ? saved : 'blue';
  });

  useEffect(() => {
    if (mode !== 'auto') {
      setTheme(mode);
      return;
    }
    setTheme(getTimeBasedTheme());
    const interval = setInterval(() => {
      setTheme(getTimeBasedTheme());
    }, 60000);
    return () => clearInterval(interval);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', colorTheme);
    localStorage.setItem('colorTheme', colorTheme);
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    localStorage.removeItem('theme');
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => {
      if (prev === 'auto') return 'light';
      if (prev === 'light') return 'dark';
      return 'auto';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

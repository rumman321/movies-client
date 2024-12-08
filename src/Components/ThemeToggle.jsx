import React, { useState, useEffect } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button className="btn-sm btn rounded-full" onClick={toggleTheme}>
      {theme === 'light' ? <MdDarkMode size={20} />  : <CiLight size={20} />}
    </button>
  );
};

export default ThemeToggle;

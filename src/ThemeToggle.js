import React, { useState } from 'react';
import { lightTheme, darkTheme } from './light-theme';
import SunSet from '../src/assets/sun.svg';
import Moon from '../src/assets/moon.svg';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div
      className="theme-toggle-container"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <h1>Theme Toggle Example</h1>
      <button onClick={toggleTheme}>
        <img src={isDarkTheme ? SunSet : Moon} alt="Theme Toggle" />
      </button>
    </div>
  );
};

export default ThemeToggle;

import React, { useContext } from 'react';
import { ThemeContext } from './../../../context/ThemeContext';
import { GiStripedSun, GiEvilMoon } from 'react-icons/gi';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === 'dark' ? (
        <GiStripedSun
          style={{
            marginTop: 7,
          }}
          size={20}
          onClick={() =>
            setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
          }
        />
      ) : (
        <GiEvilMoon
          style={{
            marginTop: 7,
          }}
          size={20}
          onClick={() =>
            setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
          }
        />
      )}
    </>
  );
};

export default ThemeButton;

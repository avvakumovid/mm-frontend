import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;

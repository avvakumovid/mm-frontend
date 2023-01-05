import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './navigation/Navigation';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import Routes from './routes/index';

import ThemeSwitcher from './components/ThemeSwitcher/index';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

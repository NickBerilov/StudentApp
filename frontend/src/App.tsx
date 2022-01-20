import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import MainPage from './pages/MainPage';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainPage/>
      </ThemeProvider>
  );
}

export default App;

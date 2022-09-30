import { defaultTheme } from '@medly-components/theme';
import { CssBaseline } from '@medly-components/core';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </ThemeProvider>,
  document.getElementById('root')
);

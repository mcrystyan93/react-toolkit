import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './app/store';
import { Layout } from './Layout';
import { theme } from './theme';



function App() {

  return (
    <Provider store={store}>
      <BrowserRouter >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout></Layout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

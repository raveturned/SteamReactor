import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';

import Explorer from './explorer/explorer';
import SteamApiList from './steamApi/steamApiList';

const App = () => {
  const api = false;

  const themeObject = {};
  if (!api) {
    themeObject.palette = {
      mode: 'dark',
    };
  }
  const theme = createTheme(themeObject);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { api ? (
          <div>
            <h1>Steam API Methods</h1>
            <SteamApiList />
          </div>
        ) : (
          <Explorer />
        )}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

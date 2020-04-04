import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import SteamApiList from './steamApi/steamApiList';
import Explorer from './explorer/explorer';

const App = () => {
  const api = false;

  const themeObject = {};
  if (!api) {
    themeObject.palette = {
      type: 'dark',
    };
  }
  const theme = createMuiTheme(themeObject);

  return (
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
  );
};

export default App;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Explorer from './explorer/explorer';
import ExplorerRedux from './explorer/explorerRedux';
import SteamApiList from './steamApi/steamApiList';
import SteamApiListRedux from './steamApi/steamApiListRedux';

const App = () => {
  const api = false;
  const useRedux = false;

  const themeObject = {};
  if (!api) {
    themeObject.palette = {
      type: 'dark',
    };
  }
  const theme = createTheme(themeObject);

  const explorer = () => (useRedux ? <ExplorerRedux /> : <Explorer />);
  const steamApiList = () => (useRedux ? <SteamApiListRedux /> : <SteamApiList />);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { api ? (
        <div>
          <h1>Steam API Methods</h1>
          { steamApiList() }
        </div>
      ) : (
        explorer()
      )}
    </ThemeProvider>
  );
};

export default App;

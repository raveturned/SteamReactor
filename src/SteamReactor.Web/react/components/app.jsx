import React from 'react';
import SteamApiList from './steamApi/steamApiList';
import Explorer from './explorer/explorer';
import styles from './app.css';

const App = () => {
  const api = false;
  const content = api ? (
    <div>
      <h1>Steam API Methods</h1>
      <SteamApiList />
    </div>
  ) : (
    <Explorer />
  );
  return (
    <div className={styles.app}>
      { content }
    </div>
  );
};

export default App;

import React from 'react';
// import SteamApiList from './steamApi/steamApiList';
import Explorer from './explorer/explorer';
import styles from './app.css';

const App = () => (
    <div className={styles.app}>
        {/*
        <h1>Steam API Methods</h1>
        <SteamApiList />
        */}
        <Explorer />
    </div>
);

export default App;

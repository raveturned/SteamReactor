import React, { useEffect, useState } from 'react';
import SteamApiInterface from './steamApiInterface';
import styles from './styles.css';
import Steam from '../../../api/steam';

const SteamApiList = () => {
  const [interfaces, setInterfaces] = useState([]);

  const fetchInterfaces = async () => {
    const result = await Steam.getSupportedAPIList();
    setInterfaces(result.apilist.interfaces);
  };

  useEffect(() => {
    fetchInterfaces();
  }, []);

  return (
    <div className={styles.apiList}>
      {
        (interfaces.length > 0)
          ? interfaces.map((i) => (
            <SteamApiInterface
              key={i.name}
              name={i.name}
              methods={i.methods}
            />
          ))
          : <div>Please wait...</div>
      }
    </div>
  );
};

SteamApiList.propTypes = {};

export default SteamApiList;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const AppList = ({ apps }) => (
  <div className={styles.appList}>
    {apps.map((app) => (
      <div className={styles.app}>
        {app.name}
      </div>
    ))}
  </div>
);

AppList.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AppList;

import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const AppList = ({ apps }) => (
  <Paper>
    {apps.map((app) => (
      <Typography
        key={app.appid}
      >
        {`${app.appid} - ${app.name}`}
      </Typography>
    ))}
  </Paper>
);

AppList.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AppList;

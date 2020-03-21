import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AppList = ({ apps }) => (
  <Paper>
    {apps.map((app) => (
      <Typography>{app.name}</Typography>
    ))}
  </Paper>
);

AppList.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AppList;

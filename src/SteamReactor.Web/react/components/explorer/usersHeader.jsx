import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CurrentUser from './currentUser';
import HeaderUser from './headerUser';
// import styles from './styles.css';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  headerUsers: {
    display: 'inline-block',
  },
}));

const UsersHeader = ({ byId, currentUserId, ids }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <CurrentUser
        user={byId[currentUserId]}
      />
      <div className={classes.headerUsers}>
        {ids
          .filter((id) => (id !== currentUserId))
          .map((id) => {
            const user = byId[id];
            return (
              <HeaderUser
                id={id}
                user={user}
              />
            );
          })}
      </div>
    </Paper>
  );
};

UsersHeader.propTypes = {
  currentUserId: PropTypes.number.isRequired,
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default UsersHeader;

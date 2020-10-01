import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import AppList from './appList';
import FriendList from './friendList';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 196,
  },
}));

const Main = ({
  apps, byId, friendIds, selectedUsers, toggleFriendSelect,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        variant="permanent"
        className={classes.drawer}
      >
        <Toolbar />
        <FriendList
          friendIds={friendIds}
          selectedUsers={selectedUsers}
          byId={byId}
          toggleSelect={toggleFriendSelect}
        />
      </Drawer>
      <AppList apps={apps} />
    </div>
  );
};

Main.propTypes = {
  toggleFriendSelect: PropTypes.func.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;

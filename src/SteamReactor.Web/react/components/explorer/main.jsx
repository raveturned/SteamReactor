import React from 'react';
import PropTypes from 'prop-types';
import { Box, Toolbar } from '@mui/material';

import AppList from './appList';
import FriendList from './friendList';

const Main = ({
  apps, byId, friendIds, selectedUsers, toggleFriendSelect,
}) => (
  <Box>
    <Toolbar />
    <FriendList
      friendIds={friendIds}
      selectedUsers={selectedUsers}
      byId={byId}
      toggleSelect={toggleFriendSelect}
    />
    <AppList apps={apps} />
  </Box>
);

Main.propTypes = {
  toggleFriendSelect: PropTypes.func.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;

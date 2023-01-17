import React from 'react';
import PropTypes from 'prop-types';
import { Box, Toolbar } from '@mui/material';

import AppList from './appList';
import FriendList from './friendList';

const Main = ({
  apps,
  playerSummaries,
  friendIds,
  selectedUsers,
  toggleFriendSelect,
}) => {
  console.log('whatever');

  return (
    <Box>
      <Toolbar />
      <FriendList
        friendIds={friendIds}
        selectedUsers={selectedUsers}
        playerSummaries={playerSummaries}
        toggleSelect={toggleFriendSelect}
      />
      <AppList apps={apps} />
    </Box>
  );
};

Main.propTypes = {
  toggleFriendSelect: PropTypes.func.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  playerSummaries: PropTypes.objectOf(PropTypes.shape()).isRequired,
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import Friend from './friend';

const FriendList = ({
  friendIds, selectedUsers, byId, toggleSelect,
}) => (
  <Box
    sx={{
      display: 'block',
    }}
  >
    {friendIds.map((id) => {
      const user = byId[id];
      return (
        <Friend
          key={id}
          id={id}
          user={user}
          selected={selectedUsers.includes(id)}
          toggleSelect={toggleSelect}
        />
      );
    })}
  </Box>
);

FriendList.propTypes = {
  toggleSelect: PropTypes.func.isRequired,
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default FriendList;

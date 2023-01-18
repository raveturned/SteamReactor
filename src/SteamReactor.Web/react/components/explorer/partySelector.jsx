import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

import Friend from './friend';

const PartySelector = ({
  friendIds,
  selectedUsers,
  playerSummaries,
  toggleSelect,
}) => (
  <Container
    sx={{
      display: 'inline-flex',
      flexWrap: 'wrap',
    }}
  >
    {friendIds.map((id) => {
      const user = playerSummaries[id] || {};
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
  </Container>
);

PartySelector.propTypes = {
  toggleSelect: PropTypes.func.isRequired,
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  playerSummaries: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default PartySelector;

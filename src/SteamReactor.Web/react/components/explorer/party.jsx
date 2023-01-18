import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { AvatarGroup } from '@mui/material';
import UserAvatar from './userAvatar';

const Root = styled('div')(() => ({
  display: 'flex',
}));

const Party = ({ partyMembers }) => (
  <Root>
    {partyMembers.length > 0 && (
    <AvatarGroup>
      {partyMembers.map((user) => (
        <UserAvatar key={user.id} user={user} />
      ))}
    </AvatarGroup>
    )}
  </Root>
);

Party.propTypes = {
  partyMembers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
  }).isRequired).isRequired,
};

export default Party;
